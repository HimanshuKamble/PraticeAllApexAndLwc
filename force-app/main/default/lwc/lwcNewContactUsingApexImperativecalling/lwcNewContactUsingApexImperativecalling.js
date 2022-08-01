import { LightningElement, track} from 'lwc';

import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD  from '@salesforce/schema/Contact.Email';
import insertContact from '@salesforce/apex/NewContactImperative.insertContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class LwcNewContactUsingApexImperativecalling extends LightningElement {

       @track fname=FNAME_FIELD;
       @track lname =LNAME_FIELD;
       @track Phone= PHONE_FIELD;
       @track email =EMAIL_FIELD;
        
        rec={
            FNAME:this.fname,
            LNAME:this.lname,
            Phone:this.Phone,
            EMAIL:this.email,
         }

    handlefNameChange(event) {
        this.rec.FNAME = event.target.value;
        window.console.log("FNAME", this.rec.FNAME);
        
    }
    
    handlelnameChange(event) {
        this.rec.LNAME = event.target.value;
        window.console.log("LNAME", this.rec.LNAME);
    }
    
    handlePhoneChange(event) {
        this.rec.Phone = event.target.value;
        window.console.log("Phone", this.rec.Phone);
    }

    handleEmailChange(event) {
        this.rec.EMAIL = event.target.value;
        window.console.log("EMAIL", this.rec.EMAIL);
    }

    handleClick() {
        const contact = {
            FirstName: this.rec.FNAME,
            LastName: this.rec.LNAME,
            Phone: this.rec.Phone,
            Email: this.rec.EMAIL
        }
        insertContact ({ con : contact })
            .then(() => {
                // this.rec={}; // Don't. You aren't clearing the value of rec properties, you're removing them. So everywhere you're using them you'll get an error because they will be now undefined properties.
                this.rec.FNAME = null;
                this.rec.LNAME = null;
                this.rec.Phone = null;
                this.rec.EMAIL = null;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created',
                        variant: 'success',
                    }),
                );
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log('error', JSON.stringify(error));
            });
    }
}



/**try this code in js
 * 
 * handleClick() {
    const contact = {
        FirstName: this.rec.FNAME,
        LastName: this.rec.LNAME,
        Phone: this.rec.Phone,
        Email: this.rec.EMAIL
    }
    insertContact ({ con : contact })
        .then(() => {
            // this.rec={}; // Don't. You aren't clearing the value of rec properties, you're removing them. So everywhere you're using them you'll get an error because they will be now undefined properties.
            this.rec.FNAME = null;
            this.rec.LNAME = null;
            this.rec.Phone = null;
            this.rec.EMAIL = null;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact created',
                    variant: 'success',
                }),
            );
        })
        .catch((error) => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log('error', JSON.stringify(error));
        });
}
 * 
 */