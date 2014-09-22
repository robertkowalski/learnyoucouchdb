Views are the primary tool used for querying and reporting on CouchDB documents.

Create a view for the database `things-learn-couchdb` which will just output all
the things which have the material `metal`.

The database was already created by this exercise in your CouchDB.

The database is located at `http://localhost:5984/things-learn-couchdb`
and an example document in this database looks like:

```js
{
  "_id": "4a7bd4d6e47564639585459049000e15",
  "_rev": "1-eb84340e9061ff439f24e6ee56e5d8b1",
  "material": "metal",
  "name": "spoon"
}
```

The value in the view for each items that is made from metal
should be the whole document.

Example response for 1 element:

```
{ "total_rows": 1,
  "offset":0,
  "rows":[{
    "id": "4a7bd4d6e47564639585459049001d6b",
    "key": null,
    "value": {
      "_id":"4a7bd4d6e47564639585459049001d6b",
      "_rev": "1-1ca9e59b14f0a3fdc71e0cb401f8c6f7",
      "name": "spoon",
      "material": "metal"
    }
  }]
}
```

The _id for the design document should should be `_design/thingsMadeOfMetal`
and the name for the view should be `thingsMadeOfMetal`.

This will result in a view that can be queried at
`http://localhost:5984/things-learn-couchdb/_design/thingsMadeOfMetal/_view/thingsMadeOfMetal`

----------------------------------------------------------------------
## HINTS

You can use curl or a http client in whatever programming language you
want to use.

When you are done, you must run:

```sh
$ {appname} verify
```

to proceed. The result will be tested, a report will be generated,
and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
