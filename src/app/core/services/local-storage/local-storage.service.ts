import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  secretKey: string = 'my-secret-key';

  constructor() { }

  private encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  private decrypt(encryptedData: string): any {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  }

  saveData(key: string, data: any): void {
    const encryptedData = this.encrypt(JSON.stringify(data));
    return localStorage.setItem(key, encryptedData);
  }

  getData(key: string): any | null {
    const storageData = localStorage.getItem(key);
    if (!storageData) return null;

    const decryptedData = this.decrypt(storageData);
    return JSON.parse(decryptedData);
  }
}
