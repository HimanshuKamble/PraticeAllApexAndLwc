public class LeadTriggerHandler {
    public static void invokebytrigger(list<lead> getleadlistfromtrigger_New){

    //Step 2: Store New Enter Record one by one (Set No Aloow Duplicaci).
       set<string> checksameemailispresent = new set<string>();
        
    //Step 1: Get Newlly Inserted Record values and we can store them in set<string>.
        for(lead l : getleadlistfromtrigger_New){
           checksameemailispresent.add(l.Email);
        }

    //Step 3: Featch All Contact Having New Entered Email Ids.
    list<contact> checkavlofEmail = [Select Id,Email from contact where Email =: checksameemailispresent];
       
    //step 4: Create a Map to store those all contact having same Email.(Map we are Use For Conparison).
       map<string,contact> maplead = new map<string,contact>();
      
    //step 5: We can put all this contact into map for further comparion.
        for(contact c : checkavlofEmail){
            maplead.put(c.Email,c);
        }

    // step 6: we can again ittrate all those lead record those we are newlly inserted.
        for(lead ls:getleadlistfromtrigger_New)
            if(maplead.get(ls.Email) != null){  // we can pass key here
                                               //(Tum muze Key do mai tumhe value dunga)
               ls.addError('You Can Not Create A Lead With This Email Is Alraddy Present');
            }
        }
    }