 function createActivity()
 {
	debug("Inside createActivity method Begin","");
	document.getElementById('activityLoading').style.display = 'inline';
	document.getElementById('activityLoading').style.visibility = 'visible';
	document.getElementById('activityLoading').innerHTML = 'Saving activity ...';
	 
	try
	{
		var data;
		data = '<?xml version="1.0" encoding="utf-8"?>';
		data = data + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://siebel.com/webservices" xmlns:asi="http://siebel.com/asi/" xmlns:ans="http://www.siebel.com/xml/ANSAction3">';
		data = data + '<soapenv:Header>';
		data = data + '<web:PasswordText>sadmin17</web:PasswordText>';
		data = data + '<web:UsernameToken>sadmin</web:UsernameToken>';
		data=  data + '<web:SessionType>stateless</web:SessionType>';
		data=  data + '</soapenv:Header>';
			
		data = data + '<soapenv:Body>';
		data = data + '<asi:ANSActiviytInsertOrUpdateASI>';
			
			
		data = data + '<SiebelMessage>';
		data = data + '<ans:ListOfAnsaction3>';
		data = data + '<ans:Action operation="insert">';
		data = data + '<ans:Id>999999</ans:Id>';
		data = data + '<ans:Class>Generic</ans:Class>';
		data = data + '<ans:Type>'+document.CRMActivity.type.value+'</ans:Type>';
		data = data + '<ans:PrimaryOwnedBy>'+document.CRMActivity.owner.value+'</ans:PrimaryOwnedBy>'	
		data = data + '<ans:Description>'+document.CRMActivity.description.value.replace(/[^a-zA-Z 0-9]+/g,'')+'</ans:Description>';
		data = data + '<ans:Priority>'+document.CRMActivity.priority.value+'</ans:Priority>';
		data = data + '<ans:Planned>'+document.CRMActivity.startDate.value.replace(/-/g,'/')+'</ans:Planned>';
        data = data + '<ans:PlannedCompletion>'+document.CRMActivity.endDate.value.replace(/-/g,'/')+'</ans:PlannedCompletion>';
        /*if(document.CRMActivity.classval.value=="Opportunity")
        	data = data + '<ans:OpportunityId>'+document.CRMActivity.classSelected.value+'</ans:OpportunityId>'; 
        else if(document.CRMActivity.classval.value=="Service Request")
        	data = data + '<ans:SRNumber>'+document.CRMActivity.classSelected.value+'</ans:SRNumber>';*/ 
		data = data + '<ans:ANSActivityDetails>'+document.CRMActivity.details.value.replace(/[^a-zA-Z 0-9]+/g,'')+'</ans:ANSActivityDetails>';
		data = data + '<ans:ListOfAction_Contact>';
		var flag="false";
		var closeTag ="false";
		var contactList=document.getElementById('contactSelected').getElementsByTagName('input');
		debug("Inside createActivity method contact length",contactList.length);
		debug("Inside createActivity method Flag value",flag);
		debug("Inside createActivity method cloase tag value",closeTag);
		for(var i=0; i<contactList.length;i++)
		{
			if(contactList[i].name=="ANSContactNumber")
			{
				/*if(document.getElementById('contactSelected').getElementsByTagName('input')[i].checked)
				{*/
					data = data + '<ans:Action_Contact>';
					flag ="true";
					
					//	alert("Selected Contact Id value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
					debug("Inside createActivity method Ansys contact number ",document.getElementById('contactSelected').getElementsByTagName('input')[i].value);
					data = data + '<ans:ANSContactNumber>'+document.getElementById('contactSelected').getElementsByTagName('input')[i].value+'</ans:ANSContactNumber>';
				/*}
				else
				{
					flag ="false";
				}*/
			}
			else if(contactList[i].name=="contactFirstName" && flag=="true")
			{
				//alert("Selected First Name value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				debug("Inside createActivity method Ansys contact First Name ",document.getElementById('contactSelected').getElementsByTagName('input')[i].value);
				data = data + '<ans:ContactFirstName>'+document.getElementById('contactSelected').getElementsByTagName('input')[i].value+'</ans:ContactFirstName>';
				closeTag ="true";
			}
			else if(contactList[i].name=="contactLastName" && flag=="true")
			{
				debug("Inside createActivity method Ansys contact Last Name ",document.getElementById('contactSelected').getElementsByTagName('input')[i].value);
				//alert("Selected Last Name value :"+document.getElementById('contactAvailable').getElementsByTagName('input')[i].value);
				data = data + '<ans:ContactLastName>'+document.getElementById('contactSelected').getElementsByTagName('input')[i].value+'</ans:ContactLastName>';
			}
				
			if(closeTag=="true")
			{
				debug("Inside createActivity method inside closetag ","");
				data = data + '</ans:Action_Contact>'; 
				closeTag="false";
			}
		}
		data = data + '</ans:ListOfAction_Contact>';
		data = data + '<ans:ListOfAction_Employee>';
		var empList=document.getElementById('employeeSelected').getElementsByTagName('input');
		debug("Inside createActivity method Employee length",empList.length);
		for(var i=0; i<empList.length;i++)
		{
			if(empList[i].name=='empId')
				{
			/*if(document.getElementById('employeeSelected').getElementsByTagName('input')[i].checked)
			{*/
				debug("Inside createActivity method Ansys Employee Login ",document.getElementById('employeeSelected').getElementsByTagName('input')[i].value);
				//alert("Selected Emp Id value :"+document.getElementById('employeeAvailable').getElementsByTagName('input')[i].value);
				data = data + '<ans:Action_Employee>';	
				data = data + '<ans:EmployeeLogin>'+document.getElementById('employeeSelected').getElementsByTagName('input')[i].value+'</ans:EmployeeLogin>';
				data = data + '</ans:Action_Employee>';  
			//}
				}

		}
		data = data + '</ans:ListOfAction_Employee>';
		data = data + '</ans:Action>';
		data = data + '</ans:ListOfAnsaction3>';
		data = data + '</SiebelMessage>';	
		data = data + '<StatusObject/>';	
			
		data = data + '</asi:ANSActiviytInsertOrUpdateASI>';
		data = data + '</soapenv:Body>';
		data = data + '</soapenv:Envelope>';
		debug("Inside createActivity method Before send to siebel Activity data",data);
		//alert("Before send to siebel data :"+data);
		var SOAPAction='rpc/http://siebel.com/asi/:ANSActiviytInsertOrUpdateASI';
		invokeSiebeWebservice(data,SOAPAction,'activityResponse');

		//alert('Do you want to track this activity to Siebel?');
		debug("Do you want to track this activity to Siebel?","");
	}
	catch (e)
	{
	debug("Inside createActivity method Exception ",e);
	}
	debug("Inside createActivity method End","");
}

