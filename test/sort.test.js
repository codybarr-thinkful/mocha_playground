const { sort } = require('../index')
const expect = require('chai').expect

describe('Sort function', () => {
	it('should sort an array', () => {
		expect(sort([0, 1, 3, 9, 2, 7])).to.deep.equal([0, 1, 2, 3, 7, 9])
	})

	it('should sort an array with the first index needing to be moved', () => {
		expect(sort([9, 1])).to.deep.equal([1, 9])
	})
})
