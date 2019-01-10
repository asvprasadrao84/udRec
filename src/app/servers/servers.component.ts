import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  valueEntered = "";
  serverId=0;
  serverStatus = "offline";
  serverNewStatus = "";
  display = true;
  constructor() { 
    this.serverId=101;
    this.display=false;
  }

  ngOnInit() {
  }

  getServerStatus(){
    this.serverNewStatus = "online";
    this.serverId=201;
    this.display=false;
    return this.serverNewStatus;
  }
}
