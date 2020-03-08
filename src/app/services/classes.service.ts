import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ClassRequestModel } from '../models/classes-request-model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private userAction: string;
  constructor(private http: HttpClient) {}

  getUserAction() {
    return this.userAction;
  }
  setUserAction(userAction) {
    this.userAction = userAction;
  }
  getAllClasses() {
    return this.http.get(environment.apiUrl + '/classes');
  }

  addClass(body: ClassRequestModel) {
    return this.http.post(environment.apiUrl + '/classes', body);
  }

  editClass(body: ClassRequestModel) {
    return this.http.put(environment.apiUrl + '/classes/' + body.id, body);
  }
  deleteClass(id) {
    return this.http.delete(environment.apiUrl + `/classes/${id}`);
  }
}
