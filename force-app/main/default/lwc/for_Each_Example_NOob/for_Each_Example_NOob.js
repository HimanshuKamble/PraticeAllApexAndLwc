import { LightningElement,wire,track } from 'lwc';
import contactlistfromclass from "@salesforce/apex/ForEachExampleClass.getconlist";

export default class For_Each_Example_NOob extends LightningElement {
//@track data=[];
    @wire(contactlistfromclass)
    conlist;   // we can say conlist as a property or a function .All data From "contactlistfromclass" can store in 
            // 'conlist'  we know conlist give promise and error so we can collect those.
}