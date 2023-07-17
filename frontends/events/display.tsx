import { Cemjsx } from "cemjs-all"
import slide1 from '@images/events/1.png'
import slide2 from '@images/events/2.jpg'
import slide3 from '@images/events/3.jpg'
import slide4 from '@images/events/4.jpg'


import one from '@images/events/1.png'
import two from '@images/events/2.jpg'
import three from '@images/events/3.jpg'
import four from '@images/events/4.jpg'

const galleryMeetDeputy = [
    {
        src: "/assets/images/events/11/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/11/2.jpg',
        alt: 'Event'
    },
]

const galleryYourSelf = [
    {
        src: "/assets/images/events/10/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/10/2.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/10/3.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/10/4.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/10/5.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/10/6.jpg',
        alt: 'Event'
    },
]

const gallerySirius = [
    {
        src: "/assets/images/events/9/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/9/2.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/9/3.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/9/4.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/9/5.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/9/6.jpg',
        alt: 'Event'
    },
]

const galleryFinal = [
    {
        src: "/assets/images/events/8/1.jpg",
        alt: 'Event'
    },
    {
        src: "/assets/images/events/8/2.jpg",
        alt: 'Event'
    }
]

const galleryChildren = [
    {
        src: "/assets/images/events/7/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/2.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/3.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/4.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/5.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/6.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/7/7.jpg',
        alt: 'Event'
    },
]

const galleryHospital = [
    {
        src: "/assets/images/events/5/1.jpg",
        alt: 'Event'
    },
    {
        src: "/assets/images/events/5/2.jpg",
        alt: 'Event'
    },
]

const galleryDuma = [
    {
        src: "/assets/images/events/2/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/2/2.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/2/3.jpg',
        alt: 'Event'
    },
]

const galleryMeetDuma = [
    {
        src: "/assets/images/events/1/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/1/2.jpg',
        alt: 'Event'
    },
]



let currentIndexDeputy = 0;
let currentIndexYourSelf = 0;
let currentIndexSirius = 0;
let currentIndexFinal = 0;
let currentIndexChildren = 0;
let currentIndexHospital = 0;
let currentIndexDuma = 0;
let currentIndexMeetDuma = 0;

let lastIndexDeputy = galleryMeetDeputy.length - 1;
let lastIndexYourSelf = galleryYourSelf.length - 1;
let lastIndexSirius = gallerySirius.length - 1;
let lastIndexFinal = galleryFinal.length - 1;
let lastIndexChildren = galleryChildren.length - 1;
let lastIndexHospital = galleryHospital.length - 1;
let lastIndexDuma = galleryDuma.length - 1;
let lastIndexMeetDuma = galleryMeetDuma.length - 1;




