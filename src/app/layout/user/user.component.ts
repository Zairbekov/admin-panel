import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tables',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UserComponent implements OnInit {
    constructor(public http: HttpClient, public modalService: NgbModal) {}
    seconds: any;
    closeResult: string;
    ngOnInit() {
  const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , 'http://localhost:8080');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'charset=UTF-8');
  this.http.get('http://localhost:8080/all', {headers: headers})
      .subscribe(res => console.log(res));
    }
    toggleSeconds() {
        this.seconds = !this.seconds;
        console.log(this.seconds);
    }
     open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
