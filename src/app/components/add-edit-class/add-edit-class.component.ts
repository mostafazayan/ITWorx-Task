import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ClassRequestModel } from 'src/app/models/classes-request-model';

@Component({
  selector: 'app-add-edit-class',
  templateUrl: './add-edit-class.component.html',
  styleUrls: ['./add-edit-class.component.scss']
})
export class AddEditClassComponent implements OnInit {
  class: ClassRequestModel = {
    id: '0',
    section: '',
    className: '',
    school: '',
    grade: ''
  };
  onClose: any;
  userAction: string = this.claessesService.getUserAction();
  classes: any = [];
  selectedSchool = false;
  newClasses = [];
  currentSchool: any;
  constructor(
    private claessesService: ClassesService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.onGetAllClasses();
  }

  onGetAllClasses() {
    this.claessesService.getAllClasses().subscribe((allClasses: Array<{}>) => {
      console.log(allClasses);
      this.classes = allClasses;
    });
  }

  onDeleteTask(classId) {
    const confirmDelete = confirm('are you sure?');
    if (confirmDelete) {
      console.log(confirmDelete);
      this.claessesService.deleteClass(classId).subscribe(
        del => {
          // location.reload();
          // this.bsModalRef.hide();
          this.onGetAllClasses();
        },
        err => console.log(err)
      );
    }
  }

  onChangeSelectValue(event) {
    console.log(event.target.value);
    this.currentSchool = event.target.value;
    if (event.target.value === '') {
      this.selectedSchool = false;
    } else {
      this.selectedSchool = true;
    }
  }

  submit() {
    console.log(this.class);
    this.class.id = `${Date.now() + Math.random()}`;
    this.class.school = this.currentSchool;
    this.claessesService.addClass(this.class).subscribe(res => {
      console.log(res);
      this.onClose(res);
      // window.location.reload();
      this.bsModalRef.hide();
    });
  }

  onEdit() {
    console.log(this.class);
    this.class.id = `${Date.now() + Math.random()}`;
    this.class.school = this.currentSchool;
    this.claessesService.editClass(this.class).subscribe(res => {
      console.log(res);
      // this.onClose(res);
      // window.location.reload();
      this.bsModalRef.hide();
    });
  }

  onChangeClasses(classes) {
    console.log(classes.target);
  }
}
