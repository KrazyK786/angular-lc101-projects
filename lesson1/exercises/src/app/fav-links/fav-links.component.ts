import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks:string[] = ["www.google.com","www.mlssoccer.com"];
  constructor() { }

  ngOnInit() {
  }

}
