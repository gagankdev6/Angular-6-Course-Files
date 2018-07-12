import { Component, OnInit } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-tshirts-db',
  templateUrl: './tshirts-db.component.html',
  styleUrls: ['./tshirts-db.component.css']
})
export class TshirtsDbComponent implements OnInit {
  apiRoot = 'http://localhost:4000/tshirts';
  results;

  constructor(private http: Http) { }


  ngOnInit() {
  }
  doGETAll() {
    console.log('GET ALL');
    const url = `${this.apiRoot}`;
    this.http.get(url).subscribe(res => {
      console.log(res.json());
      this.results = res.json();
    });
  }
  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}`;
    const search = new URLSearchParams();
    search.set('name', 'Happy Shirt');
    this.http.get(url, {search}).subscribe(res => {
      console.log(res.json());
      this.results = res.json();
    });
  }


}
