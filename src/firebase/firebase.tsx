import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './config';

class Firebase{

    db: app.firestore.Firestore; // 👈 agrega esta línea

    constructor(){
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.db =app.firestore();
        
    }
}
const firebase =new Firebase();

export default  firebase;