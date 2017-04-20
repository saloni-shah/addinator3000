const add = require('./addinator.js');

class TestSuite{
	runTest(testName){
		//console.log(testName);
		const result = this[testName]();
		console.log(result,testName);
	}
	runTests(){
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => this[prop] instanceof Function)
			.filter(prop => prop.indexOf('test')!=-1)
			.forEach(testName => this.runTest(testName));
	}
	assertEquals(a,b){
		return a===b;
	}
	testAddPositiveNumbers(){
		return this.assertEquals(add(5,7),12);
	}
	testAddNegativeNumbers(){
		return this.assertEquals(add(-6,-7),-13);
	}
	testAddPositiveAndNegativeNumbers(){
		return this.assertEquals(add(6,-7),-1);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
/*console.log('Add positive number',add(5,7));
console.log('Add negative number',add(-6,-7));
console.log('Add one positive and one negative number',add(6,-7));
console.log('Make sure actual and expected values are same',add(5,7)===12);*/
