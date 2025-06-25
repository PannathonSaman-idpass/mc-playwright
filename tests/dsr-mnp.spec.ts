import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LandingPage } from '../pages/landing-page';
import { ProductPage } from '../pages/product-page';
import { KYCPage } from '../pages/kyc-page';
import { MobilePage } from '../pages/mobileNum-page';
import { CampaignPage } from '../pages/campaign-page';
import { TransactionPage } from '../pages/transaction-page';

const userLogin = {
  username: "chiraphr",
  password: "MyChannel#Jun25",
};

test.describe('Mychannel', () => {
  const url = "https://dev-mychannel.cdc.ais.th/newlogin/callback-signin"

  test.beforeEach(async({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.gotoUrl(url);
      await loginPage.temporaryLogin();
    });
  

  test('Device Sale MNP', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const productPage = new ProductPage(page);
    const kycPage = new KYCPage(page);
    const mobileNumPage = new MobilePage(page);
    const campaignPage = new CampaignPage(page);
    const transactionPage = new TransactionPage(page);

    await loginPage.Login(userLogin.username, userLogin.password);
  
    await landingPage.gotoSaleMenu();
    await landingPage.gotoDeviceSale();

    await productPage.SearchProduct("12pm");
    await productPage.ChooseProduct();
    await productPage.gotoforU();

    await kycPage.TakePhoto();
    await kycPage.CheckCustInfo();

    await mobileNumPage.ChooseNumber();

    await campaignPage.ChooseColor();
    await campaignPage.ChooseBusiness();
    await campaignPage.ChooseCampaign();
    await campaignPage.ChooseTrade();

    // await campaignPage.AddDocoument();
    
    // await campaignPage.ChoosePackage();
    // await campaignPage.ChooseCare();
    // await campaignPage.gotoCart();

    // await transactionPage.ConfirmCart();
    // await transactionPage.ChoosePaymentMethod();
    // await transactionPage.ChooseAddress();
    // await transactionPage.gotoContract();
    // await transactionPage.ConfirmContract

  });
});
