const { diff } = require('../index')
const expect = require('chai').expect

describe('Diff function', () => {
	it('should remove elements in b from a', () => {
		const a = [0, 1, 2]
		const b = [2]
		expect(diff(a, b)).to.deep.equal([0, 1])
	})

	it('should not remove elements from a if they are not in b', () => {
		const a = [0, 1, 2]
		const b = [3]
		expect(diff(a, b)).to.deep.equal([0, 1, 2])
	})

	it('should return an empty array if a and b are the same', () => {
		const a = [0, 1, 2]
		const b = [0, 1, 2]
		expect(diff(a, b)).to.deep.equal([])
	})

	it('should remove 1 from [1,2,3]', () => {
		expect(diff([1, 2, 3], [1])).to.not.include(1)
	})
})
