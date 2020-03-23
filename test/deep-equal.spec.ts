import { expect, assert } from 'chai'
import { deepEqual } from '../src'
describe('deepEqual', () => {
  it('deepEqual', () => {
    const result = deepEqual(
      { x: 1, y: 2, z: 3, xx: [{ q: 1, w: 2, e: 3, r: [{ qwer: 3, rtty: 4 }] }] },
      { xx: [{ q: 1, w: 2, e: 3, r: [{ qwer: 3, rtty: 4 }] }], x: 1, y: 2, z: 3  },
    )
    expect(result).true
  })
})