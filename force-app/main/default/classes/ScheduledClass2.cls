public class ScheduledClass2 Implements Schedulable{
    public void execute(schedulablecontext sc){
        database.executeBatch(new BatchCLass1());
    }
}