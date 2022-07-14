public with sharing class ImparativeApexClassforcomponent {
    @AuraEnabled
    public static list<account> getaccountlist(){
       list<account> acclist = new list<account>();
       acclist =[select Id, Name from Account limit 10];
       return acclist;
    }
}