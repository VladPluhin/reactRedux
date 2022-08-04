import type { NextPage } from 'next';
import MainLayout from '../components/Layout/Layout';
import SectionLikedPost from '../components/SectionLikedPost/SectionLikedPost';

const LikedPage: NextPage = () => {
  return (
      <MainLayout>
        <SectionLikedPost/>
      </MainLayout>
  )
}

export default LikedPage
