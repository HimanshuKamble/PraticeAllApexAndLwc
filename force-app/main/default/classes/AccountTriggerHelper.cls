public without sharing class AccountTriggerHelper {
    public AccountTriggerHelper() {
        System.debug('Inside AccountTriggerHelper Constructor');
    }
    public void doTask1() {
        System.debug('Inside Task 1');
        TestClass.method1(10);
    }
    public void doTask2() {
        System.debug('Inside Task 2');
    }
    public void doTask3() {
        System.debug('Inside Task 3');
    }
    public void doTask4() {
        System.debug('Inside Task 4');
    }
    public void doTask5() {
        System.debug('Inside Task 5');
    }
}