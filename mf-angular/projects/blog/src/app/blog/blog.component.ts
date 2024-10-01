import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@lib/auth';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public blogItems = [
    {
      id: 1,
      title: 'First blog item',
    },
    {
      id: 2,
      title: 'Second blog item',
    },
  ];

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    console.log('userName: ', this.authService.userName);
  }
}
