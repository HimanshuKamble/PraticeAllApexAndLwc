public class BatchCLass2 implements database.Batchable<sobject> {
		
    public database.QueryLocator start(Database.BatchableContext bc){
        string contactlist = 'select Id , LastName , phone from Contact';
        return database.getQueryLocator(contactlist);
    }
    
    public void execute(Database.BatchableContext bc, List<contact> contactlistgetfromstartmethod){
        for(contact c : contactlistgetfromstartmethod){
            c.LastName = c.LastName+'Scheduled';
        }
        update contactlistgetfromstartmethod;
    }
    
    public void finish(database.BatchableContext bc){
        // send an mail
    }
}