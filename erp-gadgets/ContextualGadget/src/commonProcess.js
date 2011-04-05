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