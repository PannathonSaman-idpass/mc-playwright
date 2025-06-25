import { Locator, Page } from "@playwright/test";

export class LandingPage {
    readonly page: Page;
    readonly saleLandingMenu: Locator;
    readonly dsrMenu: Locator;


    constructor(page: Page) {
        this.page = page;
        this.saleLandingMenu = page.locator('div:nth-child(2) > .detail > div').first();
        this.dsrMenu = page.locator('div').filter({ hasText: /^เครื่องเปล่า, ลูกค้าปัจจุบันติดสัญญา$/ }).nth(1);

    }

    async gotoSaleMenu(url: string) {
        await this.saleLandingMenu.click();
    } 

    async gotoDeviceSale() {
        await this.dsrMenu.click();
    }


}
