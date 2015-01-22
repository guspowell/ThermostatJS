var thermostat = new Thermostat();

var updateColour = function() {
	thermostat.tempColour();
	$('#energy-colour').addClass(thermostat.energyColour);
};

var removeColour = function() {
	$('#energy-colour').removeClass();
};


var updateTemperature = function() {
	removeColour();
	updateColour();
	$('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
	updateTemperature();	

	$('#increase-temperature').on('click', function() {
		thermostat.increaseTemperature(1);
		updateTemperature();
	});

	$('#decrease-temperature').on('click', function() {
		thermostat.decreaseTemperature(1);
		updateTemperature();
	});

	$('.power-saving').on('click', function() {
		thermostat.togglePowerSaving();
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