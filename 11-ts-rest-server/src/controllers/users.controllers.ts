import { Request, Response } from 'express';
import User from '../models/User';

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ msg: "user doesn't exist" });

    res.json(user);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const postUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
    });

    res.json(newUser);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const patchUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ msg: "user doesn't exist" });

    // const updateUser = await User.update(body, { where: { id } }); // ? return just a random number(1)
    const updateUser = await user.update(body) // ? another way to update, return user updated

    res.json(updateUser);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id)

    if (!user) return res.status(404).json({ msg: "user doesn't exist" });

    const userDeleted = await User.destroy({ where: { id }}) // ? return just a random number(1)
    // const userDeleted = await user.destroy() // ? another way to delete, return user deleted

    res.json(userDeleted);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export { getUsers, getUserById, postUser, patchUser, deleteUser };
