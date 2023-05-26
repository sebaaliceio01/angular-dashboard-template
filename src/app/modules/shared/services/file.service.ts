import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  generateTxtFile(generateTxtOptions: { blob: ArrayBuffer }): { element: HTMLAnchorElement, url: string } {
    const blobFile = generateTxtOptions.blob

    const blob = new Blob([blobFile], { type: 'text/plain' });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    return { url: url, element: a }
  }

  downloadTxtFile(downloadTxtFileOptions: { element: HTMLAnchorElement, url: string, fileName: string }) {
    const element = downloadTxtFileOptions.element
    const url = downloadTxtFileOptions.url
    const fileName = downloadTxtFileOptions.fileName

    element.href = url;
    element.download = fileName

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    window.URL.revokeObjectURL(url);
  }
}
