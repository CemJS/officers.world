import { Cemjsx } from "cemjs-all"
import logo from '@images/logo/logoFinish.png'
import uzor_lt from '@svg/pattern/uzor_darkLT.svg'
import uzor_rt from '@svg/pattern/uzor_darkRT.svg'

import phone from '@svg/social/phone.svg'
import email from '@svg/social/email.svg'
import telegram from '@svg/social/telegram.svg'
import vk from '@svg/social/vk.svg'
import twitter from '@svg/social/twitter.svg'
import inst from '@svg/social/instagram.svg'
import youtube from '@svg/social/youtube.svg'

const socials = [
    {
        src: telegram,
        alt: 'Telegram Officers',
        link: '/',
    },
    {
        src: email,
        alt: 'Email Officers',
        link: '/',
    },
    {
        src: phone,
        alt: 'Phone Officers',
        link: '/',
    },
    {
        src: inst,
        alt: 'Instagram Officers',
        link: '/',
    },
    {
        src: youtube,
        alt: 'Youtube Officers',
        link: '/',
    },
    {
        src: twitter,
        alt: 'Twitter Officers',
        link: '/',
    },
    {
        src: vk,
        alt: 'Vkontakte Officers',
        link: '/',
    },
]

export const display = function () {

    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="header_inner">
                        <img src={uzor_lt} class="uzor uzor_lt" />
                        <img src={uzor_rt} class="uzor uzor_rt" />
                        {/* <a href='/' onclick={this.Fn.link} class="header_logo">
                            <img src={logo}></img>
                        </a> */}
                        <div class="header_menu menu">
                            <div
                                class="menu_icon"
                                ref="burger"
                                onclick={() => {
                                    this.Static.menuShow = !this.Static.menuShow
                                    this.Ref.menu.classList.toggle('active')
                                    this.Ref.burger.classList.toggle('active')
                                    this.init();
                                }}
                            >
                                <span></span>
                            </div>
                            <div class="header_nav" ref="menu">
                                {/* <span class="header_title">
                                    офицеры и солдаты мира

                                </span> */}
                                <a href='/' onclick={this.Fn.link} class="header_logo">
                                    <img src={logo}></img>
                                </a>
                                <nav>
                                    <ul class="header_list">
                                        <li
                                            class="header_list_item"
                                            onclick={() => {
                                                this.Static.menuShow = false;
                                                this.Ref.menu.classList.remove('active')
                                                this.Ref.burger.classList.remove('active')
                                                this.init();
                                            }}
                                        >
                                            <a href="/staffing/" onclick={this.Fn.link}>Члены организации</a>
                                        </li>
                                        <li
                                            class="header_list_item"
                                            onclick={() => {
                                                this.Static.menuShow = false;
                                                this.Ref.menu.classList.remove('active')
                                                this.Ref.burger.classList.remove('active')
                                                this.init();
                                            }}
                                        >
                                            <a href="/events/" onclick={this.Fn.link}>Мероприятия</a>
                                        </li>
                                        <li
                                            class="header_list_item"
                                            onclick={() => {
                                                this.Static.menuShow = false;
                                                this.Ref.menu.classList.remove('active')
                                                this.Ref.burger.classList.remove('active')
                                                this.init();
                                            }}
                                        >
                                            <a href="/contacts/" onclick={this.Fn.link}>Контакты</a>
                                        </li>
                                    </ul>
                                </nav>

                                {/* <div class="socials">
                                    <a class="socials_item" href="mailto:example@gmsil.com">
                                        <img src={email}></img>
                                    </a>
                                    <a class="socials_item" href="tel:+74952294280">
                                        <img src={phone}></img>
                                    </a>
                                </div> */}
                                <div class="socials_mobile">
                                    {
                                        socials.map((item, index) => {
                                            return (
                                                <a href={item.link} target="_blank">
                                                    <img src={item.src} alt={item.alt}></img>
                                                </a>
                                            )
                                        })
                                    }
                                    <a href="#"></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div class="run_line">
                <marquee behavior="scroll" direction="left">«ОФИЦЕРЫ РОССИИ» работают во благо страны и общества. Одна из ключевых задач организации – консолидация ветеранов всех служб, вне зависимости от ведомственной принадлежности, объединение их потенциала с действующими офицерами и гражданами в целях системного решения задач, важных для государства и общества в сфере повышения уровня безопасности граждан и обороноспособности страны. Членами организации и сподвижниками стали более 300 тысяч человек, проведено более пяти тысяч мероприятий, участие в которых приняли свыше миллиона граждан! Общими усилиями удалось решить много значимых проблем, огромному числу людей оказана реальная помощь и поддержка.</marquee>
            </div>
        </div>

    )

}