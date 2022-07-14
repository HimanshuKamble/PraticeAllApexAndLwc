public class DeleteQueueableAccountRecord implements Queueable{
    public void execute(Queueablecontext anyname){
        list<Account> Acc = [select Id , name from Account Where Name='Queueable Test Account'];
        Delete Acc;
    }
}