const { client, connect } = require("./db/connection");
const yargs = require("yargs");
const Movie = require("./utils/index");
const { Collection } = require("mongodb");

async function app(yargsObject) {
  const movieCollection = await connect();
  if (yargsObject.create) {
    // code to create a movie goes here
    console.log("Entering create");
    const newMovie = new Movie(
      yargsObject.title,
      yargsObject.actor,
      yargsObject.director
    );
    await newMovie.create(movieCollection);
    //-------------------------------------------------------------------
  } else if (yargsObject.update) {
    //code to update the actor or director in a movie
    console.log("Entering update");
    const myQuery = { title: yargsObject.title };
    const myUpdate = { $set: { actor: yargsObject.actor } };
    const result = await movieCollection.updateOne(myQuery, myUpdate);
    // console.log(result);
    if (result.modifiedCount === 1) {
      console.log("Actor update successful");
    } else {
      console.log("update unsuccessful");
    }

    //-------------------------------------------------------------------
  } else if (yargsObject.read) {
    //code to list all movies goes here
    console.log("entering read");
    // code to list movies goes here
    const results = await movieCollection.find({}).toArray();
    console.table(results);

    //-------------------------------------------------------------------
  } else if (yargsObject.delete) {
    //code to delete a movie will go here
    console.log("entering delete");
    const myQuery = { title: yargsinput.title };
    const result = await movieCollection.deleteOne(myQuery);
    // console.log(result);
    if (result.deletedCount === 1) {
      console.log("Film deleted");
    } else {
      console.log("Film not deleted");
    }

    //-------------------------------------------------------------------
  } else {
    console.log("Command not recognised");
  }
  await client.close();
}

app(yargs.argv);
