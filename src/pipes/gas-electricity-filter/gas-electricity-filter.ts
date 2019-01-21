import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GasElectricityFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'gasElectricityFilter',
})
export class GasElectricityFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    let gasStatus = args[0][0];
    let electricityStatus = args[0][1];
    if (gasStatus && electricityStatus) return value;
    return value.filter((a) => {
      if (gasStatus && (a.kind == 'gas') || electricityStatus && (a.kind == 'electricity')) return a;
    })
  }
}
