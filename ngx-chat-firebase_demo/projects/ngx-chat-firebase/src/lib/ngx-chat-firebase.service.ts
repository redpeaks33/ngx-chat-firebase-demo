import { Injectable } from '@angular/core';
import * as fs from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NgxChatFirebaseService {
  constructor(
    private firestore: fs.Firestore
  ) {
  }
  public getMessages() {
    const c = fs.collection(this.firestore, 'commentCollection');
    return fs.collectionData(c);
  }

  public sendMessage(comment: string) {
    const i: fs.DocumentData = {
      comment: comment,
      time: new Date().toUTCString(),
      userid: 5
    }

    const c = fs.collection(this.firestore, 'commentCollection');

    fs.collectionData(c).forEach(contact => {
      console.log(contact);
    })

    fs.addDoc(c, i)
  };

  public deleteMessage() {
    const c = fs.collection(this.firestore, 'commentCollection');
    return fs.collectionData(c);
  }

  public clearAllMessages() {
    const c = fs.collection(this.firestore, 'commentCollection');

    const q = fs.query(c, fs.where("userid", "==", 5))
    fs.getDocs(q).then(
      n => {
        n.forEach(m => fs.deleteDoc(fs.doc(c, m.id)));
      }
    );

    for (let entry in fs.collectionData(c)) {
      console.log(entry);
    }
  }
}
