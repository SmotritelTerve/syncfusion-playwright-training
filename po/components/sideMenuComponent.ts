import {Page, Locator} from "@playwright/test"
 
export class SideMenuComponent{
    readonly page: Page
    readonly plannerSiderBar: Locator
    readonly nameLbl: Locator
    readonly dashboardMenuItm: Locator
    readonly scheduleMenuItm: Locator
    readonly doctorsMenuItm: Locator
    readonly patiensMenuItm: Locator
    readonly preferanceMenuItm: Locator
    readonly aboutMenuItm: Locator

    constructor(page: Page){
        this.page = page
        this.plannerSiderBar = page.locator('#plannerSiderBar')
        this.dashboardMenuItm = page.locator('.sidebar-item.dashboard')
        this.scheduleMenuItm = page.locator('.sidebar-item.calendar')
        this.doctorsMenuItm = page.locator('.sidebar-item.doctors')
        this.patiensMenuItm = page.locator('.sidebar-item.patients')
        this.preferanceMenuItm = page.locator('.sidebar-item.preference')
        this.aboutMenuItm = page.locator('.sidebar-item.about')
    }
}