const mongoose = require("mongoose");

const ProxySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  proxies: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Proxy", ProxySchema);
