import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, deleteDoc,doc} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { INews } from '../models/INews';
import { CollectionReference } from "firebase/firestore";
import { FirebaseApp } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  async removeNews(item: INews) {
    console.log(item)
    const docRef = doc(this.firestore,'news',item.id!)
    await deleteDoc(docRef )
  }
  noticias$: Observable<INews[]>;
//  private app= initializeApp(environment.firebase);
 // private db = getFirestore(this.app);
 
 itemCollection: CollectionReference<INews>;
  constructor(private firestore: Firestore) {
    this.itemCollection = collection(this.firestore, 'news') as CollectionReference<any> ;
    this.noticias$ = collectionData(this.itemCollection,{idField:'id'})
    .pipe(
      map(values=>
        values.map(item=>
          ({...item, date: (item.date as any).toDate()})
          )
        )
      );
   }

   public async addNews(newsItem:INews){
    try {
      const docRef = await addDoc(this.itemCollection,newsItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   };

}

