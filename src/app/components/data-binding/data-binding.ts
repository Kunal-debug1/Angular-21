import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // bindable properties
  courseName = 'Angular Fundamentals';
  cityName = 'Mumbai';

  // class binding example (set to 'highlight' or empty)
  className = 'highlight';

  // dynamic input types
  inputType: string = 'text';
  inputType1: string = 'password';
  inputType2: string = 'email';
  inputType3: string = 'number';
  inputType4 = 'radio';
  inputType5 = 'checkbox';
  inputType6 = 'date'
  inputType7 = 'button'

  // Methods used in template
  showWelcomeMessage() {
    // could be an in-page message or a toast; using alert for simplicity
    alert(`Welcome! Current course: ${this.courseName} — City: ${this.cityName}`);
  }

  changeCourseName(newName: string) {
    this.courseName = newName;
  }

  onCityChanged(selected: string) {
    // sets cityName from <select>
    this.cityName = selected;
    // any extra logic can go here
    console.log('City changed to', selected);
  }
}