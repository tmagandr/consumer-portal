import { Pipe, PipeTransform } from '@angular/core';
import { InfoComponent } from './info/info.component';

@Pipe({
  name: 'searchText',
  pure: false
})
export class SearchTextPipe implements PipeTransform {

  transform(items: Array<any>, nameSearch: string, roleSearch: string, companySearch: string,
            appSearch: string, managerSearch: string, locationSearch: string){
    if (items && items.length){
        return items.filter(item =>{
            if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                return false;
            }
            if (roleSearch && item.role.toLowerCase().indexOf(roleSearch.toLowerCase()) === -1){
                return false;
            }
            if (companySearch && item.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
                return false;
            }
            if (appSearch && item.app.toLowerCase().indexOf(appSearch.toLowerCase()) === -1){
              return false;
          }
          if (managerSearch && item.manager.toLowerCase().indexOf(managerSearch.toLowerCase()) === -1){
            return false;
        }
        if (locationSearch && item.location.toLowerCase().indexOf(locationSearch.toLowerCase()) === -1){
          return false;
      }
            return true;
       })
    }
    else{
        return items;
    }
}
  }


