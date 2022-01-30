"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.patchUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByPk(id);
        if (!user)
            return res.status(404).json({ msg: "user doesn't exist" });
        res.json(user);
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
});
exports.getUserById = getUserById;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const newUser = yield User_1.default.create({
            name,
            email,
            password,
        });
        res.json(newUser);
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
});
exports.postUser = postUser;
const patchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const user = yield User_1.default.findByPk(id);
        if (!user)
            return res.status(404).json({ msg: "user doesn't exist" });
        // const updateUser = await User.update(body, { where: { id } }); // ? return just a random number(1)
        const updateUser = yield user.update(body); // ? another way to update, return user updated
        res.json(updateUser);
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
});
exports.patchUser = patchUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByPk(id);
        if (!user)
            return res.status(404).json({ msg: "user doesn't exist" });
        const userDeleted = yield User_1.default.destroy({ where: { id } }); // ? return just a random number(1)
        // const userDeleted = await user.destroy() // ? another way to delete, return user deleted
        res.json(userDeleted);
    }
    catch (error) {
        res.status(500);
        console.log(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map