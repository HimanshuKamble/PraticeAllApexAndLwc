public with sharing class datatablewithrowselectionclass {

    @AuraEnabled(cacheable=true)        
    public static list<contact> getcontact(Id lwcRecordId , string searchkeyss){
        //If Search Key is Available
            if(searchkeyss != null && searchkeyss != ''){
                string key = '%' + searchkeyss + '%';
                list<contact> contactlist = [select Id, Name, Phone , AccountId from contact
                            where AccountId =: lwcRecordId AND Name Like : key];
                return contactlist ;    
            }
            // If Search Key not Available.
            else {
                list<contact> contactlist = [select Id, Name, Phone , AccountId from contact 
                            where AccountId =: lwcRecordId ];
                // Null Check
                if(!contactlist.isEmpty()) {
                    return contactlist ;
                }   
                return null;
            }
    }
    
}