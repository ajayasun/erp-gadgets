function searchConact(){
debug("Inside searchConact method Begin", "");
document.getElementById('contactloading').style.display = 'inline';
document.getElementById('contactloading').style.visibility = 'visible';
document.getElementById('contactloading').innerHTML = 'Loading ...';
try
{
	var soapMsg;
	var LastName = null;
	var FirstName = null;
	var EMailAddr = null;

	if(document.CRMActivity.contactfind.value=='contactLastName')
		var LastName=document.CRMActivity.contactstarting.value;
	else if(document.CRMActivity.contactfind.value=='contactFirstName')
		var FirstName=document.CRMActivity.contactstarting.value;
	else if(document.CRMActivity.contactfind.value=='contactEmail')
		var EMailAddr=document.CRMActivity.contactstarting.value;

	if(document.CRMActivity.contactstarting.value=='*')
	{
	//alert("Please enter a valid search criteria. Wild card search such as this is not permitted.");
	debug("Please enter a valid search criteria. Wild card search such as this is not permitted.", "");
	document.getElementById('contactloading').innerHTML = '';
	document.getElementById('contactloading').style.display = 'none';
	document.getElementById('contactloading').style.visibility = 'invisible';
	}
	else
	{
		if(document.CRMActivity.contactstarting.value!="")
			{
				debug("Inside searchConact method  Last Name", LastName);
				debug("Inside searchConact method  First Name", FirstName);
				debug("Inside searchConact method  Email Address", EMailAddr);

				soapMsg = '<?xml version="1.0" encoding="utf-8"?>';


				soapMsg = soapMsg + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:asi="http://siebel.com/asi/" xmlns:ans="http://www.siebel.com/xml/ANS_WSContact" xmlns:web="http://siebel.com/webservices">';
				soapMsg = soapMsg + '   <soapenv:Header>';
				soapMsg = soapMsg + '      <web:PasswordText>sadmin17</web:PasswordText>';
				soapMsg = soapMsg + '      <web:UsernameToken>sadmin</web:UsernameToken>';
				soapMsg = soapMsg + '      <web:SessionType>stateless</web:SessionType>';
				soapMsg = soapMsg + '    </soapenv:Header>';
				soapMsg = soapMsg + '   <soapenv:Body>';
				soapMsg = soapMsg + '      <asi:ANSContactQueryByExampleASI>';
				soapMsg = soapMsg + '         <SiebelMessage>';
				soapMsg = soapMsg + '            <ans:ListOfAns_Wscontact>';
				soapMsg = soapMsg + '            <ans:Contact>';

				if (LastName != null)
				{
					soapMsg = soapMsg + '                  <ans:LastName>'+LastName+'</ans:LastName>';
				}	
				if (FirstName != null)
				{
					soapMsg = soapMsg + '                  <ans:FirstName>'+FirstName+'</ans:FirstName>';
				}
				if (EMailAddr != null)
				{
					soapMsg = soapMsg + '                  <ans:EmailAddress>'+EMailAddr+'</ans:EmailAddress>';
				}

				soapMsg = soapMsg + '            </ans:Contact>';
				soapMsg = soapMsg + '         </ans:ListOfAns_Wscontact>';
				soapMsg = soapMsg + '      </SiebelMessage>';
				soapMsg = soapMsg + '      </asi:ANSContactQueryByExampleASI>';

				soapMsg = soapMsg + '   </soapenv:Body>';
				soapMsg = soapMsg + '</soapenv:Envelope>';

				//alert("Before send to Siebel :"+ soapMsg);
				debug("Inside searchConact method  Before send soapData to siebel", soapMsg);
				var SOAPAction='rpc/http://siebel.com/asi/:ANSContactQueryByExampleASI';
				invokeSiebeWebservice(soapMsg,SOAPAction,'contactResponse');
			}
		else
			{
			document.getElementById('contactloading').innerHTML = '';
			document.getElementById('contactloading').style.display = 'none';
			document.getElementById('contactloading').style.visibility = 'invisible';
			}
		}
		
	}
catch (e)
{
debug("Inside searchConact method Exception",e);
}
	debug("Inside searchConact method End","");
}

