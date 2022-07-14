public class BatchCLass1 implements Database.Batchable<sobject>{
	
    public Database.QueryLocator start(Database.BatchableContext bc){
        string Acclist = ('select Id,Name,Phone from Account');
        return Database.getQueryLocator(Acclist);
    }
    public void execute(Database.BatchableContext bc, List<Account> listfromstartmethod){
        for(Account a : listfromstartmethod){
            a.Fax = '123456';
        }
        Update listfromstartmethod;
    }   
    public void Finish(Database.BatchableContext bc){
        // NO Code 
    } 
}

// Anonymous Window
/* database.executeBatch(new BatchCLass1());  */
/*How To shedule Class
 * string Cronexception = '0 0 7 11 7 ? 2022';
 * system.schedule('ScheduleByCodeBatchclass2',Cronexception, new ScheduledClass2()); 
*/