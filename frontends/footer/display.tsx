import { Cemjsx } from "cemjs-all"
import logo from '@svg/logo4.svg'
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
                            <span class="header_title">Офицеры и солдаты мира</span>
                        </div>

                        <div class="footer_socials">
                            <img src={telegram} alt="Telegram" />
                            <img src={email} alt="Email" />
                            <img src={phone} alt="Phone" />
                            <img src={inst} alt="Instagram" />
                            <img src={youtube} alt="Youtube" />
                            <img src={twitter} alt="Twitter" />
                            <img src={vk} alt="Vkontakte" />
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )

}