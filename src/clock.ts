export class Clock {
  constructor(hours: number, minutes?: number) {}

  public toString() {}

  public equals(other: Clock) {}

  public plus(minutes: number): Clock {
    return this;
  }

  public minus(minutes: number): Clock {
    return this;
  }
}
