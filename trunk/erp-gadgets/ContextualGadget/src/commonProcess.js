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
	if(document.CRMActivity.debug.checked)
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
		document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>"+classValue+" : <input type='text' name='classSelected' size='18'></font></strong>";
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
	if(document.CRMActivity.classSelected.value==null||document.CRMActivity.classSelected.value=="")
		{
		alert("Please Enter "+document.CRMActivity.classval.value+" Value");
		return false;
		}
	else
		return true;
}
function emailLoginResponse(emailRespObj) {
	 var emailString=emailRespObj.text;
		/*  alert("text :"+emailRespObj.text);
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
			//prefs.set("LoginName", empId[j].childNodes[0].nodeValue);
			alert("After Setting"+prefs.getString("LoginName"));
			
			//alert("Inside searchEmployeeResult method Employee Login name"+empId[j].childNodes[0].nodeValue);
			$(".debugVal").show('fast');
			$(".msg_list").show('fast');
			gadgets.window.adjustHeight(60);
			}
		}
			
	}
	}
	      function emailLoginrequest() {
	    	 
	    	  
	    	 // alert("default:"+prefs.getString("LoginName"));
	    	  if(prefs.getString("LoginName")!="")
	    		  {
	    		  document.CRMActivity.owner.value = prefs.getString("LoginName");
	    		  }
	    	  else
	    		  {
	    		  alert("inside else");
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
	      };