import { crudControllers } from '../../utils/crud';
import { List } from './list.model';
import { Dish } from '../dish/dish.model';

export default {
  ...crudControllers(List),
  getOne: async (req, res) => {
    try {
      const doc = await List.findOne({
        createdBy: req.user._id,
        _id: req.params.id
      })
        .populate('dishes')
        .lean()
        .exec();

      if (!doc) {
        return res.status(400).end();
      }

      res.status(200).json({ data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  },
  updateWithDish: async (req, res) => {
    if (!req.body.dish) {
      return res.status(401).send({ message: 'Please provide a dish' });
    }
    try {
      const dish = await Dish.findById(req.body.dish);
      const updatedDoc = await List.findOneAndUpdate(
        {
          _id: req.params.id
        },
        { $push: { dishes: dish._id } },
        { new: true, useFindAndModify: false }
      )
        .lean()
        .exec();

      if (!updatedDoc) {
        return res.status(400).end();
      }

      res.status(200).json({ data: updatedDoc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  }
};
