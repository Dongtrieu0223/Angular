import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User.model';

@Pipe({
  name: 'searchByName'
})
export class SearchPipe implements PipeTransform {

  transform(listUser:User[], searchValue:string): User[] {
    if (!listUser || !searchValue) {
      return listUser;
    }
    return listUser.filter(User => User.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
