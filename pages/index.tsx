import type { NextPage } from 'next'
import MainLayout from '../components/Layout/Layout';
import SectionMain from '../components/SectionMain/SectionMain';



const Home: NextPage = () => {
  return (
      <MainLayout>
          <SectionMain/>
      </MainLayout>
  )
}

export default Home
