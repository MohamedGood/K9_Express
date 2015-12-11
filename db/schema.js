var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs")

// mongoose.connect("mongodb://localhost/k9");

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

 var UserSchema = new Schema({
   local:{
     email: String,
     password: String,
   }
 })
 UserSchema.methods.encrypt = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

 UserSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.local.password);
 };

 mongoose.model("User", UserSchema)

// var k9Schema = new Schema(
//   {
//     name: String,
//     breed: String,
//     photoUrl: String,
//     location: [{type: ObjectId, ref: "Location"}]
//   },
//   {
//     toObject: {virtuals: true},
//     toJSON: {virtuals: true}
//   }
// );
//
// k9Schema.virtual("id").get(function(){
//   return this._id;
// });
//
// var LocationSchema = new Schema({
//   city: String,
//   state: String,
//   zipcode: String,
//   address: {type: ObjectId, ref: "k9"}
// });
//
// var k9Model = mongoose.model("k9", ArtistSchema);
// var LocationModel = mongoose.model("Location", LocationSchema);
