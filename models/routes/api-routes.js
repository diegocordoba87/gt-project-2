// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {

  });

  // POST route for saving a new user. You can create a user using the data on req.body
  app.post("/api/users", function(req, res) {

  });

  // DELETE route for deleting users. You can access the user's id in req.params.id
  app.delete("/api/users/:id", function(req, res) {

  });

  // PUT route for updating users. The updated user will be available in req.body
  app.put("/api/users", function(req, res) {

  });
};