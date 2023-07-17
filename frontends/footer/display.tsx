import { Cemjsx } from "cemjs-all"
import logo from '@images/logo/logoFinish.png'
import phone from '@svg/social/phone.svg'
import email from '@svg/social/email.svg'


import telegram from '@svg/social/telegram.svg'
import tiktok from '@svg/social/tiktok.svg'
import vk from '@svg/social/vk.svg'
import twitter from '@svg/social/twitter.svg'
import linkedin from '@svg/social/linkedin.svg'
import inst from '@svg/social/instagram.svg'
import youtube from '@svg/social/youtube.svg'



export const display = function () {

    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="footer_inner">
                        <div class="footer_logo_wrap">
                            <div class="footer_logo">
                                <img src={logo} alt="Офицеры и солдаты мира" />
                            </div>
                            {/* <span class="header_title">Офицеры и солдаты мира</span> */}
                        </div>

                        <span class="footer_info">Copyright © 2023</span>

                        <div class="footer_contacts">
                            <div class="footer_socials">
                                <a href="#"><img src={telegram} alt="Telegram" /></a>
                                <a href="#"><img src={email} alt="Email" /></a>
                                <a href="#"><img src={phone} alt="Phone" /></a>
                                <a href="#"><img src={inst} alt="Instagram" /></a>
                                <a href="#"><img src={youtube} alt="Youtube" /></a>
                                <a href="#"><img src={twitter} alt="Twitter" /></a>
                                <a href="#"><img src={vk} alt="Vkontakte" /></a>
                            </div>
                            <a href="mailto:example@gmsil.com">example@gmsil.com</a>
                            <a href="tel:+74952294280">+74952294280</a>
                        </div>

                    </div>
                </div>
            </footer>

        </div>

    )

}