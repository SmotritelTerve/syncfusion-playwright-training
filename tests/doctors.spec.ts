import {test, expect, Page} from '@playwright/test'
import {NewDoctorModal} from '../po/modals/newDoctor'
import {DoctorsPage} from '../po/pages/doctorsPage'
import { addNewDoctor} from '../helpers/doctorsHelper'

import { doctor } from '../data/doctor'
import { urls } from '../data/urls'

const DEFAULT_NUMBER_OF_CARDS = 7

let doctorsPage: DoctorsPage
let newDoctorModal: NewDoctorModal
let numberOfCards: number

test('Verify Doctors page - @doctors', async ({ page }) => {

    await test.step('open Doctors page', async () => {
        await page.goto(urls.doctors)
    })

    await test.step('Check page title', async() => {
        await expect(page).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    })

     await test.step('Verify default number of doctor cards ', async() => {
        doctorsPage = new DoctorsPage(page)
        newDoctorModal = new NewDoctorModal(page)
        
        await expect(doctorsPage.pageTitle).toHaveText('DOCTORS LIST')
        await expect(doctorsPage.specializationDropBox).toBeVisible()
        await expect(doctorsPage.addNewDoctorBtn).toBeVisible()

        numberOfCards = await doctorsPage.getNumberOfCards(page)
        expect(numberOfCards).toEqual(DEFAULT_NUMBER_OF_CARDS)
    })

    await test.step('Add new doctor', async() => {

        await addNewDoctor(
            page,
            doctor.name,
            doctor.phone,
            doctor.email,
            doctor.education,
            doctor.designation
        )
    }) 

    await test.step('Verify new doctor card appears on the Doctors page', async() => {
        doctorsPage = new DoctorsPage(page)
        numberOfCards = await doctorsPage.getNumberOfCards(page)
        expect(numberOfCards).toEqual(DEFAULT_NUMBER_OF_CARDS + 1)
        const newDoctorCard = await doctorsPage.getCardByIndex(page, DEFAULT_NUMBER_OF_CARDS + 1)
        expect (newDoctorCard.locator('.specialist-detail .name')).toHaveText(`Dr. ${doctor.name}`)
        expect (newDoctorCard.locator('.specialist-detail .education')).toHaveText(doctor.education, {ignoreCase: true})
        expect (newDoctorCard.locator('.specialist-detail .specialist-experience .specialization .specialization-text')).toHaveText(doctor.designation)
    })
});