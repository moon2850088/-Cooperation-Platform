import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-invite",
  templateUrl: "./invite.component.html",
  styleUrls: ["./invite.component.scss"]
})
export class InviteComponent implements OnInit {
  items = [
    {
      id: 1,
      name: "zhangsan"
    },
    {
      id: 2,
      name: "chunbi"
    }
  ];
  constructor() {}

  ngOnInit() {}

  displayUser(user: { id: string; name: string }) {
    return user ? user.id : "";
  }
}
