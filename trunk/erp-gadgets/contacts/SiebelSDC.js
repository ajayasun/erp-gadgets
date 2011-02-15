<script type="text/javascript">
function getData() {
	  var params = {};
	  params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
	  var url = "http://code.google.com/securedataconnector/docs/tutorials/contacts.csv";
	  gadgets.io.makeRequest(url, function(response){log(response);}, params);
	}
function log(m) {
	  if (m && m.data) {
	    alert(m.data);
	  } else {
	    alert(m);
	  }
	};
</script>
