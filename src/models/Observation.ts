export enum Location {
  Tokyo,
  Helsinki,
  NY,
  Amsterdam,
  Dubai
}

export class Observation {
  id: string;
  location: number;
  locationStr?: string;
  temperature: number;

  constructor(obj?: any) {
    Object.keys(this).forEach(key => {
      this[key] = obj[key]
    });
  }

  locationToString(): string {
    return this.location.toString();
  }
}