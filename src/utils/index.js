class Movie {
  constructor(
    inputTitle,
    inputActor = "Not specified",
    inputDirector = "Not Specified"
  ) {
    this.title = inputTitle;
    this.actor = inputActor;
    this.director = inputDirector;
  }
  async create(movieCollection) {
    console.log("Entering add within index.js");
    await movieCollection.insertOne(this);
    //code to save a movie to the database here;
  }

  async update(movieCollection) {
    console.log("Update within index.js");
    await movieCollection.updateOne(this);
    //code to update a movie to the database here;
  }
}

module.exports = Movie;
