import { Observable } from 'rxjs';

export interface mes {
  mes: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Electricity {
  title: string;
  active?: boolean;
  months: mes[];
}

export interface ElectricityChart {
  label: string;
  value: number;
}

export abstract class ElectricityData {
  abstract getListData(): Observable<Electricity[]>;
  abstract getChartData(): Observable<ElectricityChart[]>;
}
