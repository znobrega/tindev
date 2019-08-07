const { Scheema, model } = require("mongoose");

const DevSchema = new Scheema(
  {
    name: {
      type: String,
      required: true
    },
    use: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Dev", DevSchema);
