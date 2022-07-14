({
	handleunbondedchild : function(component, event, helper) {
		component.set('v.childvar','After Button click Child Function value get');
	},
    afterchldvarchngehandler : function(component, event, helper) {
		console.log("Child Value is get Updated");
        console.log("Old Value:"+ event.getParam("oldvalue"));
         console.log("New Value:"+ event.getParam("newvalue"));
	}
})