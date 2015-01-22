var thermostat = new Thermostat();

var updateColour = function() {
	thermostat.tempColour();
	$('#energy-colour').addClass(thermostat.energyColour);
};

var removeColour = function() {
	$('#energy-colour').removeClass();
};

var powerSavingColours = function() {
	$('#power-saving-mode').addClass(thermostat.powerSavingColour);
};

var removePowerSavingColours = function() {
	$('#power-saving-mode').removeClass();
};

var updatePowerColour = function() {
	removePowerSavingColours();
	powerSavingColours();
};


var updateTemperature = function() {
	removeColour();
	updateColour();
	$('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
	updateTemperature();
	updatePowerColour();	

	$('#increase-temperature').on('click', function() {
		thermostat.increaseTemperature(1);
		updateTemperature();
	});

	$('#decrease-temperature').on('click', function() {
		thermostat.decreaseTemperature(1);
		updateTemperature();
	});

	$('#power-saving').on('click', function() {
		thermostat.togglePowerSaving();
		updatePowerColour();
		updateTemperature();
	});

	$('.reset').on('click', function() {
		thermostat.resetButton();
		updateTemperature();
	});

	$('.holiday').on('click', function() {
		thermostat.toggleAway();
		updateTemperature();
	});

	$('#time').text(thermostat.currentTime());

});