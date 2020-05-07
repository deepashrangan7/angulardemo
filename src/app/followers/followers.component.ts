import { Component, OnInit } from '@angular/core';
import { Followerservice } from '../services/follwers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  ngOnInit() {
    this.service.getAllFollwers().subscribe(res => {
      for (let k in res) {
        this.followers.push(res[k]);
      }
    })

  }
  followers: any = [];
  constructor(private service: Followerservice) {
  }

  // this.service.getAllFollowers().subscribe(res => {
  //   for (const k in res) {
  //     this.followers.push(res[k]);
  //   }
  // })


}