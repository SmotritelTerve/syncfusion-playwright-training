import { Page, Locator } from "@playwright/test"
import { SpecialistCardComponent } from '../components/specialistCardComponent';

export class DoctorsPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly specializationDropBox: Locator
    readonly addNewDoctorBtn: Locator
    readonly specialistCard: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.locator('.module-title > .title')
        this.specializationDropBox = page.getByRole('main').locator('#Specialization')
        this.addNewDoctorBtn = page.getByText('Add New Doctor')
    }

    async getNumberOfCards(
        page: Page
    ): Promise<number> {
        const specialistCardComponent = new SpecialistCardComponent(page)
        const numberOfCards = specialistCardComponent.specialistCard.count()
        return numberOfCards
    }

    async getCardByIndex(
        page: Page,
        index: number
    ): Promise<Locator> {
       const specialistCard = page.locator(`div[id="Specialist_${index}"]`)
        return specialistCard
    }
}