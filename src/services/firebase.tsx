import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import {ILocalResp, IUser, IWatchedVideo} from '../interfaces/common';
// import srvUser from './user';
// import {Platform} from 'react-native';
// import moment from 'moment';
// import push from './../pages/nortification/push'

class FirebaseService {
  getlandsData(){
    return new Promise(async (resolve, reject) => {
        firestore()
          .collection('lands')
          .get()
          .then(data => {
            resolve(data);
          });
      });
  }
}

const firebaseService = new FirebaseService();
export default firebaseService;
