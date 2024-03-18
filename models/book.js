[6:27 PM, 3/17/2024] Aditya Deshpande (NEU): var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true, maxLength: 100}, 
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}, 
    summary: {type: String, required: true}, 
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
[6:27 PM, 3/17/2024] Aditya Deshpande (NEU): Genre.js


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true}
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
