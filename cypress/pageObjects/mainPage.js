class MainPage {
    constructor(){
        this.pageURL = 'https://todo.ly/';
        this.loginMenuOption = 'a[href*="javascript:ShowLogin();"]';
        this.emailInput = '#ctl00_MainContent_LoginControl1_TextBoxEmail';
        this.passwordInput = '#ctl00_MainContent_LoginControl1_TextBoxPassword';
        this.loginButton = '#ctl00_MainContent_LoginControl1_ButtonLogin';
    }

    navigateToMainPage(){
        return cy.visit(this.pageURL);
    }

    pressLoginMenuOption(){
        return cy.get(this.loginMenuOption).click();
    }

    enterEMail(email){
        return cy.get(this.emailInput).type(email);
    }

    enterPassword(password){
        return cy.get(this.passwordInput).type(password);
    }

    pressLoginButton(){
        return cy.get(this.loginButton).click();
    }
}
export default MainPage