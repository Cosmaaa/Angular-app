import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm: string = '';

  onSearch() {
    // You can implement the search logic here
    console.log('Searching for:', this.searchTerm);
   }
}
