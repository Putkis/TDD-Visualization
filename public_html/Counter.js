/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var counter = {
    this:testLast = 0,
    this:testFirst = 0,
    this:testAddition = 0,
    this:regression = 0,
    this:codeProduction = 0,
    getTestLast: function () {
        return console.log("before " + this.testLast);
    },
    getTestFirst: function () {
        return this.testLast;
    },
    getTestAddition: function () {
        return this.testLast;
    },
    getRegression: function () {
        return this.testLast;
    },
    getCodeProduction: function () {
        return this.testLast;
    },
    addTestLast: function () {
         this.testLast + 1;
    },
    addTestFirst: function () {
         this.testFirst + 1;
    },
    addTestAddition: function () {
         this.testAddition + 1;
    },
    addRegression: function () {
         this.regression +1;
    },
    addCodeProduction: function () {
        this.codeProduction +1;
    }
};