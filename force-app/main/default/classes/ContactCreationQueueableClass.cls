public class ContactCreationQueueableClass implements Queueable {
	
    Private List<account> Accountget ; 
    
    public ContactCreationQueueableClass(List<Account> getaccountlistfromTrigger){
        this.Accountget = getaccountlistfromTrigger;
    }
    
    public void execute(Queueablecontext qc){
        List<contact> conlist = new list<contact>();
        for(Account acc: Accountget){
            contact con = new contact();
            con.LastName = 'QueueableUpdate'+' '+acc.name;
            con.AccountId= acc.Id;
            conlist.add(con);
        }
        insert conlist;
    }
}

/* we can Call in anonomous Window
        list<account> accs = [select id , Name from account where Name='AbcUpdated by vera Batch job'];
        system.enqueueJob(new ContactCreationQueueableClass(accs));*/

/*otherwise we can call in Trigger also
         trigger getaccounttoQueueableapex on Account (after insert) {
             if(trigger.isafter && trigger.isinsert){
                // CAll Queueable Apex Class and pass the arrument list Account.
                 system.enqueueJob(new ContactCreationQueueableClass(trigger.new))  ;
                }
           } 
*/