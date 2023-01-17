import {createContext} from 'solid-js';
import { initializeApp } from 'firebase/app'
import {FirebaseOptions} from 'firebase/app';
import type { Component, JSX } from 'solid-js'
import type { FirebaseApp } from 'firebase/app'

export const FirebaseContext = createContext<FirebaseApp>();

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyANHjfIvuFAOGdfk2VIFXCnV296azYrrto",
    authDomain: "calendar-clone-afe93.firebaseapp.com",
    projectId: "calendar-clone-afe93",
    storageBucket: "calendar-clone-afe93.appspot.com",
    messagingSenderId: "14218371498",
    appId: "1:14218371498:web:174c59c6a71356d6adcbd3",
    measurementId: "G-B5GJE6D6T0"
}
interface Props {
    children: JSX.Element
}


export const FirebaseProvider: Component<Props> = (props) => {
    const app = initializeApp(firebaseConfig)
    return <FirebaseContext.Provider value={app}>
        {props.children}
    </FirebaseContext.Provider>
}
