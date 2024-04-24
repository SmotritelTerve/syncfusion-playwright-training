import {Page, Locator} from "@playwright/test"
 
export class DoctorsPage{
    readonly page: Page
    readonly pageTitle: Locator
    readonly specializationDropBox: Locator
    readonly addNewDoctorBtn: Locator

    constructor(page: Page){
        this.page = page
        this.pageTitle = page.locator('.module-title > .title')
        this.specializationDropBox = page.getByPlaceholder('Select a Specialization')
        this.addNewDoctorBtn = page.getByText('Add New Doctor')
    }
}