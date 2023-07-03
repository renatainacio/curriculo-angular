import { Component, Input } from '@angular/core';
import { ItemData } from 'src/app/models/item.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() public sectionTitle!: string
  @Input() public items!: ItemData[]
}
