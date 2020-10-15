
# Client and Server Setup for Forum website

## Setup Client
* [x] Basic Vue.js
* [x] Bootswatch installed and imported
* [x] Basic homepage view

## Setup Server
* [x] Install
  * express
  * morgan
  * compression
  * helmet
  * cors
  * nodemon
* [x] Basic app setup
* [x] Basic error handling middleware
  * notFound
  * errorHandler
* [x] Basic route

## Setup Google oauth
* [x] install
  * passport
  * passport-google-oauth20
  * dotenv
* [x] Configure the strategy
* [x] Configure the request handlers
* [x] Mention the data you want in the 'scope'
* [x] Go in the google developer console
  * Create a new project
  * Add the Google + API to the project
  * Fill OAuth consent screen
  * Create OAuth client ID credentials
* [x] Check if google returns the user profile in the strategy
* [x] Store user info in our DB
  * [x] Make a connection to the DB so that it can be used inside the app
    * Install
      * knex
      * pg
    * Create knexfile.js => defines the DB config
    * Create a global connection as per the environment
  * [x] Create queries that the app will use to insert user info
    * findByEmail
    * update by id
    * insert
  * [x] Setup schema validations before any change to database
    * install
      * joi
  * Use the queries to insert new users or update existing users in DB
* [x] Initialize passport in the app.js
* [x] In order to test the login we will require
  * serialize and deserialize methods of passport to match cookies with sessions to check if user is logged in
  * These methods are used with sessions we won't need them in future as we will use JWT
* [x] Users are now stored in DB


## Development Setup

### Client

```sh
cd client
npm install
npm run server
```

### Server

```sh
cd server
npm install
npm run dev
```
