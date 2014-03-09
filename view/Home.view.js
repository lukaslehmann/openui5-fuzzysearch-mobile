sap.ui.jsview("view.Home", {

	getControllerName : function() {
		return "view.Home";
	},
	
	createContent : function(oController) {		
		// Create table
		var oTable = new sap.m.Table({
	      columns: [
	        new sap.m.Column({
		        header: new sap.m.Label({text: "Score"}),
                minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: false
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "Customer nr."}),
                minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: true,
	            popinDisplay: "Inline"	          	          
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "Company Name"}),
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "Last Name"}),
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "First Name"}),
              minScreenWidth: sap.m.ScreenSize.Desktop,
              demandPopin: true,
	          popinDisplay: "Inline"	  	          
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "Address"}),
                minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: false	          
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "ZIP"}),
                minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: false	          
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "City"}),
	            minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: true,
	            popinDisplay: "Inline"	  
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "Country"}),
                minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: false	          
	        }),
	        new sap.m.Column({
	          header: new sap.m.Label({text: "E-Mail"}),
	            minScreenWidth: sap.m.ScreenSize.Desktop,
                demandPopin: true,
	            popinDisplay: "Inline"	  
	        }),
	      ],
	      items: {
	      	path: "/",
	        template: new sap.m.ColumnListItem({
	          cells: [
	            new sap.m.Text({
	              text: "{SCORE}"
	            }),
	            new sap.m.Text({
	              text: "{ID}"
	            }),
	            new sap.m.Text({
	              text: "{COMPANY_NAME}"
	            }),
	            new sap.m.Text({
	              text: "{LAST_NAME}"
	            }),
	            new sap.m.Text({
	              text: "{FIRST_NAME}"
	            }),
	            new sap.m.Text({
	              text: "{ADDRESS}"
	            }),
	            new sap.m.Text({
	              text: "{ZIP}"
	            }),
	            new sap.m.Text({
	              text: "{CITY}"
	            }),
	            new sap.m.Text({
	              text: "{COUNTRY}"
	            }),
	            new sap.m.Text({
	              text: "{EMAIL}"
	            }),
	          ]
	        })
	      }
	    });

		oTable.setModel(oModel);

		// Create Page
		var oPage = new sap.m.Page({
			title: "Search in 1 Million customer datasets",
			subHeader: new sap.m.Bar({
		    	contentMiddle: [
		        	new sap.m.SearchField({
		        		id: "id-searchfield",
		        		placeholder: "search for...",
		            	width: "100%",
		            	liveChange: function(oControlEvent){
		            		oController.onSearch(oControlEvent);
		            	}
		        	})
		     	]
		    }),
			content: [
				oTable
			]
		});
			
		return oPage;
	},
	
	/*
	onBeforeShow: function( event ){
		var oView = sap.ui.getCore().getElementById( event.toId );   
		oView.getController().onBeforeShow();	
	}
	*/
});