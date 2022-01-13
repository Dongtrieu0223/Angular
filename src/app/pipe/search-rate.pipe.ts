import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/Student.model';

@Pipe({
  name: 'searchRate'
})
export class SearchRatePipe implements PipeTransform {

  transform(listStudent:Student[], searchValue:string): Student[] {
    if (!listStudent || !searchValue) {
      return listStudent;
    }
    return listStudent.filter(Student => Student.rate.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
