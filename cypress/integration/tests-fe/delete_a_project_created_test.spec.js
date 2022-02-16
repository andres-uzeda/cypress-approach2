import mainPage from '../../pageObjects/mainPage'
import projectPage from '../../pageObjects/projectsPage'

describe('Delete a project created Test', () => {
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

    it('Verify that is possible to delete a project created', () => {
        ProjectPage.selectAddNewProjectOption();
        ProjectPage.enterProjectName('test-pro');
        ProjectPage.clickOnNewProjectNameButton();
        ProjectPage.clickOnProjectCreated();
        ProjectPage.clickFatherOption();
        ProjectPage.clickOnDeleteProjectCreated();
    });

    after(() => {
        //ProjectPage.clickOnLogoutButton();
    });
});