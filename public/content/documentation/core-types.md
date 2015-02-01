Choko comes with some complex types which are referred as the 'core types' and are responsible for building the application itself, or implement something that's common to every application.

The main core types are:

 - Pages
 - Panels
 - Contexts
 - Navigations
 - Layouts
 - Routes
 - Users
 - Roles
 - Permissions

## Pages

Pages are used to create sections and to display application content and UI elements such as forms on the application. You can think of pages as every screen of your application.

Example:

Create a playlists page, to display all playlists.

playlists.page.json

```json
{
  "type": "list",
  "title": "Playlist",
  "description": "The playlist page.",
  "itemType": "playlist",
  "path": "/playlists"
}
```

## Panels


Panel are blocks of contents that can be positioned through contexts. Even the main page content is a block.

Example:

Create a playlists panel to display all playlists.

playlists.panel.json

```json
{
  "type": "list",
  "title": "Playlist",
  "description": "The playlist page.",
  "itemType": "playlist"
}
```

Static content panels

info.panel.json

```json
{
  "title": "Information",
  "description": "Some useful information.",
  "content": "<p>Some useful information goes here.<p>"
}
```

### Panel styles (deprecated)

Panels uses by default bootstrap panel component and supports the following styles through the style property:

 - default
 - primary
 - success
 - info
 - warning
 - danger

### "Bare" panels

There's also the 'bare' property you can use to make panels without any surroundings.

## Navigations

A navigation is a group of links that can be used to change application state. A panel will be created for every navigation, so you can position it on the page layout using context.

Example:

Create a playlist navigation with playlist actions.

playlist.navigation.json

[todo]

### Navigation styles

Choko support all bootstrap navigation styles through the 'style' property:

 - tabs
 - pills
 - justified

There's also the 'stacked' property that you can set to true to make vertical navigations.

## Contexts

Contexts are a set of conditions that creates a particular scenario on your application. You can use contexts to e.g. change application layout, position panels within layout regions. Contexts conditions are mainly based on data from user's request, such as URL.

Example:

Create a playlist context, to display additional information on the playlist page.

playlist.context.json

```json
{
  "title": "Playlist",
  "description": "Playlist context",
  "conditions": {
    "path": ["/playlists"]
  },
  "reactions": {
    "panel": {
      "sidebar": [{
        "name": "playlists",
        "weight": 0
      }]
    }
  }
}
```

### Default contexts

Choko comes with some default contexts:

global: the global context can be used to react on every application page.

### Conditions

These are the build in conditions:

 - siteWide: if enabled, will be activated thorougly the application.
 - path: allow one or more paths to match.

### Reactions

These are the build in reactions:

 - panel: add a panel to a layout region.
 - layout: set the layout.
 - theme: set the theme.

## Layouts

Layouts defines the page structure in rows and columns. A layout can be set via context.

Example:

Create a two column layout.

two-column.layout.json

```json
{
  "title": "Two columns 3/9",
  "description": "A two columns layout with a 3 columns left sidebar and a 9 columns content area.",
  "fluid": true,
  "responsive": true,
  "rows": [
    {
      "name": "content",
      "title": "Content",
      "columns": [
        {
          "name": "sidebar",
          "title": "Sidebar",
          "width": 3,
          "region": true,
          "weight": 0
        },
        {
          "name": "content",
          "title": "Content",
          "width": 9,
          "region": true,
          "weight": 1
        }
      ]
    }
  ]
}
```

## Displays

Displays define how items are displayed in lists and how a single item is displayed. Displays are defined directly on the type definition. In a similar way to how you add panels to layout regions, you can add fields to display layout regions and set a format for it.

Example:

Instancing a single column display on a type.

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
  },
  "access": {
    "list": "view-song",
    "load": "view-song",
    "add": "manage-songs",
    "edit": "manage-songs",
    "delete": "manage-songs"
  },
  "displays": {
    "list-item": {
      "content": [{
        "fieldName": "title",
        "format": "title",
        "weight": 0
      }]
    }
  }
}
```
