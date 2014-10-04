var exercise = require("workshopper-exercise")(),
    request = require("request"),
    things = require("./things.json"),
    common = require("../../lib/common.js")


exercise.requireSubmission = false

exercise.addVerifyProcessor(function (cb) {
  request({
    uri: "http://localhost:5984/things-learn-couchdb/_design/thingsMadeOfMetal/_view/thingsMadeOfMetal",
    json: true
  }, function (err, res, body) {
    var success = false
    if (body && body.rows) {
      success = testView.call(this, body.rows)
    } else {
      this.emit("fail", "CouchDB View does not exist")
    }
    cb(null, success)
  }.bind(this))

  function testView (rows) {
    var isOk = false
    if (rows.length !== 3) {
      this.emit("fail", "View does not have 3 elements")
    }
    for (var i = 0; i < rows.length; i++) {
      if (!rows[i].value.material) {
        this.emit("fail", "The value field should contain things with a material")
        isOk = false
        break
      }

      if (rows[i].value.material !== "metal") {
        this.emit("fail", "Wrong element material in listed in view")
        isOk = false
        break
      }
      isOk = true
    }

    return isOk
  }
})

exercise.addPrepare(function (cb) {
  common.createDb("things-learn-couchdb", function () {
    common.populateDb("things-learn-couchdb", things, function () {
      process.nextTick(cb)
    })
  })
})

module.exports = exercise
