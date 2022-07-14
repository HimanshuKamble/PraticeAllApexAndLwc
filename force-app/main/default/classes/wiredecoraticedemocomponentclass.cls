public class wiredecoraticedemocomponentclass {
		@AuraEnabled(cacheable=true)
   /** if we are using a wire decorator inside the component that time we pass this backend value to
        those component we use "@AuraEnabled(cacheable=true)" . */
    public static list<contact> getcontactlist(){
        list<contact> conlist = new list<contact>();
        conlist =[select Id , name from contact limit 10] ;
       // return conlist ;
        //system.debug('Contact LIst' + conlist);
        return conlist ;
    }
}