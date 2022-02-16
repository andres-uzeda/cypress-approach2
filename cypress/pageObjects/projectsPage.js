class ProjectsPage {
    constructor(){
        this.projectTitle = '#CurrentProjectTitle';
        this.logoutButton = '#ctl00_HeaderTopControl1_LinkButtonLogout';
        this.addNewProjectOption = '[style="padding-top: 10px;"] > .AddProjectLiDiv';
        this.newProjectNameInput = '#NewProjNameInput';
        this.newProjectNameButton = '#NewProjNameButton';
        this.projectCreated = 'tbody > tr';
        this.fatherOption = '#ProjShareMenuDel';
        this.deleteOption = '#itemContextMenu > li.delete.separator > a';
    }

    verifyThatProjectTitleIsVisible(){
        return cy.get(this.projectTitle).should('be.visible');
    }

    clickOnLogoutButton(){
        return cy.get(this.logoutButton).click();
    }

    selectAddNewProjectOption(){
        return cy.get(this.addNewProjectOption).click();
    }

    verifyThatSelectAddANewProjectIsAvailable(){
        return cy.get(this.newProjectNameInput).should('be.visible');
    }

    enterProjectName(projectName){
        return cy.get(this.newProjectNameInput).type(projectName);
    }

    clickOnNewProjectNameButton(){
        return cy.get(this.newProjectNameButton).click();
    }

    clickOnProjectCreated(){
        return cy.get(this.projectCreated).contains('test-pro').click();
    }

    clickOnDeleteProjectCreated(){
        return cy.get(this.deleteOption).trigger('mouseover', { force: true }).click({ force: true });
    }

    clickFatherOption(){
        return cy.get(this.fatherOption).trigger('mouseover', { force: true }).click({ force: true });
    }
}
export default ProjectsPage