trigger TriggerOnCase on case (before insert,before update) {
        if(trigger.isbefore && trigger.isupdate){
            ChangeCaseField.Changeemail(trigger.new);
        }
}