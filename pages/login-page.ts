import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly loginOption: Locator;
    readonly loginOptionButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOption = page.getByRole('combobox');
        this.loginOptionButton = page.getByRole('button', { name: 'NEXT' })
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });

    }

    async gotoUrl(url: string) {
        await this.page.goto(url);
    } 

    async temporaryLogin() {
        await this.loginOption.selectOption('Temporary_Login');
        await this.loginOptionButton.click();
    }

    async Login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

}
