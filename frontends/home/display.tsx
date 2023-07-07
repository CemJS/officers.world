import { Cemjsx } from "cemjs-all"
import officer from '@images/officers/officer.jpg'
import eagle from '@images/eagle.png'
import safe from 'images/safe.png'
import lenta from '@images/logo/lenta.gif'
import flag from '@images/logo/flag.gif'
import logo from '@svg/logo4.svg'
import phone from '@svg/social/phone.svg'
import email from '@svg/social/email.svg'
import one from '@images/events/1.png'
import two from '@images/events/2.jpg'
import three from '@images/events/3.jpg'
import four from '@images/events/4.jpg'
import arrowPrev from '@svg/arrow_prev.svg'
import arrowNext from '@svg/arrow_next.svg'

import rogozhkin from '@images/team/rogozhkin.jpg'
import bagryancev from '@images/team/bagryancev.jpg'
import mihaylov from '@images/team/mihaylov.jpg'
import stepashkin from '@images/team/stepashkin.png'
import gorovoy from '@images/team/gorovoy.jpg'
import zarembinskaya from '@images/team/zarembinskaya.jpg'
import golovashkin from '@images/team/golovashkin.jpg'
import bashtanuk from '@images/team/bashtanuk.jpeg'
import grigoryev from '@images/team/grigoryev.jpeg'


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

const team = [
    {
        name: 'Багрянцев Виктор Александрович',
        photo: bagryancev,
        post: 'Председатель правления генерал-майор',
        category: 'Правление',
        desc: 'Правление – постоянно действующий коллегиальный руководящий орган организации, осуществляющий права юридического лица от имени организации в соответствии с действующим законодательством.'
    },
    {
        name: 'Михайлов Александр Георгиевич',
        photo: mihaylov,
        post: 'Руководитель Центрального исполкома генерал-лейтенант полиции',
        category: 'Центральный исполком',
        desc: 'Обеспечение практической реализации уставных целей и задач организации, выполнение решений Правления и Президиума организации.'
    },
    {
        name: 'Степашкин Сергей Вадимович',
        photo: stepashkin,
        post: 'Председатель Совета, генерал-полковник',
        category: 'Экспертный совет',
        desc: 'Цель Совета – объединение экспертов, обладающих   профессиональными знаниями в различных областях деятельности   организации.'
    },
    {
        name: 'Рогожкин Николай Евгеньевич',
        photo: rogozhkin,
        post: 'Председатель совета генерал армии',
        category: 'Совет высшего офицерского состава',
        desc: 'Цель Совета – консолидация высших офицеров правоохранительных и других силовых и контрольных ведомств Российской Федерации, а также приравненных к ним государственных служащих, как действующих, так и уволенных с военной (государственной) службы, и использование их профессионального и интеллектуального потенциала в интересах государства и общества.'
    },
    {
        name: 'Горовой Владимир Ильич',
        photo: gorovoy,
        post: 'Председатель Совета, Герой Советского Союза полковник',
        category: 'Совет мужества и отваги',
        desc: 'Цель Совета – объединение ветеранов и действующих военнослужащих, сотрудников правоохранительных и других силовых и контрольных ведомств, а также других граждан, награжденных боевыми орденами и медалями, в интересах популяризации их подвигов, поднятия престижа боевых наград, для активного участия в гражданско-патриотическом воспитании населения, поддержания морального духа и повышения профессионального уровня личного состава силовых ведомств.'
    },
    {
        name: 'Зарембинская Елена Леонтьевна',
        photo: zarembinskaya,
        post: 'Председатель Совета генерал-майор внутренней службы',
        category: 'Совет женщин-офицеров',
        desc: 'Цель Совета – консолидация женского сообщества в погонах, использование профессионального и интеллектуального потенциала женщин-офицеров в интересах государства и общества.'
    },
    {
        name: 'Головашкин Александр Николаевич',
        photo: golovashkin,
        post: 'Председатель совета, Герой России полковник полиции',
        category: 'Совет по патриотическому воспитанию',
        desc: 'Цель Совета – организация взаимодействия институтов гражданского   общества с органами государственной власти и местного   самоуправления по патриотическому воспитанию населения   Российской Федерации на основе партнерства.'
    },
    {
        name: 'Баштанюк Геннадий Сергеевич',
        photo: bashtanuk,
        post: 'Председатель Совета Герой Социалистического труда',
        category: 'Совет отечественных производителей в сфере обороны и безопасности',
        desc: 'Цель Совета – консолидация профессионального и научно-технического потенциала отечественных производителей в сфере обороны и безопасности с целью повышения уровня национальной безопасности страны.'
    },
    {
        name: 'Григорьев Александр Петрович',
        photo: grigoryev,
        post: 'Руководитель общественной приемной подполковник',
        category: 'Общественная приемная',
        desc: 'Задача общественной приемной – защита прав и законных интересов военнослужащих, сотрудников правоохранительных, других силовых и контрольно-надзорных ведомств, членов их семей и ветеранов'
    },
]

