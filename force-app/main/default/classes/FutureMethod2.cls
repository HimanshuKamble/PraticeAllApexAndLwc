public class FutureMethod2 {
    
	@future
    public static void createUser(String uname, String al, String em, String lname){
        profile p = [SELECT Id, Name FROM Profile where Name ='Standard Platform User']; // get profile id .
        
        Userrole r = [SELECT Id, Name FROM UserRole where Name='COO'];  // get role id.
        
        user u = new user(alias = al, email=em, 

            emailencodingkey='UTF-8', lastname=lname, 

            languagelocalekey='en_US', 

            localesidkey='en_US', profileid = p.Id, userroleid = r.Id,

            timezonesidkey='America/Los_Angeles', 

            username=uname);
        insert u;
    }    
}