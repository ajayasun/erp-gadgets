function getSiebelDataSDC() {
	  var params = {};
	  params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
	  var url = "http://gadget-doc-examples.googlecode.com/svn/trunk/opensocial-gadgets/Contacts.csv";
	  gadgets.io.makeRequest(url, function(response){popuplog(response);}, params);
	}
function popuplog(m) {
	  if (m && m.data) {
	    alert(m.data);
	  } else {
	    alert(m);
	  }
	};
