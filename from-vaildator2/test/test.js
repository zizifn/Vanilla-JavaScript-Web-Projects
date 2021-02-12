import { checkEmail, checkPasswordsMatch, checkLength, checkRequired } from '../src/checker.js'

describe('Array', function () {
    describe('#indexOf()', function () {
        before(function () {
            // runs once before the first test in this block

        });

        it('should return -1 when the value is not present', function () {
            //   assert.equal([1, 2, 3].indexOf(4), -1);
            const input = { value: "123",
            parentElement:{
                querySelector: () => { return {innerText:{}}}
            } };
            const test = checkEmail(input);
            console.log(test)
        });
    });
});