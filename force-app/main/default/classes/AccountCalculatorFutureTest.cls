@isTest
public with sharing class AccountCalculatorFutureTest {
    @isTest
    Private Static Void countcontactTest() {
            List<Account> acclist  = new List<Account>();

            for(integer i=0 ; i<250 ; i++){
                    acclist.add(new Account(Name='Test'+i));
            }
			// Account Created For Testing.
            insert acclist;

            List<contact> conlist = new list<contact>();
            list<Id> accId = new list<Id>();
            for(Account acc : acclist ){
                conlist.add(new contact(FirstName='Test', LastName=acc.Name , AccountId = acc.id)) ;
                accId.add(acc.Id);
            }
			// Contact created For Testing.
            insert conlist;

            Test.startTest();
            AccountCalculatorFuture.countcontact(accId); // Here We Can Call Clas Adn PAss ID .
            Test.stopTest();

            List<Account> Accst = [Select Id,CalculateContact__c from Account];
            system.assertEquals(1,Accst[0].CalculateContact__c,'Contacts are Not Counted Successfully!');
    }
}