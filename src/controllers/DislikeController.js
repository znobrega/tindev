const axios = require("axios");
const Dev = require('../models/Dev')

module.exports = {
  store(req, res) {
    req.body

    const { user } = req.headers
    const { devId } = req.params

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      return res.status(400)
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save()

    return res.json(loggedDev)

  }
};
