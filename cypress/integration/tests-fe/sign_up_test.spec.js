import mainPage from '../../pageObjects/mainPage'
import projectPage from '../../pageObjects/projectsPage'

describe('Sign up page Test', () => {
    let MainPage;
    let ProjectPage;
    before(() => {
        MainPage = new mainPage();
        ProjectPage = new projectPage();
    });

    it('Verify that is possible to sign up', () => {
        MainPage.navigateToMainPage();
        MainPage.pressLoginMenuOption();
        MainPage.enterEMail('andres.uzeda88@gmail.com');
        MainPage.enterPassword('Control123!');
        MainPage.pressLoginButton();
        ProjectPage.verifyThatProjectTitleIsVisible();
    });

    after(() => {
        ProjectPage.clickOnLogoutButton();
    });
  });