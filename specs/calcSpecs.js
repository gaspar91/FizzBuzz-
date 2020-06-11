describe("fizzBuzz",function(){

    beforeEach(function(){
        number = new fizzBuzz;
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz",function(){
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz",function(){
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz",function(){
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        });
    });
});