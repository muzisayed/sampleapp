/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
    selector: 'bh-validation',
    templateUrl: './validation.template.html'
})

export class validationComponent extends NBaseComponent implements OnInit {

    validationform;
    validationform2;

    constructor(public fb: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.validationform = this.fb.group({
            required:['',Validators.required],
            optional:[''],
            email:['',Validators.email],
            maxlength:['',Validators.maxLength(6)],
            minlengthvalidation:['',Validators.minLength(3)]

        })
        this.validationform2 = this.fb.group({
            equals1:['', Validators.required],
            equals2:['', Validators.required],
            numb:['', Validators.pattern('[a-zA-Z ]*')]

        })

    } 
    onSubmit(){ 
        console.log("ee")
        if (this.validationform2.invalid) {
            alert("not submitted!!!!");
        }
        else{
            console.log(this.validationform.value)
            console.log(this.validationform2.value)
        }
    }
}

