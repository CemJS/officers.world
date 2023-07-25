import { Cemjsx } from "cemjs-all"
import officer from '@images/officers/officer.jpg'
import eagle from '@images/eagle.png'

import rogozhkin from '@images/team/rogozhkin.jpg'
import bagryancev from '@images/team/bagryancev.jpg'
import mihaylov from '@images/team/mihaylov.jpg'
import stepashkin from '@images/team/stepashkin.png'
import gorovoy from '@images/team/gorovoy.jpg'
import zarembinskaya from '@images/team/zarembinskaya.jpg'
import golovashkin from '@images/team/golovashkin.jpg'
import bashtanuk from '@images/team/bashtanuk.jpeg'
import grigoryev from '@images/team/grigoryev.jpeg'

import uzor_lt from '@svg/pattern/uzor_lt.svg'
import uzor_rt from '@svg/pattern/uzor_rt.svg'
import uzor_lb from '@svg/pattern/uzor_lb.svg'
import uzor_rb from '@svg/pattern/uzor_rb.svg'


const events = [
    {
        img: "/assets/images/events/11/1.jpg",
        alt: 'Встреча с депутатом Государсвенной Думы Сергеем Ивановичем Морозовым',
        title: 'Встреча с депутатом Государсвенной Думы Сергеем Ивановичем Морозовым',
        desc: 'Сегодня на Красной Поляне вместе с депутатом Государственной Думы Сергеем Ивановичем Морозовым зашли в гости к Герою труда Кубани, почетному работнику газовой промышленности, лауреату  премии России в туризме «Хрустальный глобус», лауреату  национальной премии имени Петра Великого «Лучший менеджер России», действительному члену Международной и Российской академии  туризма - Аверьянову Борису Ивановичу.',
        data: '2 июля 2023г.'
    },
    {
        img: "/assets/images/events/10/1.jpg",
        alt: 'В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»',
        title: 'В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»',
        desc: 'Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики.',
        data: '2 июля 2023г.'
    },
    {
        img: "/assets/images/events/9/1.jpg",
        alt: 'В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»',
        title: 'В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»',
        desc: 'Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики.',
        data: '2 июля 2023г.'
    },
    {
        img: "/assets/images/events/8/1.jpg",
        alt: 'В Сочи состоялся финал городского этапа конкурса юных инспекторов дорожного движения «Безопасное колесо – 2023»',
        title: '«ОФИЦЕРЫ РОССИИ» ПРОВЕЛИ ОЧЕРЕДНУЮ ПАТРИОТИЧЕСКУЮ АКЦИЮ «ДЕСАНТ ГЕРОЕВ» В КУРСКОЙ ОБЛАСТИ',
        desc: 'В течение месяца сильнейшие отряды ЮИД боролись за звание лучшей команды и право представить город на региональном этапе соревнований «Безопасное колесо – 2023». Всего в мероприятиях приняли участие 184 юных инспектора из 46 школ. Ребятам предстояло пройти несколько этапов состязаний на знание Правил дорожного движения, основ первой доврачебной помощи, а также показать свое мастерство в фигурном вождении велосипеда и продемонстрировать свои таланты в творческом конкурсе.',
        data: '18.12.2020'
    },
    {
        img: "/assets/images/events/7/1.jpg",
        alt: 'Детское мероприятие «Безопасное колесо 2023»',
        title: 'Детское мероприятие «Безопасное колесо 2023»',
        desc: 'Совместно с  ГОСАВТОИНСПЕКЦИЕЙ ГОРОДА СОЧИ провели для детей мероприятие под названием  «Безопасное колесо 2023»',
        data: '26 мая 2023г.'
    },
    {
        img: "/assets/images/events/6/1.jpg",
        alt: 'В Администрации города Сочи провели встречу по обращению ООО Орлиные скалы',
        title: 'В Администрации города Сочи провели встречу по обращению ООО Орлиные скалы',
        desc: 'Вчера 19 мая в Администрации города Сочи провели встречу по обращению ООО Орлиные  скалы на имя  Депутата Государственной Думы Гусева Дмитрия Геннадьевича! На встрече присутствовали заместитель главы города-курорта  Сочи  в сфере земельно-имущественных отношений, курортов, туризма Петухова Инна Александровна , исполняющий обязанности директора Федерального государственного бюджетного учреждения «Сочинский национальный парк» г.Сочи Бородин Андрей Васильевич , заместитель директора департамента курорта и туризма администрации г.Сочи  Сазонов Кирил Дмитриевич  , директор ООО Орлиные скалы Обухов Сергей Александрович.',
        data: '20 мая 2023г.'
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
let currentIndex = 0;
let activeEvent = events[currentIndex];
let isDragging = false;
let startX, startScrollLeft;
let x1, a1 = null;
let y1, b1 = null;


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
                            <div class="papyrus">
                                <figure class="wrap_quote">
                                    <blockquote class="quote">
                                        <p class="text mr-75 mb-15"><span class="letter">Россия</span> снова встала на защиту всего Мира !!! <br></br>
                                            Сатанисты захватывают целые страны , уничтожают непокорные им народы ,
                                            ведут информационную войну , разрушают семейные ценности, традиции народов.</p>
                                        <p class="text">Сатанинское правительство признающее только силу и разбой должно быть сломлено , всесокрушающей силой свободолюбивых народов , в ряду которых российский народ выполняет свою великую освободительную задачу !  Офицеры и солдаты всего мира Давайте объединяться , не дадим сатанинскому и фашистскому режиму войти в наши  дома . Сохраним мир любовь и свободу на нашей земле. Да будет так!</p>

                                        {/* <p class="text">
                                            <span class="letter">Россия</span> снова встала на защиту всего Мира !!! <br></br>
                                            Сатанисты захватывают целые страны , уничтожают непокорные им народы ,
                                            ведут информационную войну , разрушают семейные ценности, традиции народов.
                                            Сатанинское правительство признающее только силу и разбой должно быть сломлено , всесокрушающей силой свободолюбивых народов , в ряду которых российский народ выполняет свою великую освободительную задачу !  Офицеры и солдаты всего мира Давайте объединяться , не дадим сатанинскому и фашистскому режиму войти в наши  дома . Сохраним мир любовь и свободу на нашей земле. Да будет так!
                                        </p> */}
                                    </blockquote>
                                    <figcaption>— Пиваев Вадим Вадимович, Офицеры и солдаты Мира </figcaption>
                                </figure>
                            </div>
                            <div class="appeal_item appeal_user">
                                <img src={officer}></img>
                            </div>
                        </div>
                        {/* <div class="appeal_item appeal_goal">
                            <h2 class="appeal_title">Основные направления деятельности организации «ОФИЦЕРЫ И СОЛДАТЫ МИРА»:</h2>
                            <ul class="goal_list">
                                <li class="goal_list_item">Защита прав офицеров и членов их семей</li>
                                <li class="goal_list_item">Патриотическое воспитание и правовое просвещение населения</li>
                                <li class="goal_list_item">Укрепление правопорядка и обороноспособности страны</li>
                            </ul>
                        </div> */}
                    </div>

                </div>
            </main>


            <section class="events">
                <div class="container">
                    <div class="wrap-title">
                        <h2 class="title">Встречи и мероприятия</h2>
                    </div>
                    <div
                        class="slider"
                        onmouseenter={() => {
                            this.Static.body.classList.add('disable_scroll');
                        }}
                        onmouseleave={() => {
                            this.Static.body.classList.remove('disable_scroll');
                        }}
                        ontouchstart={(e) => {
                            const firstTouch = e.touches[0];
                            a1 = firstTouch.clientX;
                            b1 = firstTouch.clientY;
                        }}
                        ontouchmove={(e) => {
                            if (!a1 || !b1) return false;
                            let a2 = e.touches[0].clientX;
                            let b2 = e.touches[0].clientY;
                            let aDiff = a2 - a1;
                            let bDiff = b2 - b1;

                            if (Math.abs(aDiff) > Math.abs(bDiff)) {
                                if (aDiff > 0) {
                                    if (currentIndex == 0) return
                                    currentIndex--;
                                    activeEvent = events[currentIndex];
                                }
                                else {
                                    console.log('=6a90ca=', "туть right")
                                    if (activeEvent == events[events.length - 1]) return
                                    currentIndex++;
                                    activeEvent = events[currentIndex];
                                }
                            }
                            a1 = null;
                            b1 = null;
                            this.init();
                        }}
                    >
                        <div
                            class="slider_wrap"
                            ref="sliderWrap"
                            onWheel={(e) => {
                                if (e.deltaY < 0) {
                                    if (activeEvent == events[0]) return
                                    currentIndex--;
                                    activeEvent = events[currentIndex];
                                } else if (e.deltaY > 0) {
                                    if (activeEvent == events[events.length - 1]) return
                                    currentIndex++;
                                    activeEvent = events[currentIndex];
                                }
                                this.init()
                            }}
                        >

                            <div class="slider_item" ref="slide">
                                <div class="slider_img">
                                    <img src={activeEvent.img} alt={activeEvent.alt} />
                                </div>
                                <div class="slider_content">
                                    <span class="slider_data">{activeEvent.data}</span>
                                    <div class="slider_title">{activeEvent.title}</div>
                                    <div class="slider_desc">{activeEvent.desc}</div>
                                    <a href="/events/" onclick={this.Fn.link} class="btn">
                                        <span>Подробнее</span>
                                        <span class="pseudo"></span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="slider_pagination">
                            {
                                events.map((item, index) => {
                                    return (
                                        <span
                                            class={["slider_pagination-bullet",
                                                activeEvent == events[index] ? "slider_pagination-bullet_active" : null]}
                                            onclick={() => {
                                                activeEvent = events[index];
                                                this.init();
                                            }}
                                        >
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section class="form">
                <div class="container">
                    <div class="form_inner">
                        <div class="form_item">
                            <h2 class="form_title">Общественная организация "ОФИЦЕРЫ И СОЛДАТЫ РОССИИ"</h2>
                            <div class="default_block mt-15">
                                <img src={uzor_lt} class="uzor uzor_lt" />
                                <img src={uzor_rt} class="uzor uzor_rt" />
                                <p class="text">
                                    <span class="letter">«ОФИЦЕРЫ И СОЛДАТЫ МИРА»</span> - наша цель объединить офицеров и солдатов всех стран во имя Добра и Мира на земле. Один за  всех и все за одного!
                                </p>
                                <img src={uzor_lb} class="uzor uzor_lb" />
                                <img src={uzor_rb} class="uzor uzor_rb" />
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
                                this.Ref.teamCarousel.scrollLeft -= this.Ref.slideTeam.offsetWidth + 20;
                            }}
                        ></div>
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
                                        this.Ref.teamCarousel.scrollLeft -= this.Ref.slideTeam.offsetWidth + 20;
                                    }
                                    else {
                                        this.Ref.teamCarousel.scrollLeft += this.Ref.slideTeam.offsetWidth + 20;
                                    }
                                }
                                x1 = null;
                                y1 = null;
                            }}
                        >
                            {
                                team.map((item, index) => {
                                    return (
                                        <div
                                            class="team_item"
                                            ref="slideTeam"
                                        >
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
                                this.Ref.teamCarousel.scrollLeft += this.Ref.slideTeam.offsetWidth + 20;
                            }}
                        ></div>

                    </div>
                    <div class="wrap_btn">
                        <a href="/staffing/" onclick={this.Fn.link} class="btn mt-15">
                            <span>Подробнее</span>
                            <span class="pseudo"></span>
                        </a>
                    </div>
                </div>
            </section>

        </div>

    )

}