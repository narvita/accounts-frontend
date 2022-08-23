import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserInterface } from 'src/interfaces/user.interface';
import { UsersService } from 'src/services/users.service';
import { UserDataInterface } from './user.data.ts/user-data.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy{
  public user!: UserInterface;
  public id!: number;
  public usersTableItems = [];
  public usersTabledata: UserDataInterface[] = [];
  private unsubscraber$ = new Subject<null>;


  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.id = this.activatedRoute.snapshot.params['id'];
      // console.log(this.id);
      
      this.getUser(this.id);
    });
    
  }

  public getUser(id: number) {
    this.usersService.getUser(id)
      .pipe(takeUntil(this.unsubscraber$))
      .subscribe((data) => {
        this.user = data;
        console.log(data);
        this.usersTabledata = [
          {
            label: 'Id',
            value: data.id,
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
      
}
