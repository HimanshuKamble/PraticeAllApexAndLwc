public class TestDemoQueueable implements Queueable {
	
    private List<Account> AccListToCreateContact;
    
    public TestDemoQueueable(List<Account> ExpectingAccountFromTrigger){  //Constructor Class
        this.AccListToCreateContact = ExpectingAccountFromTrigger ;
    }
    
    public Void execute (Queueablecontext axvc){
        List<Contact> Conlist = new List<contact>();
        
        For(Account acc : AccListToCreateContact){
            contact con = new Contact();
            con.LastName = acc.Name;
            con.AccountId = acc.Id;
            Conlist.add(con);
        }
        if(Conlist.size()>0){
             insert Conlist;
        }
     system.enqueueJob(new TestDemoQueueable2());  
    }
}