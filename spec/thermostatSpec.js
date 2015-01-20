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

	});

});