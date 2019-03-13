MTU

TCP四元组  

If-Modified-Since
```
GET /foo HTTP/1.1
--------------------------------
HTTP/1.1 200 OK
Last-Modified: xsxxxxxxx

<!doctype html>
....
--------------------------------
GET /foo HTTP/1.1
If-Modified-Since: xsxxxxxxx
--------------------------------
HTTP/1.1 304 Not Modified
```

If-None-Match
```
GET /foo HTTP/1.1
--------------------------------
HTTP/1.1 200 OK
ETag: hash of the resource

<!doctype html>
....
--------------------------------
GET /foo HTTP/1.1
If-None-Match: hash of the resource
--------------------------------
HTTP/1.1 304 Not Modified
```
