function getSiebelDataSDC() {
	  var params = {};
	  params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
	  var url = "http://code.google.com/securedataconnector/docs/tutorials/contacts.csv";
	  gadgets.io.makeRequest(url, function(response){popuplog(response);}, params);
	}
function popuplog(m) {
	  if (m && m.data) {
	    alert(m.data);
	  } else {
	    alert(m);
	  }
	};
