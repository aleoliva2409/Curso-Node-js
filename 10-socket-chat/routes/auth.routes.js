const { Router } = require("express");
const { check } = require("express-validator");
const { login, googleSignIn, renewToken } = require("../controllers/auth.controller");
const { validateInputs, validateJWT } = require("../middlewares");

const router = Router();

router.post(
	"/login",
	[
		check("email", "Email is required").isEmail(),
		check("password", "Password is required").not().isEmpty(),
		validateInputs,
	],
	login
);

router.post(
	"/google",
	[check("id_token", "id_token is required").not().isEmpty(), validateInputs],
	googleSignIn
);

router.get("/", validateJWT, renewToken);

module.exports = router;
