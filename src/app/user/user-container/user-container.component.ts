import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  value = 1;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  addValue(): void {
    this.value++;
  }

  minusValue(): void {
    this.value--;
  }

}
