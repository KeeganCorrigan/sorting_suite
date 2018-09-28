const assert = require('chai').assert
const mergeSort = require('../merge-sort')

describe("merge sort functionality", function(){
  context("merge sort", function(){
    it("can sort array", function(){
      let unsortedArray = [ 27, 15, 30, 4, 2, 90 ]
      assert.deepEqual(mergeSort(unsortedArray), [ 2, 4, 15, 27, 30, 90 ])
    })
  })
})
