const { sum } = require('../index')
const expect = require('chai').expect

describe('Sum function', () => {
	it('should return a promise', () => {
		expect(sum([1, 2, 3])).to.be.a('promise')
	})

	it('should sum an array of numbers', () => {
		return sum([1, '2', 3]).then(ans => {
			expect(ans).to.equal(6)
		})
	})

	it('should sum an array of numbers and non-numeric strings', () => {
		return sum([1, '2', 3, 'a']).then(ans => {
			expect(ans).to.equal(6)
		})
	})
})
