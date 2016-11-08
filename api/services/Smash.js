var schema = new Schema({

  eventType: 
    [String]
//    enum: ["Corporate Events", "Annual General Meeting", "Product/ Service Launch", "Employee Training Session", "Panel Discussion", "Education Fair", "Fashion Shows", "Comic & Gaming Expos"]
  ,
  name: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  eventDate: {
    type: Date
  },
  time: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["Pending", "Spoke With Client", "Commented"]
  },
  note: String,
  time2: {
    type: Date,
    default: Date.now
  }
});





schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Smash', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
  var model = {
    getAll: function (data, callback) {
      Smash.find({}).sort( { createdAt: -1 } ).exec(function (err, results) {
          if (err) {
            console.log(err);
            callback(err, null);
          } else if (results) {
            callback(null, results);
          } else {
            callback(null, "Invalid data");
          }
        });
    },
  };
module.exports = _.assign(module.exports, exports, model);