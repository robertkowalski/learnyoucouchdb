var exercise = require("workshopper-exercise")(),
    request = require("request"),
    fixtures = require("./things.json")


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

exercise.addSetup(function (mode, cb) {
  createDb(function () {
    populateDb(function () {
      process.nextTick(cb)
    })
  })
})

function createDb (cb) {
  request({
    uri: "http://localhost:5984/things-learn-couchdb/",
    method: 'PUT',
    json: true
  }, function (err, res, body) {
    if (err) throw err

    cb && cb()
  })
}

function populateDb (cb) {
  request({
    uri: "http://localhost:5984/things-learn-couchdb/_bulk_docs",
    method: 'POST',
    json: true,
    body: {
      docs: fixtures
    }
  }, function (err, res, body) {
    if (err) throw err

    cb && cb()
  })
}

module.exports = exercise
