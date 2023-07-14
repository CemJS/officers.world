import { Cemjsx } from "cemjs-all"
import slide1 from '@images/events/1.png'
import slide2 from '@images/events/2.jpg'
import slide3 from '@images/events/3.jpg'
import slide4 from '@images/events/4.jpg'


import one from '@images/events/1.png'
import two from '@images/events/2.jpg'
import three from '@images/events/3.jpg'
import four from '@images/events/4.jpg'

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

const galleryDuma = [
    {
        src: "/assets/images/events/1/1.jpg",
        alt: 'Event'
    },
    {
        src: '/assets/images/events/2/2.jpg',
        alt: 'Event'
    },
    {
        src: '/assets/images/events/3/3.jpg',
        alt: 'Event'
    },
]

let activeImgYourSelf = galleryYourSelf[0];
let activeImgSirius = gallerySirius[0];
let activeImgChildren = galleryChildren[0];
let activeImgDuma = galleryDuma[0];
let isDraggingYourSelf, startXYourSelf, startScrollLeftYourSelf;
let isDraggingSirius, startXSirius, startScrollLeftSirius;
let isDraggingChildren, startXChildren, startScrollLeftChildren;
let isDraggingDuma, startXDuma, startScrollLeftDuma;

export const display = function () {

    return (
        <div class="container">
            <div class="wrap-title">
                <h1 class="title">Мероприятия</h1>
            </div>
            {/* <div class="gallery">
                <div class="gallery_main-img">
                    <img src={activeImg.src} />
                </div>
                <div class="gallery_nav">
                    <button
                        type="button"
                        class="gallery_button gallery_button-prev"
                        onclick={() => {
                            this.Ref.galleryList.scrollLeft -= this.Ref.gallerySlide.offsetWidth + 10;
                            this.init();
                        }}
                    >
                        top
                    </button>
                    <div class="list_wrap">
                        <ul
                            class="gallery_list"
                            ref="galleryList"
                            onmousedown={(e) => {
                                isDragging = true;
                                startX = e.pageX;
                                startScrollLeft = this.Ref.galleryList.scrollLeft;
                            }}
                            onmousemove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                this.Ref.galleryList.scrollLeft = startScrollLeft - (e.pageX - startX);
                            }}
                            onmouseup={(e) => {
                                isDragging = false;
                            }}
                        >
                            {
                                gallery.map((item, index) => {
                                    return (
                                        <li
                                            class={["gallery_slide", activeImg == gallery[index] ? "gallery_slide-active" : null]}
                                            ref="gallerySlide"
                                            onclick={() => {
                                                activeImg = gallery[index];

                                                this.init()
                                            }}
                                        >
                                            <img src={item.src} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <button
                        type="button"
                        class="gallery_button gallery_button-next"
                        onclick={() => {
                            this.Ref.galleryList.scrollLeft += this.Ref.gallerySlide.offsetWidth + 10;
                            this.init();
                        }}
                    >
                        down
                    </button>
                </div>
            </div> */}
            <div class="event_inner">
                <section class="event">
                    <div class="event_img">
                        <img src="/assets/images/events/11/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Встреча с депутатом Государсвенной Думы Сергеем Ивановичем Морозовым</h3>
                        <p>Сегодня на Красной Поляне вместе с депутатом Государственной Думы Сергеем Ивановичем Морозовым зашли в гости к Герою труда Кубани, почетному работнику газовой промышленности, лауреату  премии России в туризме «Хрустальный глобус», лауреату  национальной премии имени Петра Великого «Лучший менеджер России», действительному члену Международной и Российской академии  туризма - Аверьянову Борису Ивановичу.</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div class="gallery_main-img">
                            <img src={activeImgYourSelf.src} />
                        </div>
                        <div class="gallery_nav">
                            <button
                                type="button"
                                class="gallery_button gallery_button-prev"
                                onclick={() => {
                                    this.Ref.galleryListYourSelf.scrollLeft -= this.Ref.gallerySlideYourSelf.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                top
                            </button>
                            <div class="list_wrap">
                                <ul
                                    class="gallery_list"
                                    ref="galleryListYourSelf"
                                    onmousedown={(e) => {
                                        isDraggingYourSelf = true;
                                        startXYourSelf = e.pageX;
                                        startScrollLeftYourSelf = this.Ref.galleryListYourSelf.scrollLeft;
                                    }}
                                    onmousemove={(e) => {
                                        if (!isDraggingYourSelf) return;
                                        e.preventDefault();
                                        this.Ref.galleryListYourSelf.scrollLeft = startScrollLeftYourSelf - (e.pageX - startXYourSelf);
                                    }}
                                    onmouseup={(e) => {
                                        isDraggingYourSelf = false;
                                    }}
                                >
                                    {
                                        galleryYourSelf.map((item, index) => {
                                            return (
                                                <li
                                                    class={["gallery_slide", activeImgYourSelf == galleryYourSelf[index] ? "gallery_slide-active" : null]}
                                                    ref="gallerySlideYourSelf"
                                                    onclick={() => {
                                                        activeImgYourSelf = galleryYourSelf[index];
                                                        this.init()
                                                    }}
                                                >
                                                    <img src={item.src} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <button
                                type="button"
                                class="gallery_button gallery_button-next"
                                onclick={() => {
                                    this.Ref.galleryListYourSelf.scrollLeft += this.Ref.gallerySlideYourSelf.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                down
                            </button>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3>В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»</h3>
                        <p>Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div class="gallery_main-img">
                            <img src={activeImgSirius.src} />
                        </div>
                        <div class="gallery_nav">
                            <button
                                type="button"
                                class="gallery_button gallery_button-prev"
                                onclick={() => {
                                    this.Ref.galleryListSirius.scrollLeft -= this.Ref.gallerySlideSirius.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                top
                            </button>
                            <div class="list_wrap">
                                <ul
                                    class="gallery_list"
                                    ref="galleryListSirius"
                                    onmousedown={(e) => {
                                        isDraggingSirius = true;
                                        startXSirius = e.pageX;
                                        startScrollLeftSirius = this.Ref.galleryListSirius.scrollLeft;
                                    }}
                                    onmousemove={(e) => {
                                        if (!isDraggingSirius) return;
                                        e.preventDefault();
                                        this.Ref.galleryListSirius.scrollLeft = startScrollLeftSirius - (e.pageX - startXSirius);
                                    }}
                                    onmouseup={(e) => {
                                        isDraggingSirius = false;
                                    }}
                                >
                                    {
                                        gallerySirius.map((item, index) => {
                                            return (
                                                <li
                                                    class={["gallery_slide", activeImgSirius == gallerySirius[index] ? "gallery_slide-active" : null]}
                                                    ref="gallerySlideSirius"
                                                    onclick={() => {
                                                        activeImgSirius = gallerySirius[index];
                                                        this.init()
                                                    }}
                                                >
                                                    <img src={item.src} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <button
                                type="button"
                                class="gallery_button gallery_button-next"
                                onclick={() => {
                                    this.Ref.galleryListSirius.scrollLeft += this.Ref.gallerySlideSirius.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                down
                            </button>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3>В городе Сочи приняли участие в стратегической сессии проекта «Выбирай свое»</h3>
                        <p>Курорт стал его пилотной площадкой. Цель проекта – поддержать предпринимателей и производителей, способствующих импортозамещению. Планы реализации обсудили на стратегической сессии. В ней приняли участие глава Сочи Алексей Копайгородский, депутат Госдумы РФ, координатор проекта «Выбирай свое» Сергей Морозов, председатель Городского Собрания Сочи Виктор Филонов. По поручению мэра курорта в городе разработан и активно реализуется флагманский проект «Выбирай сочинское». Он отвечает целям нацпроекта «Малое и среднее предпринимательство и поддержка индивидуальной предпринимательской инициативы». Разработаны меры поддержки и единый бренд, под которым объединены средние и малые субъекты, а также системообразующие предприятия курорта базовых 15 областей экономики</p>
                    </div>
                    <span class="event_data">2 июля 2023г.</span>
                </section>
                <section class="event">
                    <div class="event_img">
                        <img src="/assets/images/events/8/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В Сочи состоялся финал городского этапа конкурса юных инспекторов дорожного движения «Безопасное колесо – 2023»</h3>
                        <p>В течение месяца сильнейшие отряды ЮИД боролись за звание лучшей команды и право представить город на региональном этапе соревнований «Безопасное колесо – 2023». Всего в мероприятиях приняли участие 184 юных инспектора из 46 школ.</p>
                        <p>Ребятам предстояло пройти несколько этапов состязаний на знание Правил дорожного движения, основ первой доврачебной помощи, а также показать свое мастерство в фигурном вождении велосипеда и продемонстрировать свои таланты в творческом конкурсе.</p>
                        <p>Ребята поразили жюри своими знаниями Правил дорожного движения и с лёгкостью преодолели препятствия на велосипеде, прекрасно справились с заданием по оказанию первой помощи. А самой увлекательной частью конкурса стали творческие номера, где ребята продемонстрировали креативный подход в умении убеждать участников дорожного движения соблюдать Правила дорожной безопасности.</p>
                        <p>Этапы следовали один за другим и требовали серьезной концентрации внимания от юных участников конкурса. Борьба была упорной, все команды показали себя достойными соперниками.</p>
                        <p>По итогам соревнований победителем городского этапа конкурса «Безопасное колесо 2023» стала команда отряда ЮИД школы № 65</p>
                        <p>Все участники мероприятия в торжественной обстановке получили грамоты, световозвращающие рюкзаки, форму ЮИД и сладкие подарки. А главное – зарядились отличным настроением, получили бесценный опыт и стали частью большой и дружной семьи ЮИД</p>
                    </div>
                    <span class="event_data">9 июня 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div class="gallery_main-img">
                            <img src={activeImgChildren.src} />
                        </div>
                        <div class="gallery_nav">
                            <button
                                type="button"
                                class="gallery_button gallery_button-prev"
                                onclick={() => {
                                    this.Ref.galleryListChildren.scrollLeft -= this.Ref.gallerySlideChildren.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                top
                            </button>
                            <div class="list_wrap">
                                <ul
                                    class="gallery_list"
                                    ref="galleryListChildren"
                                    onmousedown={(e) => {
                                        isDraggingChildren = true;
                                        startXChildren = e.pageX;
                                        startScrollLeftChildren = this.Ref.galleryListChildren.scrollLeft;
                                    }}
                                    onmousemove={(e) => {
                                        if (!isDraggingChildren) return;
                                        e.preventDefault();
                                        this.Ref.galleryListChildren.scrollLeft = startScrollLeftChildren - (e.pageX - startXChildren);
                                    }}
                                    onmouseup={(e) => {
                                        isDraggingChildren = false;
                                    }}
                                >
                                    {
                                        galleryChildren.map((item, index) => {
                                            return (
                                                <li
                                                    class={["gallery_slide", activeImgChildren == galleryChildren[index] ? "gallery_slide-active" : null]}
                                                    ref="gallerySlideChildren"
                                                    onclick={() => {
                                                        activeImgChildren = galleryChildren[index];
                                                        this.init()
                                                    }}
                                                >
                                                    <img src={item.src} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <button
                                type="button"
                                class="gallery_button gallery_button-next"
                                onclick={() => {
                                    this.Ref.galleryListChildren.scrollLeft += this.Ref.gallerySlideChildren.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                down
                            </button>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3>Детское мероприятие «Безопасное колесо 2023»</h3>
                        <p>Совместно с  ГОСАВТОИНСПЕКЦИЕЙ ГОРОДА СОЧИ провели для детей мероприятие под названием  «Безопасное колесо 2023»</p>
                    </div>
                    <span class="event_data">26 мая 2023г.</span>
                </section>
                <section class="event">
                    <div class="event_img">
                        <img src="/assets/images/events/6/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">В Администрации города Сочи провели встречу по обращению ООО Орлиные скалы</h3>
                        <p>Вчера 19 мая в Администрации города Сочи провели встречу по обращению ООО Орлиные  скалы на имя  Депутата Государственной Думы Гусева Дмитрия Геннадьевича! На встрече присутствовали заместитель главы города-курорта  Сочи  в сфере земельно-имущественных отношений, курортов, туризма Петухова Инна Александровна , исполняющий обязанности директора Федерального государственного бюджетного учреждения «Сочинский национальный парк» г.Сочи Бородин Андрей Васильевич , заместитель директора департамента курорта и туризма администрации г.Сочи  Сазонов Кирил Дмитриевич  , директор ООО Орлиные скалы Обухов Сергей Александрович.</p>

                    </div>
                    <span class="event_data">20 мая 2023г.</span>
                </section>
                <section class="event">
                    <div class="event_img">
                        <img src="/assets/images/events/5/2.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Встреча с Сочинским филиалом ГБУС</h3>
                        <p>Провел встречу с заведующим Сочинским филиалом ГБУС станция переливания крови Вечелковская Марина Владимировна и врачами мед учреждения , принял личные обращения и сам сдал кровь. Хочу отметить каждого сотрудника данного филиала за их хорошую работу и доброжелательность.</p>

                    </div>
                    <span class="event_data">18 мая 2023г.</span>
                </section>
                <section class="event">
                    <div class="event_img">
                        <img src="/assets/images/events/3/1.jpg"></img>
                    </div>
                    <div class="event_info">
                        <h3 class="event_title">Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума</h3>
                        <p>Проведены переговоры с делегацией из Ирана, договорились о сотрудничестве. Department of Information and Communication Technology.</p>

                    </div>
                    <span class="event_data">26 апреля 2023г.</span>
                </section>
                <section class="event event_gallery">
                    <div class="gallery">
                        <div class="gallery_main-img">
                            <img src={activeImgDuma.src} />
                        </div>
                        <div class="gallery_nav">
                            <button
                                type="button"
                                class="gallery_button gallery_button-prev"
                                onclick={() => {
                                    this.Ref.galleryListDuma.scrollLeft -= this.Ref.gallerySlideDuma.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                top
                            </button>
                            <div class="list_wrap">
                                <ul
                                    class="gallery_list"
                                    ref="galleryListDuma"
                                    onmousedown={(e) => {
                                        isDraggingDuma = true;
                                        startXDuma = e.pageX;
                                        startScrollLeftDuma = this.Ref.galleryListDuma.scrollLeft;
                                    }}
                                    onmousemove={(e) => {
                                        if (!isDraggingChildren) return;
                                        e.preventDefault();
                                        this.Ref.galleryListDuma.scrollLeft = startScrollLeftDuma - (e.pageX - startXDuma);
                                    }}
                                    onmouseup={(e) => {
                                        isDraggingDuma = false;
                                    }}
                                >
                                    {
                                        galleryDuma.map((item, index) => {
                                            return (
                                                <li
                                                    class={["gallery_slide", activeImgChildren == galleryDuma[index] ? "gallery_slide-active" : null]}
                                                    ref="gallerySlideDuma"
                                                    onclick={() => {
                                                        activeImgDuma = galleryDuma[index];
                                                        this.init()
                                                    }}
                                                >
                                                    <img src={item.src} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <button
                                type="button"
                                class="gallery_button gallery_button-next"
                                onclick={() => {
                                    this.Ref.galleryListDuma.scrollLeft += this.Ref.gallerySlideDuma.offsetWidth + 10;
                                    this.init();
                                }}
                            >
                                down
                            </button>
                        </div>
                    </div>
                    <div class="event_info">
                        <h3>Детское мероприятие «Безопасное колесо 2023»</h3>
                        <p>Совместно с  ГОСАВТОИНСПЕКЦИЕЙ ГОРОДА СОЧИ провели для детей мероприятие под названием  «Безопасное колесо 2023»</p>
                    </div>
                    <span class="event_data">26 мая 2023г.</span>
                </section>
            </div>

        </div>

    )

}