let activeEvent = events[0]
let isDragging = false;
let startX, startScrollLeft, timeoutId;
let x1 = null;
let y1 = null;


export const display = function () {

    return (
        <div>


            <main class="main">
                <div class="container">
                    <div class="wrap-title">
                        <h1 class="title">Офицеры и солдаты мира</h1>
                    </div>
                    <div class="appeal_wrap">
                        <div class="appeal">
                            <div class="appeal_item">
                                <figure class="wrap_quote">
                                    <blockquote class="quote">
                                        <p class="text">
                                            <span class="letter">«ОФИЦЕРЫ И СОЛДАТЫ МИРА»</span> работают во благо страны и общества. Одна из ключевых задач организации – консолидация ветеранов всех служб, вне зависимости от ведомственной принадлежности, объединение их потенциала с действующими офицерами и гражданами в целях системного решения задач, важных для государства и общества в сфере повышения уровня безопасности граждан и обороноспособности страны.

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
                                                <span>05.05.1969 г.</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div class="wrap_btn">
                        <a href="/show/" class="btn mt-15" onclick={this.Fn.link}>
                            <span>Подробнее</span>
                            <span class="pseudo"></span>
                        </a>
                    </div>
                </div>

            </section>

            <section class="form">
                <div class="container">
                    <div class="form_inner">
                        <div class="form_item">
                            <h2 class="form_titlef">Общественная организация "ОФИЦЕРЫ И СОЛДАТЫ РОССИИ"</h2>
                            <div class="default_block">
                                <p class="text">
                                    <span class="letter">«ОФИЦЕРЫ И СОЛДАТЫ РОССИИ»</span> работают во благо страны и общества. Одна из ключевых задач организации – консолидация ветеранов всех служб, вне зависимости от ведомственной принадлежности, объединение их потенциала с действующими офицерами и гражданами в целях системного решения задач, важных для государства и общества в сфере повышения уровня безопасности граждан и обороноспособности страны.
                                </p>
                            </div>
                        </div>
                        <div class="form_item">
                            <div class="form_img">
                                <img src={eagle} alt="Россия" />
                            </div>
                            <a href="/form/" onclick={this.Fn.link} class="btn">
                                <span>Подробнее</span>
                                <span class="pseudo"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team">
                <div class="container">
                    <div class="wrap-title">
                        <h2 class="title">Наши сотрудники</h2>
                    </div>
                    <div class="team_wrap">
                        <div
                            class="team_button team_button_prev"
                            onclick={() => {
                                this.Ref.teamCarousel.scrollLeft -= this.Ref.slide.offsetWidth + 20;
                            }}
                        >
                            <img src={arrowPrev}></img>
                        </div>
                        <div
                            class="team_carousel"
                            ref="teamCarousel"
                            onmousedown={(e) => {
                                isDragging = true;
                                startX = e.pageX;
                                startScrollLeft = this.Ref.teamCarousel.scrollLeft;

                            }}
                            onmousemove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                this.Ref.teamCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
                            }}
                            onmouseup={(e) => {
                                isDragging = false;
                            }}
                            ontouchstart={(e) => {
                                console.log('=d004e1=', e)
                                const firstTouch = e.touches[0];
                                x1 = firstTouch.clientX;
                                y1 = firstTouch.clientY;
                            }}
                            ontouchmove={(e) => {
                                if (!x1 || !y1) return false;
                                let x2 = e.touches[0].clientX;
                                let y2 = e.touches[0].clientY;
                                let xDiff = x2 - x1;
                                let yDiff = y2 - y1;

                                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                                    if (xDiff > 0) {
                                        this.Ref.teamCarousel.scrollLeft -= this.Ref.slide.offsetWidth + 20;
                                    }
                                    else {
                                        this.Ref.teamCarousel.scrollLeft += this.Ref.slide.offsetWidth + 20;
                                    }
                                }
                                x1 = null;
                                y1 = null;
                            }}
                        >
                            {
                                team.map((item, index) => {
                                    return (
                                        <div class="team_item" ref="slide">
                                            <img class="team_item-img" src={item.photo}></img>
                                            <div class="team_overlay">
                                                <h3 class="team_title">{item.name}</h3>
                                                <p class="team_desc">{item.category}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div
                            class="team_button team_button_next"
                            onclick={() => {
                                this.Ref.teamCarousel.scrollLeft += this.Ref.slide.offsetWidth + 20;
                            }}
                        >
                            <img src={arrowNext}></img>
                        </div>

                    </div>
                    <div class="wrap_btn">
                        <a href class="btn mt-15">
                            <span>Подробнее</span>
                            <span class="pseudo"></span>
                        </a>
                    </div>
                </div>
            </section>

        </div>

    )

}