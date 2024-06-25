import accordian_arrow from '../assets/img/png/accodian_top_side_arrow.webp';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <section className="faq_bg_img pt_80 pb_lg_160 pb_sm_80 pb-5 overflow-hidden">
            <div className="container_800 pt_90 pb_lg_97 pb_sm_70 pb-5">
                <h1 className=' text-center text-white fw-semibold fs-48 lh-56 lh-md-37 fs-md-32 ff-sans'>Frequently Asked <span className=' primary-color'>Questions </span> </h1>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className=' mt_60' data-aos="fade-right">
                        <Accordion.Header className=' ff-sans black-200 fs-16 lh-24 fw-normal'>What is $clair?</Accordion.Header>
                        <Accordion.Body className=' ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className=' mt-3' data-aos="fade-left">
                        <Accordion.Header className='ff-sans black-200 fs-16 lh-24 fw-normal'>Arcu in pellentesque sit odio.</Accordion.Header>
                        <Accordion.Body className='ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className=' mt-3' data-aos="fade-right">
                        <Accordion.Header className=' ff-sans black-200 fs-16 lh-24 fw-normal'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                        <Accordion.Body className=' ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className=' mt-3' data-aos="fade-left">
                        <Accordion.Header className='ff-sans black-200 fs-16 lh-24 fw-normal'>Metus augue dictumst sit amet.</Accordion.Header>
                        <Accordion.Body className='ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className=' mt-3' data-aos="fade-right">
                        <Accordion.Header className='ff-sans black-200 fs-16 lh-24 fw-normal'>Metus augue dictumst sit amet.</Accordion.Header>
                        <Accordion.Body className='ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className=' mt-3' data-aos="fade-left">
                        <Accordion.Header className=' ff-sans black-200 fs-16 lh-24 fw-normal'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                        <Accordion.Body className=' ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className=' mt-3' data-aos="fade-right">
                        <Accordion.Header className='ff-sans black-200 fs-16 lh-24 fw-normal'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                        <Accordion.Body className='ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className=' mt-3' data-aos="fade-left">
                        <Accordion.Header className='ff-sans black-200 fs-16 lh-24 fw-normal'>Elementum at dui varius consequat fringilla.</Accordion.Header>
                        <Accordion.Body className='ff-sans black-200 fs-16 lh-24 fw-normal'>
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>



            </div>
        </section>
    )
}
export { Faq }