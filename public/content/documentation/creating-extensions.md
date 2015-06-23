Extensions encapsulates one or more functionality. An extension can be generic and can be shared and reused across applications, or it can implement something more specific to the application.

playlist.extension.json

```json
{
  "title": "Playlist",
  "description": "Creates a media playlist."
}
```

## Dependencies

A extension can have multiple dependencies that are set using the `dependencies` property.

Usually an extension depends on the extensions they use for generating their stuff. If a module has a list page you must depend on the page extension, if your extensions implements contexts you will want your extension to depend on the context extension and so on.

playlist.extension.json

```json
{
  "title": "Playlist",
  "description": "Creates a media playlist.",
  "dependencies": [
    "page"
  ]
}
```

## Prototype

An extension can have a JavaScript file with it's prototype. This is how extensions implement hooks. The extension prototype file should be named as the extension name with a '.js' file.
