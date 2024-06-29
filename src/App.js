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
import token_range from './assets/img/png/range_bar.png'
import dino_ellifs from './assets/img/png/dino_ellips.png';
import clock from './assets/img/png/clock_img.png';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';



function App() {
  var countDownDate = new Date("Jul 5, 2024 15:37:25").getTime();

  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);


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
        <div className='row justify-content-lg-between justify-content-center countDown_card mt-lg-5 mt-md-4 mt-2' id='cookies'>
          <div className='col-md-5 d-md-block d-flex align-items-center justify-content-center' data-aos="fade-right">
            <div className='max-w-300 w-100'>
              <div className='d-flex align-items-center gap-5'>
                <div className='d-flex align-items-start flex-column'>
                  <p className='mb-0 ff-sans fw-normal fs-16 lh-24 black-300'>1 $Clair</p>
                  <p className='mb-0 fw-normal primary-color lh-24 fs-16 ff-sans'>0.00387 $</p>
                </div>
                <div className='d-flex align-items-start flex-column'>
                  <p className='mb-0 ff-sans fw-normal fs-16 lh-24 black-300'>Raised Amount</p>
                  <p className='mb-0 fw-normal primary-color lh-24 fs-16 ff-sans'>332,123$</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap_10 pt-3 justify-content-between'>
                <img src={count_1} alt="count" className='curser position-relative z-3' />
                <img src={count_2} alt="count" className='curser position-relative z-3' />
                <img src={count_3} alt="count" className='curser position-relative z-3' />
                <img src={count_4} alt="count" className='curser position-relative z-3' />
              </div>
              <button className='bttn w-100 mt-4 ff-sans fw-bold fs-16 lh-24 position-relative z-3'>Buy Now</button>
            </div>
          </div>
          <div className='col-md-6 mt-lg-0 mt-3 max-w-491' data-aos="fade-left">
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex flex-column ps-3'>
                <p className='ff-sans mb-0 black-300 fw-normal fs-16 lh-24'>Tokens are Sold</p>
                <p className='ff-sans primary-color fs-16 lh-24 fw-bold ff-sans pt-1'>98,212,738</p>
              </div>
              <div className='d-flex flex-column pe-3'>
                <p className='ff-sans mb-0 black-300 fw-normal fs-16 lh-24'>Tokens Remaining</p>
                <p className='ff-sans primary-color fs-16 lh-24 fw-bold ff-sans pt-1'>80,212,738</p>
              </div>
            </div>
            <div className='token_range'>
              <div className=''>
                <img src={token_range} alt="range bar" className='w-100' />
              </div>
              <p className='ff-sans fs-14 lh-21 fw-normal black-200 mb-0 pt-1'>Purchase $Clair fast until the price increase.</p>
            </div>
            <div className='d-flex align-items-center gap_30 justify-content-sm-between justify-content-center flex-sm-nowrap flex-wrap gap-3'>
              <div className='d-flex align-items-center gap_10'>
                <img src={clock} alt="clock" className='w-24 h-24' />
                <h4 className='ff-sans fw-normal fs-16 lh-21 black-100 text-nowrap mb-0'>Price <br className='d-sm-block d-none' />
                  increase in </h4>
              </div>
              <div className='d-flex align-items-center justify-content-between gap-2'>
                <div className='d-flex flex-column align-items-center gap_2'>
                  <p className='fs-14 ff-sans lh-21 fw-normal black-200 mb-0'>Days</p>
                  <div className='time_box'>
                    <h1 className='ff-sans fs-24 lh-35 text-white d-flex align-items-center justify-content-center mb-0' id='days'>00</h1>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center gap_2'>
                  <p className='fs-14 ff-sans lh-21 fw-normal black-200 mb-0'>Hours</p>
                  <div className='time_box'>
                    <h1 className='ff-sans fs-24 lh-35 text-white d-flex align-items-center justify-content-center mb-0' id='hours'>12</h1>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center gap_2'>
                  <p className='fs-14 ff-sans lh-21 fw-normal black-200 mb-0'>Mins</p>
                  <div className='time_box'>
                    <h1 className='ff-sans fs-24 lh-35 text-white d-flex align-items-center justify-content-center mb-0' id='minutes'>46</h1>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center gap_2'>
                  <p className='fs-14 ff-sans lh-21 fw-normal black-200 mb-0'>Secs</p>
                  <div className='time_box'>
                    <h1 className='ff-sans fs-24 lh-35 text-white d-flex align-items-center justify-content-center mb-0' id='seconds'>19</h1>
                  </div>
                </div>
              </div>
            </div>
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
