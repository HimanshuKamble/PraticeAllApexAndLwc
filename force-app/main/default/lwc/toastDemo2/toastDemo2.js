import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//need to import show toast event from component library.

export default class ToastDemo2 extends LightningElement {

    name;


    showtoasthandler(){
        this.name="Tefocus Solution";
        this.ShowToast(this.name);
    }

    ShowToast(xyz){
        const event = new ShowToastEvent({
            title : xyz,
            message : "Salesforce",
            variant :"Success",
        })
        this.dispatchEvent(event);
    }
}