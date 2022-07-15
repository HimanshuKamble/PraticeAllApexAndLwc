public with sharing class ChangeCaseField {
    public static void Changeemail(list<case> getcaselist) {
            for(case c : getcaselist){
                if(c.Status == 'Working'){
                    c.Priority='Low';
                }
            }
    }
}