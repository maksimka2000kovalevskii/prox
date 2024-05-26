const { createProxyMiddleware } = require("http-proxy-middleware");
const Proxy = require("../models/Proxy");

const proxyMiddleware = async (req, res, next) => {
  const user = req.headers["x-user"];
  const profile = req.headers["x-profile"];

  if (!user || !profile) {
    return res
      .status(400)
      .json({ msg: "User and profile headers are required" });
  }

  try {
    const userProxies = await Proxy.findOne({ user });

    if (!userProxies || !userProxies.proxies[profile]) {
      return res.status(404).json({ msg: "Proxy not found" });
    }

    const targetProxy = userProxies.proxies[profile];
    return createProxyMiddleware({
      target: `http://${targetProxy}`,
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log(`${req.ip} > ${targetProxy}`);
        // Log requests here
      },
    })(req, res, next);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = proxyMiddleware;
