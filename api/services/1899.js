var schema = new Schema({

    eventtype: {
        type: String,
        enum: ["Birthday Parties", "Anniversary Celebrations", "Engagement Celebrations", "Navjoths", "Pre-Wedding Parties", "Baby Showers", "Bridal Showers", "Bachelor / Bachelorette Party", "Sangeet Ceremonies", "Mehendi Ceremonies", "Cocktail Parties", "Wedding Ceremonies", "Alumni Night", "Reunions", "Fresher’s Parties", "Graduation Parties", " Navratri Parties / Dandiya Nights", "Christmas Bashes"]
    },
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
    eventdate: {
        type: Date,
        default: ""
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
module.exports = mongoose.model('1899', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);