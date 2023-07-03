import { Component, Input } from '@angular/core';
import { SocialMediaData } from 'src/app/models/social.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() public socialMedia!: SocialMediaData
}
