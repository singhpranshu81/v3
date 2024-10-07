# v3

Steps to generate PDF 🙂:

1)IN TERMINAL PASTE THIS COMMAND 
npm install file-saver jspdf

2)  MAKE ONE SERVICE FOR PDF
npx ng g s Pdf 

3) npm install --save-dev @types/file-saver
4) npm i jspdf-autotable
5) SEE PDF SERVICE IN IT
6) DASH BOARD COMP.TS CALL PDFSERVICE
7)  downloadPdf() {
    this.pdfService.generatePdf(this.employees);
  }