export const display = function () {
    return (
        <div class="container">
            <div class="wrap-title">
                <h1 class="title">Мероприятия</h1>
            </div>
            <div class="event_inner">
                <section class="event event_gallery">
                    {/* <div class="event_img">
                        <img src="/assets/images/events/11/1.jpg"></img>
                    </div> */}
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexDeputy) === 0) return;
                                currentIndexDeputy--;
                                console.log('=d69ca1=', currentIndexDeputy)
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexDeputy) === Number(lastIndexDeputy)) return;
                                currentIndexDeputy++;
                                console.log('=d69ca1=', currentIndexDeputy)
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryMeetDeputy[currentIndexDeputy].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Встреча с депутатом Государсвенной Думы Сергеем Ивановичем Морозовым</h3>
                        <p class="event_text">Сегодня на Красной Поляне вместе с депутатом Государственной Думы Сергеем Ивановичем Морозовым зашли в гости к Герою труда Кубани, почетному работнику газовой промышленности, лауреату  премии России в туризме «Хрустальный глобус», лауреату  национальной премии имени Петра Великого «Лучший менеджер России», действительному члену Международной и Российской академии  туризма - Аверьянову Борису Ивановичу.</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexYourSelf) === 0) return;
                                currentIndexYourSelf--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexYourSelf) === Number(lastIndexYourSelf)) return;
                                currentIndexYourSelf++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryYourSelf[currentIndexYourSelf].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»</h3>
                        <p class="event_text">Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexSirius) === 0) return;
                                currentIndexSirius--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexSirius) === Number(lastIndexSirius)) return;
                                currentIndexSirius++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={gallerySirius[currentIndexSirius].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»</h3>
                        <p class="event_text">Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    {/* <div class="event_img">
                        <img src="/assets/images/events/8/1.jpg"></img>
                    </div> */}
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexFinal) === 0) return;
                                currentIndexFinal--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexFinal) === Number(lastIndexFinal)) return;
                                currentIndexFinal++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryFinal[currentIndexFinal].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В Сочи состоялся финал городского этапа конкурса юных инспекторов дорожного движения «Безопасное колесо – 2023»</h3>
                        <p class="event_text">В течение месяца сильнейшие отряды ЮИД боролись за звание лучшей команды и право представить город на региональном этапе соревнований «Безопасное колесо – 2023». Всего в мероприятиях приняли участие 184 юных инспектора из 46 школ.</p>
                        <p class="event_text">Ребятам предстояло пройти несколько этапов состязаний на знание Правил дорожного движения, основ первой доврачебной помощи, а также показать свое мастерство в фигурном вождении велосипеда и продемонстрировать свои таланты в творческом конкурсе.</p>
                        <p class="event_text">Ребята поразили жюри своими знаниями Правил дорожного движения и с лёгкостью преодолели препятствия на велосипеде, прекрасно справились с заданием по оказанию первой помощи. А самой увлекательной частью конкурса стали творческие номера, где ребята продемонстрировали креативный подход в умении убеждать участников дорожного движения соблюдать Правила дорожной безопасности.</p>
                        <p class="event_text">Этапы следовали один за другим и требовали серьезной концентрации внимания от юных участников конкурса. Борьба была упорной, все команды показали себя достойными соперниками.</p>
                        <p class="event_text">По итогам соревнований победителем городского этапа конкурса «Безопасное колесо 2023» стала команда отряда ЮИД школы № 65</p>
                        <p class="event_text">Все участники мероприятия в торжественной обстановке получили грамоты, световозвращающие рюкзаки, форму ЮИД и сладкие подарки. А главное – зарядились отличным настроением, получили бесценный опыт и стали частью большой и дружной семьи ЮИД</p>
                    </div>
                    <span class="event_data">9 июня 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexChildren) === 0) return;
                                currentIndexChildren--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexChildren) === Number(lastIndexChildren)) return;
                                currentIndexChildren++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryChildren[currentIndexChildren].src}></img>
                        </div>
                    </div>

                    <div class="event_info">
                        <h3 class="event_title">Детское мероприятие «Безопасное колесо 2023»</h3>
                        <p class="event_text">Совместно с  ГОСАВТОИНСПЕКЦИЕЙ ГОРОДА СОЧИ провели для детей мероприятие под названием  «Безопасное колесо 2023»</p>
                    </div>
                    <span class="event_data">26 мая 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="event_img">
                        <img src="/assets/images/events/6/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В Администрации города Сочи провели встречу по обращению ООО Орлиные скалы</h3>
                        <p class="event_text">Вчера 19 мая в Администрации города Сочи провели встречу по обращению ООО Орлиные  скалы на имя  Депутата Государственной Думы Гусева Дмитрия Геннадьевича! На встрече присутствовали заместитель главы города-курорта  Сочи  в сфере земельно-имущественных отношений, курортов, туризма Петухова Инна Александровна , исполняющий обязанности директора Федерального государственного бюджетного учреждения «Сочинский национальный парк» г.Сочи Бородин Андрей Васильевич , заместитель директора департамента курорта и туризма администрации г.Сочи  Сазонов Кирил Дмитриевич  , директор ООО Орлиные скалы Обухов Сергей Александрович.</p>

                    </div>
                    <span class="event_data">20 мая 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexHospital) === 0) return;
                                currentIndexHospital--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexHospital) === Number(lastIndexHospital)) return;
                                currentIndexHospital++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryHospital[currentIndexHospital].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Встреча с Сочинским филиалом ГБУС</h3>
                        <p class="event_text">Провел встречу с заведующим Сочинским филиалом ГБУС станция переливания крови Вечелковская Марина Владимировна и врачами мед учреждения , принял личные обращения и сам сдал кровь. Хочу отметить каждого сотрудника данного филиала за их хорошую работу и доброжелательность.</p>

                    </div>
                    <span class="event_data">18 мая 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="event_img">
                        <img src="/assets/images/events/4/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума</h3>
                        <p class="event_text">Проведены переговоры с делегацией из Ирана, договорились о сотрудничестве. Department of Information and Communication Technology.</p>

                    </div>
                    <span class="event_data">26 апреля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="event_img">
                        <img src="/assets/images/events/3/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Конференция «Россия — Африка»!</h3>
                        <p class="event_text">Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума.</p>

                    </div>
                    <span class="event_data">26 апреля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexDuma) === 0) return;
                                currentIndexDuma--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexDuma) === Number(lastIndexDuma)) return;
                                currentIndexDuma++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryDuma[currentIndexDuma].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Детское мероприятие «Безопасное колесо 2023»</h3>
                        <p class="event_text">Сегодня провели встречу с депутатами государственной думы и общественными деятелями Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем. Большое спасибо всем, кто помог в организации этой встречи. Особенно хотим выразить благодарство Пиваеву Вадиму Вадимовичу и Галайджану Аркадию Сетраковичу. Встреча была максимально продуктивная для спортсменов в нашем регионе и для молодежных общественных организаций</p>
                    </div>
                    <span class="event_data">14 мая 2022г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div
                            type="button"
                            class="team_button team_button_prev"
                            onclick={() => {
                                if (Number(currentIndexMeetDuma) === 0) return;
                                currentIndexMeetDuma--;
                                this.init();
                            }}
                        ></div>
                        <div
                            type="button"
                            class="team_button team_button_next"
                            onclick={() => {
                                if (Number(currentIndexMeetDuma) === Number(lastIndexMeetDuma)) return;
                                currentIndexMeetDuma++;
                                this.init();
                            }}
                        ></div>
                        <div class="gallery_main-img">
                            <img src={galleryMeetDuma[currentIndexMeetDuma].src}></img>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Встреча с депутатом Государственной Думы Федерального Собрания Российской Федерации</h3>
                        <p class="event_text">Провели встречу   с депутатом Государственной Думы Федерального Собрания Российской Федерации, первым заместителем председателя комитета Государственной Думы по просвещению - Лантратовой Яной Валерьевной с руководителями подразделений ГИБДД , ГУВД г. Сочи , а  также ПДН и ветаранских организаций</p>

                    </div>
                    <span class="event_data">25 июня 2022г.</span>
                </section>
            </div>

        </div>

    )

}