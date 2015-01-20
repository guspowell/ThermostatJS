var Thermostat = function() {
	this.temperature = 20;
	this.powerSaving = false;
};


Thermostat.prototype.increaseTemperature = function(changeTempBy) {
	return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
	this.temperature -= changeTempBy;
	if (this.temperature < 10) { 
		return this.temperature = 10
	} else { 
		return this.temperature
	};
};

Thermostat.prototype.turnOnPowerSaving = function() {
	return this.powerSaving = true;
};