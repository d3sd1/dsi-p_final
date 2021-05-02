import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2013', '2014', '2015',
      '2016', '2017', '2018',
      '2019', '2020', '2021',
    ];
  }

  getMonths() {
    return [
      'Ene', 'Feb', 'Mar',
      'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep',
      'Oct', 'Nov', 'Dic',
    ];
  }

  getWeeks() {
    return [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];
  }
}
