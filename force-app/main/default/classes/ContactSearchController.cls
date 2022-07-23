public with sharing class ContactSearchController{
    @AuraEnabled(cacheable=true)
    public static List<contact> displayconrecord(string searchkey){
       string searchword ='%'+searchkey+'%';
       System.debug('+++++++SearchWord+++++++'+searchword);
       List<Contact> conlist = new list<Contact>();
      for(Contact con:[select lastname from Contact where lastname Like: searchword]){
       conlist.add(con);
       } 
       return conlist;  
    }
} 