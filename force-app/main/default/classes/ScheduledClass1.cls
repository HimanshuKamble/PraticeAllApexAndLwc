public class ScheduledClass1 Implements Schedulable {
    public void execute(SchedulableContext sc){
        database.executeBatch(new BatchCLass2());
        // We can call batch Apex inside scheduled apex.
    }
}