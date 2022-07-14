({
	handleonclickchild : function(component, event, helper) {
		component.set('v.childvar','Updated Value after Child Comp Button Click')
	},
    activecustomhandler : function(component, event, helper) {
		        console.log("Child Value Get Updated");
                console.log("Old Value :"+event.getParam("oldvalue"));
        		console.log("New Value :"+event.getParam("value"));
	}
})