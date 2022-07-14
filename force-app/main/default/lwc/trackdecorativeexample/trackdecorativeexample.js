import { LightningElement , track } from 'lwc';

export default class Trackdecorativeexample extends LightningElement {
    @track fullname = {firstname:"" , lastname:""};

    oninputhanble(event){
        const field = event.target.name ;
       /** window.alert(field); */

        if(field === 'firstnamee'){
            this.fullname.firstname = event.target.value;
        }
        else if(field === 'lastnamee'){
            this.fullname.lastname = event.target.value;
        }
    }
}