import discord from '../assets/img/svg/discord.svg'
import telegram from '../assets/img/svg/telegram.svg'
import twitter from '../assets/img/svg/twitter.svg'
function Social() {
    return (
        <section>
            <div className="container_840">
                <div className="social_card">
                    <div className="pt-5 position-relative z-3 pb_40">
                        <h1 className=" fw-semibold fs-48 lh-56 ff-sans text-white text-center mb-0">Our <span className=" primary-color">Socials</span></h1>
                        <p className=" mb-0 ff-sans black-200 fw-normal fs-16 text-center pt-3">Join us on Social media for exclusive giveaway and stay connected</p>
                        <p className=" mb-0 ff-sans primary-color fw-normal fs-16 text-center pt_32">"Exciting Releases of 'Bad Playes' Avatars Coming Soon:Be Ready for the Fun!"</p>
                        <div className=" d-flex align-items-center justify-content-center gap-3 pt_32">
                            <a href="https://discord.com/login" target='_blank'>  <span className=" scoial_media_icon">
                                <img src={discord} alt="discord" />
                            </span>
                            </a>
                            <a href="https://twitter.com/login" target='_blank'>  <span className=" scoial_media_icon">
                                <img src={twitter} alt="twitter" />
                            </span>
                            </a>
                            <a href="https://web.telegram.org/" target='_blank'>  <span className=" scoial_media_icon">
                                <img src={telegram} alt="telegram" />
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Social }