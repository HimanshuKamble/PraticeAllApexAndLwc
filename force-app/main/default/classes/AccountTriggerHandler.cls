public without sharing class AccountTriggerHandler implements TriggerHandler {
    private boolean triggerIsExecuting;
    private integer triggerSize;
    public AccountTriggerHelper helper;
    public AccountTriggerHandler(boolean triggerIsExecuting, integer triggerSize) {
        this.triggerIsExecuting = triggerIsExecuting;
        this.triggerSize = triggerSize;
        this.helper = new AccountTriggerHelper();
    }
    public void beforeInsert(List<Account> newAccounts) {
        helper.doTask1();
        helper.doTask2();
    } 
    public void beforeUpdate(List<Account> oldAccounts, List<Account> newAccounts, Map<ID, SObject> oldAccountMap, Map<ID, SObject> newAccountMap) {
        helper.doTask3();
        helper.doTask4();
    }
    public void beforeDelete(List<Account> oldAccounts, Map<ID, SObject> oldAccountMap) {
        helper.doTask5();
        helper.doTask1();
    }
    public void afterInsert(List<Account> newAccounts, Map<ID, SObject> newAccountMap) {
        helper.doTask2();
        helper.doTask3();
    }
    public void afterUpdate(List<Account> oldAccounts, List<Account> newAccounts, Map<ID, SObject> oldAccountMap, Map<ID, SObject> newAccountMap) {
        helper.doTask4();
        helper.doTask5();
    }
    public void afterDelete(List<Account> oldAccounts, Map<ID, SObject> oldAccountMap) {
        helper.doTask3();
        helper.doTask1();
    }
    public void afterUndelete(List<Account> newAccounts, Map<ID, SObject> newAccountMap) {
        helper.doTask4();
        helper.doTask2();
    }
}