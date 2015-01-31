## Installation

Installing Choko is a easy task, you just need access to the command line for installing and starting the application.

### Requirements

Choko was built in Node.js, so basically you need a machine where you can run Node.js applications.

 - **Server:** A server capable of running Node.js and MongoDB.
 - **Node.js version:** Choko requires Node.js version 0.10 or above.
 - **Database:** Although we support multiple databases via [Waterline](https://github.com/balderdashy/waterline). Choko was only tested with MongoDB.

### Install Choko with NPM

```
$ npm install -g choko
```

Start application server on applications folder (or any other you want):

```
$ mkdir applications
$ choko applications
```

By default Choko will start on port 3000. If you need to start the Choko server on another port than 3000 you can use the -p argument:

```
$ choko applications -p 8080
```

For running on port 80 you can create a iptables rule like this, so you don't need to run the application as root user that can be dangerous:

```
$ iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```

Alternatively you can use some kind of proxy or loadbalancer for routing your application to port 80.

### Run Choko from source

Sometimes, specially when you start to get involved with Choko development, you will want to install Choko not globally, but in it's own folder inside your development workspace.

For installing latest Choko development code, you should start by cloning its git repository:

```
$ git clone https://github.com/recidive/choko.git
```

The you need to install both backend and frontend dependencies:

```
$ cd choko
$ npm install
$ bower install
```

Start the server:

```
$ node server.js /path/to/your/applications/folder
```
