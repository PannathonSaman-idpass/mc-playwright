import { Locator, Page, expect } from "@playwright/test";

export class CampaignPage{
    readonly page: Page;
    readonly productColor: Locator;
    readonly business: Locator;
    readonly campaign: Locator;
    readonly trade: Locator;
    readonly addDocButton: Locator;
    readonly addDocCapture: Locator;
    readonly nextButton: Locator;
    readonly package: Locator;
    readonly dayActivated: Locator;
    readonly careService: Locator;
    readonly email: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productColor = page.getByTestId('selectColor-GRAPHITE');
        this.business = page.getByTestId('flow-MNP');
        this.campaign = page.getByTestId('campaignDetail-2').getByRole('cell', { name: 'Hot Deal No Pay ADV สำหรับ MNP' });
        this.trade = page.getByText('TP25018597 ราคา 51,900');
        this.addDocButton = page.getByTestId('extraDocButton');
        this.addDocCapture = page.getByTestId('captureDoc');
        this.nextButton = page.getByTestId('buttonNext');
        this.package = page.locator('app-sale-package iframe').contentFrame().getByRole('radio', { name: 'แพ็กเกจ 5G Max Speed 899 บาท' });
        this.dayActivated = page.locator('app-sale-package iframe').contentFrame().getByText('วันถัดไป');
        this.careService = page.locator('app-sale-care iframe').contentFrame().getByTestId('radioAIS Care Plus for iPhone1');
        this.email = page.locator('app-sale-care iframe').contentFrame().getByTestId('inputTextEmail');

    }

    async ChooseColor() {
        await expect(this.productColor).toBeVisible({ timeout: 20000 });
        await this.productColor.click();
    } 

    async ChooseBusiness() {
        await this.business.click();
    }

    async ChooseCampaign() {
        await this.campaign.click();
    }

    async ChooseTrade() {
        await this.trade.click();
    }

    async AddDocoument() {
        await this.addDocButton.click();
        await this.addDocCapture.click();
        await this.nextButton.click();
    }

    async ChoosePackage() {
        await this.package.check();
        await this.dayActivated.click();
    }

    async ChooseCare() {
        await this.careService.check();
        await this.email.fill('tester@gmail.com');
    }

    async gotoCart() {
        await this.nextButton.click();
        // await this.page.goto('https://dev-mychannel.cdc.ais.th/sale-cart/cart-page?transactionId=SALE250624183646-PB43949&orderId=685a8dcebb4ade2f69137a01&action=ADD');
    }

    
}
