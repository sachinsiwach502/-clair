import './App.css';
import { Header } from './Components/Header';
import { Adress } from './Components/Adress';
import { Tokenomics } from './Components/Tokenomics';
import { Secure } from './Components/Secure';
import { Faq } from './Components/Faq';
import { Social } from './Components/Social';
import { Footer } from './Components/Footer';
import Roadmap from './Components/Roadmap';
import count_1 from './assets/img/svg/conut_down_1.svg';
import count_2 from './assets/img/svg/conut_down_2.svg';
import count_3 from './assets/img/svg/conut_down_3.svg';
import count_4 from './assets/img/svg/conut_down_4.svg';
import conunt_img from './assets/img/png/stocks_buyer.webp';
import dino_ellifs from './assets/img/png/dino_ellips.png';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init({
      once: 'true',
      duration: 2000,
    })
  })
  return (
    <body className=' bg-black'>
      <Header />
      <div className='countdown_container overflow-hidden'>
        <div className='row justify-content-between countDown_card mt-lg-5 mt-md-4 mt-2'>
          <div className=' col-md-5 d-md-block d-flex align-items-center justify-content-center' data-aos="fade-right">
            <div className='max-w-300 w-100'>
              <div className=' d-flex align-items-center gap-5'>
                <div className=' d-flex align-items-start flex-column'>
                  <p className=' mb-0 ff-sans fw-normal fs-16 lh-24 black-300'>1 $Clair</p>
                  <p className=' mb-0 fw-normal primary-color lh-24 fs-16 ff-sans'>0.00387 $</p>
                </div>
                <div className=' d-flex align-items-start flex-column'>
                  <p className=' mb-0 ff-sans fw-normal fs-16 lh-24 black-300'>Raised Amount</p>
                  <p className=' mb-0 fw-normal primary-color lh-24 fs-16 ff-sans'>332,123$</p>
                </div>
              </div>
              <div className=' d-flex align-items-center gap_10 pt-3 justify-content-between '>
                <img src={count_1} alt="conunt" className=' curser position-relative z-3' />
                <img src={count_2} alt="conunt" className=' curser position-relative z-3' />
                <img src={count_3} alt="conunt" className=' curser position-relative z-3' />
                <img src={count_4} alt="conunt" className=' curser position-relative z-3' />
              </div>
              <button className='bttn w-100 mt-4 ff-sans fw-bold fs-16 lh-24 position-relative z-3'>Buy Now</button>
            </div>
          </div>
          <div className=' col-md-6 mt-lg-0 mt-3' data-aos="fade-left">
            <img src={conunt_img} alt="hero sec" className=' w-100' />
          </div>
        </div>
      </div>

      {/*=============================== about =====================*/}
      <section className='pt_100 overflow-hidden' id='about'>
        <div className='container position-relative' data-aos="zoom-in">
          <div className='about_sec_ellips'>
            <img src={dino_ellifs} alt="ellips" className='w-100 max-w-284 h-100' />
          </div>
          <h1 className=' fw-semibold fs-48 lh-56 ff-sans text-center text-white mb-0 fs-md-32 lh-md-37'>About <span className=' fw-bold primary-color'>$CLAIR</span></h1>
          <div className=' d-flex align-items-center justify-content-center flex-column'>
            <p className='ff-sans mb-0  fw-normal fs-16 black-200 max-w-776 text-center pt-3 lh-24 position-relative z-3'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
            <p className='ff-sans mb-0  fw-normal fs-16 black-200 max-w-776 text-center pt-3 lh-24 position-relative z-3'>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
            <p className='ff-sans mb-0  fw-normal fs-16 black-200 text-center pt-3 lh-24 max-w-856 w-100 position-relative z-3'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
          </div>
          <div className=' d-flex align-items-center justify-content-center position-relative z-3'> <button className='bttn mt-4 ff-sans fw-bold fs-16 lh-24'>Learn More</button></div>
        </div>
      </section>

      <Adress />

      <Tokenomics />
      <Secure />
      <Roadmap />
      <Faq />
      <Social />
      <Footer />
    </body >
  );
}

export default App;
