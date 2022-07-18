public with sharing class AccountUpdateValueStore {

    //Method for If we are update value of Account Record those value stored in 
    //Custom obj'AccountCatcher__c'
    public  static void name(list<Account> updatedoldvalueaccount) {
        list<AccountCatcher__c> storeupdatedvalue = new list<AccountCatcher__c>();

            for(account a : updatedoldvalueaccount){
                AccountCatcher__c s = new AccountCatcher__c();
                s.name = a.name;
                s.Phone__c=a.phone;
                storeupdatedvalue.add(s);
            }
        insert storeupdatedvalue;
    }

    //update Account Record Associate Contact Record Also Updated.
    public static void UpdateAssociateContact(Map<Id,Account> acclist) {
        //Type 1
        //Trigger we can on before update and arrgument pass is 'newmap'// 
            list<contact> getupdatecon = new list<contact>();
            list<contact> con = [select id,name,phone,AccountId from contact where AccountId =: acclist.keyset()];
            for(contact c : con){
                c.phone = acclist.get(c.AccountId).phone;
                getupdatecon.add(c);
            }
            update getupdatecon;
        }

    //update Account Record Description Associate Contact Record Description Also Get Update.
    //As like Upper method bet sone diffrent Approch.
    // i think this is wrong so we can use 'UpdateAssociateContact' i am creating eairlier.
    public static void updateDescription(map<Id,Account> acctriglist){
        list<contact> conlist = new list<contact>();
            list<Account> acclist = [select Id,Name,Description,(select Id,Name,Description from Contacts)
                                    from Account where Id =:acctriglist.keyset()];
                for(Account a : acclist){
                    for(contact c : a.contacts){
                        c.Description = a.Description;
                        conlist.add(c);
                    }
                }
        update conlist;
    }

}
