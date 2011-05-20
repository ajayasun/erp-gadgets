function dateTimePick(dateField)
{
gadgets.window.adjustHeight(400);
NewCssCal(dateField,'MMddyyyy','dropdown',true,'12',true)
}
function minimize()
{
alert("inside minimize");
gadgets.window.adjustHeight(300);
}

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
		debug("Inside invokeSiebeWebservice method SOAP URL",soapURL);
		if(soapResponse=="contactResponse")
			gadgets.io.makeRequest(soapURL, searchContactResult, SOAPparams);
		if(soapResponse=="employeeResponse")
			gadgets.io.makeRequest(soapURL, searchEmployeeResult, SOAPparams);
		if(soapResponse=="activityResponse")
			gadgets.io.makeRequest(soapURL, createActivityResult, SOAPparams);
		if(soapResponse=="employeeLogin")
			gadgets.io.makeRequest(soapURL, employeeLogin, SOAPparams);
		if(soapResponse=="getemployeeResponse")
			gadgets.io.makeRequest(soapURL, getEmployeeResult, SOAPparams);
		if(soapResponse=="getcontactResponse")
			gadgets.io.makeRequest(soapURL, getContactResult, SOAPparams);
debug("Inside invokeSiebeWebservice method End","");
}
function debug(textName,textValue)
{
	if(document.getElementById('debug').value=="Debug On")
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
        for(var i=0; i<rowCount; i++) 
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
	var selIdx = document.getElementById('classval').selectedIndex;
	var classValue = document.getElementById('classval').options[selIdx].text;
	document.getElementById('Status').selectedIndex=0;
	debug("Inside assignClass method classValue",classValue);
	if(classValue!='Generic')
		{
		debug("Inside assignClass method inside if classValue",classValue);
		if(classValue=="Opportunity")
			{
		document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>Opportunity ID &nbsp;:&nbsp; <input type='text' name='classSelected' id='classSelected' size='18'></font></strong>";
		//document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>Opportunity ID &nbsp;:&nbsp; <input type='text' name='classSelected' id='classSelected' size='15' class='fontRel'></font></strong>";
		document.getElementById('classSelected').value=document.getElementById('OppId').value;
		document.getElementById('Status').selectedIndex=0;
		document.getElementById('timeSpentValue').innerHTML = "";
		document.getElementById('externalFlag').innerHTML = "";
		gadgets.window.adjustHeight(320);
			}
		else 
			{
			if(classValue=="Service Request")
			{
				gadgets.window.adjustHeight(320);
		document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>Service Request :&nbsp; <input type='text' name='classSelected' id='classSelected' size='18'></font></strong>";
		document.getElementById('timeSpentValue').innerHTML = "<strong><font face='Garamond'>Time Spent(Hr) :&nbsp; <input type='text' name='timeSpent' id='timeSpent' size='18'></font></strong>";
		document.getElementById('externalFlag').innerHTML = "<strong><font face='Garamond'>External &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; <input type='checkbox' name='extFlag' id='extFlag' size='18'></font></strong>";
		/*document.getElementById('classValue').innerHTML = "<strong><font face='Garamond'>Service Request :&nbsp; <input type='text' name='classSelected' id='classSelected' size='15' class='fontRel'></font></strong>";
		document.getElementById('timeSpentValue').innerHTML = "<strong><font face='Garamond'>Time Spent(Hr) : <input type='text' name='timeSpent' id='timeSpent' size='14' class='fontRel'></font></strong>";
		document.getElementById('externalFlag').innerHTML = "<strong><font face='Garamond'>External &nbsp; : <input type='checkbox' name='extFlag' id='extFlag' size='18' class='fontRel'></font></strong>";*/
		document.getElementById('classSelected').value=document.getElementById('ServiceRST').value;
		document.getElementById('Status').selectedIndex=3;
			}
			}
		}
	else
		{
		debug("Inside assignClass method inside else classValue",classValue);
		document.getElementById('classValue').innerHTML = "";
		document.getElementById('timeSpentValue').innerHTML = "";
		document.getElementById('externalFlag').innerHTML = "";
		document.getElementById('classSelected').value="";
		document.getElementById('Status').selectedIndex=0;
		gadgets.window.adjustHeight(300);
		}
	debug("Inside assignClass method End","");
}
function On_submit()
{
	debug("Inside On_submit method Begin","");
	if(document.getElementById('classSelected').value==null||document.getElementById('classSelected').value=="")
		{
		if(document.getElementById('classval').value=="Opportunity")
			{
			alert("Please enter a valid Opportunity Identifiier.");
			}
		else if(document.getElementById('classval').value=="Service Request")
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
	document.getElementById('timeSpentValue').innerHTML = "";
	document.getElementById('owner').value=prefs.getString("LoginName");
	document.getElementById('content_div').innerHTML = '';
	document.getElementById('startdatepicker').value=getDate();
	debug("Inside clearFields method Login Name",document.getElementById('owner').value);
	debug("Inside clearFields method End","");
}
function getUTCDateFormat(dateString)
{
	var offset ="-4";
	var currentTime = new Date(dateString);
	/*var month = currentTime.getUTCMonth()+1;
	var day = currentTime.getUTCDate();
	var year = currentTime.getUTCFullYear();
	var currentHours = currentTime.getUTCHours ( );
	var currentMinutes = currentTime.getUTCMinutes ( );
	var currentSeconds = currentTime.getUTCSeconds ( );
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	month = ( month < 10 ? "0" : "" ) + month;
	day = ( day < 10 ? "0" : "" ) + day;
	var currentUTCTimeString = month+"/"+day+"/"+year+" "+currentHours + ":" + currentMinutes + ":" + currentSeconds ;
	return currentUTCTimeString;*/
	utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
	   
    // create new Date object for different city
    // using supplied offset
    var changedTime = new Date(utc + (3600000*offset));
   
 var month = changedTime.getMonth()+1;
var day = changedTime.getDate();
var year = changedTime.getFullYear();
var hours = changedTime.getHours();
var minutes = changedTime.getMinutes();
var seconds = changedTime.getSeconds();
minutes = ( minutes < 10 ? "0" : "" ) + minutes;
seconds = ( seconds < 10 ? "0" : "" ) + seconds;
hours = ( hours < 10 ? "0" : "" ) + hours;
month = ( month < 10 ? "0" : "" ) + month;
day = ( day < 10 ? "0" : "" ) + day;

var changedTimeString=month + "/" + day + "/" + year+" "+hours+":"+minutes+ ":" +seconds;
return changedTimeString;
/*var currentUTCTimeString = month+"/"+day+"/"+year+" "+currentHours + ":" + currentMinutes + ":" + currentSeconds ;*/
	
}
function getDate()
{
	var currentTime = new Date()
	var month = currentTime.getMonth()+1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	month = ( month < 10 ? "0" : "" ) + month;
	var currentTimeString = month+"/"+day+"/"+year+" "+currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	return currentTimeString;
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

		 // alert("emailString :"+emailString);

		 // alert("emailString :"+emailString);

		//  document.CRMActivity.owner.value = ret.text;
	//alert("value :"+document.CRMActivity.owner.value);*/

				var soapMsg;
				soapMsg = '<?xml version="1.0" encoding="utf-8"?>';

				soapMsg = soapMsg + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cus="http://siebel.com/CustomUI" xmlns:quer="http://www.siebel.com/xml/ANS_WSEmployee/Query" xmlns:web="http://siebel.com/webservices">';
				soapMsg = soapMsg + '<soapenv:Header><web:PasswordText>innoveer09</web:PasswordText><web:UsernameToken>SOAUSER</web:UsernameToken><web:SessionType>stateless</web:SessionType></soapenv:Header>';
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
	//alert("text"+text);
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
		if(emp.length>0)
		{

		for(j=0;j<emp.length;j++)
		{
			var empId=xmlDoc.getElementsByTagName('LoginName');
			
			if(empId[j].childNodes.length>0)
			{
			document.CRMActivity.owner.value = empId[j].childNodes[0].nodeValue;
			 day = currentTime.getDate()+1;
			 sessionTime=month + "/" + day + "/" + year+":"+hours+":"+minutes;
			// alert("sessionTime"+sessionTime);
			 prefs.set("LoginExpire",sessionTime);
			 prefs.set("LoginName",empId[j].childNodes[0].nodeValue);
			 getEmployee();
				getConact();

			// alert("Login Name :"+prefs.getString("LoginName"));
			 //alert("Session Expire"+prefs.getString("LoginExpire"));
			//alert("Inside searchEmployeeResult method Employee Login name"+empId[j].childNodes[0].nodeValue);

			// alert("Login Name :"+prefs.getString("LoginName"));
			// alert("Session Expire"+prefs.getString("LoginExpire"));
			//alert("Inside searchEmployeeResult method Employee Login name"+empId[j].childNodes[0].nodeValue);

			$(".debugVal").show('fast');
			$(".msg_list").show('fast');
			gadgets.window.adjustHeight(60);
			}
			else
				{
				//alert("inside else cond");
				hours = currentTime.getHours()+4;
				if(hours>24)
				{
				hours=hours-24;
				day = currentTime.getDate()+1;
				}
				sessionTime=month + "/" + day + "/" + year+":"+hours+":"+minutes;
				//alert("inside else cond sessionTime :"+sessionTime);
				prefs.set("LoginExpire",sessionTime);
				//alert("Session Expire"+prefs.getString("LoginExpire"));
				}
		}
		}
		else
		{
		//alert("inside else cond");
				hours = currentTime.getHours()+4;
				if(hours>24)
				{
				hours=hours-24;
				day = currentTime.getDate()+1;
				}
				sessionTime=month + "/" + day + "/" + year+":"+hours+":"+minutes;
				//alert("inside else cond sessionTime :"+sessionTime);
				prefs.set("LoginExpire",sessionTime);
				//alert("Session Expire"+prefs.getString("LoginExpire"));
		}
			
	}
	}
