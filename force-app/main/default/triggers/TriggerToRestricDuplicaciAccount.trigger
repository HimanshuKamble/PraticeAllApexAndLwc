trigger TriggerToRestricDuplicaciAccount on Account
 (before insert,after insert, before update, before Delete ) {

// we have class of name 'AccountRecordRestrictClass'.//
    if(trigger.isbefore && trigger.isinsert){
        AccountRecordRestrictClass.methodBeforeInsertRecord(trigger.new);
        // we can restrict to create a duplicate record here.//
    }

    if(trigger.isbefore && trigger.isupdate){
        ClassToUpdatePhoneByTrigger.updatephone(trigger.new);
        // we can add the phone.//
    }
    
    // Trigger For Restrict To Delete Account Record .
    // if(trigger.isbefore && trigger.isdelete){
    //     classToRestrictAccountDeletion.method1(trigger.old);
    // }

}