/**
 * Created by admin on 12/16/2016.
 */
import {MongoObservable} from 'meteor-rxjs';

import { Customer } from '../models/customer.model';

export const Customers = MongoObservable.Collection<Customer>('customers'); 

