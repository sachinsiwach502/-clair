import lockImg from '../assets/img/png/lock_img.webp';
import top_side_layer from '../assets/img/png/top_side_layer.webp';
import bottom_side_layer from '../assets/img/png/bottom_side_layer.webp';
import slider_img_01 from '../assets/img/png/slider_1.webp';
import slider_img_02 from '../assets/img/png/slider_2.webp';
import slider_img_03 from '../assets/img/png/slider_3.webp';
import slider_img_04 from '../assets/img/png/slider_4.webp';
import slider_img_05 from '../assets/img/png/slider_5.webp';
import slider_img_06 from '../assets/img/png/slider_6.webp';

function Secure() {
    return (
        <section className=' secure_bg_img overflow-hidden' id='aduit'>
            <img src={top_side_layer} alt="top side layer" className=' w-100' />
            <div className=' container_1140 pb_160 pt_177'>
                <div className='row align-items-center justify-content-between'>
                    <div className=' col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end' data-aos="flip-left">
                        <span>
                            <img src={lockImg} alt="bottom side layer" className='w-245 h-245' />
                        </span>
                    </div>
                    <div className=' col-lg-6  mt-lg-0 mt-3' data-aos="flip-right">
                        <p className=' black-300 ff-sans fs-20 lh-30 fw-normal mb-0 text-lg-start text-center'>Rest easy knowing that $CLAIR is </p>
                        <h2 className=' primary-color ff-sans mb-0 pt_12 fs-32 lh-48 fw-semibold text-lg-start text-center'>Fully Audited and 100% Secure.</h2>
                        <p className=' black-300 ff-sans fs-20 lh-30 fw-normal mb-0 pt_12 text-lg-start text-center'>Zero Room for Rug Pulls: Invest with Confidence. </p>
                        <div className=' d-flex align-items-center justify-content-center d-lg-block'> <button className='bttn mt_32 ff-sans fw-bold fs-16 lh-24'>
                            Log In
                        </button></div>
                    </div>

                </div>

                <div className='yellowUnderline'></div>
                <div className='contaier_1080'>
                    <div className='row pt_61 justify-content-between pb_150'>
                        <div className=' col-lg-5' data-aos="flip-up">
                            <p className=' mb-0 ff-sans fw-semibold fs-32 text-white text-lg-start text-center'>Listing on <span className=' primary-color'>Major Exchanges </span> </p>
                            <p className=' ff-sans mb-0 fw-normal fs-20 lh-30  black-300 text-lg-start text-center'>Baby Sinclair’s Team is in action to secure the <span className=' primary-color'>$CLAIR </span> listing on major exchanges. Exciting milestones ahead.</p>
                        </div>
                        <div className='col-lg-6 mt-lg-0 mt-2' data-aos="flip-down">
                            <div className=' slider_box'>
                                <div className=' d-flex align-items-center gap_32 overflow-auto position-relative z-3 slider_scroll'>
                                    <span className='h-99 '>  <img src={slider_img_01} alt="slider img" className='w-267 h-100' /></span>
                                    <span className=' h-99 '>  <img src={slider_img_02} alt="slider img" className=' w-267 h-100' /></span>
                                    <span className=' h-99 '>  <img src={slider_img_03} alt="slider img" className=' w-267 h-100' /></span>
                                    <span className=' h-99'>  <img src={slider_img_04} alt="slider img" className=' w-267 h-100' /></span>
                                    <span className=' h-99 '>  <img src={slider_img_05} alt="slider img" className=' w-267 h-100' /></span>
                                    <span className=' h-99 '>  <img src={slider_img_06} alt="slider img" className=' w-267 h-100' /></span>
                                </div>
                                <div className=' d-flex align-items-center gap-3 pt-4'>
                                    <div className='slider_bigger_underline'></div>
                                    <div className='slider_smaller_underline'></div>
                                    <div className='slider_bigger_underline'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export { Secure }