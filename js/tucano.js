/* TUCANO JAVASCRIPT MAIN LIB */ 

var TucanoHome = {

	//initialization code
	onLoad: function() 
	{	
		this.initialized = true;
	},
	
	AjaxUpdater: function(id,url) {		
		$(id).hide();
		var uj = new Ajax.Updater(
		id,
		url,{
			method:'get',
			asynchronous:true,
			onComplete: this.getResponse(id)
		});
	},
	
	getResponse: function(id) {
	
		$(id).appear();
	
	},
	
};


/* EVENT LISTENERS: add and dom ready */
window.addEventListener(
	"load", 
	function (e) {
		TucanoHome.onLoad(e);
	},
	false
);