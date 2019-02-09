import { Component,Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnChanges {
  @Input() data: any;
  @Output() addComment = new EventEmitter;
  comentary:any;

  constructor() { }

  ngOnChanges(change) {
    console.log(change.data.currentValue);
  }

  handleAddCommnet(comentary) {
    this.addComment.emit(this.comentary);
    this.comentary = null;
  }
}
