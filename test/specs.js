var expect = require('expect.js');
var finder = require('../sources/main');

describe('Must return the biggest number inside the suite', function () {
    it("should return 10", function () {
        return expect(finder('10')).to.equal(10);
    });
    it("should return 0", function () {
        return expect(finder('0')).to.equal(0);
    });
    it("should return 10", function () {
        return expect(finder('1010')).to.equal(10);
    });
    it("should return 42", function () {
        return expect(finder('124209')).to.equal(42);
    });
});
