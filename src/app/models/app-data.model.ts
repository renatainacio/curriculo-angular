import { personalInformationData } from "./personal-information.model"
import { SectionData } from "./section.model"
import { SkillData } from "./skill.model"
import { SocialMediaData } from "./social.model"

export interface AppData {
    name: string,
    photo: string,
    section: SectionData[],
    personalInformation: personalInformationData,
    skills: SkillData[],
    languages: SkillData[],
    socialMedia: SocialMediaData
}