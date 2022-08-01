import { LightningElement } from 'lwc';

export default class GetterParent extends LightningElement {
    xyz="Teqfocus";
    storexyz;
    city="Nagpur";


    get cityname(){
        return this.city;
    }
    set xyz(value){
         this.storexyz=value;
    }
    get setxyz(){
        return this.storexyz;
    }


}