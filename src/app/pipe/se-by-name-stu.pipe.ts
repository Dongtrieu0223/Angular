import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/Student.model';

@Pipe({
  name: 'seByNameStu'
})
export class SeByNameStuPipe implements PipeTransform {

  transform(listStudent:Student[], searchValue:string): Student[] {
    if (!listStudent || !searchValue) {
      return listStudent;
    }
    return listStudent.filter(Student => Student.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }


}
