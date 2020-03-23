import * as lib from '../src'
lib.deepEqual(
  { x: 1, y: 2, z: 3, xx: [{ q: 1, w: 2, e: 3, r: [{ qwer: 3, rtty: 4 }] }] },
  { x: 1, y: 2, z: 3, xx: [{ q: 1, w: 2, e: 3, r: [{ qwer: 3, rtty: 4 }] }], },
)