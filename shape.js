function Shape(name) {
	var isShape = true;
	this.get_type = function() {
		return this.constructor;
	}
}

module.exports =  Shape;