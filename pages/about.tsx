import type { NextPage } from 'next'
import MainLayout from '../components/Layout/Layout';
import SectionAbout from '../components/SectionAbout/SectionAbout';

import store from '../components/redux/store';
const AboutPage: NextPage = () => {
  return (
    
      <MainLayout>
        <SectionAbout/>
      </MainLayout>
  )
}

export default AboutPage
