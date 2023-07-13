import { Cemjsx } from "cemjs-all"
import slide1 from '@images/events/1.png'
import slide2 from '@images/events/2.jpg'
import slide3 from '@images/events/3.jpg'
import slide4 from '@images/events/4.jpg'


import one from '@images/events/1.png'
import two from '@images/events/2.jpg'
import three from '@images/events/3.jpg'
import four from '@images/events/4.jpg'

const events = [
    {
        gallery: ['@images/events/1/1.jpg', '@images/events/1/2.jpg'],
        alt: 'Встреча с депутатом Государсвенной Думы Федерального Собрания РФ',
        title: 'Встреча с депутатом Государсвенной Думы Федерального Собрания РФ',
        desc: 'Провели встречу   с депутатом Государственной Думы Федерального Собрания Российской Федерации, первым заместителем председателя комитета Государственной Думы по просвещению - Лантратовой Яной Валерьевной с руководителями подразделений ГИБДД , ГУВД г. Сочи , а  также ПДН и ветаранских организаций.',
        data: '25 июня 2022г.'
    },
    {
        gallery: ['@images/events/2/1.jpg', '@images/events/2/2.jpg', '@images/events/2/3.jpg'],
        alt: 'Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем',
        title: 'Встреча с общественными деятелями Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем',
        desc: 'Провели встречу с депутатами государственной думы и общественными деятелями Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем. Большое спасибо всем, кто помог в организации этой встречи. Особенно хотим выразить благодарство Пиваеву Вадиму Вадимовичу и Галайджану Аркадию Сетраковичу. Встреча была максимально продуктивная для спортсменов в нашем регионе и для молодежных общественных организаций.',
        data: '14 мая 2022г'
    },
    {
        gallery: ['@images/events/2/1.jpg',],
        alt: 'Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума.',
        title: 'Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума.',
        desc: 'Пленарное заседание Второй международной парламентской конференции «Россия — Африка»!Государственная Дума.',
        data: 'нет даты'
    },
    {
        gallery: ['@images/events/4/1.jpg',],
        alt: 'Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем',
        title: 'Встреча с общественными деятелями Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем',
        desc: 'Провели встречу с депутатами государственной думы и общественными деятелями Лантратовой Яной Валерьевной и Гусевым Дмитрием Генадьевичем. Большое спасибо всем, кто помог в организации этой встречи. Особенно хотим выразить благодарство Пиваеву Вадиму Вадимовичу и Галайджану Аркадию Сетраковичу. Встреча была максимально продуктивная для спортсменов в нашем регионе и для молодежных общественных организаций.',
        data: '14 мая 2022г'
    },
]


const gallery = [
    {
        src: slide1,
    },
    {
        src: slide2,
    },
    {
        src: slide3,
    },
    {
        src: slide4,
    },

]

let activeImg = gallery[0]
let isDragging, startX, startScrollLeft;
export const display = function () {

    return (
        <div class="container">
            <div class="gallery">
                {/* <div class="gallery_counter"></div> */}

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
            </div>
        </div>

    )

}