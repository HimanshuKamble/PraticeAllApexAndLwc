import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastEventComponent extends LightningElement {
    abc="Any Name just For Test";
    handleClick(){
           this.raju();
           /**component ke andar component call kiya hai */
    }

    raju(){
        this.ShowToast1();
        /**ye component ke andar toast event call kiya hai */
    }

    ShowToast1(){
        const eventvaranyname = new ShowToastEvent({
            title:"Show Toast Demo",
            message:"Want To Display Toast Example After Button Click",
            variant:"success",
            /**variant	String
             * 	Changes the appearance of the notice.
             *  Toasts inherit styling from toasts in the Lightning Design System. 
             * Valid values are: info (default), success, warning, and error. */
        })
        this.dispatchEvent(eventvaranyname);   
    }
}