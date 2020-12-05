import { Dish } from '../dish.model'
import mongoose from 'mongoose'

describe('Dish model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Dish.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('createdBy', () => {
      const createdBy = Dish.schema.obj.createdBy
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      })
    })
  })
})
