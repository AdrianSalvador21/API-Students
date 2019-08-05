import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from '../../../../core/services/students.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // @ts-ignore
  @ViewChild('childModal') public childModal: ElementRef;
  students = [];
  selectedStudent: any;

  addForm = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    last_name_second: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    birth_date: ['', [Validators.required]]
  });

  constructor(public studentsService: StudentsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getStudents().subscribe(studentsResponse => {
      this.students = studentsResponse;
    });
  }

  studentDetail(id) {
    this.closeCard();
    this.studentsService.getStudentDetail(id).subscribe(detailResponse => {
      this.selectedStudent = detailResponse;
    });
  }

  createStudent() {
    this.studentsService.createStudent(this.addForm.getRawValue()).subscribe(createResponse => {
      if (!!createResponse && createResponse.id !== '') {
        this.getStudents();
        this.childModal.nativeElement.click();
      }
    });
  }

  closeCard() {
    this.selectedStudent = null;
  }

}
