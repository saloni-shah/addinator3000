const add = require('./addinator.js');
//console.log(add(5,6));

class ViewManager{
	connectEventHandlers(){
		document.getElementById('form-numbers').addEventListener('submit',this.onSubmit);
	}

	onSubmit(event){
		event.preventDefault();
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;
		num1 = parseInt(num1,10);
		num2 = parseInt(num2,5);
		const sum = add(num1,num2);
		alert(sum);
		console.log(sum);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();