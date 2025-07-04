import { expect, Locator, Page } from "@playwright/test";

export class KYCPage {
    readonly page: Page;
    readonly chooseTakePhoto: Locator;
    readonly takePhotoButton: Locator;
    readonly nextButton: Locator;
    readonly custInfoNextButton: Locator;
    readonly NewOrder: Locator;
    // readonly CheckCondition: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chooseTakePhoto = page.getByRole('button', { name: ' ถ่ายรูปบัตร' });
        this.takePhotoButton = page.getByTestId('captureIdCard');
        this.nextButton = page.getByTestId('buttonNext');
        this.custInfoNextButton = page.getByTestId('buttonNext');

        // this.CheckCondition = page.getByText('ต้องการทำรายการเดิมหรือไม่?');
        this.NewOrder = page.getByTestId('buttonCreateNewOrder');

    }

    async TakePhoto() {
        await this.chooseTakePhoto.click();
        await this.takePhotoButton.click();
        await this.nextButton.click();

    }

    async ConfirmTakePhoto() {
        
        try {
            await this.NewOrder.waitFor({ state: 'visible', timeout: 20000 });
            await this.NewOrder.click();
            await this.nextButton.click();

        }
        catch (error) {
            console.log("wtf");
             await this.nextButton.click();

        }
    }


    async CheckCustInfo() {
        await this.custInfoNextButton.click();
    }



}
