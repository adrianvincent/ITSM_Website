function display() {
  DispWin = window.open('','FormDisplay', 'toolbar=yes,status=no,width=550,height=800')

	message = "[color=blue][b]CONTACT INFORMATION[/b][/color]" + "<br />"";
	message += "Name(s): " + document.form.contact_name.value + "<br />";
	message += "Number: " + document.form.contact_number.value + "<br />";
	message += "Location: " + document.form.contact_location.value + "<br /><br />";
	
	message += "[color=blue][b]TICKETING DETAILS[/b][/color]" + "<br />";
	message += "Title: " + document.form.application_name.value + " - " + document.form.application_issue.value + "<br />";
	message += "Application Category: " + document.form.application_category.value + "<br />";
	message += "Ticket Type: " + document.form.type_of_ticket_out.value + "<br /><br />";
	
	message += "[color=blue][b]SEVERITY CALCULATIONS[/b][/color]" + "<br />";
	message += "Impact: " + document.form.impact_out.value + "<br />";
	message += "Urgency: " + document.form.urgency_out.value + "<br /><br />";
	
	message += "[color=blue][b]CALL DETAILS[/b]" + "<br />";
	message += "<br />Call Start: " + document.form.timer_start.value + "";
	message += "<br />Call End: " + document.form.timer_end.value + "";
	message += "<br />Elapsed: " + document.form.clock.value + "";
	message += "<br /><br />v1.4.0" + "";
	
	
  DispWin.document.write(message);
}