import { LightningElement,track,wire } from 'lwc';
import displayconrecord from '@salesforce/apex/ContactSearchController_Demo.displayconrecord';

export default class DynamicContactSearch extends LightningElement {
    @track conlastname;
    @track records;
    @track error;
    @wire(displayconrecord,{searchkey : '$conlastname'})
    wirecontact({error,data})
    {
            if(data){
                this.records=data;
                this.error=undefined;
            }
            else{
                this.error=error;
                this.records=undefined;
            }
    }
    handleonchange(event){
       this.conlastname = event.target.value ;
       console.log('Conlastname :'+ this.conlastname);
    }
}