import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service: SharedService) {
    this.id='';
    this.name='';
   }

  @Input() user:any;
  id:string;
  name:string;

  ngOnInit(): void {
    this.id=this.user.id;
    this.name=this.user.name;
  }

  addUser(){
    var val = {id:this.id,
               name:this.name};
    this.service.addUser(val).subscribe(res=>{
      alert('User Added');
    });
  }

  updateUser(){
    var val = {id:this.id,
               name:this.name};
    this.service.updateUser(val).subscribe(res=>{
      alert('Updated User');
    });
  }
}
