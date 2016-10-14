import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './patients.component.html',
    styles: [`
        img {
            max-width: 100%;
            width: 100%;
            height: auto;
        }
        .card-img-overlay {overflow:hidden}
    `]
})
export class PatientsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}