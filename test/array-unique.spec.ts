import { expect,assert } from 'chai'
import { uniqueArray,uniqueArrayByField } from '../src'
describe('uniqueArray', () => {
  it('number', () => {
    const result=uniqueArray([1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6,7,7,7, 6, 6, 8, 8, 1, 2, 4, 1, 2, 3])
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8])
  })
  it('number and string', () => {
    const result = uniqueArray([1, 2, 3, '3', 4, 4, '4', 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 8, 8, 1, 2, 4, 1, 2, 3])
    assert.deepEqual(result, [1, 2, 3,'3', 4,'4', 5, 6, 7, 8])
  })
})

describe('uniqueArrayByField', () => {
  it('number', () => {
    const result = uniqueArrayByField<'id'>([{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }, { id: '2' }, { id: '3' }],'id')
    assert.deepEqual(result, [{ id: 1 }, { id: 2 }, { id: 3 }, { id: '2' }, { id: '3' }])
  })
})