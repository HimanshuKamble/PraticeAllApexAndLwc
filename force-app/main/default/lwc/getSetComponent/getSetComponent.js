import { LightningElement } from 'lwc';

export default class GetSetComponent extends LightningElement {
    name='CAT';
    orgiage='1';
    newage='0';

    get age(){
        if(this.orgiage > 20){
            this.orgiage='20';
        }
        return this.orgiage;
    }
    set age(value){
        // if(value>20){
        //     throw new Error('Invalid Age For cat');
           
        // }
        this.orgiage=value;
    }

    upadateoriginalvalue(event){
        this.newage=event.target.value;
    }

    handleonaddagebtn(){
        this.age=this.newage;
    }
}