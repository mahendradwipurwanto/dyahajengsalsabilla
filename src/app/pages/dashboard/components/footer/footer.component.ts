import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    // set the current year
    year: number = new Date().getFullYear();

    constructor() {
    }

    ngOnInit(): void {
    }

}
