import top_side_layer from '../assets/img/png/top_side_layer.webp'
import bottom_side_layer from '../assets/img/png/bottom_side_layer.webp'
import { useState } from 'react'
function Adress() {
    const [isInpVal, setisInpVal] = useState("")

    const copy = (text) => {
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                alert(`copy success! - ${text}`);
            })
        }
    }
    return (
        <>
            <section className='adress_bg_img overflow-hidden'>
                <span className='w-100'> <img src={top_side_layer} alt="layer" className='w-100' /></span>
                <div className='container pt_152 pb_154'>
                    <h1 className=' fw-semibold fs-48 lh-56 ff-sans text-center text-white mb-0 fs-md-32 lh-md-37' data-aos="fade-left"> <span className=' fw-bold primary-color'>$CLAIR</span> Smart Contract Address</h1>
                    <div className=' d-flex align-items-center justify-content-center flex-column'>
                        <div className="input_txt d-flex mt-4" data-aos="fade-right">
                            <input onChange={(e) => setisInpVal(e.target.value)} type="text" className=" border-0 bg-transparent w-75 copy_input ff-sans" value={"0xFD1929755F73f974648daD00ab491a7C44a00eeD"} />
                            <button className='bttn ff-sans fw-bold fs-16 lh-24 copybtn' onClick={() => copy(isInpVal)}>Copy</button>
                        </div>
                        <p className=' ff-sans fw-normal fs-16 text-center black-200 lh-24 max-w-806 pt_32 mb-0' data-aos="fade-left">Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
                    </div>
                </div>
                <span className='w-100'> <img src={bottom_side_layer} alt="layer" className=' w-100' /></span>
            </section>
        </>
    )
}
export { Adress }