trigger AccountTrigger on Account (before insert, before update, before delete, after insert,
                                                     after update, after delete, after undelete) {
    if (Org_Specific_Setting__mdt.getInstance('Run_All_Triggers')?.Value__c == true) {

        TriggerHandler handler = new AccountTriggerHandler(Trigger.isExecuting, Trigger.size);
        
        switch on Trigger.operationType {
            when BEFORE_INSERT {
                handler.beforeInsert(Trigger.new);
            }
            when BEFORE_UPDATE {
                handler.beforeUpdate(Trigger.old, Trigger.new, Trigger.oldMap, Trigger.newMap);
            }
            when BEFORE_DELETE {
                handler.beforeDelete(Trigger.old, Trigger.oldMap); 
            }
            when AFTER_INSERT {
                handler.afterInsert(Trigger.new, Trigger.newMap); 
            }
            when AFTER_UPDATE {
                handler.afterUpdate(Trigger.old, Trigger.new, Trigger.oldMap, Trigger.newMap);
            }
            when AFTER_DELETE {
                handler.afterDelete(Trigger.old, Trigger.oldMap);
            }
            when AFTER_UNDELETE {
                handler.afterUndelete(Trigger.new, Trigger.newMap);
            }
        }
    }
}

// trigger AccountTrigger on Account (before insert,before update , After update) {
//     if(trigger.isafter && trigger.isinsert){
//         // CAll Queueable Apex Class and pass the arrument list Account.
//         system.enqueueJob(new TestDemoQueueable(trigger.new))  ;
//             }  

//     if(trigger.isbefore && trigger.isinsert){
//         AccountController.deleteContactrecord(trigger.new);
//     }
//     //if we can update account that time old value save in custom object.
//     if(trigger.isbefore && trigger.isupdate){
//         AccountUpdateValueStore.name(trigger.old);//we use old here bcz we want save those ols va;ue to cst obj.
//     }

//     //if we can update account Associate contact Also Get Update.
//     if(trigger.isbefore && trigger.isupdate){
//       AccountUpdateValueStore.UpdateAssociateContact(trigger.newmap); 
//         // we can use trigger.newmap mense we can pass whater new value to phone those phone value 
//         //we want to update in contact.
//     }

//     //we want to update Contact Description when we update Account Description.
//     //same As AccountUpdateValueStore.UpdateAssociateContact(trigger.newmap); this method
//     // but some diffrent Approch.
//     if(trigger.isafter && trigger.isupdate){
//         AccountUpdateValueStore.updateDescription(trigger.newmap);
//     }


// }