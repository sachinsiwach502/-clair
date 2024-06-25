import arrow_img from '../assets/img/png/tokenomics_arrow.webp';
import tokenomics_img from '../assets/img/png/tokenomics_img.webp';
import mouse_img from '../assets/img/png/mouse_img.webp';
import profile from '../assets/img/png/ajay_img.webp';
import plus from '../assets/img/png/plus_icon.webp';

function Tokenomics() {
    return (
        <div className="container_1140" id='tokenomics'>
            <div className="row justify-content-between align-items-center">
                <div className=" col-lg-5 d-lg-block d-flex align-items-center justify-content-center flex-column" data-aos="fade-up-right">
                    <h1 className=" mb-0 text-white fw-semibold fs-48 lh-56 ff-sans fs-md-32 lh-md-37">Tokenomics</h1>
                    <div className=" d-flex align-items-center gap-3 pt-3">
                        <p className=" mb-0 black-300 fw-normal fs-24  lh-36 ff-sans">Baby Sinclair</p>
                        <button className="clair_btn fs-24 ff-sans fw-normal primary-color lh-35">$Clair</button>
                    </div>
                    <p className=" mb-0 fs-16 lh-24 fw-medium ff-sans black-300 pt-4">Total Tokens</p>
                    <h2 className=" fs-40 fw-semibold lh-48 primary-color ff-sans">100,000,000,000</h2>
                    <div className=' d-flex align-items-start flex-column'>
                        <div className=" d-flex align-items-baseline gap_12 pt_32">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>3%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Presale</p>
                        </div>
                        <div className=" d-flex align-items-baseline gap_12 pt_12">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>1%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Marketing</p>
                        </div>
                        <div className=" d-flex align-items-baseline gap_12 pt_12">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>5%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Team - locked for 24 months</p>
                        </div>
                        <div className=" d-flex align-items-baseline gap_12 pt_12">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>10%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Investors - locked for 24 months</p>
                        </div>
                        <div className=" d-flex align-items-baseline gap_12 pt_12">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>21%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Exchange listings & liquidity</p>
                        </div>
                        <div className=" d-flex align-items-baseline gap_12 pt_12">
                            <span> <img src={arrow_img} alt="arrow icon" className='tokenomics_arrow' /></span>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-24 lh-35'>60%</p>
                            <p className=' mb-0 black-300 ff-sans fw-medium fs-16 lh-24'>Rewards and burns</p>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-5 d-lg-block d-flex align-items-center justify-content-center' data-aos="fade-up-left">
                    <img src={tokenomics_img} alt="tokemomics" className='w-100 max-w-491 h-100' />
                </div>

            </div>
            <div className='community-card mt_lg_80 mt-md-5 mt-4' data-aos="zoom-in">
                <div className=' d-flex align-items-center justify-content-center gap_75 gap-4 flex-wrap flex-lg-nowrap position-relative z-3'>
                    <div className=' d-flex align-items-center gap_20'>
                        <span className='img_card'>
                            <img src={mouse_img} alt="mouse" />
                        </span>
                        <span className='plus_icon'>
                            <img src={plus} alt="profile" />
                        </span>
                        <span className='img_card'>
                            <img src={profile} alt="profile" />
                        </span>
                    </div>
                    <div className=' d-flex flex-column'>
                        <h1 className=' ff-sans fw-semibold text-white fs-20 lh-30 mb-0 pb-1 text-center text-lg-start'>Baby Sinclair Stands Strong with the Shiba Inu Community</h1>
                        <p className=' mb-0 ff-sans black-300 fs-16 lh-24 fw-normal pt-2 text-center text-lg-start'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                    </div >
                </div>
            </div>
        </div>
    )
}
export { Tokenomics }