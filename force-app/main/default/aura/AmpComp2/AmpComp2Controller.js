({
	handleonclickNGO : function(component, event, helper) {
		var btn = event.getSource();
        var mgs= btn.get("v.label");
        //component.set('v.NGO',mgs);
        if(mgs == "NGOButton-NonProfit"){
            component.set('v.NGO',mgs);
        }else if(mgs == "NGOButton-withNonProfit"){
            component.set('v.NGO',mgs);
        }
	},
    doInit : function(component, event, helper) {
		component.set('v.fname','Koi Bhi Name')
        component.set('v.status',"Datata Hu")
	},
    handleonclick : function(component, event, helper) {
		//component.set('v.fname','Himanshu')  // we provide separate value
		var btn = event.getSource();
        var mgs= btn.get("v.label");
        component.set('v.fname',mgs);
	},
    statushandleonclick : function(component, event, helper) {
		component.set('v.status',"I Am Too Good")
	}
})