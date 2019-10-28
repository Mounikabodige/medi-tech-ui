export enum Color {
  Red = 'Red',
  Yellow = 'Yellow',
  Green = 'Green',
}

export interface TableData {

  deviceId: number;
  deviceName: string;
  deviceType: string;
  performance: Color;
  efficiency: Color;
  location: string;

}
