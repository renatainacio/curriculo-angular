import { Component, Input } from '@angular/core';
import { personalInformationData } from 'src/app/models/personal-information.model';
import { SkillData } from 'src/app/models/skill.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() public name!: string;
  @Input() public photo!: string;
  @Input() public personalInformation!: personalInformationData
  @Input() public skills!: SkillData[]
  @Input() public languages!: SkillData[]
}
