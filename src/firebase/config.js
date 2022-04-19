import firebase from 'firebase/app'
import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyBKB4L3qyD-QHCovEvntQS3HRuOJBVSkno",
//   authDomain: "udemy-vue-projects.firebaseapp.com",
//   databaseURL: "https://udemy-vue-projects.firebaseio.com",
//   projectId: "udemy-vue-projects",
//   storageBucket: "udemy-vue-projects.appspot.com",
//   messagingSenderId: "25092947019",
//   appId: "1:25092947019:web:fdd61cabc8d29add63e1ce"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAY5t3eujgg04DSPjJ1EdHtBBuYrIm3mFg",
    authDomain: "vue-firebase-site-ea24a.firebaseapp.com",
    projectId: "vue-firebase-site-ea24a",
    storageBucket: "vue-firebase-site-ea24a.appspot.com",
    messagingSenderId: "148950617450",
    appId: "1:148950617450:web:20d70674a5f0c9827ee913"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }