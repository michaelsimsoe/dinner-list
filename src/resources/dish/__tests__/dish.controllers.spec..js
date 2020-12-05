import controllers from '../dish.controllers'
import { isFunction } from 'lodash'

describe('dish controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne'
    ]

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    )
  })
})
