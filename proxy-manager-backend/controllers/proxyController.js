const Proxy = require("../models/Proxy");

exports.addProxies = async (req, res) => {
  const { user, proxies } = req.body;

  try {
    let userProxies = await Proxy.findOne({ user });

    if (userProxies) {
      userProxies.proxies = proxies;
      await userProxies.save();
      return res.status(200).json(userProxies);
    }

    userProxies = new Proxy({ user, proxies });
    await userProxies.save();
    res.status(201).json(userProxies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getProxies = async (req, res) => {
  const { user } = req.params;

  try {
    const userProxies = await Proxy.findOne({ user });

    if (!userProxies) {
      return res.status(404).json({ msg: "Proxies not found" });
    }

    res.status(200).json(userProxies.proxies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
