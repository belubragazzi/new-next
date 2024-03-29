import { useAppContext } from '@/contexts/AppContext'; // PASO 1
import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer />
      <Footer />
    </>
  );
}
