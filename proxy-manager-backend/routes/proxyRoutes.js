const express = require("express");
const { addProxies, getProxies } = require("../controllers/proxyController");
const router = express.Router();

router.post("/proxies", addProxies);
router.get("/proxies/:user", getProxies);

module.exports = router;
