trigger hellotrigger on account (before insert ) {
    for(Account a : Trigger.New) {
        a.Description = 'New description';
    } 
}