import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css']
})
export class AddCensusComponent implements OnInit {
  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.censusForm = this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      number_of_people: [''],
      year: [''],
      census_taker: ['']
    })
  }
  
  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddCensus(this.censusForm.value)
    .subscribe(() => {
      console.log('Data Added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/census'))
    }, (err) => {
      console.log(err);
    });
    }

  }
