// import { Injectable } from '@angular/core';
// // With @types/pdfjs-dist

// @Injectable({
//   providedIn: 'root'
// })





// export class PdfLoadService {
//   private _pdfjslib: typeof pdfjsLib;

//   constructor() {
//     console.log('initialize PDF JS');
//     this._pdfjslib = pdfjsLib;
//     pdfjsLib.GlobalWorkerOptions.workerSrc =
//       'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
//   }

//   loadPdf(url: string): Promise<pdfjsLib.PDFDocumentProxy> {
//     return this._pdfjslib.getDocument(url).promise;
//   }

//   getPdfPage(pdf: pdfjsLib.PDFDocumentProxy | null, pageNum: number): Promise<pdfjsLib.PageViewport | null> {
//     if (pdf) {
//       return pdf.getPage(pageNum);
//     } else {
//       return Promise.resolve(null); // Handle case where pdf is null
//     }
//   }

//   renderPage(pdfPage: Promise<pdfjsLib.PageProxy>, canvas: HTMLCanvasElement): void {
//     if (pdfPage && canvas) {
//       pdfPage.then((page) => {
//         const scale = 1.0;
//         const viewport = page.getViewport({ scale });
//         const context = canvas.getContext('2d');
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderContext: pdfjsLib.RenderContext = {
//           canvasContext: context,
//           viewport,
//         };

//         page.render(renderContext).promise.then(() => {
//           console.log('Rendering complete...');
//         });
//       });
//     }
//   }
// }
