import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StudentsService} from '../../../../core/services/students.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  // @ts-ignore
  @ViewChild('childModal') public childModal: ElementRef;
  @Input() selectedStudent: any;
  @Output() closeCardEmitter = new EventEmitter();
  @Output() getStudents = new EventEmitter();

  updateForm;

  constructor(public studentsService: StudentsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      first_name: [this.selectedStudent.first_name, [Validators.required]],
      last_name: [this.selectedStudent.last_name, [Validators.required]],
      last_name_second: [this.selectedStudent.last_name_second, [Validators.required]],
      email: [this.selectedStudent.email, [Validators.required, Validators.email]],
      phone: [this.selectedStudent.phone, [Validators.required]],
      birth_date: [this.selectedStudent.birth_date, [Validators.required]]
    });
  }

  closeCard() {
    this.closeCardEmitter.emit();
  }

  deleteStudent() {
    console.log(this.selectedStudent);
    this.studentsService.deleteStudent(this.selectedStudent.id).subscribe(deleteResponse => {
      console.log(deleteResponse);
      this.getStudents.emit();
      this.closeCardEmitter.emit();
    });
  }

  updateStudent() {
    this.studentsService.updateStudent(this.updateForm.getRawValue(), this.selectedStudent.id).subscribe(updateResponse => {
      console.log(updateResponse);
      this.selectedStudent = this.updateForm.getRawValue();
      this.childModal.nativeElement.click();
      this.getStudents.emit();
    });
  }

}
