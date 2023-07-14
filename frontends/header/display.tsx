import { Cemjsx } from "cemjs-all"
import logo from '@images/logo/logoFinish.png'
import uzor_lt from '@svg/pattern/uzor_darkLT.svg'
import uzor_rt from '@svg/pattern/uzor_darkRT.svg'

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
                                    console.log(this.Static.menuShow);
                                    this.init();
                                }}
                            >
                                <span></span>
                            </div>
                            <div class="header_nav" ref="menu">
                                <span class="header_title">
                                    офицеры и солдаты мира
                                    {/* <div class="lenta">
                                        <img src={lenta}></img>
                                    </div> */}
                                </span>
                                <a href='/' onclick={this.Fn.link} class="header_logo">
                                    <img src={logo}></img>
                                </a>
                                <nav>
                                    <ul class="header_list">
                                        {/* <li class="header_list_item">События</li> */}
                                        <li class="header_list_item">
                                            <a href="/staffing/" onclick={this.Fn.link}>Члены организации</a>
                                        </li>
                                        <li class="header_list_item">
                                            <a href="/events/" onclick={this.Fn.link}>Мероприятия</a>
                                        </li>
                                        <li class="header_list_item">
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