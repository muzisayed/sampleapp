import { heromodel } from '../src/app/models/heromodel.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
heromodel: heromodel;
//DECLARE NEW VARIABLE

constructor() {
this.heromodel = new heromodel();
//CREATE NEW DM INSTANCE
    }
}