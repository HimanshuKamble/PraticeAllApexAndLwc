import { LightningElement, track } from 'lwc';
// Call The apex class 
import getaccountfromClass from '@salesforce/apex/CombobocgetAccount.getaccounts';

export default class Practice_Combobox extends LightningElement {
    //Pass Null Value 
    @track values=''; 
    @track accoption = [];

    get options(){
        // this value we are pass as example manual. if we active no need to 
        //wright callback method and accoption variable.
        // return[    
        //     {label : 'Account A', value : 'New Value 001'},
        //     {label : 'Account b', value : 'New Value 002'}
        // ];

        return this.accoption;

    }

    connectedCallback(){
        getaccountfromClass()       // imparative approch 
        .then(result => {    //promise method
            let arr =[];
            for(var i=0;i<result.length;i++){
                arr.push({label : result[i].Name , value : result[i].Id })
            }
                this.accoption = arr;  //talking about  line 8th variable
        })
    }

    handleonchange(event){
        this.values=event.detail.value;
    }
}