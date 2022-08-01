import { LightningElement,api } from 'lwc';

export default class Childcmp extends LightningElement {
    //we can decorate with @api bcz we need to see this variable to parent or we other word we make to 
    //that varibale as public varible.
   @api getfromparent;
}