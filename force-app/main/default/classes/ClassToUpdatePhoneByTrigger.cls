public with sharing class ClassToUpdatePhoneByTrigger {
    public static void updatephone(list<account> getacclistfromtrigger ) {
        System.debug(getacclistfromtrigger);
        for(Account a : getacclistfromtrigger){
            System.debug(a.phone);
            if(a.phone == '+91null'){
                a.AccountNumber = '1246';
                
            }
        }
    }
}