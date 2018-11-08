import flattenArray from './index'

describe('Flatten array', () => {
  it('should find array function', () => {
    expect(flattenArray()).toBeDefined()
  })

  it('should flatten array', () => {
    const arr =  [[1,2,[3]],4]
    expect(flattenArray(arr)).toEqual([1,2,3,4])
  })

})