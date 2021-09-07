# ToolBox RESTful API

Node Js Backend. Where you can send a String via QueryString and then this API return to you a reverse String.

---

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.0

    $ npm --version
    7.14.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

# Getting started
- Clone the repository
```
git clone  https://github.com/Cesarebr92/toolbox-RESTfull.git
```
- Install dependencies
```
cd <toolbox-api>
npm install
```
- Build and run the project
```
npm start
```
Navigate to `http://localhost:3000`

- API Document endpoints

  Echo Endpoint : http://localhost:3000/iecho



## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies      
| **server**               | Contains all the path and source code where the server run                               |
| **server/config**        | Application configuration including environment-specific configs
| **server/routes**        | Contain all express routes,                       |
| **server/server.js**     | Entry point to  run express app                                                          |
| **test**                 | Directory which it's written the test test code                                       |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |  


### Running the build
Different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  | |
| `test`                    | Runs build and run tests using mocha       |


## Testing
The tests are  written in Mocha and the assertions done using Chai & SuperTest

```
 "chai": "^4.3.4",
 "mocha": "^9.1.1",
 "supertest": "^6.1.6"

```