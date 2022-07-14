import { LightningElement } from 'lwc';

export default class IfelseandforeachExample extends LightningElement {
    afterbuttonclick=true;
    handleClick(event){
        this.afterbuttonclick=false;
    }
    Accountinfo = [
        {id:1,accountno:'8956214',ifsccode:'Abc12345'},
        {id:2,accountno:'2124589',ifsccode:'Abc12345'},
        {id:3,accountno:'3445776',ifsccode:'Abc12345'}
    ]
    
   
}