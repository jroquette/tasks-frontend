import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.css']
})
export class AddEditTasksComponent implements OnInit {

  constructor(private service: SharedService) { 
    this.id='';
    this.name='';
    this.status='';
    this.user='';
  }

  @Input() task:any;
  id:string;
  name:string;
  status:string;
  user:any;

  Userlist:any=[]


  ngOnInit(): void {
    this.loadTaskList();
  }

  loadTaskList(){
    this.service.getAllUserNames().subscribe((data:any)=>{
      this.Userlist=data;
      this.id=this.task.id;
      this.name=this.task.name;
      this.status=this.task.status;
      this.user=this.task.user;
    });
  }

  addTask(){
    var val = {id:this.id,
              name:this.name,
              status:this.status,
              user:this.user.id};
    this.service.addTask(val).subscribe(res=>{
      alert('Task Added');
    });
  }

  updateTask(){
    var val = {id:this.id,
               name:this.name,
               status:this.status,
               user:this.user};
    val.user = val.user.split('-')[0];
    if (val.user == 0){
      val.user =null;
    }
    this.service.updateTask(val).subscribe(res=>{
      alert('Updated Task');
    });
  }

}
