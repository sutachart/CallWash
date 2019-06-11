import { Injectable } from '@angular/core';




export interface Item {
  id: number,
  title: string,
  value: string,
  modified: number
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
}
