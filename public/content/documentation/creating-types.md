In order to make hooks and other things where the type name is used more uniform, we always name types using camelCase, starting with a lowercase letter.

song.type.json

```json
{
  "title": "Song",
  "description": "A song.",
  "storage": "database"
}
```

## Fields

A type usually has one or more fields that set what properties it holds. Choko comes with several field types for the most common data you may need in your application. New field types can be added with very little or no programming at all. For convention we name fields using camelCase. The keyProperty property is used to indicate the field which content is used as the identifier of the type.

song.type.json

```json
{
  "title": "Song",
  "description": "A song.",
  "storage": "database",
  "keyProperty": "id",
  "fields": {
    "id": {
      "type": "id",
      "title": "Id",
      "internal": true,
    },
    "name": {
      "type": "text",
      "title": "Name",
      "required": true
    }
  }
}
```

### Field types

Choko comes with a variety of field types.

 - text
 - number
 - date
 - email
 - password
 - url
 - id
 - reference
 - file
