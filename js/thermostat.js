var Thermostat = function() {
	this.temperature = 20;
	this.defaultTemperature = 20;
	this.minTemperature = 10;
	this.powerSaving = true;
	this.away = false;
};

Thermostat.prototype.maxTemp = function() {
	if (this.powerSaving === true) {return 25;} else {return 32;}
};


Thermostat.prototype.increaseTemperature = function(changeTempBy) {
	var newTemp = this.temperature + changeTempBy;
	if (newTemp < this.maxTemp()) {return this.temperature = newTemp} 
	else {return this.temperature = this.maxTemp();}
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
	this.temperature -= changeTempBy;
	if (this.temperature < this.minTemperature) {return this.temperature = this.minTemperature}
	else {return this.temperature};
};

Thermostat.prototype.togglePowerSaving = function() {
	if (this.powerSaving === true) {this.powerSaving = false;}
	else {this.powerSaving = true;
		if (this.temperature > this.maxTemp()) {this.temperature = this.maxTemp();}
	}
};

Thermostat.prototype.resetButton = function() {
	return this.temperature = this.defaultTemperature;
};

Thermostat.prototype.tempColour = function() {
	if (this.temperature <= 18) {return  "green";}
	if (this.temperature > 18 && this.temperature <= 24) {return  "yellow"}
	else {return "red"}
};

Thermostat.prototype.toggleAway = function() {
	if (this.away === false) {this.away = true;}
	else {this.away = false;};
};














