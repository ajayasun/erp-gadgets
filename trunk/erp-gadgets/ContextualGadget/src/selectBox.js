
function addRemoveEmployee(srcTable,dscTable)
{
	var flag="false";

	debug("Inside addRemoveEmployee method Begin","");
	debug("Inside addRemoveEmployee method Source Table",srcTable);
	debug("Inside addRemoveEmployee method Desination Table",dscTable);
	try
	{
		var contactList=document.getElementById(srcTable).getElementsByTagName('input');
		var tableSelected = document.getElementById(dscTable);
		var tableAvailable = document.getElementById(srcTable);
		debug("Inside addRemoveEmployee method contact length",contactList.length);
		debug("Inside addRemoveEmployee method Flag value",flag);
		for(var i=0; i<contactList.length;i++)
		{
			if(contactList[i].name=="empId")
			{
				if(document.getElementById(srcTable).getElementsByTagName('input')[i].checked)
				{
				var rowCount = tableSelected.rows.length;
				var row = tableSelected.insertRow(rowCount);
				flag ="true";
				var cell1 = row.insertCell(0);
				var element1 = document.createElement("input");
				element1.type = "checkbox";
				element1.name = "empId";
				element1.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell1.appendChild(element1);
			
				//	alert("Selected Contact Id value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				debug("Inside addRemoveEmployee method EMp Id number ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				}
				else
				{
					flag ="false";
				}
			}
			else if(contactList[i].name=="empLastName" && flag=="true")
			{
			
				//alert("Selected First Name value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				debug("Inside addRemoveEmployee method EMPLOYEE last Name ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell2 = row.insertCell(1);
				var lastName = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				//cell2.appendChild(lastName);
				cell2.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				var element2 = document.createElement("input");
				element2.type = "hidden";
				element2.name = "empLastName";
				element2.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell2.appendChild(element2);
			}
			else if(contactList[i].name=="empFirstName" && flag=="true")
			{
				debug("Inside addRemoveEmployee method Employee First Name ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell3 = row.insertCell(2);
				var firstName = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				//cell3.appendChild(firstName);
				cell3.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				var element3 = document.createElement("input");
				element3.type = "hidden";
				element3.name = "empFirstName";
				element3.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell3.appendChild(element3);
			}
			else if(contactList[i].name=="empEmailAddr" && flag=="true")
			{
				debug("Inside addRemoveEmployee method Email Address ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell4 = row.insertCell(3);
				var email = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				//cell4.appendChild(email);
				cell4.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				var element4 = document.createElement("input");
				element4.type = "hidden";
				element4.name = "empEmailAddr";
				element4.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell4.appendChild(element4);
			}
		}

		deleteRow(srcTable)
	}
	catch (e)
	{
		debug("Inside addRemoveEmployee method Exception ",e);
	}
	debug("Inside addRemoveEmployee method End ","");
}

function addRemoveContact(srcTable,dscTable)
{
	var flag="false";

	debug("Inside addRemoveContact method Begin","");
	debug("Inside addRemoveContact method Source Table",srcTable);
	debug("Inside addRemoveContact method Desination Table",dscTable);
	try
	{
		var contactList=document.getElementById(srcTable).getElementsByTagName('input');
		var tableSelected = document.getElementById(dscTable);
		var tableAvailable = document.getElementById(srcTable);
		debug("Inside addRemoveContact method contact length",contactList.length);
		debug("Inside addRemoveContact method Flag value",flag);
		for(var i=0; i<contactList.length;i++)
		{
			if(contactList[i].name=="ANSContactNumber")
			{
				if(document.getElementById(srcTable).getElementsByTagName('input')[i].checked)
				{
				var rowCount = tableSelected.rows.length;
				var row = tableSelected.insertRow(rowCount);
				flag ="true";
				var cell1 = row.insertCell(0);
				var element1 = document.createElement("input");
				element1.type = "checkbox";
				if(document.getElementById(srcTable).getElementsByTagName('input')[i].value==null)
					{
				element1.name = "ANSContactNumber";
				element1.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
					}
				cell1.appendChild(element1);
			
				//	alert("Selected Contact Id value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				debug("Inside addRemoveContact method AnsysContactNumber  ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				}
				else
				{
					flag ="false";
				}
			}
			else if(contactList[i].name=="contactLastName" && flag=="true")
			{
			
				//alert("Selected First Name value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				debug("Inside addRemoveContact method last Name ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell2 = row.insertCell(1);
				var lastName = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				//cell2.appendChild(lastName);
				cell2.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				var element2 = document.createElement("input");
				element2.type = "hidden";
				element2.name = "contactLastName";
				element2.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell2.appendChild(element2);
			}
			else if(contactList[i].name=="contactFirstName" && flag=="true")
			{
				debug("Inside addRemoveContact method First Name ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell3 = row.insertCell(2);
				var firstName = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				cell3.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				//cell3.appendChild(firstName);
				var element3 = document.createElement("input");
				element3.type = "hidden";
				element3.name = "contactFirstName";
				element3.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell3.appendChild(element3);
			}
			else if(contactList[i].name=="contactEmailAddr" && flag=="true")
			{
				debug("Inside addRemoveContact method Email Address ",document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				var cell4 = row.insertCell(3);
				var email = document.createTextNode(document.getElementById(srcTable).getElementsByTagName('input')[i].value);
				cell4.innerHTML="<font face='Garamond'>"+document.getElementById(srcTable).getElementsByTagName('input')[i].value+"</font>";
				//cell4.appendChild(email);
				var element4 = document.createElement("input");
				element4.type = "hidden";
				element4.name = "contactEmailAddr";
				element4.value = document.getElementById(srcTable).getElementsByTagName('input')[i].value;
				cell4.appendChild(element4);
			}
		}

		deleteRow(srcTable)
	}
	catch (e)
	{
		debug("Inside addRemoveContact method Exception ",e);
	}
	debug("Inside addRemoveContact method End ","");
}