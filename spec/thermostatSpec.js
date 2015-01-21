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
			thermostat.togglePowerSaving();
			thermostat.togglePowerSaving();
			expect(thermostat.powerSaving).toEqual(true);
		});

		it("once turned on, temperature can't go above maximum (25)", function() {
			thermostat.increaseTemperature(6);
			expect(thermostat.temperature).toEqual(25);
		});

		it("can be turned off", function() {
			thermostat.togglePowerSaving();
			expect(thermostat.powerSaving).toEqual(false);
		});

		it("once turned off, temperature can't go above maximum (32)", function() {
			thermostat.togglePowerSaving();
			thermostat.increaseTemperature(13);
			expect(thermostat.temperature).toEqual(32);
		});

		it("to be on as default", function () {
			expect(thermostat.powerSaving).toEqual(true);
		});

		it("when switched on, if current temperature is above max temp, it brings current temp down", function() {
			thermostat.togglePowerSaving();
			thermostat.increaseTemperature(10);
			thermostat.togglePowerSaving();
			expect(thermostat.temperature).toEqual(25);
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

	describe("has an away button", function() {

		it("can be turned on", function() {
			thermostat.toggleAway();
			expect(thermostat.away).toBe(true);
		});

		it("when switched on current temperature is brought down to minimum", function() {
			thermostat.toggleAway();
			expect(thermostat.temperature).toEqual(10);
		});

		it("when switched off, current temperature is raised to default temperature", function() {
			thermostat.toggleAway();
			expect(thermostat.temperature).toEqual(10);
			thermostat.toggleAway();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe("has a timer", function() {

		it("knows the current time", function() {
			var date = new Date()
			var hour = date.getHours();
			var min = date.getMinutes();
			expect(thermostat.currentTime()).toEqual(hour + ':' + min)
		});

		// it("can toggle away between certain hours", function() {

		// 	expect(thermostat.temperature).toEqual(10)

		// 	expect(thermostat.temperature).toEqual(20)
		// });

	});


	
});

















