describe("Thermostat", function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe("by default", function() {

		it("starts at 20 degrees", function() {
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe("can change temperature", function(){

		it("by making it hotter", function() {
			thermostat.increaseTemperature(1);
			expect(thermostat.temperature).toEqual(21);
		});

		it("by making it cooler", function() {
			thermostat.decreaseTemperature(1);
			expect(thermostat.temperature).toEqual(19);
		});

		it("can't go below minimum", function(){
			thermostat.decreaseTemperature(11);
			expect(thermostat.temperature).toEqual(10);
		});

	});

	describe("power saving mode", function() {

		it("can be turned on", function(){
			thermostat.turnOnPowerSaving();
			expect(thermostat.powerSaving).toEqual(true);
		});

		it("once turned on, temperature can't go above maximum (25)", function() {
			thermostat.turnOnPowerSaving();
			thermostat.increaseTemperature(6);
			expect(thermostat.temperature).toEqual(25);
		});

		it("can be turned off", function() {
			thermostat.turnOnPowerSaving();
			thermostat.turnOffPowerSaving();
			expect(thermostat.powerSaving).toEqual(false);
		});

		it("once turned off, temperature can't go above maximum (32)", function() {
			thermostat.turnOffPowerSaving();
			thermostat.increaseTemperature(13);
			expect(thermostat.temperature).toEqual(32);
		});

		it("to be on as default", function () {
			expect(thermostat.powerSaving).toEqual(true);
		});

	});

	describe("has a reset button", function() {

		it("when pushed resets temperature to 20", function() {
			thermostat.increaseTemperature(5);
			thermostat.resetButton();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe("has a colour system based on energy usage", function() {

		it("where green is 18 or below", function() {
			thermostat.decreaseTemperature(5);
			expect(thermostat.tempColour()).toEqual("green")
		});

		it("where yellow is between 19 and 24", function() {
			thermostat.decreaseTemperature(0);
			expect(thermostat.tempColour()).toEqual("yellow")
		});

		it("where red is 25 or above", function() {
			thermostat.increaseTemperature(7);
			expect(thermostat.tempColour()).toEqual("red")
		});

	});

	
});

















