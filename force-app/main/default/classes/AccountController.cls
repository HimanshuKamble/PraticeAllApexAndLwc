public with sharing class AccountController {
  public static List<Account> getAllActiveAccounts() {
    return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
  }

  public static void deleteContactrecord(list<account> acclistfromtrigger){
      
      set<string> accountname = new set<string>();

      for(Account a : acclistfromtrigger){
        accountname.add(a.name);
      }

      list<contact> getcontactAsnamelikeaccount = [select Id,Name From Contact where Name =: accountname];
                if(getcontactAsnamelikeaccount.size()>0){
                  for(contact c : getcontactAsnamelikeaccount){
                    delete c;
                  }
                }
  }
}