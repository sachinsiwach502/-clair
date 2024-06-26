// import logo from './logo.svg';
import nav_logo from '../assets/img/svg/nav_logo.svg';
import hero_sec_img from '../assets/img/png/hero_sec_img.webp';
import dropdown_img from '../assets/img/png/dropdown_img.webp';
import btn_img from '../assets/img/svg/button_img.svg';
import downside_icon from '../assets/img/png/downside_icon.webp'
import { useState } from 'react';

function Header() {
    const [navIcon, setNavIcon] = useState(false);
    const handleMenuIcon = () => {
        setNavIcon(!navIcon)
        let body = document.body;
        body.classList.toggle("overflow-hidden");
        let nav_links = document.querySelectorAll(".nav_links");
        nav_links.forEach(n => {
            n.addEventListener("click", () => {
                setNavIcon(false);
                body.classList.remove("overflow-hidden");
            });
        });
    };

    return (
        <>
            <header className='header_bg_img min-vh-100 d-flex flex-column position-relative'>
                <a href="#about" className=' position-absolute downside_icon'>
                    <img src={downside_icon} alt="downside icon" className=' w-100' />
                </a>
                <nav className='pt-4 pb-4 nav_bg_color'>
                    <div className='container_1140'>
                        <div className=' d-flex align-items-center justify-content-between'>
                            <span className=' curser'>  <img src={nav_logo} alt="nav_logo" /></span>
                            <div className=' menuIocn curser' onClick={handleMenuIcon}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={`d-flex align-items-center gap_60 lg_view ${navIcon ? "show" : ""}`}>
                                <ul className=' d-flex align-items-center gap_32 mb-0 d-max-lg-prop'>
                                    <li>
                                        <a href="#about" className=' ff-sans fw-medium black-300 fs-16 lh-24 nav_links'>About</a>
                                    </li>
                                    <li>
                                        <a href="#tokenomics" className=' ff-sans fw-medium black-300 fs-16 lh-24 nav_links'>Tokenomics</a>
                                    </li>
                                    <li>
                                        <a href="#aduit" className=' ff-sans fw-medium black-300 fs-16 lh-24 nav_links'>Audit</a>
                                    </li>
                                    <li>
                                        <a href="#roadmap" className=' ff-sans fw-medium black-300 fs-16 lh-24 nav_links'>Roadmap</a>
                                    </li>
                                    <li>
                                        <a href="#paper" className=' ff-sans fw-medium black-300 fs-16 lh-24 nav_links'>White Paper</a>
                                    </li>
                                </ul>
                                <span className=' curser'><img src={dropdown_img} alt="hero sec" /></span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className=' container flex-grow-1 d-flex flex-column align-items-center justify-content-center'>
                    <div className=' d-flex flex-column justify-content-center align-items-center '>
                        <h1 className=' text-center text-white ff-sans fs-61 lh-72 fw-bold mb-0 fs-md-40 lh-md-54'>
                            Presale is <span className='primary-color'> Live</span>
                        </h1>
                        <p className=' text-center black-100 fs-16 lh-24 fw-normal ff-sans max-w-702 mb-0 pt-3'>
                            Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!
                        </p>
                        <button className='bttn mt_32'>
                            <div className=' d-flex align-items-center gap-2 '>
                                <h3 className=' ff-sans fw-bold fs-16 lh-24 mb-0'>
                                    Buy $Clair
                                </h3>
                                <span><img src={btn_img} alt="hero sec" /></span>
                            </div>
                        </button>
                        <span className='max_w_810'> <img src={hero_sec_img} alt="hero sec" className=' w-100' /></span>
                    </div>
                </div>
            </header>
        </>
    )
}

export { Header }