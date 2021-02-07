import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  constructor(private service: SharedService) {
    this.ModalTitle= ''
   }

  TasksList:any=[];
  ModalTitle:string;
  ActivateAddEditTaskComp:boolean=false;
  task:any;

  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      id:0,
      name:"",
      status:"",
      user_id:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;
  }

  editClick(item:any){
    this.task=item;
    this.ModalTitle='Edit Task';
    this.ActivateAddEditTaskComp=true;
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }

  deleteClick(item:any){
    if(confirm('You are sure?')){
      this.service.deleteTask(item.id).subscribe(data=>{
        alert('Deleted Task');
        this.refreshTaskList();
      })
    }
  }

  refreshTaskList(){
    this.service.getTaskList().subscribe(data=>{
      this.TasksList=data;
    });
  }

}
