import { Page, Locator } from 'playwright';

export class SpecialistCardComponent {
    readonly specialistCard: Locator
    readonly name: Locator
    readonly education: Locator
    readonly specialization: Locator
    readonly experience: Locator

    constructor(page: Page) {
        this.specialistCard = page.locator('div[class="e-cards specialist-item"]')
        this.name = page.locator('.specialist-item .name')
        this.education = page.locator('.specialist-item .education')
        this.specialization = page.locator('.specialist-item .specialization-text')
        // this.education = page.locator('.specialist-item .specialization .specialization-text')
        this.experience = page.locator('.specialist-item .experience .specialization-text')
    }
}