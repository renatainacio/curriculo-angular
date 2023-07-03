import { Component } from '@angular/core';
import { AppData } from './models/app-data.model';
import { contactData } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculo';

  public receiveContact(event: contactData){
    console.log(event);
  }

  public data: AppData = {
    name: "Maria da Silva",
    photo: "assets/images/avatar.jpg",
    section:[
    {
      sectionTitle: "Work Experience",
      items: [
        {
          companyName: "Magalu",
          jobTitle: "Senior Designer",
          startDate: "Jan/20",
          endDate: "Current",
          description: "Senior designer at Magalu e-commerce."
        },
        {
          companyName: "Amazon",
          jobTitle: "Junior Designer",
          startDate: "May/18",
          endDate: "Dec/19",
          description: "Junior designer at Amazon"
        },
        {
          companyName: "Instagram",
          jobTitle: "Intern",
          startDate: "Feb/17",
          endDate: "Apr/18",
          description: "Responsible for social medias content"
        }
      ]
    },
    {
      sectionTitle: "Education",
      items: [
        {
          companyName: "Harvard University",
          jobTitle: "Design",
          startDate: "Feb/14",
          endDate: "Apr/17",
          description: "Undergraduate degree with a major in Design"
        },
        {
          companyName: "Ada",
          jobTitle: "UX/UI",
          startDate: "May/20",
          endDate: "Dec/20",
          description: "UX/UI course at Ada"
        },
        {
          companyName: "Udemy",
          jobTitle: "Advanced Photoshop",
          startDate: "May/18",
          endDate: "Dec/18",
          description: "Advanced Photoshop Course"
        }
      ]
    }],
    personalInformation: {
      profession: "Designer",
      location: "São Paulo - Brazil",
      emailAddress: "maria@email.com",
      phoneNumber: "+55(11)98123-4567"
    },
    skills:[
      {
        skillName: "Adobe Photoshop",
        skillLevel: "Proficient"
      },
      {
        skillName: "Photography",
        skillLevel: "Advanced"
      },
      {
        skillName: "Social Media",
        skillLevel: "Advanced"
      },
      {
        skillName: "Illustrator",
        skillLevel: "Basic"
      },
    ],
    languages:[
      {
        skillName: "Portuguese",
        skillLevel: "Native"
      },
      {
        skillName: "English",
        skillLevel: "Fluent"
      },
      {
        skillName: "Spanish",
        skillLevel: "Advanced"
      },
      {
        skillName: "German",
        skillLevel: "Intermediate"
      }
    ],
    socialMedia: {
      facebookLink: "https://facebook.com/",
      instagramLink: "https://instagram.com/",
      pinterestLink: "https://pinterest.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://linkedin.com/"
    }
  }
}
