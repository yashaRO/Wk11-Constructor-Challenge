var Shape = require('./shape.js')

function Square(side) {
    this.side = side
	this.prototype.constructor = this
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square

module.exports = Square;