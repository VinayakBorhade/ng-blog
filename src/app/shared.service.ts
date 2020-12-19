import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    blogTitle = "John's Blog";
    baseUrl = "http://localhost:4200/"

    constructor() {

    }

}
