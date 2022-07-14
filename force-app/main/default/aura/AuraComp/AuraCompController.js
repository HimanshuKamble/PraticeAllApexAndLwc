({
	doInit : function(component, event, helper) {
		//component.set("v.Day","Monday") //we just deactivate for jsobject value
        var data ={'Name':'Test Name','Email':'test@test.com'};
        
        component.set("v.jsObject",data);
        
      component.set("v.userdata",{
            'mystring1':'mystringvalue1',
            'myinteger1':2022
        })
	}
})