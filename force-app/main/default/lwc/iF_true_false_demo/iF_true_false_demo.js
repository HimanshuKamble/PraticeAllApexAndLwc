import { LightningElement , track } from 'lwc';

export default class IF_true_false_demo extends LightningElement {
    @track buttonlebel ='Show';
    @track conditiontoshowtemplate = false ;
    Anytitle = "IF True False Component";
    
    butttonhandler(event){
        const label = event.target.label; // it will carry current label value
        if(label === 'Show'){               // If label value is show 
            this.buttonlebel = 'Hide';
            this.conditiontoshowtemplate = true;
        }
        else if(label === 'Hide'){
            this.buttonlebel = 'Show';
            this.conditiontoshowtemplate = false ;
        }
    }
}