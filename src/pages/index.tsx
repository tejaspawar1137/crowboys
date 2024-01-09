import Partner from '@/components/modules/index/Partner';
import Hero from '../components/modules/index/Hero';
import About from '@/components/modules/Home-2/About';
import Faq from '@/components/modules/index/Faq';
import Newsletter from '@/components/modules/index/Newsletter';
import Blog from '@/components/modules/index/Blogs';
import Services from '@/components/modules/index/Services';
import GetStarted from '@/components/modules/index/GetStarted';

export default function Home() {
  return (
    <>
      <Hero />
      <Partner />
      <GetStarted />
      <About />
      <Services />
      <Faq />
      <Blog />
      <Newsletter />
    </>
  );
}
