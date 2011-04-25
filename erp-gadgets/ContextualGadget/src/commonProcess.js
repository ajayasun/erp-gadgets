function invokeSiebeWebservice(soapData,soapAction,soapResponse)
{
debug("Inside invokeSiebeWebservice method begin","");
debug("Inside invokeSiebeWebservice method soapData",soapData);
debug("Inside invokeSiebeWebservice method soapAction",soapAction);
debug("Inside invokeSiebeWebservice method soapResponse",soapResponse);
var SOAPparams = {};
		SOAPparams[gadgets.io.RequestParameters.AUTHORIZATION] = 'SIGNED';
		SOAPparams['OAUTH_ADD_EMAIL'] = 'true';
		SOAPparams['OAUTH_ENABLE_PRIVATE_NETWORK'] = 'true';
		SOAPparams[gadgets.io.RequestParameters.METHOD]=gadgets.io.MethodType.POST;
		SOAPparams[gadgets.io.RequestParameters.HEADERS]={"Content-Type" : "'text/xml;charset=UTF-8'","SOAPAction" :"'" +soapAction+"'"};
		SOAPparams[gadgets.io.RequestParameters.POST_DATA]=soapData;
		if(soapResponse=="contactResponse")
			gadgets.io.makeRequest(soapURL, searchContactResult, SOAPparams);
		if(soapResponse=="employeeResponse")
			gadgets.io.makeRequest(soapURL, searchEmployeeResult, SOAPparams);
		if(soapResponse=="activityResponse")
			gadgets.io.makeRequest(soapURL, createActivityResult, SOAPparams);
		if(soapResponse=="employeeLogin")
			gadgets.io.makeRequest(soapURL, employeeLogin, SOAPparams);

debug("Inside invokeSiebeWebservice method End","");
}
function debug(textName,textValue)
{
	if(document.CRMActivity.debug.value=="Debug On")
	{
		alert(textName+" : "+textValue);
	}
}
function deleteRow(tableID) 
{
	debug("Inside deleteRow method Begin","");
    try 
	{
		debug("Inside deleteRow method Table Name",tableID);
		var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
		debug("Inside deleteRow method Table Length",rowCount);
        for(var i=0; i<rowCount; i++) 
		{
			var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) 
			{
				table.deleteRow(i);
                rowCount--;
                i--;
				
            }
        }
    }catch(e) 
	{
		debug("Inside deleteRow method Exception",e);
    }
	debug("Inside deleteRow method End","");
}
function deleteAllRow(tableID) 
{
	debug("Inside deleteAllRow method Begin","");
    try 
	{
		debug("Inside deleteAllRow method Table Name",tableID);
		var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
		debug("Inside deleteAllRow method Table Length",rowCount);
        for(var i=1; i<rowCount; i++) 
		{
			var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            table.deleteRow(i);
            rowCount--;
            i--;
		}
    }catch(e) 
	{
		debug("Inside deleteAllRow method Exception",e);
    }
	debug("Inside deleteAllRow method End","");
}
function assignClass()
{
	debug("Inside assignClass method Begin","");
	var selIdx = document.CRMActivity.classval.selectedIndex;
	var classValue = document.CRMActivity.classval.options[selIdx].text;
	debug("Inside assignClass method classValue",classValue);
	if(classValue!='Generic')
		{
		debug("Inside assignClass method inside if classValue",classValue);
		if(classValue=="Opportunity")
			{
		document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>"+classValue+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type='text' name='classSelected' size='18'></font></strong>";
			}
		else 
			{
			if(classValue=="Service Request")
			{
		document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>"+classValue+" :&nbsp; <input type='text' name='classSelected' size='18'></font></strong>";
			}
			}
		}
	else
		{
		debug("Inside assignClass method inside else classValue",classValue);
		document.getElementById('classValue').innerHTML = "";
		}
	debug("Inside assignClass method End","");
}
function On_submit()
{
	debug("Inside On_submit method Begin","");
	if(document.CRMActivity.classSelected.value==null||document.CRMActivity.classSelected.value=="")
		{
		if(document.CRMActivity.classval.value=="Opportunity")
			{
			alert("Please enter a valid Opportunity Identifiier.");
			}
		else if(document.CRMActivity.classval.value=="Service Request")
			{
			alert("Please enter a valid Service Request number.");
			}
		return false;
		}
	else
		return true;
	debug("Inside On_submit method End","");
}
function clearFields()
{
	debug("Inside clearFields method Begin","");
	document.CRMActivity.reset();
	document.getElementById('classValue').innerHTML = "";
	document.CRMActivity.owner.value=prefs.getString("LoginName");
	debug("Inside clearFields method Login Name",document.CRMActivity.owner.value);
	debug("Inside clearFields method End","");
}
function emailLoginResponse(emailRespObj) {
	debug("Inside emailLoginResponse method Begin","");
	 var emailString=emailRespObj.text;
		 /* alert("text :"+emailRespObj.text);
		  alert("Response Code :"+emailRespObj.rc);
		  alert("Data :"+emailRespObj.data);
		  alert("Error :"+emailRespObj.errors);*/
	 
		  var text=emailRespObj;
		  if(emailRespObj.rc=="200")
		  {
		  emailString = emailString.substring(emailString.indexOf("/>")+2,emailString.indexOf("</"));
		 /* alert("emailString :"+emailString);
		//  document.CRMActivity.owner.value = ret.text;
	//alert("value :"+document.CRMActivity.owner.value);*/

				var soapMsg;
				soapMsg = '<?xml version="1.0" encoding="utf-8"?>';

				soapMsg = soapMsg + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cus="http://siebel.com/CustomUI" xmlns:quer="http://www.siebel.com/xml/ANS_WSEmployee/Query" xmlns:web="http://siebel.com/webservices">';
				soapMsg = soapMsg + '<soapenv:Header><web:PasswordText>sadmin17</web:PasswordText><web:UsernameToken>sadmin</web:UsernameToken><web:SessionType>stateless</web:SessionType></soapenv:Header>';
				soapMsg = soapMsg + '   <soapenv:Body>';
				soapMsg = soapMsg + '      <cus:QueryEmployee>';
				soapMsg = soapMsg + '         <SiebelMessageIn>';
				soapMsg = soapMsg + '            <quer:ListOfAns_Wsemployee pagesize="100" startrownum="0" recordcountneeded="true">';
				soapMsg = soapMsg + '               <quer:Employee>';

				soapMsg = soapMsg + '                  <quer:LastName></quer:LastName>';
				soapMsg = soapMsg + '                  <quer:FirstName></quer:FirstName>';
				soapMsg = soapMsg + '                  <quer:EMailAddr>LIKE \''+emailString+ '\'</quer:EMailAddr>';
				
				soapMsg = soapMsg + '                  <quer:Id/>';
				soapMsg = soapMsg + '                  <quer:LoginName/>';
				soapMsg = soapMsg + '               </quer:Employee>';
				soapMsg = soapMsg + '            </quer:ListOfAns_Wsemployee>';
				soapMsg = soapMsg + '         </SiebelMessageIn>';
				soapMsg = soapMsg + '         <LOVLanguageMode>LDC</LOVLanguageMode>';
				soapMsg = soapMsg + '         <ViewMode>All</ViewMode>';
				soapMsg = soapMsg + '      </cus:QueryEmployee>';
				soapMsg = soapMsg + '   </soapenv:Body>';
				soapMsg = soapMsg + '</soapenv:Envelope>';

				//alert("inside response success :"+soapMsg);
				var SOAPAction='rpc/http://siebel.com/CustomUI:QueryEmployee';
				invokeSiebeWebservice(soapMsg,SOAPAction,'employeeLogin');

		  }

	      };
	 function employeeLogin(EmployeeLoginObj){
	/*alert("Inside employeeLogin method Begin","");
	alert("Inside employeeLogin method Employee Response Code"+EmployeeLoginObj.rc);
	alert("Inside employeeLogin method Employee Response Error"+EmployeeLoginObj.errors);
	alert("Inside employeeLogin method Employee Response Data"+EmployeeLoginObj.data);
	alert("Inside employeeLogin method Employee Response Text"+EmployeeLoginObj.text);
	alert("Inside employeeLogin method Employee Response authErrorText"+EmployeeLoginObj.oauthErrorText);*/

		
	var text=EmployeeLoginObj.text;
	if(EmployeeLoginObj.rc=="200")
	{
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

		var emp = xmlDoc.getElementsByTagName('Employee');
		//alert("Inside searchEmployeeResult method Employee Length"+emp.length);
		for(j=0;j<emp.length;j++)
		{
			var empId=xmlDoc.getElementsByTagName('LoginName');
			
			if(empId[j].childNodes.length>0)
			{
			document.CRMActivity.owner.value = empId[j].childNodes[0].nodeValue;
			 prefs.set("LoginName",empId[j].childNodes[0].nodeValue);
			 day = currentTime.getDate()+1;
			 sessionTime=month + "/" + day + "/" + year+":"+hours+":"+minutes;
			 prefs.set("sessionExpire",sessionTime);
			 //alert("Login Name :"+prefs.getString("LoginName"));
			// alert("Session Expire"+prefs.getString("sessionExpire"));
			//alert("Inside searchEmployeeResult method Employee Login name"+empId[j].childNodes[0].nodeValue);
			$(".debugVal").show('fast');
			$(".msg_list").show('fast');
			gadgets.window.adjustHeight(60);
			}
		}
			
	}
	}
