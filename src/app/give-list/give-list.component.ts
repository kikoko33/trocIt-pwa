import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-give-list',
  templateUrl: './give-list.component.html',
  styleUrls: ['./give-list.component.scss']
})
export class GiveListComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    console.log(localStorage.getItem('currentUsr'));
    this.itemService.findAll().subscribe(data => {
      this.items = data;
    });
  }

  public remove(id: number) {
    console.log(id);
    this.itemService.delete(id).subscribe(
      res => {
        console.log(res); // Get the ID from backend...
        this.ngOnInit();
      },
      err => {
        console.log('Error occured');
      }
    );
  }

}
