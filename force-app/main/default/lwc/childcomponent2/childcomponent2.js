import { LightningElement,api} from 'lwc';

export default class Childcomponent2 extends LightningElement {
    @api fullname="Himanshu Kamble";

     @api anynamefunction(){
        this.fullname="Himanshu Kamble (Salesforce Devloper At Teqfocus Solution)";
    }
}