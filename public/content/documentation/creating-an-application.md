There are two ways you can create an application in Choko: by using the installer or creating an application by hand.

### Creating an application using the installer

For creating a new application using the installer you just need to run the Choko command on an empty folder, or you can just give a folder name and the application folder will be created for you:

```
$ choko myApp
```

### Creating an application by hand

For creating an application by hand, you need to create the application folder with a `settings.json` file which will have the basic settings like database connection information for your application.

The `settings.json` file has the following structure:

```json
{
  "database": "mongodb://localhost/myApp",
  "sessionSecret": "some-session-encryption-key",
  "application": {
    "name": "My App"
  },
  "extensions": {}
}
```

Then start the application. If you are on the application folder itself you can run it like this:

```
$ choko start
```

You can also pass the path to your application folder:

```
$ choko start path/to/myApp
```

#### Application folder structure

The folder structure for your application will look something like this:

```
myApp           -> Your application folder.
  extensions    -> Your application extensions.
  public        -> Your application public files.
  settings.json -> Application settings.
```
