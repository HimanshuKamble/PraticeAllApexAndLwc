public with sharing class AccountRecordRestrictClass {
    // we have trigger of name 'TriggerToRestricDuplicaciAccount' for this class.//

    public  static void methodBeforeInsertRecord(List<Account> getlistfromtrigger) {
        
        Set<string> setName = new Set<string>();

     // trigger.new give the new value to that 'getlistfromtrigger'/
        for (Account accfromtrigger : getlistfromtrigger) {    
          setName.add(accfromtrigger.name);
        }

        list<Account> targetedaccount = [select id,name from Account where name in : setName];

        Map<string,Account> mapName = new Map<string,Account>();
        // KEY can't be duplicate like SET. VALUE can be duplicate like LIST. 
        // We can have keys or values of any data type (eg: string, integer, etc).

        for (Account a : targetedaccount) {
            mapName.put(a.name,a);
        }

        for (Account ac : getlistfromtrigger) {
            if (mapName.get(ac.name) != null) {
                ac.adderror('Duplicate Record Found');
            }
        }

    }
}