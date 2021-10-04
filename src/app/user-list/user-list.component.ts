import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
datas: any[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.datas = this.api.getUser();
  }

  addUser(){
    return this.router.navigate(['sampleApp/add']);
  }

  deletes(event){
    this.datas.splice(event, 1);
  }
}
