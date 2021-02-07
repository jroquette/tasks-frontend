import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/users/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl + '/users/', val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl + '/users/'+val.id+'/', {name:val.name});
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl + '/users/'+val+'/');
  }

  getTaskByUser(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/tasks/?user_id='+val)
  }

  getTaskList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/tasks/');
  }

  addTask(val:any){
    return this.http.post(this.APIUrl + '/tasks/', {name:val.name, status:val.status, user_id:val.user});
  }

  updateTask(val:any){
    return this.http.put(this.APIUrl + '/tasks/'+val.id+'/', {name:val.name, status:val.status, user_id:val.user});
  }

  deleteTask(val:any){
    return this.http.delete(this.APIUrl + '/tasks/'+val+'/');
  }
  
  getAllUserNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/users/');
  }
}

