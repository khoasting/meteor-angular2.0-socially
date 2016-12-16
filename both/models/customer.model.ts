/**
 * Created by admin on 12/16/2016.
 */
import {Object} from './collection-object.model.ts';

export interface Customer extends  Object
{
    name: string;
    age: number;
    address: string;
}