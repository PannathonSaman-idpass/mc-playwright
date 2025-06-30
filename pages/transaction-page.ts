import { Locator, Page } from "@playwright/test";

export class TransactionPage{
    readonly page: Page;
    readonly nextButton: Locator;
    readonly confirmCart: Locator;
    readonly choosePayment: Locator;
    readonly confirmPayment: Locator;
    readonly address: Locator;
    readonly gotoContract: Locator;
    readonly checkContract: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nextButton = page.getByTestId('buttonNext');
        this.confirmCart = page.getByTestId('buttonPayNow');
        this.choosePayment = page.getByTestId('paymentMethod-combinePayment-CA');
        this.confirmPayment = page.getByTestId('addPaymentMethod');
        this.address = page.locator('span').filter({ hasText: 'ที่อยู่ตามใบแจ้งค่าใช้บริการ บ้านเลขที่ 6 หมู่บ้าน เอไอเอส อาคาร 6' });
        this.gotoContract = page.getByTestId('buttonถัดไป');
        this.checkContract = page.getByTestId('confirmContract');

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

    async gotoContract() {
        await this.gotoContract.click();
        await page.goto('https://dev-mychannel.cdc.ais.th/sale-device-sales/e-contract?transactionId=SALE250624183646-PB43949&orderId=685a8dcebb4ade2f69137a01&action=ADD');
    }

    async ConfirmContract() {
        await this.checkContract.click();
    }

    async Next() {
    }


}
