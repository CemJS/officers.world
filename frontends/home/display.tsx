import { Cemjsx } from "cemjs-all"
import officer from '@images/officers/officer.jpg'
import lenta from '@images/logo/lenta.gif'
import flag from '@images/logo/flag.gif'
import phone from '@svg/social/phone.svg'
import email from '@svg/social/email.svg'
import one from '@images/events/1.png'
import two from '@images/events/2.jpg'
import three from '@images/events/3.jpg'
import four from '@images/events/4.jpg'

const events = [
    {
        img: one,
        alt: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ АВТОПРОБЕГ «ДОРОГАМИ ПАМЯТИ»',
        title: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ ОНЛАЙН-ВСТРЕЧУ УЧАЩИХСЯ С ГЕРОЕМ РОССИИ ЕЛЕНОЙ СЕРОВОЙ',
        desc: '«В нескольких субъектах Федерации День ветеранов боевых действий утвержден на региональном уровне. Теперь такое решение принято и законодательно закреплено в Курской области. Ветеранам важно признание общества, признание их заслуг перед Родиной. Они защищали свою страну, выполняли в разные годы боевые задачи за пределами Отечества во многих уголках мира. Мы надеемся, что в скором будущем 1 июля станет для ветеранов боевых действий на всей территории России официальным праздником», – отметил Сергей Липовой',
        data: ''
    },
    {
        img: two,
        alt: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ АВТОПРОБЕГ «ДОРОГАМИ ПАМЯТИ»',
        title: '«ОФИЦЕРЫ РОССИИ» ВОЗЛОЖИЛИ ВЕНОК И ЦВЕТЫ К МОГИЛЕ НЕИЗВЕСТНОГО СОЛДАТА',
        desc: 'Председатель Президиума организации Герой России Сергей Липовой поблагодарил депутатов регионального парламента за поддержку инициативы о включении Дня ветеранов боевых действий в перечень памятных дат Курской области. Эта инициатива Общероссийской организации «ОФИЦЕРЫ РОССИИ» была поддержана главой региона Романом Старовойтом и депутатами областной Думы. Как известно, 1 июля в России отмечается День ветеранов боевых действий. Пока он не имеет официального статуса, но во многих регионах идея проведения памятных мероприятий в этот день находит поддержку властей.',
        data: ''
    },
    {
        img: three,
        alt: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ АВТОПРОБЕГ «ДОРОГАМИ ПАМЯТИ»',
        title: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ АВТОПРОБЕГ «ДОРОГАМИ ПАМЯТИ»',
        desc: 'В делегацию, которую возглавил председатель Президиума «ОФИЦЕРОВ РОССИИ» Герой России генерал-майор Сергей Липовой, вошли председатель Совета мужества и отваги Герой Советского Союза Владимир Горовой, председатель Совета по патриотическому воспитанию Герой России Александр Головашкин, председатель Совета отечественных производителей в сфере обороны и безопасности Герой Социалистического труда',
        data: ''
    },
    {
        img: four,
        alt: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ ОЧЕРЕДНУЮ ПАТРИОТИЧЕСКУЮ АКЦИЮ «ДЕСАНТ ГЕРОЕВ» В КУРСКОЙ ОБЛАСТИ',
        title: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ ОЧЕРЕДНУЮ ПАТРИОТИЧЕСКУЮ АКЦИЮ «ДЕСАНТ ГЕРОЕВ» В КУРСКОЙ ОБЛАСТИ',
        desc: 'С 6 по 8 июня Общероссийская организация «ОФИЦЕРЫ РОССИИ» при поддержке группы компаний «Курский аккумуляторный завод» провела очередную патриотическую акцию «Десант Героев» в Курской области.',
        data: ''
    }
]

let activeEvent = events[0]
// let timeoutId

const autoPlay = function () {
    console.log('=89150a=', "function start")
    // if (!timeoutId) {
    //     timeoutId = setInterval(() => {
    //         console.log('=d92b46=', "переключение")
    //         let currentIndex = 0
    //         for (let i = 0; i <= events.length; i++) {
    //             currentIndex++;
    //             activeEvent = events[currentIndex];
    //             console.log('=331e8b=', currentIndex)
    //         }
    //     }, 2000)
    // }
    // for (let i = 0; i <= events.length; i++) {
    //     setTimeout(() => {
    //         console.log('=6fc011=', "переключение")
    //     }, 2000)
    // }
}

export const display = function () {
    // this.autoPlay()
    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="header_inner">
                        <div class="flag">
                            <img src={flag}></img>
                        </div>
                        <div class="header_logo">
                            {/* <img src={logo}></img> */}
                        </div>
                        <div class="header_menu menu" >
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
                                <nav>
                                    <ul class="header_list">
                                        <li class="header_list_item">События</li>
                                        <li class="header_list_item">Сотрудники</li>
                                        <li class="header_list_item">Мероприятия</li>
                                    </ul>
                                </nav>
                                <span class="header_title">
                                    офицеры и солдаты мира
                                    <div class="lenta">
                                        <img src={lenta}></img>
                                    </div>
                                </span>
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
            <main class="main">
                <div class="container">
                    <div class="appeal_wrap">
                        <div class="appeal">
                            <div class="appeal_item">
                                <figure class="wrap_quote">
                                    <blockquote class="quote">
                                        <p class="text">
                                            «ОФИЦЕРЫ И СОЛДАТЫ МИРА» работают во благо страны и общества. Одна из ключевых задач организации – консолидация ветеранов всех служб, вне зависимости от ведомственной принадлежности, объединение их потенциала с действующими офицерами и гражданами в целях системного решения задач, важных для государства и общества в сфере повышения уровня безопасности граждан и обороноспособности страны.

                                            Членами организации и сподвижниками стали более 300 тысяч человек, проведено более пяти тысяч мероприятий, участие в которых приняли свыше миллиона граждан! Общими усилиями удалось решить много значимых проблем, огромному числу людей оказана реальная помощь и поддержка.
                                        </p>
                                    </blockquote>
                                    <figcaption>— Анатолий Румынов, Офицеры Мира </figcaption>
                                </figure>
                            </div>
                            <div class="appeal_item appeal_user">
                                <img src={officer}></img>
                            </div>
                        </div>
                        <div class="appeal_item appeal_goal">
                            <h2 class="appeal_title">Основные направления деятельности организации «ОФИЦЕРЫ И СОЛДАТЫ МИРА»:</h2>
                            <ul class="goal_list">
                                <li class="goal_list_item">Защита прав офицеров и членов их семей</li>
                                <li class="goal_list_item">Патриотическое воспитание и правовое просвещение населения</li>
                                <li class="goal_list_item">Укрепление правопорядка и обороноспособности страны</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>

            <section class="events">
                <div class="container">
                    <div class="events_inner">
                        <div class="event_main">
                            <div class="event_img">
                                <img src={activeEvent.img}></img>
                            </div>
                            <span class="event_title">{activeEvent.title}</span>
                            <p class="event_info_text event_main_text">{activeEvent.desc}</p>
                        </div>
                        <div class="event_list">
                            {
                                events.map((item, index) => {
                                    return (
                                        <div
                                            class="event_list_item"
                                            onclick={() => {
                                                activeEvent = events[index]
                                                this.init()
                                            }}
                                        >
                                            <div class="event_img">
                                                <img src={item.img}></img>
                                            </div>
                                            <div class="event_info">
                                                <span class="event_title">{item.title}</span>
                                                <p class="event_info_text">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )

}