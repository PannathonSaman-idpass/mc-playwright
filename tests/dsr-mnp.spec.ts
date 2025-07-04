import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { LandingPage } from '../pages/landing-page';
import { ProductPage } from '../pages/product-page';
import { KYCPage } from '../pages/kyc-page';
import { MobilePage } from '../pages/mobileNum-page';
import { CampaignPage } from '../pages/campaign-page';
import { TransactionPage } from '../pages/transaction-page';

const userLogin = {
  username: "RS000026",
  password: "Mychannel#dsr1",
};

const userLogins = {
  username: "chiraphr",
  password: "MyChannel#Jun25",
};
  //RS000026
  //Mychannel#dsr1

  //chiraphr
  //MyChannel#Jun25

test.describe('My-Partner', () => {
  test.setTimeout(150000);
  const url = "https://sit-mychannel.cdc.ais.th/newlogin/callback-signin"

  test.beforeEach(async({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.gotoUrl(url);
      await loginPage.temporaryLogin();
    });
  

  test('Device Sale MNP Imel', async ({ page }) => {
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
    await kycPage.ConfirmTakePhoto();
    await kycPage.CheckCustInfo();

    await mobileNumPage.ChooseNumber();

    await campaignPage.ChooseColor();
    await campaignPage.ChooseBusiness();
    await campaignPage.ChooseCampaign();
    // await campaignPage.ChooseTrade();

    await campaignPage.AddDocoument();
    await campaignPage.AddDocumentCapture();
    await campaignPage.ConfirmDocument();
    
    await campaignPage.ChoosePackage();
    await campaignPage.ChooseCare();
    await campaignPage.gotoCart();
    
    await transactionPage.Imel();
    await transactionPage.ConfirmCart();
    await transactionPage.ChoosePaymentMethod();
    await transactionPage.ChooseAddress();
    await transactionPage.gotoContractPage();
    await transactionPage.ConfirmContract();
    await transactionPage.SignContract();
    await transactionPage.SummuryProduct();
    await transactionPage.PrintSummury();

    // await transactionPage.summaryContact()

  });
});

test.describe('My-shop', () => {
  test.setTimeout(150000);
  const url = "https://sit-mychannel.cdc.ais.th/newlogin/callback-signin"

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

    await loginPage.Login(userLogins.username, userLogins.password);
  
    await landingPage.gotoSaleMenu();
    await landingPage.gotoDeviceSale();

    await productPage.SearchProduct("12pm");
    await productPage.ChooseProduct();
    await productPage.gotoforU();

    await kycPage.TakePhoto();
    await kycPage.ConfirmTakePhoto();
    await kycPage.CheckCustInfo();

    await mobileNumPage.ChooseNumber();

    await campaignPage.ChooseColor();
    await campaignPage.ChooseBusiness();
    await campaignPage.ChooseCampaign();
    // await campaignPage.ChooseTrade();

    await campaignPage.AddDocoument();
    await campaignPage.AddDocumentCapture();
    await campaignPage.ConfirmDocument();
    
    await campaignPage.ChoosePackage();
    await campaignPage.ChooseCare();
    await campaignPage.gotoCart();
    
    // await transactionPage.Imel();
    await transactionPage.ConfirmCart();
    await transactionPage.ChoosePaymentMethod();
    await transactionPage.ChooseAddress();
    await transactionPage.gotoContractPage();
    await transactionPage.ConfirmContract();
    await transactionPage.SignContract();
    await transactionPage.SummuryProduct();
    await transactionPage.PrintSummury();
  });
});
