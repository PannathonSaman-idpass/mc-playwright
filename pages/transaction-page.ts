import { Locator, Page ,expect} from "@playwright/test";

export class TransactionPage{
    readonly page: Page;
    readonly nextButton: Locator;
    readonly okButton: Locator;
    readonly confirmButton : Locator;
    readonly confirmCart: Locator;
    readonly choosePayment: Locator;
    readonly confirmPayment: Locator;
    readonly address: Locator;
    readonly gotoContract: Locator;
    readonly confirmContract: Locator;
    readonly signContract: Locator;
    readonly printSummury : Locator;
    readonly imel : Locator;


    constructor(page: Page) {
        this.page = page;
        this.nextButton = page.getByTestId('buttonNext');
        this.okButton = page.getByTestId('buttonOk');
        this.confirmButton = page.getByTestId('buttonConfirm');
        this.confirmCart = page.getByTestId('buttonPayNow');
        this.choosePayment = page.getByTestId('paymentMethod-combinePayment-CA');
        this.confirmPayment = page.getByTestId('addPaymentMethod');
        this.address = page.locator('span').filter({ hasText: 'ที่อยู่ตามใบแจ้งค่าใช้บริการ บ้านเลขที่ 6 หมู่บ้าน เอไอเอส อาคาร 6' });
        this.gotoContract = page.getByTestId('buttonถัดไป');
        this.confirmContract = page.getByTestId('confirmContract');
        this.signContract = page.getByTestId('inputSignPad');
        this.printSummury = page.getByTestId('genqueuebymobileno');
        this.imel = page.getByTestId('inputImei');


    }

    async Imel(){
        await this.imel.click();
        await this.imel.fill('001002037500200018');
        await this.confirmButton.click();
        await this.okButton.click();
    }
    async ConfirmCart() {
        // await expect(this.confirmCart).toBeVisible({ timeout: 40000 });
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
        await this.page.waitForTimeout(5000);
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
    //     await this.nextButton.click();
    }
    
    // async SummuryProduct(){
    //     await this.page.waitForTimeout(5000);
    //     await this.nextButton.click();
    // }
    // async PrintSummury(){
    //     await this.printSummury.click();
    //     await this.printSummury.fill('0934009100');
    //     // await this.page.screenshot()
        
    // }

    // async summaryContact() {
    //     // await expect(this.page.getByTestId('labelSummaryCustomer')).toHaveText('รายละเอียดผู้ใช้บริการ');
    //     await this.nextButton.click();
    //     // await this.page.waitForTimeout(5000);
    // }

}
