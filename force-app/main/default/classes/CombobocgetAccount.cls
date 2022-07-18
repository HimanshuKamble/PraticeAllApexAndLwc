public with sharing class CombobocgetAccount {
    @AuraEnabled
    public static list<account> getaccounts() {
            list<account> acclist =[select Id,Name From Account];
            return acclist;
    }
}
