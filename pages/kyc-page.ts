import { Locator, Page } from "@playwright/test";

export class KYCPage{
    readonly page: Page;
    readonly chooseTakePhoto: Locator;
    readonly takePhotoButton: Locator;
    readonly nextButton: Locator;
    readonly custInfoNextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chooseTakePhoto = page.getByRole('button', { name: ' ถ่ายรูปบัตร' });
        this.takePhotoButton = page.getByTestId('captureIdCard');
        this.nextButton = page.getByTestId('buttonNext');
        this.custInfoNextButton = page.getByTestId('buttonNext');

    }

    async TakePhoto() {
        await this.chooseTakePhoto.click();
        await this.takePhotoButton.click();
        await this.nextButton.click();
    } 

    async CheckCustInfo() {
        await this.custInfoNextButton.click();
    }

    

}
