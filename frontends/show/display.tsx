import { Cemjsx } from "cemjs-all"
import slide1 from '@images/events/1/1.jpg'
import slide2 from '@images/events/1/2.jpg'
import slide3 from '@images/events/1/3.jpg'
import slide4 from '@images/events/1/4.jpg'
import slide5 from '@images/events/1/5.jpg'
import slide6 from '@images/events/1/6.jpg'
import slide7 from '@images/events/1/7.jpg'
import slide8 from '@images/events/1/8.jpg'

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
    {
        src: slide5,
    },
    {
        src: slide6,
    },
    {
        src: slide7,
    },
    {
        src: slide8,
    },
]

let activeImg = gallery[0]
let shiftEl;
export const display = function () {

    return (
        <div class="container">
            <div class="gallery">
                {/* <div class="gallery_counter"></div> */}
                <div class="gallery_nav">
                    <button type="button">top</button>
                    <div class="list_wrap">
                        <ul class="gallery_list" ref="galleryList">
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
                        onclick={() => {

                            if (shiftEl === 'undefined') {
                                console.log('=7529a5=', 'тут')
                                shiftEl = -(this.Ref.gallerySlide.offsetHeight + 10)
                            } else {
                                shiftEl += -(this.Ref.gallerySlide.offsetHeight + 10)
                            }
                            //     shiftEl = Number(shiftEl - (-(this.Ref.gallerySlide.offsetHeight + 10)));
                            // console.log('=4c5d37=', Number(shiftEl))

                            this.Ref.galleryList.style = `transform: translate3d(0 , ${shiftEl}px, 0)`;
                            this.init();
                        }}
                    >
                        down
                    </button>
                </div>
                <div class="gallery_main-img">
                    <img src={activeImg.src} />
                </div>

            </div>
        </div>

    )

}