import { Locator, Page } from "@playwright/test";

export class TransactionPage{
    readonly page: Page;
    readonly nextButton: Locator;
    readonly confirmCart: Locator;
    readonly choosePayment: Locator;
    readonly confirmPayment: Locator;
    readonly address: Locator;
    readonly gotoContract: Locator;
    readonly confirmContract: Locator;
    readonly signContract: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nextButton = page.getByTestId('buttonNext');
        this.confirmCart = page.getByTestId('buttonPayNow');
        this.choosePayment = page.getByTestId('paymentMethod-combinePayment-CA');
        this.confirmPayment = page.getByTestId('addPaymentMethod');
        this.address = page.locator('span').filter({ hasText: 'ที่อยู่ตามใบแจ้งค่าใช้บริการ บ้านเลขที่ 6 หมู่บ้าน เอไอเอส อาคาร 6' });
        this.gotoContract = page.getByTestId('buttonถัดไป');
        this.confirmContract = page.getByTestId('confirmContract');
        this.signContract = page.getByTestId('inputSignPad');

    }

    async ConfirmCart() {
        await this.confirmCart.click();
    } 

    async ChoosePaymentMethod() {
        await this.choosePayment.check();
        await this.confirmPayment.click();

    }

    async ChooseAddress() {
        await this.address.click();
    }

    async gotoContractPage() {
        await this.gotoContract.click();
        await this.page.waitForTimeout(10000);
    }

    async ConfirmContract() {
        await this.confirmContract.click();
        await this.nextButton.click();
    }

    async SignContract() {
        await this.signContract
        .click({
            position: {
                x: 646,
                y: 194
            }
        });
        await this.nextButton.click();
        

    }

}
