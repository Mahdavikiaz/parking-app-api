import Parkir from '../model/parkir.js';
import User from '../model/user.js';

export default class ParkirController {
  static async order(req, res) {
    const { nopol, duration } = req.body;
    const user_id = req.userId;
    const total = duration * 3000;
    const parkir = await Parkir.create({ nopol, duration, user_id, total });

    return res.json(parkir);
  }

  static async get(req, res) {
    const user_id = req.userId;
    const parkir = await Parkir.findAll({
      where: {
        id: user_id,
      },
      include: [User],
    });

    return res.json(parkir);
  }

  static async update(req, res) {
    const { nopol, duration } = req.body;
    const user_id = req.userId;
    const total = duration * 3000;

    const parkir_id = req.params.id;

    const parkir = await Parkir.update(
      {
        nopol,
        duration,
        user_id,
        total,
      },
      {
        where: {
          id: parkir_id,
        },
      }
    );

    return res.json(parkir);
  }

  static async cancel(req, res) {
    const parkir_id = req.params.id;
    const parkir = await Parkir.destroy({ where: { id: parkir_id } });
    return res.json(parkir);
  }
}
