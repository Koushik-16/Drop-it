import {firebaseApp} from "../firebase-config"

import {collection , doc, getDocs, orderBy, query,getDoc,deleteDoc,where} from "firebase/firestore"
import {getStorage,deleteObject,ref} from "firebase/storage"



async function getAllFeeds(firestoreDB) {

   const feeds =  await getDocs(query(collection(firestoreDB, "videos"), orderBy("id" , "desc")));

   return feeds.docs.map(doc => doc.data());

}

export default getAllFeeds;


export const getUserInfo = async(firestoreDB , userId) => {
   const useRef = doc(firestoreDB ,'users' ,userId);

   const userSnap = await getDoc(useRef);

   if(userSnap.exists()) {
    return userSnap.data();
   } else {
      return "No sumch document";
   }


}

export const getSpecificVideo = async(firestoreDB, videoId) => {
   const videoRef = doc(firestoreDB ,'videos' ,videoId);

   const videoSnap = await getDoc(videoRef);

   if(videoSnap.exists()) {
    return videoSnap.data();
   } else {
      return "No sumch document";
   }
}

export const categoryFeeds = async (fireStoreDB, categoryId) => {
   const feeds = await getDocs(
     query(
       collection(fireStoreDB, "videos"),
       where("category", "==", categoryId),
       orderBy("id", "desc")
     )
   );
 
   return feeds.docs.map((doc) => doc.data());
 };
 
 // Get recommended feeds
 export const recommendedFeed = async (fireStoreDB, categoryId, videoId) => {
   const feeds = await getDocs(
     query(
       collection(fireStoreDB, "videos"),
       where("category", "==", categoryId),
       where("id", "!=", videoId),
       orderBy("id", "desc")
     )
   );
 
   return feeds.docs.map((doc) => doc.data());
 };
 
 // useruploaded videos
 export const userUploadedVideos = async (fireStoreDB, userId) => {
   const feeds = await getDocs(
     query(
       collection(fireStoreDB, "videos"),
       where("userId", "==", userId),
       orderBy("id", "desc")
     )
   );
 
   return feeds.docs.map((doc) => doc.data());
 };
 

 export const gertUserInfo = async (firestoreDB, userId) => {
   const userRef = doc(firestoreDB, "users", userId);
 
   const userSnap = await getDoc(userRef);
   if (userSnap.exists()) {
     return userSnap.data();
   } else {
     return "No Such Document";
   }
 };

 export const deleteVideo = async (fireStoreDB, videoId,url) => {
  const storage = getStorage(firebaseApp);
   await deleteDoc(doc(fireStoreDB, "videos", videoId));
   const deleteRef = ref(storage,url);
   await deleteObject(deleteRef).then(() => {

   }).catch((error) => {
   console.log(error);
    });

 };



 