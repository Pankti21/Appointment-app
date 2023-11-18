import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  appointment : Appointment = {
    id: 1,
    title: "Walk",
    date: new Date('2023-05-05')
  }

}
