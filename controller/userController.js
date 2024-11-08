import { Op } from 'sequelize';
import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserController {
  static async store(req, res) {
    let { username, email, password } = req.body;
    password = bcrypt.hashSync(password, 10);

    const user = await User.create({ username, email, password });
    res.json(user);
  }

  static async get(req, res) {
    const users = await User.findAll();
    res.json(users);
  }

  static async detail(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  }

  static async update(req, res) {
    let { username, email, password } = req.body;
    password = bcrypt.hashSync(password, 10);

    const user = await User.update(
      { username, email, password },
      { where: { id: req.params.id } }
    );
    res.json(user);
  }

  static async delete(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.json(user);
  }

  static async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { [Op.or]: [{ username: username }, { email: username }] },
    });

    if (user == null) {
      return res.json({ error: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.json({ error: 'Password incorrect' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });

    return res.json({ accessToken: token });
  }

  static async register(req, res) {
    let { username, email, password } = req.body;
    password = bcrypt.hashSync(password, 10);

    const user = await User.create({ username, email, password });

    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });

    return res.json({ accessToken: token });
  }

  static async me(req, res) {
    const userId = req.userId;
    const user = await User.findOne({ where: { id: userId } });
    res.json(user);
  }
}
