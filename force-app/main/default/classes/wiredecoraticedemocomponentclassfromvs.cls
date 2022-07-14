public with sharing class wiredecoraticedemocomponentclassfromvs {
    @AuraEnabled(cacheable=true)
   /** if we are using a wire decorator inside y=the component that time we pass this backed value to
        those component we use "@AuraEnabled(cacheable=true)" . */
    public static list<contact> getaccountlist(){
        list<contact> conlist = new list<contact>();
        conlist =[select id , name , lastname from contact limit 10] ;
       // return conlist ;
        //system.debug('Contact LIst' + conlist);
        return conlist ;
    }
}