function emailLoginrequest() {
	//alert("inside login request");
	//alert("inside login request Login Name :"+prefs.getString("LoginName"));
	//alert("inside login request Session Expire time :"+prefs.getString("sessionExpire"));
	//alert("inside login request System Time:"+sessionTime);

	    	  if(prefs.getString("LoginName")==null||prefs.getString("LoginName")=="")
	    		  {
	    		 // alert("inside login request if condition System Time:"+sessionTime);
	    		  	$(".debugVal").hide('fast');
	    		  	$(".msg_list").hide('fast');
	    		  	gadgets.window.adjustHeight(0);
	    		  	//alert("inside request method");
	    		  	var params = {};
	    		  	params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
	    		  	params['AUTHORIZATION'] = 'SIGNED';
	    		  	params['OAUTH_ADD_EMAIL'] = 'true';
	    		  	params['OAUTH_ENABLE_PRIVATE_NETWORK'] = 'true';
	    		  	gadgets.io.makeRequest(url,emailLoginResponse,params);
	    		  }
	    	  else
	    		  {
	    		 // alert("inside login request else condition System Time:"+sessionTime);
	    		 /* if(sessionTime==prefs.getString("sessionExpire")||prefs.getString("sessionExpire")==null||prefs.getString("sessionExpire")=="")
	    			  {
	    			  $(".debugVal").hide('fast');
		    		  	$(".msg_list").hide('fast');
		    		  	gadgets.window.adjustHeight(0);
		    		  	//alert("inside request method");
		    		  	var params = {};
		    		  	params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
		    		  	params['AUTHORIZATION'] = 'SIGNED';
		    		  	params['OAUTH_ADD_EMAIL'] = 'true';
		    		  	params['OAUTH_ENABLE_PRIVATE_NETWORK'] = 'true';
		    		  	gadgets.io.makeRequest(url,emailLoginResponse,params);
	    			  }
	    		  else
	    			  {*/
	    			  document.CRMActivity.owner.value=prefs.getString("LoginName");
		    		  	gadgets.window.adjustHeight(60);
	    			 // }
	    		  	
	    		  }
	      };