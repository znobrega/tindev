const axios = require("axios");
const Dev = require('../models/Dev')

// 50 MIN

module.exports = {
  async index(req, res) {
    const { user } = req.headers

    const loggedUser = await Dev.findById(user)

    const users = await Dev.find({
      // All conditions &&
      $and: [
        // id NotEqual
        { _id: { $ne: user } },

        // id NotIn 
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    })
    
    return res.json(users)
  },

  store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username })

    if (userExists) {
      return res.json(userExists)
    }

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
