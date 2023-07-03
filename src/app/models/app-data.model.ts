import { personalInformationData } from "./personal-information.model"
import { SectionData } from "./section.model"
import { SkillData } from "./skill.model"

export interface AppData {
    name: string,
    section: SectionData[],
    personalInformation: personalInformationData,
    skills: SkillData[],
    languages: SkillData[]
}