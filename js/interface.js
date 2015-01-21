var thermostat = new Thermostat();

var updateTemperature = function() {
	$('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
	$('#temperature').text(thermostat.temperature);		//select temperature id, change the text to what ever our javascript thermostat.temperature is.

	$('.increase-temp').on('click', function() {
		thermostat.increaseTemperature(1);
		updateTemperature();
	});

});