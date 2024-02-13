import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ConsumingAPIAngEx1';
  advices: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://api.adviceslip.com/advice').subscribe({
      next: response => this.advices = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed.')
    })
  }



}
