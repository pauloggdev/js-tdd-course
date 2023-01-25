import { expect } from 'chai';
import {sum, sub, mult, div} from '../src/main.js';

// var calc = require("../src/main.js");


describe('Calc', () => {
    // smoke test 
    describe('Smoke tests', () => {
        // it('should exist the calc lib', () => {
        //     expect(calc).to.exist;
        // })
        it('should exist the method sum', () => {
            expect(sum).to.exist;
        })
        it('should exist the method sub', () => {
            expect(sub).to.exist;
        })
        it('should exist the method mult', () => {
            expect(mult).to.exist;
        })
        it('should exist the method div', () => {
            expect(div).to.exist;
        })
    })
    describe('sum', () => {
        context('Case 1', () => {
            it('should return 4 when `sum(2,2)`', () => {
                expect(sum(2, 2)).to.be.equal(4)
            })
        })
        context('Case 2', () => {
            it('should return 6 when `sum(4,2)`', () => {
                expect(sum(4, 2)).to.be.equal(6)
            })
        })
    })
    describe('sub', () => {
        context('Case 1', () => {
            it('should return 0 when `sub(2,2)`', () => {
                expect(sub(2, 2)).to.be.equal(0)
            })
        })
        context('Case 2', () => {
            it('should return -2 when `sub(2,4)`', () => {
                expect(sub(2, 4)).to.be.equal(-2)
            })
        })
    })
    describe('mult', () => {
        context('Case 1', () => {
            it('should return 6 when `mult(3,2)`', () => {
                expect(mult(3, 2)).to.be.equal(6)
            })
        })
    })
    describe('div', () => {
        context('Case 1', () => {
            it('should return 2 when `div(6,3)`', () => {
                expect(div(6, 3)).to.be.equal(2)
            })
        })
        context('Case 2', () => {
            it('should return `Não possivel dividir por 0` when `div(2,0)`', () => {
                expect(div(2, 0)).to.be.equal('Não possivel dividir por 0')
            })
        })
    })
})