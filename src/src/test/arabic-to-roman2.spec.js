var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const arabicToRoman = require("../arabic-to-roman2");
/*
Koristeći TDD tehniku, isprogramirati aplikaciju koja pretvara arapske 
brojeve u rimske. U ovom zadatku ćemo učiti i tehnike i metodologije 
pisanja čistog koda
Primjer, za ulaz 1 -> vraća 'I'
Primjer 2, za ulaz 4 -> vraća 'IV'
Punu specifikaciju pogledajte na wikipediji https://en.wikipedia.org/wiki/Roman_numerals
*/
describe('arabic to roman converter', function () {
    it('arabicToRoman should be a function', function () {
        arabicToRoman(1);
    });
    stacking_by_I_tests();

    test_stacking_pattern({
        baseValue: 1,
        baseRoman: "I", increaseRoman: "I"
    });

    it("4 -> 'IV'", function () {
        expect(arabicToRoman(4)).to.eq("IV");
    });

    it("9 -> 'IX'", function () {
        expect(arabicToRoman(9)).to.eq("IX");
    });

    it("20 -> 'XX'", function () {
        expect(arabicToRoman(20)).to.eq("XX");
    });

    it("40 -> 'XL'", function () {
        expect(arabicToRoman(40)).to.eq("XL");
    });

    it("30 -> 'XXX'", function () {
        expect(arabicToRoman(30)).to.eq("XXX");
    });
    it("50 -> 'L'", function () {
        expect(arabicToRoman(50)).to.eq("L");
    });
    it("51 -> 'LI'", function () {
        expect(arabicToRoman(51)).to.eq("LI");
    });
    it("100 -> 'C'", function () {
        expect(arabicToRoman(100)).to.eq("C");
    });
    it("159 -> 'CLIX'", function () {
        expect(arabicToRoman(159)).to.eq("CLIX");
    });
    it("580 -> 'DLXXX'", function () {
        expect(arabicToRoman(580)).to.eq("DLXXX");
    });
    it("3445 -> 'MMMCDXLV'", function () {
        expect(arabicToRoman(3445)).to.eq("MMMCDXLV");
    });
    it("45 -> 'XLV'", function () {
        expect(arabicToRoman(45)).to.eq("XLV");
    });
    it("400 -> 'CD'", function () {
        expect(arabicToRoman(400)).to.eq("CD");
    });
    it("1444 -> 'MCDXLIV'", function () {
        expect(arabicToRoman(1444)).to.eq("MCDXLIV");
    });
    it("99 -> 'XCIX'", function () {
        expect(arabicToRoman(99)).to.eq("XCIX");
    });
    it("90 -> 'XC'", function () {
        expect(arabicToRoman(90)).to.eq("XC");
    });
    it("159 -> 'CLIX'", function () {
        expect(arabicToRoman(159)).to.eq("CLIX");
    });
    it("999 -> 'CMXCIX'", function () {
        expect(arabicToRoman(999)).to.eq("CMXCIX");
    });
    it("1000 -> 'M'", function () {
        expect(arabicToRoman(1000)).to.eq("M");
    });
    it("3564 -> 'MMMDLXIV'", function () {
        expect(arabicToRoman(3564)).to.eq("MMMDLXIV");
    });
});

function stacking_by_I_tests() {
    test_stacking_pattern({
        baseValue: 5,
        baseRoman: "V", increaseRoman: "I"
    });

    test_stacking_pattern({
        baseValue: 10,
        baseRoman: "X", increaseRoman: "I"
    });

    test_stacking_pattern({
        baseValue: 50,
        baseRoman: "L", increaseRoman: "I"
    });

    test_stacking_pattern({
        baseValue: 100,
        baseRoman: "C", increaseRoman: "I"
    });

    test_stacking_pattern({
        baseValue: 500,
        baseRoman: "D", increaseRoman: "I"
    });

    test_stacking_pattern({
        baseValue: 1000,
        baseRoman: "M", increaseRoman: "I"
    });
}

//DRY!!!

function test_stacking_pattern({ baseValue, baseRoman, increaseRoman }) {
    for (let i = 0; i < 3; i++) {
        let roman = baseRoman + new Array(i).fill(increaseRoman).join("");
        let value = baseValue + i;
        it(value + " -> " + roman, function () {
            expect(arabicToRoman(value)).to.eq(roman);
        });
    }
}

//R-G-R