function createActivityResult(obj){
debug("Inside createActivityResult method Begin",""); 
debug("Inside createActivityResult method Activity Response Code",obj.rc);
debug("Inside createActivityResult method Activity Response Error",obj.errors);
debug("Inside createActivityResult method Activity Response Data",obj.data);
debug("Inside createActivityResult method Activity Response Text",obj.text);
debug("Inside createActivityResult method Activity Response authErrorText",obj.oauthErrorText);
try
{
	if(obj.rc=="200")
	{
		debug("Inside createActivityResult method Activity success","");
		var table = document.getElementById("employeeAvailable");
		var rowCount = table.rows.length;
		debug("Inside createActivityResult method employeeAvailable table length",rowCount);
		for(var i=1; i<rowCount; i++)
		{
			table.deleteRow(i);
			rowCount--;
			i--;
		}
		var table1 = document.getElementById("employeeSelected");
		var rowCount1 = table1.rows.length;
		debug("Inside createActivityResult method employeeSelected table length",rowCount1);
		for(var j=1; j<rowCount1; j++)
		{
			table1.deleteRow(j);
			rowCount1--;
			j--;
		}
		var table2 = document.getElementById("contactAvailable");
		var rowCount2 = table2.rows.length;
		debug("Inside createActivityResult method contactAvailable table length",rowCount2);
		for(var k=1; k<rowCount2; k++) 
		{
			table2.deleteRow(k);
			rowCount2--;
			k--;
		}
		var table3 = document.getElementById("contactSelected");
		var rowCount3 = table3.rows.length;
		debug("Inside createActivityResult method contactSelected table length",rowCount3);
		for(var m=1; m<rowCount3; m++) 
		{
			table3.deleteRow(m);
			rowCount3--;
			m--;
		}
		document.CRMActivity.reset();
		document.getElementById('content_div').innerHTML = 'Activity Saved.';
		document.getElementById('activityLoading').style.display = 'inline';
		document.getElementById('activityLoading').style.visibility = 'visible';
	}
	else
	{
	debug("Inside createActivityResult method Activity Failure");
	document.getElementById('content_div').innerHTML = 'Activity created Failure : '+obj.text;
	}
}
catch (e)
{
debug("Inside createActivityResult method Exception",e);
}
document.getElementById('activityLoading').innerHTML = '';
document.getElementById('activityLoading').style.display = 'none';
document.getElementById('activityLoading').style.visibility = 'invisible';

debug("Inside createActivityResult method End","");
}