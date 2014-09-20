var exercise = require("workshopper-exercise")(),
    request = require("request")


exercise.requireSubmission = false

exercise.addVerifyProcessor(function (cb) {
  request({
    uri: "http://localhost:5984",
    json: true
  }, function (err, res, body) {
    var couchdbRunning = body && body.couchdb
    if (couchdbRunning)
      this.emit("pass", "CouchDB is running on port 5984")
    else
      this.emit("fail", "CouchDB is not running on port 5984")
    cb(null, !!couchdbRunning)
  }.bind(this))
})

exercise.addVerifyProcessor(function (cb) {
  request({
    uri: "http://localhost:5984/couchdbschool",
    json: true
  }, function (err, res, body) {
    var success = false
    if (body && body.db_name === "couchdbschool") {
      success = true
      this.emit("pass", "Database couchdbschool exists")
    } else {
      this.emit("fail", "Database couchdbschool does not exist")
    }
    cb(null, success)
  }.bind(this))
})

exercise.addVerifyProcessor(function (cb) {
  request({
    uri: "http://localhost:5984/couchdbschool/robert",
    json: true
  }, function (err, res, body) {
    var success = false
    if (body && body._id && body.type) {
      if (body._id.toLowerCase() === "robert"
        && body.type.toLowerCase() === "human") {
        success = true
        this.emit("pass", "Document with id: robert and type: human exists")
      } else {
        this.emit("fail", "Document with id: robert and type: human " +
        "does not exist")
      }
    } else {
      this.emit("fail", "Document with id: robert and type: human " +
        "does not exist")
    }
    cb(null, success)
  }.bind(this))
})

module.exports = exercise
