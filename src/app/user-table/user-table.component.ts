import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsersService } from 'src/services/users.service';
import { UserDataInterface } from './user.data.ts/user-data.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit, OnDestroy {
  public id!: number;
  public usersTableItems = [];
  public usersTabledata: UserDataInterface[] = [];
  private unsubscraber$ = new Subject<null>;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activatedRoute.data.subscribe(data => {
      this.getUser(params['id']);
      });
    });
  }

  public getUser(id: number) {
    this.usersService.getUser(id)
      .pipe(takeUntil(this.unsubscraber$))
      .subscribe((data) => {
        this.usersTabledata = [
          {
            label: 'Id',
            value: data.userId,
          },
          {
            label: 'Name',
            value: data.name,
          },
          {
            label: 'Owner',
            value: data.owner,
          },
          {
            label: 'Created On',
            value: data.createdDate,
          },
          {
            label: 'Updated On',
            value: data.updatedDate,
          }
        ]
      });
  }

  ngOnDestroy(): void {
    this.unsubscraber$.next(null);
    this.unsubscraber$.complete();
  }
}