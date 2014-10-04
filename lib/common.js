var request = require("request")

exports.createDb = createDb
function createDb (dbname, cb) {
  request({
    uri: "http://localhost:5984/" + dbname + "/",
    method: "PUT",
    json: true
  }, function (err, res, body) {
    if (err) throw err

    cb && cb()
  })
}

exports.populateDb = populateDb
function populateDb (dbname, docs, cb) {
  request({
    uri: "http://localhost:5984/" + dbname + "/_bulk_docs",
    method: 'POST',
    json: true,
    body: {
      docs: docs
    }
  }, function (err, res, body) {
    if (err) throw err

    cb && cb()
  })
}
