
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
  * knex
  * pg
  * joi
* [x] Configure the strategy
* [x] Configure the request handlers
* [x] Google developer console => for id and key
* [x] Store user info in our DB using knex
    * Create a global connection as per the environment
    * Create queries
    * Setup schema validations
* [x] Initialize passport in the app.js
* [x] serialize and deserialize methods

## Setup JWT after login


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
