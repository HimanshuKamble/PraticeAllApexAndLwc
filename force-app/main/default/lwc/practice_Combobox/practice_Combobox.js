import { LightningElement, track } from 'lwc';
import getaccountfromClass from '@salesforce/apex/CombobocgetAccount.getaccounts';

export default class Practice_Combobox extends LightningElement {
    @track values='';
    @track accoption = [];

    get options(){
        // return[    // this value we are pass as example manual..
        //     {label : 'Account A', value : 'New Value 001'},
        //     {label : 'Account b', value : 'New Value 002'}
        // ];

        return this.accoption;

    }

    connectedCallback(){
        getaccountfromClass()
        .then(result => {
            let arr =[];
            for(var i=0;i<result.length;i++){
                arr.push({label : result[i].Name , value : result[i].Id })
            }
                this.accoption = arr;
        })
    }

    handleonchange(event){
        this.values=event.detail.value;
    }
}