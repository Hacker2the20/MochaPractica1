const assert = require('chai').assert;
const main = require('../main');

//Results
const helloWorldText = main.helloWorld();

describe('Main Suite', function(){

   
    it('Hello World text is as expected', function(){
        assert.equal(helloWorldText, 'hello world')

    });

    it('Validate data type', function(){
        assert.typeOf(helloWorldText, 'string' ,'The expected data type is string')

    });
});