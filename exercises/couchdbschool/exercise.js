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

module.exports = exercise
