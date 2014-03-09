sap.ui.controller("view.App", {


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/

	onInit: function() {
	   
	   // init history mgmt
	   jQuery.sap.require("jquery.sap.history");
	   jQuery.sap.history({
		   routes: [{ 
			   path : "page", handler : jQuery.proxy(this.historyPageHandler, this) 
		   }],
		   defaultHandler: jQuery.proxy(this.historyDefaultHandler, this)
	   });
		
	   // subscribe to event bus
	   var oEventBus = sap.ui.getCore().getEventBus();
	   oEventBus.subscribe("nav", "to", 	this.navToHandler, 		this);
	   oEventBus.subscribe("nav", "back", 	this.navBackHandler, 	this); 
	   	   
   },
   
   historyPageHandler : function(params, navType) {
	   if (params && params.id) {
		   this.navTo(params.id, false, navType, null);
	   } else {
		   jQuery.sap.log.error("invalid page parameter: " + params);
	   }
   },
   
   historyDefaultHandler : function(navType) {
	   this.navTo("Home", false, navType, null);
   },
   
   navToHandler : function(channelId, eventId, data) {
	   if (data && data.id) {
		   this.navTo(data.id, true, null, data.data);
	   } else {
		   jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
	   }
   },
	
   navBackHandler : function(channelId, eventId, data) {
	   jQuery.sap.history.back();
	   jQuery.sap.log.info("navBack");
   },
	
   navTo : function(id, writeHistory, navType, data) {
		
	   // check param
	   if (id === undefined) {
		   jQuery.sap.log.error("navTo failed due to missing id");
		   return;
	   }
		
	   // navigate on app
	   var app = this.getView().app;
	   if (navType === jQuery.sap.history.NavType.Back) {
		   if (sap.m.InstanceManager.hasOpenDialog()) {
			   sap.m.InstanceManager.closeAllDialogs();
		   } else {
			   app.backToPage(id);
		   }
	   } else {
		   // lazy load view
		   if (app.getPage(id) === null) {
			   jQuery.sap.log.info("now loading page '" + id + "'");
			   app.addPage(sap.ui.jsview(id, "view." + id));
		   } 
		   app.to(id, data);
	   }
		
	   // write history
	   if (writeHistory === undefined || writeHistory) {
		   jQuery.sap.history.addHistory("page", {id: id}, false);
	   }
		
	   // log
	   jQuery.sap.log.info("navTo '" + id + "' (" + writeHistory + "," + navType + ")");
   }

});