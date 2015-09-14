// Objects given

var claim1 = {
	patientName: "John Doe",
	category: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	category: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	category: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	category: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	category: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var claim6 = new claim("Chris Smith", "Emergency", 12000);
initialList.push(claim6);

var claim7 = new claim("Rex Kwondo", "Specialist", 2000);
initialList.push(claim7);

var claim8 = new claim("Frank Berry", "Primary Care", 109000);
initialList.push(claim8);

var claim9 = new claim("Marvin Gaye", "Emergency", 22);
initialList.push(claim9);

var claim10 = new claim("Jenny Buckets", "Specialist", 539999);
initialList.push(claim10);

// Array of objects
var totalPayedOut = 0;

// new claim constructor function.
function claim(name, type, cost){
	this.patientName = name;
	this.category = type;
	this.visitCost = cost;
}

position = document.getElementById('myList');
var newEl, newText, position;


// console.log(initialList);
for(var i = 0; i < initialList.length; i++){

	coveredPercent(initialList[i]);
	coveredAmount(initialList[i]);

}





var percentageCovered = 0;


console.log("The entire amount paid out is $" + totalPayedOut);

	newEl = document.createElement('li');
	newText = document.createTextNode("The entire amount paid out is $" + totalPayedOut);
	newEl.appendChild(newText);
	position.appendChild(newEl);


//function to determine percent covered
function coveredPercent(type){

	if(type.category == "Optical"){
		percentageCovered = 0;
	} else if((type.category) == "Specialist"){
		percentageCovered = .1;
	} else if((type.category) == "Emergency"){
		percentageCovered = 1;
	} else if((type.category) == "Primary Care"){
		percentageCovered = .5;
	}
}

var moneyPaidOut = 0;

//function to determine amount covered
function coveredAmount(cost){

	// var newInfoArray = [];
	
	var moneyPaidOut = Math.round(((cost.visitCost) * percentageCovered));
	totalPayedOut += moneyPaidOut;
	
	console.log("paid out $" + moneyPaidOut + " for " + cost.patientName);

	newEl = document.createElement('li');
	newText = document.createTextNode("Paid out $" + moneyPaidOut + " for " + cost.patientName);
	newEl.appendChild(newText);
	position.appendChild(newEl);
	

}


// console.log(newInfoArray);

