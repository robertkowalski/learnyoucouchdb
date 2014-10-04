var exercise = require("workshopper-exercise")(),
    request = require("request"),
    things = require("./languages.json"),
    common = require("../../lib/common.js")


exercise.requireSubmission = false

exercise.addVerifyProcessor(function (cb) {
  request({
    uri: "http://localhost:5984/programming-languages-learn-couchdb/_design/languages/_view/languages",
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
    if (rows.length !== 1) {
      this.emit("fail", "View should have one row")
      return isOk
    }

    if (rows[0] && rows[0].value === 8) {
      isOk = true
    } else {
      this.emit("fail", "Wrong count of elements")
    }

    return isOk
  }
})

exercise.addPrepare(function (cb) {
  common.createDb("programming-languages-learn-couchdb", function () {
    common.populateDb("programming-languages-learn-couchdb", things, function () {
      process.nextTick(cb)
    })
  })
})

module.exports = exercise
