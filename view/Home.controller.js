sap.ui.controller("view.Home", {

	/* ------------------------------------------------------------------------------------ */
    /*	Global Data
    /* ------------------------------------------------------------------------------------ */
	getViewName: function(){
		return 'Home';

	},

	
	/* ------------------------------------------------------------------------------------ */
    /*	Events
    /* ------------------------------------------------------------------------------------ */
	onSearch: function(oControlEvent){
		var strSearchTerm = sap.ui.getCore().byId("id-searchfield").getValue();

		var url = "http://hdb-backend.cloud-test2-public.swisslab.io/search?name=";//document.getElementsByTagName("body")[0].getAttribute("data-url") + '/search?name=';  

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48225318-2', 'swisslab.io');
  ga('send', 'pageview');


		//prepare ajax request url with parameter name
		ajax_url = url + strSearchTerm;
		//ajax request on /search?name=<search term>
		$.ajax({
			url: ajax_url,  
			dataType: "json",
			success: function(data, textStatus, jqXHR) { 
				resp_data = data;
				oModel.setData(resp_data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error");
			}
		});	
	},
		
		
	/* --------------------------------------------------------------------------------------- */
	/*	Process
	/* --------------------------------------------------------------------------------------- */	

});