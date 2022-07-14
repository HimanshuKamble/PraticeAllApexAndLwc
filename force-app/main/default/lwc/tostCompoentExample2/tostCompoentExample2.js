import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TostCompoentExample2 extends LightningElement {
   fullname = "HimanshuKamble";
   handleClick(){
        this.ShowToast(this.fullname);
   }

   ShowToast(xyx){
    const anyname = new ShowToastEvent({
        title:xyx,
        message:'Teqfocus Salesforce Devloper',
        variant:'success', 
    })
    this.dispatchEvent(anyname);
   }
}