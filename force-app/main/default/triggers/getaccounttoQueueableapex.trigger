trigger getaccounttoQueueableapex on Account (after insert) {
    if(trigger.isafter && trigger.isinsert){
        // CAll Queueable Apex Class and pass the arrument list Account.
        system.enqueueJob(new TestDemoQueueable(trigger.new))  ;
            }
}