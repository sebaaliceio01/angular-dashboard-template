import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Pipe({
  name: 'parseRole'
})
export class ParseRolePipe implements PipeTransform {

  transform(value: any, repleceText: string = 'N/A'): any {
    const types = environment.roles

    if (!value) return repleceText

    switch (value) {
      case types.adminGeneral:
        return 'General Admin'
      case types.admin:
        return 'Admin'
        case types.manager:
        return 'Manager'
    }
  }
}
