var Thermostat = function() {
	this.temperature = 20;
	this.powerSaving = true;
	this.currentColour = "yellow";
};


Thermostat.prototype.increaseTemperature = function(changeTempBy) {
	this.temperature += changeTempBy;
	if (this.powerSaving === true) {
		if (this.temperature < 25) {
			return this.temperature
		} else {
			return this.temperature = 25
		}
	}
	if (this.powerSaving === false) {
		if (this.temperature < 32) {
			return this.temperature
		} else {
			return this.temperature = 32
		}
	}
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

Thermostat.prototype.turnOffPowerSaving = function() {
	return this.powerSaving = false;
};

Thermostat.prototype.resetButton = function() {
	return this.temperature = 20;
};

Thermostat.prototype.tempColour = function() {
	if (this.temperature <= 18) {
		return this.currentColour = "green";
	}
	if (this.temperature > 18 && this.temperature <= 24) {
		return this.currentColour = "yellow"
	}
	else {
		return this.tempColour = "red"
	}

};














