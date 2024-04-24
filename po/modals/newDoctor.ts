import {Page, Locator} from "@playwright/test"
 
export class NewDoctorModal{
    readonly page: Page
    readonly doctorNameInput: Locator
    readonly doctorMobileInput: Locator
    readonly emailInput: Locator
    readonly educationInput: Locator
    readonly designationInput: Locator
    readonly experienceCombobox: Locator
    readonly dutyTimingCombobox: Locator
    readonly preferanceMenuItm: Locator
    readonly cancelBtn: Locator
    readonly saveBtn: Locator

    constructor(page: Page){
        this.page = page
        this.doctorNameInput = page.locator('#Name input')
        this.doctorMobileInput = page.locator('input#DoctorMobile')
        this.emailInput = page.locator('input[name="Email')
        this.educationInput = page.locator('input[name="Education"]')
        this.designationInput = page.locator('input[name="Designation')
        this.experienceCombobox = page.locator('#Experience').getByRole('combobox')
        this.dutyTimingCombobox = page.locator('#DutyTiming').getByRole('combobox')
        // this.cancelBtn = page.locator('.button-container button.e-btn:not(.e-primary)')
        this.cancelBtn = page.getByText('Cancel');
        // this.saveBtn = page.locator('.button-container button.e-primary')
        this.saveBtn = page.getByText('Save');
    }
}