Views are the primary tool used for querying and reporting on CouchDB documents.

Create a view for the database `programming-languages-learn-couchdb` which will just output all
the things in that database. After that, apply a reduce step which counts all the elements.

The database was already created by this exercise in your CouchDB.

The database is located at `http://localhost:5984/programming-languages-learn-couchdb`

Example result:

```
{
  "rows": [{
    "key": null,
    "value": 3
  }]
}
```

The _id for the design document should should be `_design/languages`
and the name for the view should be `languages`.

This will result in a view that can be queried at
`http://localhost:5984/programming-languages-learn-couchdb/_design/languages/_view/languages`

----------------------------------------------------------------------
## HINTS

There are nice build-in function for summing up values or for counting things.

You can use curl or a http client in whatever programming language you
want to use.

When you are done, you must run:

```sh
$ {appname} verify
```

to proceed. The result will be tested, a report will be generated,
and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
