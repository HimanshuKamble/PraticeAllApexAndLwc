import { api, LightningElement } from 'lwc';

export default class TestingThiskeyword extends LightningElement {
   @api almari='kapde';
   @api dabba='pulses';

    actuateonclick(){
        this.almari='Abcdsd';
    } 
}