import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditClassComponent } from '../add-edit-class/add-edit-class.component';
import { ClassesService } from 'src/app/services/classes.service';
import { ClassRequestModel } from 'src/app/models/classes-request-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  classes: any = [];
  className: string;
  bsModalRef: BsModalRef;
  noContent: boolean = false;
  constructor(
    public modalService: BsModalService,
    private claessesService: ClassesService
  ) {}

  ngOnInit() {
    this.onGetAllClasses();
  }
  addNewClass() {
    this.claessesService.setUserAction('add');
    this.bsModalRef = this.modalService.show(
      AddEditClassComponent,
      Object.assign({}, { class: 'gray modal-xl' })
    );
    this.bsModalRef.content.onClose = added => {
      if (added) {
        this.onGetAllClasses();
      }
    };
  }

  editClass() {
    this.claessesService.setUserAction('edit');
    this.bsModalRef = this.modalService.show(
      AddEditClassComponent,
      Object.assign({}, { class: 'gray modal-xl' })
    );
  }
  searchClasses() {
    if (this.className !== '') {
      this.classes = this.classes.filter(res => {
        return res.className
          .toLocaleLowerCase()
          .match(this.className.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }

  onGetAllClasses() {
    this.claessesService.getAllClasses().subscribe((allClasses: Array<{}>) => {
      console.log(allClasses);
      if (allClasses.length !== 0) {
        this.classes = allClasses;
      } else {
        this.noContent = true;
      }
    });
  }
}
