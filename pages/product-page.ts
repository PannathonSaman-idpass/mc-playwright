import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchProductOption: Locator;
    readonly chooseProduct: Locator;
    readonly nextButton: Locator;
    readonly forUButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByTestId('searchBarInput');
        this.searchProductOption = page.getByRole('option', { name: 'iPhone 12 Pro Max 512GB' });
        this.chooseProduct = page.getByTestId('product-iPhone 12 Pro Max 512GB-HANDSET');
        this.nextButton = page.getByTestId('buttonNext');
        this.forUButton = page.getByTestId('buttonSaleCustomer');

    }

    async SearchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchProductOption.click();
    } 

    async ChooseProduct() {
        await this.chooseProduct.click();
        await this.nextButton.click();
    }

    async gotoforU() {
        await this.forUButton.click();
    }

    

}
