// simple-todos.js

// TODO: Add tasks from console to populate collection
// On Server:
// db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
// On Client:
// Tasks.insert({ text: "Hello world!", createdAt: new Date() });
Tasks = new Mongo.Collection("tasks");


if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}

