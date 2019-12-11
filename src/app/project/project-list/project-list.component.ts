import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: "enterprise co-operating platform",
      desc: "this is internal project",
      coverImg: "assets/img/covers/0.jpg"
    },
    {
      name: "automation project",
      desc: "this is internal project",
      coverImg: "assets/img/covers/1.jpg"
    }
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openNewProjectdialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {});

    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent, {});
  }
}