function searchContactResult(searchContactResultObj){
debug("Inside searchContactResult method Begin","");
debug("Inside searchContactResult method Response Code",searchContactResultObj.rc);
debug("Inside searchContactResult method Response Error",searchContactResultObj.errors);
debug("Inside searchContactResult method Response Data",searchContactResultObj.data);
debug("Inside searchContactResult method Response Text",searchContactResultObj.text);
debug("Inside searchContactResult method Response authErrorText",searchContactResultObj.oauthErrorText);

var searchContactResultObjText = searchContactResultObj.text;
deleteAllRow("contactAvailable");
var table = document.getElementById("contactAvailable");
var text=searchContactResultObjText;
	
if (window.DOMParser)
{
	parser=new DOMParser();
	xmlDoc=parser.parseFromString(text,"text/xml");
}
else // Internet Explorer
{
	xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async="false";
	xmlDoc.loadXML(text); 
} 
try
{
	var contact = xmlDoc.getElementsByTagName('Contact');
	
	debug("Inside searchContactResult method contact length",contact.length);
	for(j=0;j<contact.length;j++)
	{
		var k=0;
		var rowCount = table.rows.length;
		debug("Inside searchContactResult method Table Row length",rowCount);
		var row = table.insertRow(rowCount);
		var contactId=xmlDoc.getElementsByTagName('ANSContactNumber');
		debug("Inside searchContactResult method J value",j);
		debug("Inside searchContactResult method Child Node Length value",contactId[j].childNodes.length);
		
			var cell1 = row.insertCell(k);
			var element1 = document.createElement("input");
			element1.type = "checkbox";
			element1.name = "ANSContactNumber";
			if(contactId[j].childNodes.length>0)
			{
			element1.value = contactId[j].childNodes[0].nodeValue;
			debug("Inside searchContactResult method ANSContactNumber",contactId[j].childNodes[0].nodeValue);
			}
			cell1.appendChild(element1);
			
			k++;
		
		var lstName=xmlDoc.getElementsByTagName('LastName');
		debug("Inside searchContactResult method LastName Node Length value",lstName[j].childNodes.length);
		if(lstName[j].childNodes.length>0)
		{
			var cell2 = row.insertCell(k);
			var lastName = document.createTextNode(lstName[j].childNodes[0].nodeValue);
			cell2.appendChild(lastName);
			cell2.innerHTML="<font face='Garamond'>"+lstName[j].childNodes[0].nodeValue+"</font>";
			var element2 = document.createElement("input");
			element2.type = "hidden";
			element2.name = "contactLastName";
			element2.value = lstName[j].childNodes[0].nodeValue;
			cell2.appendChild(element2);
			debug("Inside searchContactResult method LastName",lstName[j].childNodes[0].nodeValue);
			k++;
		}
		var fstName=xmlDoc.getElementsByTagName('FirstName');
		debug("Inside searchContactResult method FirstName Node Length value",fstName[j].childNodes.length);
		if(fstName[j].childNodes.length>0)
		{
			var cell3 = row.insertCell(k);
			var firstName = document.createTextNode(fstName[j].childNodes[0].nodeValue);
			//cell3.appendChild(firstName);
			cell3.innerHTML="<font face='Garamond'>"+fstName[j].childNodes[0].nodeValue+"</font>";
			var element3 = document.createElement("input");
			element3.type = "hidden";
			element3.name = "contactFirstName";
			element3.value = fstName[j].childNodes[0].nodeValue;
			cell3.appendChild(element3);
			debug("Inside searchContactResult method FirstName",fstName[j].childNodes[0].nodeValue);
			k++;
		}	
		var emailAddrss=xmlDoc.getElementsByTagName('EmailAddress');
		debug("Inside searchContactResult method emailAddrss Node Length value",emailAddrss[j].childNodes.length);
		if(emailAddrss[j].childNodes.length>0)
		{ 
			var cell4 = row.insertCell(k);
			var email = document.createTextNode(emailAddrss[j].childNodes[0].nodeValue);
			//cell4.appendChild(email);
			cell4.innerHTML="<font face='Garamond'>"+emailAddrss[j].childNodes[0].nodeValue+"</font>";
			var element4 = document.createElement("input");
			element4.type = "hidden";
			element4.name = "contactEmailAddr";
			element4.value = emailAddrss[j].childNodes[0].nodeValue;
			cell4.appendChild(element4);
			debug("Inside searchContactResult method EmailAddress",emailAddrss[j].childNodes[0].nodeValue);
			k++;
		}
	}
}
catch (e)
{
debug("Inside searchContactResult method Exception",e);
}
document.getElementById('contactloading').innerHTML = '';
document.getElementById('contactloading').style.display = 'none';
document.getElementById('contactloading').style.visibility = 'invisible';
debug("Inside searchContactResult method End","");
}    