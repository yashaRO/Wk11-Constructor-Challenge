function Shape(name) {
	var isShape = true;
}
Shape.prototype.get_type = function() {
	return this.constructor;
}

module.exports =  Shape;