const should = require("chai").should();
const expect = require("chai").expect();
const piglat = require("../pig-latin");
const bubble = require("../bubble-sort");
const eLast = require("../even-last");

describe("translatePigLatin", () => {
    it("Should take the first letter and put at the end with 'ay' following", () => {
        piglat("Myabear")
            .should
            .equal("abearMyay");
    })
    it("Should take the two letters and put at the end", () => {
        piglat("pgiot")
            .should
            .equal("iotpgay");
    })
    it("Should take the first 4 letters and put at thend", () => {
        piglat("zzza")
            .should
            .equal("azzzay");
    })

})

// EVEN LAST
describe("evenLast", () => {
    it("Should return zero", () => {
        eLast([])
            .should
            .equal(0);
    })
    it("Should return 30", () => {
        eLast([
                0,
                1,
                2,
                3,
                4,
                5
            ])
            .should
            .equal(30)
    })
    it("Should return 30", () => {
        eLast([1, 3, 5])
            .should
            .equal(30)
    })
    it("Should return 30", () => {
        eLast([6])
            .should
            .equal(36)
    })
})