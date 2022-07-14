public with sharing class AccountCalculatorFuture {
    @future
    public static void countcontact(list<Id> accIds){
        List<Account> Acclist = [Select Id,(Select Id From Contacts) From Account];

        For(Account acc : Acclist){
            acc.CalculateContact__c = acc.Contacts.size();
        }
        if(!Acclist.isEmpty()){
             update Acclist;
        }
    }
    
     /*we can call inside AnonomusWindow
      * 
         List<Account> Acclist = [select Id From Account limit 5];
        	List<Id> accIds = new List<Id>();

        	for(Account acc : Acclist){
            accIds.Add(acc.id);
            }
         AccountCalculatorFuture.countcontact(accIds);
 */
}