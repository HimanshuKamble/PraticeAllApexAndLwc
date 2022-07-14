public class FutureClass1 {
    public static Void createContactMethod(){
        list<contact> Conlist = [Select id , LastName from contact];
        for(contact con : Conlist){
            con.LastName = 'Test' + con.LastName; // update last Name.
        }
        update Conlist ;
        
        FutureMethod2.createUser('sj@f1245.com', 'boss', 'dgdfdg@e56454.com','Roy'); // Call Another class.
        
        // we have another class in that we create a user means Mix DML Opration we can perform due to @future it will create a sperate path
        // to create a user other wise if will show MIXDML Exception.
    }
}