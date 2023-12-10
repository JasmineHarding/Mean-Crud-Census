import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-census-detail',
  templateUrl: './census-detail.component.html',
})

export class CensusDetailComponent implements OnInit {
  getid: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router, 
    private ngZone: NgZone, 
    private activatedRoute: ActivatedRoute, 
    private crudService: CrudService
  ) {
    this.getid = this.activatedRoute.snapshot.paramMap.get('id');

    this.updateForm = this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      number_of_people: [''],
      year: [''],
      census_taker: ['']
    });
  }

  ngOnInit() {
    this.crudService.GetCensus(this.getid).subscribe(res => {
      console.log('Fetched data:', res); 
      this.updateForm.patchValue({
        street: res['street'],
        city: res['city'],
        state: res['state'],
        zip: res['zip'],
        number_of_people: res['number_of_people'],
        year: res['year'],
        census_taker: res['census_taker'],
      });
    }, (err) => {
      console.error('Error fetching data:', err);
    });
  }

  onUpdate(): any {
    this.crudService.updateCensus(this.getid, this.updateForm.value)
      .subscribe(() => {
        console.log('Data update successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/census'));
      }, (err) => {
        console.error('Error updating data:', err);
      });
  }
}

