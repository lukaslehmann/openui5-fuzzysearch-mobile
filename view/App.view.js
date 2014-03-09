sap.ui.jsview("view.App", {

      getControllerName : function() {
         return "view.App";
      },

      createContent : function(oController) {
    	  
    	// add first pages (the rest is lazy loaded)
  		this.app = new sap.m.App();
	
		this.app.addPage( sap.ui.jsview("Home", "view.Home") );  		
		return this.app;
		
      }
});