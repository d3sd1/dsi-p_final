import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActive, UserActivityData } from '../data/user-activity';

@Injectable()
export class UserActivityService extends UserActivityData {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  private generateUserActivityRandomData(date) {
    return {
      date,
      pagesVisitCount: this.getRandom(1000),
      deltaUp: this.getRandom(1) % 2 === 0,
      newVisits: this.getRandom(100),
    };
  }

  data = {};

  constructor(private periods: PeriodsService) {
    super();
    this.data = {
      semana: this.getDataWeek(),
      mes: this.getDataMonth(),
      año: this.getDataYear(),
    };
  }

  private getDataWeek(): UserActive[] {
    return this.periods.getWeeks().map((semana) => {
      return this.generateUserActivityRandomData(semana);
    });
  }

  private getDataMonth(): UserActive[] {
    const currentDate = new Date();
    const days = currentDate.getDate();
    const mes = this.periods.getMonths()[currentDate.getMonth()];

    return Array.from(Array(days)).map((_, index) => {
      const date = `${index + 1} ${mes}`;

      return this.generateUserActivityRandomData(date);
    });
  }

  private getDataYear(): UserActive[] {
    return this.periods.getYears().map((año) => {
      return this.generateUserActivityRandomData(año);
    });
  }

  getUserActivityData(period: string): Observable<UserActive[]> {
    return observableOf(this.data[period]);
  }
}
