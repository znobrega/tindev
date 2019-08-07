const axios = require("axios");
const Dev = require('../models/Dev')

// 50 MIN

module.exports = {
  store(req, res) {
    const { username } = req.body;

    const response = await axios.get("https://api.github.com/users/znobrega");

    const {name, bio, avatar_url: avatar} = response.data

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    })

    return res.json(dev);
  }
};
