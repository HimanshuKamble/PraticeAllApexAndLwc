({
	handleunbondedparent : function(component, event, helper) {
		component.set('v.parentvar','After Button click Parent function value get');
	},
    afterchldvarchngehandlerparent : function(component, event, helper) {
		console.log("Parent Value is get Updated");
        console.log("Old Value:"+ event.getParam("oldvalue"));
         console.log("New Value:"+ event.getParam("newvalue"));
	}
})