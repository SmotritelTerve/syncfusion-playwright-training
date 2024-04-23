import {Page, Locator} from "@playwright/test"
 
export class HeaderComponent{
    readonly page: Page
    readonly logoutBtn: Locator
    readonly clinicNameLbl: Locator

    constructor(page: Page){
        this.page = page
        this.logoutBtn = page.locator('.logout-container')
        this.clinicNameLbl = page.locator('.clinic-name')
    }
}