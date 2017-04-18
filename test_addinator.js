const add = require('./addinator.js');

class TestSuite{
	runTests(){
		this.testAddPositiveNumbers();
		this.testAddNegativeNumbers();
		this.testAddPositiveAndNegativeNumbers();
	}
	assertEquals(a,b){
		return a===b;
	}
	testAddPositiveNumbers(){
		const result = this.assertEquals(add(5,7),12);
		console.log('Test Add positive number',result);
	}
	testAddNegativeNumbers(){
		const result = this.assertEquals(add(-6,-7),-13);
		console.log('Test Add negative number',add(-6,-7)==-13);
	}
	testAddPositiveAndNegativeNumbers(){
		const result = this.assertEquals(add(6,-7),-1);
		console.log('Test Add one positive and one negative number',result);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
/*console.log('Add positive number',add(5,7));
console.log('Add negative number',add(-6,-7));
console.log('Add one positive and one negative number',add(6,-7));
console.log('Make sure actual and expected values are same',add(5,7)===12);*/
