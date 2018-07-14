var i,
	x,
	y,
	Days= document.getElementById('day'),
	Months = document.getElementById('months'),
	Years = document.getElementById('years'),
	result_a='',
	result_b='',
	result_c='';

for (i= 1; i <= 30; i++) {

	result_a +=  '<option value="' + i + '">' + i + '</option>';

}
Days.innerHTML = result_a;


for (x= 1; x <= 12; x++) {

	result_b +=  '<option value="' + x + '">' + x + '</option>';

}
Months.innerHTML = result_b;


for (y= 1900; y <= 2018; y++) {

	result_c += '<option value="' + y + '">' + y + '</option>';

}
Years.innerHTML = result_c;