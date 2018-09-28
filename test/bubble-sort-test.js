const assert = require('chai').assert
const bubbleSort = require('../bubble-sort')

describe("bubble sort functionality", function() {
  context("bubble sort", function() {
    it("can perform bubble sort", function(){
      let unsortedArray = [ 27, 15, 30, 4, 2 ]
      assert.deepEqual(bubbleSort(unsortedArray), [ 2, 4, 15, 27, 30 ])
    })
  })
})
