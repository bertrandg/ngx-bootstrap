export abstract class BaseComponent {
  titleSel = 'h1';
  titleLinkSel = '.content-header a';
  usageExSel = 'demo-top-section h2';
  usageExCodeSel = 'demo-top-section .prettyprint';
  abstract pageUrl: string;
  titleDefaultExample = 'Usage';

  navigateTo() {
    cy.visit(this.pageUrl);
  }

  clickByText(parent: string, text: string) {
    cy.get(parent).contains(text).click();
  }

  isButtonExist(baseSelector: string, buttonName: string, buttonNumber?: number) {
    cy.get(`${baseSelector} button`).eq(buttonNumber ? buttonNumber : 0).invoke('text')
      .should(btnTxt => expect(btnTxt).to.equal(buttonName));
  }

  isPreviewExist(baseSelector: string, previewText: string, previewNumber?: number) {
    cy.get(`${baseSelector} .card.card-block`).eq(previewNumber ? previewNumber : 0).invoke('text')
      .should(btnTxt => expect(btnTxt).to.equal(previewText));
  }
}
