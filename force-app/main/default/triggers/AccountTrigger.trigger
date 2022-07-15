trigger AccountTrigger on Account (before insert) {
    if(trigger.isafter && trigger.isinsert){
        // CAll Queueable Apex Class and pass the arrument list Account.
        system.enqueueJob(new TestDemoQueueable(trigger.new))  ;
            }  

    if(trigger.isbefore && trigger.isinsert){
        AccountController.deleteContactrecord(trigger.new);
    }
}