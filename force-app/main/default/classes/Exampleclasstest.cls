public class Exampleclasstest {
		
    public static void integerlist(){
        list<integer> intlist = new list<integer>();
        intlist.add(12);
        intlist.add(13);
        intlist.add(14);
        intlist.add(15);
        system.debug('list'+intlist);
        for(integer a :intlist){
            system.debug('list'+a);
        }
    }
}