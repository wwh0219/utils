const assert = require('assert');
const util=require('../util');
const a  = {
  a: [1, 2, 3, 4, 5],
  b: {
    b1: [3, 2, 1],
    b2: {
      b21: {
        b211: [3, 3, 4, 5, {
          x: 'zz',
          l: {
            qq: 'zzzz'
          }
        }]
      }
    }
  }
}
describe('util测试', function () {
  describe('util测试', function () {
    it('深拷贝测试', function () {
      assert.equal(JSON.stringify(util.deepCopy(a)),JSON.stringify(a));
    });
    it('数组去重', function () {
      const arr = [1, 2, 3, 4, 1, 2, 3, 1, 3, 31, 1, 13, 31, 'z', 'x', 'z', 'z', 'z', 'z']
      util.arrayUnique(arr)
      assert.equal(JSON.stringify(util.arrayUnique(arr)), JSON.stringify([1, 2, 3, 4, 13, 31, 'x', 'z']));
    });
    it('JSON深度对比', function () {
      const a = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzz'
                }
              }]
            }
          }
        }
      }
      const b = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzz'
                }
              }]
            }
          }
        }
      }
      const c = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzzx'
                }
              }]
            }
          }
        }
      }
      assert.equal(util.deepEqual(a, b), true);
      assert.equal(util.deepEqual(a,c),false);
    });
  });
});