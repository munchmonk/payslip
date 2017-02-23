function calculate_net() {
	var 
		basic = document.getElementById("basic").value,
		variable = parseFloat(document.getElementById("variable").value),
		languages = document.getElementById("languages").value,
		baye = document.getElementById("baye").value,
		saye = document.getElementById("saye").value,
		plan = document.getElementById("loans").value,
		sickness = document.getElementById("sickness").value,
		union = document.getElementById("union").value,
		income_allowance = document.getElementById("code").value;


	// Languages
	if (languages > 0) 
		languages = parseFloat(((250 + 50 * (languages - 1)) / 12).toFixed(2));

	// Sickness
	var sick_deduction = 0;
	if (sickness > 0)
		sick_deduction = (basic / 365 * sickness).toFixed(2);

	basic = parseFloat((basic / 12).toFixed(2));

	// Monthly gross
	var gross = (basic + variable + languages - sick_deduction - baye).toFixed(2);

	// Income tax
	income_allowance /= 12;
	var income_tax = 0;
	if (gross > income_allowance)
		income_tax = ((gross - income_allowance) * 0.2).toFixed(2);

	// NI tax
	var ni_allowance = 672,
		ni_tax = 0;
	if (gross > ni_allowance)
		ni_tax = ((gross - ni_allowance) * 0.12).toFixed(2);

	// Student loans
	var loan_repayment = 0;
	if (plan == "1") {
		var loan_allowance = 17495,
			yearly_gross = gross * 12;
		if (yearly_gross > loan_allowance)
			loan_repayment = ((yearly_gross - loan_allowance) * 0.09 / 12).toFixed(2);
	}

	if (plan == "2") {
		var loan_allowance = 21000,
			yearly_gross = gross * 12;
		if (yearly_gross > loan_allowance)
			loan_repayment = ((yearly_gross - loan_allowance) * 0.09 / 12).toFixed(2);
	}

	// Net
	var net = (gross - income_tax - ni_tax - saye - loan_repayment - union).toFixed(2);

	var results = document.getElementById("results"),
		breakdown = document.getElementById("breakdown"),
		msg1 = "Your estimated net pay is £" + net + "<br>",
		msg2 = "Income tax: £" + income_tax + "<br>" + 
				"NI: £" + ni_tax + "<br>";

	results.innerHTML = msg1;
	breakdown.innerHTML = msg2;






}