import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokedex-ng-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.scss'],
})
export class MachineDetailComponent {
  @Input() machineId: string | number;
}
