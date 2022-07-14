public class MixedDMLFuture {

    public static void useFutureMethod() {

        // First DML operation

        Account a = new Account(Name='Vera Solution Teqfocus 1');

        insert a;

        

        // This next operation (insert a user with a role) 

        // can't be mixed with the previous insert unless 

        // it is within a future method. 

        // Call future method to insert a user with a role.

        util.insertUserWithRole('abc@vrsol.com', 'ampimp', 'vrsolntion@pre5454.com','Kumar');        

    }

}