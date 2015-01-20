var Thermostat = function() {
	this.temperature = 20;
};


Thermostsat.prototype.increaseTemperature = function(changeTempBy) {
	return this.temperature += changeTempBy;
};