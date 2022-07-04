// import React, {useEffect} from 'react';
// import db from "../firebase/firebaseConfig"
// import { collection, onSnapshot } from "firebase/firestore"; 

// useEffect(() => {
//     onSnapshot(collection(db, 'resumeInfo'), (snapshot) => {
//         console.log(snapshot)
//     });
// })
// import EditResumePage from "../EditResumePage/EditResumePage";

// import {
//     addDoc,
//     collection,
//     deleteDoc,
//     doc,
//     onSnapshot,
// } from "firebase/firestore";

// import db from "./firebaseConfig"

// export const getInfo = (setNewResumeInfo) => {
//     const collectionRef = collection(db, "resumeInfo");
//     onSnapshot(collectionRef, (snapshot) => {
//         return setNewResumeInfo(
//             snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
//         );
//     });
// };

// export const edit = async(data) => {
//     const collectionRef = collection(db, "resumeInfo");
//     const docRef = await addDoc(collection, data);
//     docRef.id && console.log('id')
//     console.log(docRef)
// }

// export const addInfo = async (data) => {
//     const collectionRef = collection(db, "resumeInfo");
//     const docRef = await addDoc(collectionRef, data);
// };

// export const deleteInfo = async (id) => {
//     const docRef = doc(db, "resumeInfo", id);
//     await deleteDoc(docRef);
// };  


// import React, {useEffect} from 'react';
// import db from "../firebase/firebaseConfig"
// import { collection, onSnapshot } from "firebase/firestore"; 

// useEffect(() => {
//     onSnapshot(collection(db, 'resumeInfo'), (snapshot) => {
//         console.log(snapshot)
//     });
// })
import EditResumePage from "../EditResumePage/EditResumePage";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";

import db from "./firebaseConfig"

export const getInfo = (setNewResumeInfo) => {
    const collectionRef = collection(db, "resumeInfo");
    onSnapshot(collectionRef, (snapshot) => {
        return setNewResumeInfo(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
        );
    });
};

// export const edit = async(data) => {
//     const collectionRef = collection(db, "resumeInfo");
//     const docRef = await addDoc(collection, data);
//     docRef.id && console.log('id')
//     console.log(docRef)
// }

export const addInfo = async (data, path) => {
    const collectionRef = collection(db, "resumeInfo");
    const docRef = await addDoc(collectionRef, data);
};

export const deleteInfo = async (id) => {
    const docRef = doc(db, "resumeInfo", id);
    await deleteDoc(docRef);
};