import { Component, OnInit } from '@angular/core';
import { DocTemplateDto } from '../web-api-client';

@Component({
  selector: 'app-document-template',
  templateUrl: './documentTemplate.component.html',
  styleUrls: ['./documentTemplate.component.css']
})
export class DocumentTemplateComponent implements OnInit {

  result: string;
  doc: DocTemplateDto;
  docTitle: string;

  constructor() { 
    this.doc = history.state.data;
    console.log(typeof this.doc);
    console.log(this.doc);
  }

  ngOnInit(): void {
    //this.client.getDocument().subscribe(data => this.result = data, err => console.log(err));
  }

  OnExport(){
    console.log('On Export');
  }
}
