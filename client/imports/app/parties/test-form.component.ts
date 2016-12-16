/**
 * Created by admin on 12/16/2016.
 */
import {Component,OnInit} from '@angular/core';
import {Customers} from '../../../../both/collections/customer.collection';
import {FormBuilder,FormGroup} from '@angular/forms';

import template from "./test-form.component.html";

@Component({
    selector:'test-form',
    template
})

export class TestFormComponent implements OnInit
{
    addForm: FormGroup;
    constructor(
        private formbuilder = FormBuilder
){}

    addForm(){
        this.addForm = this.formbuilder.fo
    }


}