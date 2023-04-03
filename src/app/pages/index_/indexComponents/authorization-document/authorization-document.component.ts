import { Component } from '@angular/core';


// import { saveAs } from 'file-saver';

@Component({
  selector: 'app-authorization-document',
  templateUrl: './authorization-document.component.html',
  styleUrls: ['./authorization-document.component.less']
})
export class AuthorizationDocumentComponent {

  // downloadWordDoc() {
  //   const filename = 'document.docx'; // Numele fișierului de salvat
  //   const file = new Blob([''], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  //   const fileUrl = `assets/${filename}`;
  //   saveAs(file, filename);
  // }

  // downloadWordDoc() {
  //   const filename = 'Tehnician Autorizat Videocameri.docx'; // Numele fișierului de salvat
  //   const fileUrl = `assets/doc/${filename}`;
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', fileUrl, true);
  //   xhr.responseType = 'blob';
  //   xhr.onload = () => {
  //     const file = new Blob([xhr.response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  //     saveAs(file, filename);
  //   };
  //   xhr.send();
  // }

}
