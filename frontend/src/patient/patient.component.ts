import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientDto } from '../models/patient-dto';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  firstname = "";
  lastname = "";
  BDate = new Date();
  patientForm : FormGroup;

  constructor  (private formBuilder:FormBuilder){
    this.patientForm = this.formBuilder.group<PatientDto>({
      id: 0,
      firstName: '',
      lastName: '',
      BirthDate: new Date(),
      Taj: 3,
      Gender: ''
    });
  };

  

 /* async onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm);
      const patientData: PatientDto = this.patientForm.value;
      console.log(patientData);
      this.patienService.create(patientData).subscribe({
        next: (patientCreated) => {
          this.dataSource.data = this.patientForm
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      console.log("ide lehet kellene csinálni vaalami popupot ha lesz idő 🙂");
    }
    console.log(this.patientForm);
  }
*/
}
