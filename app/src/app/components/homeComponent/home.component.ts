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
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

    sampleform;

    skills = ['smart', 'intelligent', 'hard working']

    constructor(public fb: FormBuilder, public router:Router) {
        super();
    }

    ngOnInit() {
        this.sampleform = this.fb.group({
            name:['',[Validators.required, Validators.minLength(2)]],
            description:[''],
            skill:['']
        })

    }
    onSubmit(){ 
        if (this.sampleform.invalid) {
            alert("not submitted!!!!");
        }
        else{
            console.log(this.sampleform.value)
        }
    }
    nextPage(){
        this.router.navigate(['validation'])
    }
}
