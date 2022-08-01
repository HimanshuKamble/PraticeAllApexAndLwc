/**
 * @description       : Query the 10 Contacts and return the results
**/
public with sharing class ExportDataController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountDataToExport(){
        List<Contact> lstContacts = [SELECT Id, FirstName, LastName, Email 
FROM Contact LIMIT 10];
        return lstContacts;
    }
}