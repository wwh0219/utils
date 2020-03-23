import { deepCopy } from '../src'
import { assert } from 'chai'
describe('deepCopy', () => {
  it('deepCopy', () => {
    const result = deepCopy({ x: 1, y: 2, z: 3, xx: [{ q: 1, w: 2, e: 3, r: [{qwer:3,rtty:4}] }] })
    assert.deepEqual(result, { x: 1, y: 2, z: 3, xx: [{ q: 1, w: 2, e: 3, r: [{ qwer: 3, rtty: 4 }] }] })
  })
})