import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit, OnChanges {
  listComents:any = [];
  @Input() comentary:any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change) {
    if (change.comentary && change.comentary.currentValue) {
      this.listComents = this.listComents.concat(this.comentary)
    }

  }

}
