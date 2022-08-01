public with sharing class classToRestrictAccountDeletion {
    public static void method1(list<Account> getrecordfromtrigger) {
        for(account a : getrecordfromtrigger){
              a.adderror('You Can Not Delete Account  ' +a.name+' Having Name.' );
        }
    } 
}