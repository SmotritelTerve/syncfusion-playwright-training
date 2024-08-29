import {expect, Page} from '@playwright/test'
import {NewDoctorModal} from '../po/modals/newDoctor'
import {DoctorsPage} from '../po/pages/doctorsPage'
export async function addNewDoctor(
    page: Page,
    name: string,
    phone: string,
    email: string,
    education: string,
    designation: string,
) {
    const doctorsPage = new DoctorsPage(page)
    await doctorsPage.addNewDoctorBtn.click()

    const newDoctorModal = new NewDoctorModal(page)

    await expect(newDoctorModal.dialogHeader).toBeVisible
    await expect(newDoctorModal.dialogHeader).toHaveText('New Doctor')
    await newDoctorModal.doctorNameInput.fill(name)
    await newDoctorModal.doctorMobileInput.fill(phone)
    await newDoctorModal.emailInput.fill(email)
    await newDoctorModal.educationInput.fill(education)
    await newDoctorModal.designationInput.fill(designation)
    await newDoctorModal.saveBtn.click()
    await page.waitForTimeout(2000)
    await expect(newDoctorModal.dialogHeader).not.toBeVisible
}