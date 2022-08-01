public with sharing class ContactSearchController_Demo {

    @AuraEnabled(cacheable=true)
    public static List<contact> displayconrecord(string searchkey){
       string searchword ='%'+searchkey+'%';
       System.debug('+++++++SearchWord+++++++'+searchword);
       List<Contact> conlist = new list<Contact>();
      for(Contact con:[select Id,LastName from Contact where LastName Like: searchword WITH SECURITY_ENFORCED]){
       conlist.add(con);
       } 
       return conlist;  
    }
}