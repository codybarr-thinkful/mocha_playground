const { divide } = require('../index')
const expect = require('chai').expect

describe('Divide function', () => {
	it('should divide positive integers correctly', () => {
		expect(divide(8, 4)).to.equal(2)
	})

	it('should throw an error when divide by zero', () => {
		expect(() => divide(1, 0)).to.throw()
	})

	it.skip('testing some stuff', () => {
		expect(2).to.equal(2, '2 === 2') // pass
		expect(2).to.equal('2', '2 === "2"', 'sorry this failed :(') // fail, wrong types
		expect(2).to.equal(3, '2 === 3') // fail, wrong values
		expect('hen').to.equal('Hen', "'hen' == 'Hen'") // fail, string comparison is case sensitive
	})

	it('testing deep', () => {
		const a = { x: 5 }
		const b = { x: 5 }
		expect(a).to.deep.equal(b)
	})
})
