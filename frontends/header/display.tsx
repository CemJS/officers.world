import { Cemjsx } from "cemjs-all"
import lenta from '@images/logo/lenta.gif'
import logo from '@svg/logo4.svg'
import phone from '@svg/social/phone.svg'
import email from '@svg/social/email.svg'


export const display = function () {

    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="header_inner">
                        <a href='/' onclick={this.Fn.link} class="header_logo">
                            <img src={logo}></img>
                        </a>
                        <div class="header_menu menu">
                            <div
                                class="menu_icon"
                                ref="burger"
                                onclick={() => {
                                    this.Static.menuShow = !this.Static.menuShow
                                    this.Ref.menu.classList.toggle('active')
                                    this.Ref.burger.classList.toggle('active')
                                    console.log(this.Static.menuShow);
                                    this.init();
                                }}
                            >
                                <span></span>
                            </div>
                            <div class="header_nav" ref="menu">
                                <span class="header_title">
                                    офицеры и солдаты мира
                                    <div class="lenta">
                                        <img src={lenta}></img>
                                    </div>
                                </span>
                                <nav>
                                    <ul class="header_list">
                                        <li class="header_list_item">События</li>
                                        <li class="header_list_item">Сотрудники</li>
                                        <li class="header_list_item">Мероприятия</li>
                                        <li class="header_list_item"><a href="/contacts/" onclick={this.Fn.link}>Контакты</a></li>
                                    </ul>
                                </nav>

                                <div class="socials">
                                    <a class="socials_item" href="mailto:example@gmsil.com">
                                        <img src={email}></img>
                                    </a>
                                    <a class="socials_item" href="tel:+74952294280">
                                        <img src={phone}></img>
                                    </a>
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