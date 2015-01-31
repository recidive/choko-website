## Creating an application

There are two ways you can create an application in Choko: by using the installer or creating an application by hand.

### Creating an application using the installer

Since Choko support multiple applications on a single server, you need a folder that will serve as a container for your applications. In order to do that you just need to run the Choko command on an empty folder and it will create the application repository for you:

```
$ mkdir applications
$ choko applications
```

### Creating an application by hand

For creating an application by hand, you need to create the application container folder with an `application.json` file that links application hostnames (domains) to the folder that contains the application data. For example, if you want to bind an application on a folder named 'my-app' to the `localhost` domain you need an `applications.json` file like this:

```json
{
  "localhost": "my-app"
}
```

#### Application file structure

Once you have created the folder that will contain all your applications for that Choko server, you can proceed to create the application folder itself. The folder structure for your application will look something like this:

```
applications      -> Your applications container.
  my-app          -> Your application folder.
    extensions    -> Your application extensions.
    public        -> Your application public files.
    settings.json -> Application settings.
```

As you could see above, we also need a file named `settings.json`, which will have the basic settings like database connection information for your application.

The `settings.json` file has the following structure:

```json
{
  "database": "mongodb://localhost/my-app",
  "sessionSecret": "some-secret-key",
  "application": {
    "name": "My Application"
  },
  "extensions": {
    "my-extension": {}
  }
}
```
