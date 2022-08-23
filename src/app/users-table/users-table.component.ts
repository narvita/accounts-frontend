import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Route } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserInterface } from 'src/interfaces/user.interface';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent implements OnInit, OnDestroy{
  public users!: UserInterface[];
  private unsubscraber$ = new Subject<null>;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .pipe(takeUntil(this.unsubscraber$))
    .subscribe( (data: UserInterface[]) => {
      this.users = data;
    })
  }

  ngOnDestroy(): void {
    this.unsubscraber$.next(null);
    this.unsubscraber$.complete();
  }
}


