var selectedRow = null
function onFormSubmit() {
	if (validate()) {
		var formData = readFormData();
		if (selectedRow == null) insertNewRecord(formData);
		else updateRecord(formData);
		resetForm();
	}
}

function readFormData() {
	var formData = {};
	formData["name"] = document.getElementById("name").value;
	formData["rating"] = document.getElementById("rating").value;
	formData["year"] = document.getElementById("year").value;
	return formData;
}

function insertNewRecord(data) {
	var table = document.getElementById("movielist").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.name;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.rating;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.year;
	cell4 = newRow.insertCell(3);
	
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
	document.getElementById("name").value = "";
	document.getElementById("rating").value = "";
	document.getElementById("year").value = "";
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("name").value = selectedRow.cells[0].innerHTML;
	document.getElementById("rating").value = selectedRow.cells[1].innerHTML;
	document.getElementById("year").value = selectedRow.cells[2].innerHTML;
	
}

function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.name;
	selectedRow.cells[1].innerHTML = formData.rating;
	selectedRow.cells[2].innerHTML = formData.year;
	
}

function onDelete(td) {
	if (confirm('Are you sure to delete this record ?')) {
		row = td.parentElement.parentElement;
		document.getElementById("movielist").deleteRow(row.rowIndex);
		resetForm();
	}
}

function validate() {
	isValid = true;
	if (document.getElementById("name").value == "") {
		isValid = false;
		document.getElementById("fullNameValidationError").classList.remove("hide");
	} else {
		isValid = true;
		if (!document.getElementById("fullNameValidationError").classList.contains("hide")) document.getElementById("fullNameValidationError").classList.add("hide");
	}
	return isValid;
}
var x = document.getElementById("output");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    alert("Thanks! location obtained");
  
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  

}
