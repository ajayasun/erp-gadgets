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


				soapMsg = soapMsg + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cus="http://siebel.com/CustomUI" xmlns:quer="http://www.siebel.com/xml/ANS_WSContact/Query" xmlns:web="http://siebel.com/webservices">';
				soapMsg = soapMsg + '   <soapenv:Header>';
				soapMsg = soapMsg + '      <web:PasswordText>sadmin17</web:PasswordText>';
				soapMsg = soapMsg + '      <web:UsernameToken>sadmin</web:UsernameToken>';
				soapMsg = soapMsg + '      <web:SessionType>stateless</web:SessionType>';
				soapMsg = soapMsg + '    </soapenv:Header>';
				soapMsg = soapMsg + '   <soapenv:Body>';
				soapMsg = soapMsg + '      <cus:ANSQueryPageCustomUI>';
				soapMsg = soapMsg + '         <SiebelMessageIn>';
				soapMsg = soapMsg + '            <quer:ListOfAns_Wscontact>';
				soapMsg = soapMsg + '            <quer:Contact>';
				soapMsg = soapMsg + '<quer:ANSContactNumber></quer:ANSContactNumber>';


				if (LastName != null)
				{
					soapMsg = soapMsg + '                  <quer:LastName>LIKE \''+LastName+ '\'</quer:LastName>';
				}	
				else
				{
					soapMsg = soapMsg + '                  <quer:LastName></quer:LastName>';
				}
				if (FirstName != null)
				{
					soapMsg = soapMsg + '                  <quer:FirstName>LIKE \''+FirstName+ '\'</quer:FirstName>';
				}
				else
				{
					soapMsg = soapMsg + '                  <quer:FirstName></quer:FirstName>';
				}
				if (EMailAddr != null)
				{
					soapMsg = soapMsg + '                  <quer:EmailAddress>'+EMailAddr+'</quer:EmailAddress>';
				}
				else
				{
					soapMsg = soapMsg + '                  <quer:EmailAddress></quer:EmailAddress>';
				}
				soapMsg = soapMsg + '            </quer:Contact>';
				soapMsg = soapMsg + '         </quer:ListOfAns_Wscontact>';
				soapMsg = soapMsg + '      </SiebelMessageIn>';
				soapMsg = soapMsg + ' <LOVLanguageMode>LDC</LOVLanguageMode>';
				soapMsg = soapMsg + ' <ViewMode>All</ViewMode>';

				soapMsg = soapMsg + '      </cus:ANSQueryPageCustomUI>';

				soapMsg = soapMsg + '   </soapenv:Body>';
				soapMsg = soapMsg + '</soapenv:Envelope>';

				//alert("Before send to Siebel :"+ soapMsg);
				debug("Inside searchConact method  Before send soapData to siebel", soapMsg);
				var SOAPAction='rpc/http://siebel.com/CustomUI:ANSQueryPageCustomUI';
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
if(searchContactResultObj.rc=="200")
{
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
		
		var cell1 = document.createElement("td");
		cell1.width="10%";
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name = "ANSContactNumber";
		if(contactId[j].childNodes.length>0)
		{
			element1.value = contactId[j].childNodes[0].nodeValue;
			debug("Inside searchContactResult method ANSContactNumber",contactId[j].childNodes[0].nodeValue);
		}
		cell1.appendChild(element1);
		row.appendChild(cell1);
		k++;
		
		var lstName=xmlDoc.getElementsByTagName('LastName');
		debug("Inside searchContactResult method LastName Node Length value",lstName[j].childNodes.length);
		var lastName;
		var cell2 = document.createElement("td");
		cell2.style.width="22%";
		cell2.className="wrapText";
		if(lstName[j].childNodes.length>0)
		{
			cell2.innerHTML="<font face='Garamond'>"+lstName[j].childNodes[0].nodeValue+"</font>";
			//cell2.innerHTML=lastName;
			
			debug("Inside searchContactResult method LastName",lstName[j].childNodes[0].nodeValue);
		}
		else
		{
		cell2.innerHTML="<font face='Garamond'>&nbsp;</font>";
		}
		row.appendChild(cell2);
		var element2 = document.createElement("input");
		element2.type = "hidden";
		element2.name = "contactLastName";
		if(lstName[j].childNodes.length>0)
		{
			element2.value = lstName[j].childNodes[0].nodeValue;
		}
		cell2.appendChild(element2);
		row.appendChild(cell2);
		k++;
		
		var fstName=xmlDoc.getElementsByTagName('FirstName');
		debug("Inside searchContactResult method FirstName Node Length value",fstName[j].childNodes.length);
		var firstName;
		var cell3 = document.createElement("td");
		cell3.style.width="24%";
		cell3.className="wrapText";
		if(fstName[j].childNodes.length>0)
		{
			cell3.innerHTML="<font face='Garamond'>"+fstName[j].childNodes[0].nodeValue+"</font>";
			
			debug("Inside searchContactResult method FirstName",fstName[j].childNodes[0].nodeValue);
		}
		else
		{
		cell3.innerHTML="<font face='Garamond'>&nbsp;</font>";
		}
		row.appendChild(cell3);
		var element3 = document.createElement("input");
		element3.type = "hidden";
		element3.name = "contactFirstName";
		if(fstName[j].childNodes.length>0)
		{
			element3.value = fstName[j].childNodes[0].nodeValue;
		}
		cell3.appendChild(element3);
		row.appendChild(cell3);
		k++;
		var emailAddrss=xmlDoc.getElementsByTagName('EmailAddress');
		debug("Inside searchContactResult method emailAddrss Node Length value",emailAddrss[j].childNodes.length);
		
		var cell4 = document.createElement("td");
		cell4.style.width="42%";
		cell4.className="wrapText";
		if(emailAddrss[j].childNodes.length>0)
		{ 
			cell4.innerHTML="<font face='Garamond'>"+emailAddrss[j].childNodes[0].nodeValue+"</font>";
			
			debug("Inside searchContactResult method EmailAddress",emailAddrss[j].childNodes[0].nodeValue);
		}
		else
			{
			cell4.innerHTML="<font face='Garamond'>&nbsp;</font>";
			}
		row.appendChild(cell4);
		var element4 = document.createElement("input");
		element4.type = "hidden";
		element4.name = "contactEmailAddr";
		if(emailAddrss[j].childNodes.length>0)
		{ 
			element4.value = emailAddrss[j].childNodes[0].nodeValue;
		}
		cell4.appendChild(element4);
		row.appendChild(cell4);
		k++;
	}
}
catch (e)
{
debug("Inside searchContactResult method Exception",e);
}
}
else
	{
	debug("Inside searchContactResult method Contact Query Failure");
	if(searchContactResultObj.text==null||searchContactResultObj.text=="")
		{
	debug("Inside searchContactResult method Contact Query Failure with empty text");
	document.getElementById('Contact_div').innerHTML = 'Error contacting the server. Please contact your System administrator for support.';
		}
	else
		{
		document.getElementById('Contact_div').innerHTML = 'Contact Query Failure : '+searchContactResultObj.text;
		}
	}
document.getElementById('contactloading').innerHTML = '';
document.getElementById('contactloading').style.display = 'none';
document.getElementById('contactloading').style.visibility = 'invisible';
debug("Inside searchContactResult method End","");
}
