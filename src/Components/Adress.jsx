// import top_side_layer from './assets/img/png/top_side_layer.png';
// import bottom_side_layer from './assets/img/png/bottom_side_layer.png';
function Adress() {
    return (
        <>
            <section className='bg-brown'>
                {/* <span className='w-100'> <img src={top_side_layer} alt="layer" className='w-100' /></span> */}
                <div className='container pt_152 pb_154'>
                    <h1 className=' fw-semibold fs-48 lh-56 ff-sans text-center text-white mb-0'> <span className=' fw-bold primary-color'>$CLAIR</span> Smart Contract Address</h1>
                    <div className=' d-flex align-items-center justify-content-center flex-column'>
                        <div className="input_txt d-flex mt-4">
                            <input type="text" placeholder="0xFD1929755F73f974648daD00ab491a7C44a00eeD" className=" border-0 bg-transparent w-75 copy_input" />
                            <button className='bttn ff-sans fw-bold fs-16 lh-24'>Copy</button>
                        </div>
                        <p className=' ff-sans fw-normal fs-16 text-center black-200 lh-24 max-w-806 pt_32 mb-0'>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
                    </div>
                </div>
                {/* <span className='w-100'> <img src={bottom_side_layer_side_layer} alt="layer" className=' w-100' /></span> */}
            </section>
        </>
    )
}
export { Adress }