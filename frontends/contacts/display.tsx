import { Cemjsx } from "cemjs-all"
import telegram from '@svg/social/telegram.svg'
import tiktok from '@svg/social/tiktok.svg'
import vk from '@svg/social/vk.svg'
import twitter from '@svg/social/twitter.svg'
import linkedin from '@svg/social/linkedin.svg'
import inst from '@svg/social/instagram.svg'
import youtube from '@svg/social/youtube.svg'

const contacts = [
    {
        alt: 'Telegram',
        src: telegram,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Tiktok',
        src: tiktok,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Vkontakte',
        src: vk,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Twitter',
        src: twitter,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Linkedin',
        src: linkedin,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Instagram',
        src: inst,
        tip: 'https://t.me/OfficersWorlds',
    },
    {
        alt: 'Youtube',
        src: youtube,
        tip: 'https://t.me/OfficersWorlds',
    },
]

export const display = function () {

    return (
        <main class="contacts">
            <div class="container">
                <div class="contacts_inner">
                    {
                        contacts.map((item, index) => {
                            return (
                                <a href="/" target="_blank" class="contacts_item ">
                                    <img src={item.src} alt={item.alt}></img>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </main>

    )

}