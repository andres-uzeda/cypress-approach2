import mainPage from '../../pageObjects/mainPage'
import projectPage from '../../pageObjects/projectsPage'

describe('Select a new project option Test', () => {
    let MainPage;
    let ProjectPage;

    before(() => {
        MainPage = new mainPage();
        ProjectPage = new projectPage();
        MainPage.navigateToMainPage();
        MainPage.pressLoginMenuOption();
        MainPage.enterEMail('andres.uzeda88@gmail.com');
        MainPage.enterPassword('Control123!');
        MainPage.pressLoginButton();
    });

    it('Verify that is possible to select add a new project option', () => {
        ProjectPage.selectAddNewProjectOption();
        ProjectPage.verifyThatSelectAddANewProjectIsAvailable();
    });

    after(() => {
        ProjectPage.clickOnLogoutButton();
    });
});