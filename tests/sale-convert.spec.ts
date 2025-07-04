import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LandingPage } from '../pages/landing-page';
import { ProductPage } from '../pages/product-page';
import { KYCPage } from '../pages/kyc-page';
import { MobilePage } from '../pages/mobileNum-page';
import { CampaignPage } from '../pages/campaign-page';
import { TransactionPage } from '../pages/transaction-page';


const userLogin = {
    username: "Chiraphr",
    password: "MyChannel#Jun25",
};

test.describe('Mychannel-sale-convert', () => {
    test.setTimeout(150000);
    const url = "https://dev-mychannel.cdc.ais.th/newlogin/callback-signin"

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.gotoUrl(url);
        await loginPage.temporaryLogin();
        console.log("page.title", await page.title);
    });


    test('Device Sale Convert', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const landingPage = new LandingPage(page);
        const KycPage = new KYCPage(page);
        await test.step("พนักงานทำการ-login", async () => {
            await loginPage.Login(userLogin.username, userLogin.password);
        });
        await test.step("เลือก-เปลี่ยนจากเติมเงินเป็นรายเดือน", async () => {
            await landingPage.gotoSaleMenu();
            // await page.getByText('เครื่องเปล่า, ลูกค้าปัจจุบันติดสัญญา').waitFor({ state: 'visible' });
            
        });
        await test.step("เลือก-เปลี่ยนจากเติมเงินเป็นรายเดือน", async () => {
            await page.locator('div:nth-child(11) > .detail > div').first().click();
        });
        await test.step("กรอกเลขเบอร์เติมเงิน", async () => {
            await page.getByTestId("verify-input-mobileno").fill("0937051033");
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        });
        await test.step("ยืนยัน-otp", async () => {
            await page.getByTestId("confirm-otp-input-otp").fill("1234");
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        });
        await test.step("ถ่ายบัตรประชาชน", async () => {

            // await page.waitForLoadState('networkidle');
            await page.waitForURL("https://dev-kyc.cdc.ais.th/client/store/dipchip");
            await page.getByRole('button').click();
            await page.getByRole('button').nth(1).click();
            // await page.waitForLoadState('networkidle');
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        });

        await test.step("ถ่ายหน้า", async () => {
            // await page.waitForLoadState('networkidle');
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        // });

        // test.step("ตรวจสอบหน้ากับบัตร", async () => {
            await page.waitForURL("https://dev-kyc.cdc.ais.th/client/store/check-permissions");
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        });

        await test.step("ยืนยันเปลี่ยน", async () => {
            await page.waitForURL("https://dev-mychannel.cdc.ais.th/sale-convert/balance");

            await page.getByRole('button', { name: 'รับทราบ' }).click();
        });
        await page.waitForLoadState('networkidle');
        await test.step("กรอกรายละเอียด", async () => {
            
            await page.locator('div').filter({ hasText: /^คุยสะใจ 40 สต\.$/ }).nth(1).click();
            await page.getByRole('radio').check();
            await page.getByRole('button', { name: 'ถัดไป' }).click();
            await page.getByTestId('verify-billing-input-first-phonenumber').click();
            await page.getByTestId('verify-billing-input-first-phonenumber').fill('0937051033');
            await page.getByRole('button', { name: 'ถัดไป' }).click();
        });

        await test.step("เซ็นชื่อ", async () => {
            await page.locator('#sign_canvas canvas').click({
                position: {
                    x: 546,
                    y: 113
                }
            });
        });


        // await landingPage.gotoDeviceSale();
        // await KycPage.TakePhoto();




    });
});