trigger LeadTrigger on Lead (before insert) {
    if(trigger.isbefore && trigger.isinsert){
        LeadTriggerHandler.invokebytrigger(trigger.new);
    }
}