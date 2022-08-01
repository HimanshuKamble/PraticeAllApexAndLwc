public with sharing class NewContactImperative {
 
    /*Using multiple parameter in apex  controller */

     @AuraEnabled
    public static void insertContact(Contact con){
        System.debug('acc--'+con);
        try{
            insert con;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
