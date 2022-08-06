import type { NextPage } from 'next'
import MainLayout from '../components/Layout/Layout';
import SectionMain from '../components/SectionMain/SectionMain';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyAfazkMR1c0CzOFAA5r64C8s_YYUVZlTkc",
  authDomain: "pictureap.firebaseapp.com",
  projectId: "pictureap",
  storageBucket: "pictureap.appspot.com",
  messagingSenderId: "951555448440",
  appId: "1:951555448440:web:3bdeb0dcf68107f740178d",
  measurementId: "G-BPDQ74YX9B"});




const Home: NextPage = () => {
  return (
      <MainLayout>
          <SectionMain/>
      </MainLayout>
  )
}

export default Home
