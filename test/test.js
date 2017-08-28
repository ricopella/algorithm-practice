const should = require("chai").should();
const expect = require("chai").expect();
const piglat = require("../pig-latin");
const bubble = require("../bubble-sort");


describe("translatePigLatin", () => {
    it("Should take the first letter and put at the end with 'ay' following", () => {
        piglat("Myabear").should.equal("abearMyay");
    })
    it("Should take the two letters and put at the end", () => {
        piglat("pgiot").should.equal("iotpgay");
    })
    it("Should take the first 4 letters and put at thend", () => {
        piglat("zzza").should.equal("azzzay");
    })


})

describe("bubblesort", () => {
    it("Should sort all the letters accordingly", () => {
        bubble([12, 900, 3, 68, 55, 1]).expect.to.not.equal([12, 900, 3, 68, 55, 1]);
    })
})