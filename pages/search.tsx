import type { NextPage } from 'next'
import SectionSearch from '../components/SectionSearch/SectionSearch';
import MainLayout from '../components/Layout/Layout';
const Home: NextPage = () => {
  return (
    <MainLayout>
      <SectionSearch/>
    </MainLayout>
  )
}

export default Home
