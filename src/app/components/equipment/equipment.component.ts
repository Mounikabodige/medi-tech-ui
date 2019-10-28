import {Component, OnInit} from '@angular/core';
import {Color, TableData} from '../../Types/DataTypes';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})


export class EquipmentComponent implements OnInit {


  tableData: TableData[] = [{
    deviceId: 1,
    deviceName: 'Abc 1',
    deviceType: 'Type 1',
    performance: Color.Red,
    efficiency: Color.Yellow,
    location: 'Milling'
  },
    {
      deviceId: 2,
      deviceName: 'Abc 2',
      deviceType: 'Type 2',
      performance: Color.Green,
      efficiency: Color.Yellow,
      location: 'Packing'
    },
    {
      deviceId: 3,
      deviceName: 'Abc 3',
      deviceType: 'Type 3',
      performance: Color.Yellow,
      efficiency: Color.Red,
      location: 'Milling'
    }];

  displayedColumns: string[] = ['deviceId', 'deviceName', 'deviceType', 'performance', 'efficiency', 'location'];
  dataSource = this.tableData;

  constructor() {
  }

  ngOnInit() {
  }

}
