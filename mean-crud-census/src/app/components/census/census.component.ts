import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.css']
})
export class CensusComponent implements OnInit {

  Census:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetCensuses().subscribe(res => {
      console.log(res)
      this.Census =res;
    });    
  }

  deleteCensus(id: any) {
    this.crudService.deleteCensus(id)
      .subscribe(() => {
        console.log('Book deleted successfully!');
        this.Census = this.Census.filter((census: any) => census._id !== id);
      }, (err) => {
        console.log(err);
      });
  }

}