function emailLoginrequest() {
	/*alert("inside login request");
	alert("inside login request Login Name :"+prefs.getString("LoginName"));
	alert("inside login request Session Expire time :"+prefs.getString("LoginExpire"));
	alert("inside login request System Time:"+sessionTime);*/
	var str1=prefs.getString("LoginExpire");
	var str2=sessionTime;
	var monthval=str1.substring(0,str1.indexOf("/"));
	//alert("monthval"+monthval);
	str1=str1.substring(str1.indexOf("/")+1)
	//alert("str1"+str1);
	var dateval=str1.substring(0,str1.indexOf("/"));
		//alert("dateval"+dateval);
		
	str1=str1.substring(str1.indexOf("/")+1)
	//alert("str1"+str1);
	var yearval=str1.substring(0,str1.indexOf(":"));
		//alert("yearval"+yearval);
		
	str1=str1.substring(str1.indexOf(":")+1)
	//alert("str1"+str1);
	var hourval=str1.substring(0,str1.indexOf(":"));
		//alert("hourval"+hourval);
	str1=str1.substring(str1.indexOf(":")+1)
	//alert("str1"+str1);
	var minuteval=str1.substring(0);
		//alert("minuteval"+minuteval);

			var monthval1=str2.substring(0,str2.indexOf("/"));
	//alert("monthval"+monthval1);
	str2=str2.substring(str2.indexOf("/")+1)
	//alert("str2"+str2);
	var dateval1=str2.substring(0,str2.indexOf("/"));
		//alert("dateval"+dateval1);
		
	str2=str2.substring(str2.indexOf("/")+1)
	//alert("str2"+str2);
	var yearval1=str2.substring(0,str2.indexOf(":"));
		//alert("yearval"+yearval1);
		
	str2=str2.substring(str2.indexOf(":")+1)
	//alert("str2"+str2);
	var hourval1=str2.substring(0,str2.indexOf(":"));
		//alert("hourval"+hourval1);
	str2=str2.substring(str2.indexOf(":")+1)
	//alert("str2"+str2);
	var minuteval1=str2.substring(0);
		//alert("minuteval"+minuteval1);

    var date1 = new Date(yearval, monthval, dateval,hourval,minuteval);
    var date2 = new Date(yearval1, monthval1, dateval1,hourval1,minuteval1);
//alert("date1:"+date1);
//alert("date2:"+date2);
	    	  if(date2>date1||prefs.getString("LoginExpire")==null||prefs.getString("LoginExpire")=="")
	    		  {
    		//  alert("inside login request if condition System Time:"+sessionTime);

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
	    		//  alert("inside login request else condition System Time:"+sessionTime);
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
					//  alert("inside login request else condition Loginname:"+prefs.getString("LoginName"));
	    		 if(prefs.getString("LoginName")==null||prefs.getString("LoginName")=="")
	    				  {}
						  else
						  {
						 // alert("inside login request else if condition Loginname:"+prefs.getString("LoginName"));
	    		  getEmployee();
					getConact();
	    		  document.getElementById('owner').value=prefs.getString("LoginName");
		    		  	gadgets.window.adjustHeight(60);
	    			  }
	    				  //}
	    		  }
	      };
function limitText(limitField, limitNum)
{
   if (limitField.value.length > limitNum) 
   {
       limitField.value = limitField.value.substring(0, limitNum);
   } 
}