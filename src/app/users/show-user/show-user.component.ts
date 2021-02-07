import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service: SharedService) { 
    this.ModalTitle= '';
  }

  
  UsersList:any=[];
  UserTaskList:any=[];
  ModalTitle:string;
  ActivateAddEditUserComp:boolean=false;
  ActivateShowIssuesComp:boolean=false;
  user:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      id:0,
      name:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUserComp=true;
  }

  editClick(item:any){
    this.user=item;
    this.ModalTitle='Edit User';
    this.ActivateAddEditUserComp=true;
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.ActivateShowIssuesComp=false;
    this.refreshUserList();
  }

  deleteClick(item:any){
    if(confirm('You are sure?')){
      this.service.deleteUser(item.id).subscribe(data=>{
        alert('Deleted User');
        this.refreshUserList();
      })
    }
  }

  getIssuesClick(item:any){
    this.user = item;
    this.ModalTitle="Tasks of "+item.name;
    this.ActivateShowIssuesComp=true;
    this.service.getTaskByUser(item.id).subscribe(data=>{
      this.UserTaskList=data;
    });
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UsersList=data;
    });
  }


}
