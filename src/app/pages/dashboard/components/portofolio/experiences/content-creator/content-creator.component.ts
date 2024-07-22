import {Component, OnInit} from '@angular/core';
import {Lightbox} from "ngx-lightbox";

@Component({
    selector: 'app-content-creator',
    templateUrl: './content-creator.component.html',
    styleUrl: './content-creator.component.scss'
})
export class ContentCreatorComponent implements OnInit {

    // bread crumb items
    breadCrumbItems!: Array<{}>;

    constructor(private lightbox: Lightbox) {
    }

    ngOnInit(): void {
        /**
         * BreadCrumb
         */
        this.breadCrumbItems = [
            {label: 'Pages'},
            {label: 'Gallery', active: true}
        ];

        this.filterredImages = this.list;
    }

    /**
     * Portfolio Classic Two Data
     */
    filterredImages: {
        img: string;
        link: string;
        title: string;
        author: string;
        likes: string;
        share: string;
        category: string;
    }[] | undefined;
    galleryFilter = 'all';
    list = [
        {
            id: 1,
            link: 'https://www.instagram.com/reel/C7avSCsvQwI/',
            img: 'https://i.imgur.com/7maKFE4.jpeg',
            title: "Regency Parfume",
            author: "aajengsalsabilla",
            likes: "2.2K",
            share: "437",
            category: 'instagram'
        },
        {
            id: 3,
            link: 'https://www.instagram.com/reel/C6NdHVaPe9u/',
            img: 'https://imgur.com/bkN06Qr.jpeg',
            title: "True to Skin",
            author: "aajengsalsabilla",
            likes: "2.2K",
            share: "605",
            category: 'instagram'
        },
        {
            id: 4,
            link: 'https://www.instagram.com/reel/C4ZnqYqvzuK/',
            img: 'https://imgur.com/b6sPdFR.jpeg',
            title: "Eileen Grace",
            author: "aajengsalsabilla",
            likes: "2.2K",
            share: "356",
            category: 'instagram'
        },
        {
            id: 5,
            link: 'https://vt.tiktok.com/ZSYWwQ3Cv/',
            img: 'https://i.ibb.co.com/nkZSv8V/90af66aeb2a74f35938c45cc1928cfab-1717741615.jpg',
            title: "Joylab - Body Mist",
            author: "aajengsalsabilla",
            likes: "13k",
            share: "1.2K",
            category: 'tiktok'
        },
        {
            id: 6,
            link: 'https://vt.tiktok.com/ZSYWwQT6J/',
            img: 'https://i.ibb.co.com/svPvz1j/o8-Urc5i-IEgoz5c-Hfjiik40k-Pm-UQr8-CANBAEIB6.jpg',
            title: "Azarine",
            author: "aajengsalsabilla",
            likes: "2.2K",
            share: "1.2K",
            category: 'tiktok'
        },
        {
            id: 7,
            link: 'https://vt.tiktok.com/ZSYWwm12N/',
            img: 'https://i.ibb.co.com/m6qzNN5/8fe2946d3b154a74baaad5b2fb53b85a-tplv-photomode-image.jpg',
            title: "Top 3 Permakeupan",
            author: "aajengsalsabilla",
            likes: "173",
            share: "1.2K",
            category: 'tiktok'
        },
    ];

    /***
     * Active all category selected
     */
    activeCategory(category: string) {
        this.galleryFilter = category;
        if (this.galleryFilter === 'all') {
            this.filterredImages = this.list;
        } else {
            this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
        }
    }


}
