import { Cemjsx } from "cemjs-all"
import rogozhkin from '@images/team/rogozhkin.jpg'
import bagryancev from '@images/team/bagryancev.jpg'
import mihaylov from '@images/team/mihaylov.jpg'
import stepashkin from '@images/team/stepashkin.png'
import gorovoy from '@images/team/gorovoy.jpg'
import zarembinskaya from '@images/team/zarembinskaya.jpg'
import golovashkin from '@images/team/golovashkin.jpg'
import bashtanuk from '@images/team/bashtanuk.jpeg'
import grigoryev from '@images/team/grigoryev.jpeg'
import pattern from '@svg/pattern_title1.svg'

const team = [
    {
        name: 'Багрянцев Виктор Александрович',
        photo: bagryancev,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Михайлов Александр Георгиевич',
        photo: mihaylov,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Степашкин Сергей Вадимович',
        photo: stepashkin,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Рогожкин Николай Евгеньевич',
        photo: rogozhkin,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Горовой Владимир Ильич',
        photo: gorovoy,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Зарембинская Елена Леонтьевна',
        photo: zarembinskaya,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Головашкин Александр Николаевич',
        photo: golovashkin,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Баштанюк Геннадий Сергеевич',
        photo: bashtanuk,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
    {
        name: 'Григорьев Александр Петрович',
        photo: grigoryev,
        post: 'Майор МВД',
        desc: 'Заместитель руководителя исполкома местного отделения г. Сочи'
    },
]

export const display = function () {

    return (
        <section class="staffing_wrap">
            <div class="container">
                <div class="wrap-title">
                    <h1 class="title">Члены организации "Офицеры и солдаты мира"</h1>
                </div>
                <div class="staffing">
                    {
                        team.map((item, index) => {
                            return (
                                <div class="staffing_item">
                                    <div class="staffing_img">
                                        <img src={item.photo} />
                                    </div>
                                    <div class="staffing_info">
                                        <div class="staffing_title-wrap">
                                            <h3 class="staffing_title">{item.name}</h3>
                                            {/* <img src={pattern} class="staffing_pattern" /> */}
                                        </div>
                                        <span class="staffing_post">{item.post}</span>
                                        <p class="staffing_desc">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )

}