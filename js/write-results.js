function writeResultQNXT(message){

	message += "Error Message: \n\n" ;

	message += "QNXT for which state?  \n\n";

	message += "QNXT Version: \n\n";

	message += "Module: \n\n";

	message += "Environment? \n\n";

	message += "How many users affected? \n\n";

	message += "Alternate Contacts (manager/supervisor/coworker)  \n\n";

	message += "Contact 1: \n\n";

	message += "Contact 2: \n\n";

	message += "Contact 3: \n\n";

	message += "Can the user log in to MAP? Yes/No \n\n";

	message += "Server name: \n\n";
		document.form.normal.value = message;
}


function writeResultVPN(message){

	message += "VPN Type: Cisco/SSL/Both \n\n" ;

	message += "Employee Type: MHI/MMS \n\n";

	message += "Does the user have appropriate permissions? Yes/No \n\n";

	message += "OS Platform: Win XP/Win 7/OSX/Other \n\n";

	message += "If Escalating to NOC: How many users are being affected? \n\n";

	message += "Error Code?  \n\n";

	message += "Calling from: Home/Hotel/Hotspot/Other  \n\n";

	message += "Connection Type: Wireless/Wired/AirCard  \n\n";
		document.form.normal.value = message;
}


function writeResultNETWORK(message){

	message += "Office/Cube number: \n\n" ;

	message += "User cannot access: \n\n";

	message += "Number of people affected: \n\n";

	message += "Has the user restarted their computer?\n\n";

	message += "Is the network cable properly attached? \n\n";

	message += "Is the user locked out of his AD account? \n\n";

	message += "(1) Call back name and number:  \n\n";

	message += "(2) Call back name and number:  \n\n";

	message += "(3) Call back name and number:  \n\n";

	message += "Type of problem:   \n\n";
		document.form.normal.value = message;
}


function writeResultTELEPHONY(message){

	message += "Which State? \n\n" ;

	message += "Inbound or Outbound calls?  \n\n";

	message += "Queue line number or personal number? \n\n";

	message += "Name of Queue (if applicable) \n\n";

	message += "(1) Call back name and number: \n\n";

	message += "(2) Call back name and number: \n\n";

	message += "(3) Call back name and number: \n\n";

	message += "Type of problem: Fast Busy/Static Noise/Operator message \n\n";

	message += "Number of people affected: \n\n";
		document.form.normal.value = message;
}


function writeResultGENERAL(message){
	message = "";
		document.form.normal.value = message;
}

/////////////////////////////////////

function writeResultEXISTING_INCIDENT(text){
	document.form.existing_incident_out.value = text;
}

function writeResultTYPE_OF_TICKET(text){
	document.form.type_of_ticket_out.value = text;
}

function writeResultURGENCY(text){
	document.form.urgency_out.value = text;
	document.form.urgency_display.value = text;
}

function writeResultIMPACT(text){
	document.form.impact_out.value = text;
}

function runFunctions2() {
	startstop();
	display();
}

function runFunctions() {
	startstop();
	writeResultEXISTING_INCIDENT('No');
}