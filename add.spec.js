import { add } from './add.js'

describe('test for the add function', () => {
    it('return the addition of 5+5 is 10', () => {
      const result = add(5, 5)
      expect(result).toBe(10)
    })
    it('return the addition of 1+1 is 2', () => {
      const result = add(1, 1)
      expect(result).toBe(2)
    })
  })

