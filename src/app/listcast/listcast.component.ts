import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'listcast',
  templateUrl: './listcast.component.html',
  styleUrls: ['./listcast.component.css']
})

export class ListCastComponent implements OnInit{
  
  listCast:any = [];
  dataActor:any = null;
  comentary:any = null;

  constructor(private apiService: ApiService){ }

  ngOnInit() {
    this.getData()
  }

  private getData() {
    this.apiService.getData()
      .subscribe(resp => {
        this.listCast = resp.results;
        console.log(this.listCast);
      }, error => {
        console.log(error);
      })
  }

  handleShowActor(data) {
    this.dataActor = data;
  }

  addComment(comentary) {
    this.comentary = comentary;
  }
}