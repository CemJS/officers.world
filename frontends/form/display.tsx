import { Cemjsx } from "cemjs-all"



export const display = function () {

    return (
        <main>
            <div class="container">
                <div class="form_inner"></div>
                <h1 class='title'>В общероссийскую общественную организацию "ОФИЦЕРЫ И СОЛДАТЫ МИРА"</h1>
                <div class="request">
                    <div class="request-box g-col-13">
                        <div class="request-img ">
                            <input
                                ref='chooseImg'
                                hidden
                                type='file'
                            />
                            <span>место для фото</span>
                        </div>
                        <div class="request-list">
                            <div class="g-col-13">
                                <label class="request-label">Фамилия</label>
                                <input type="text" class="field-text" placeholder="Иванов"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Имя</label>
                                <input type="text" class="field-text" placeholder="Иван"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Отчество</label>
                                <input type="text" class="field-text" placeholder="Иванович"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Дата рождения</label>
                                <input type="date" class="field-text" placeholder="Иванович"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Гражданство</label>
                                <input type="text" class="field-text"></input>
                            </div>
                        </div>
                    </div>

                    <div class="request-box g-col-equal-2">
                        <div class="g-col-13">
                            <label class="request-label">Регион</label>
                            <input type="text" class="field-text" placeholder="Белгородская область"></input>
                        </div>
                        <div class="g-col-13">
                            <label class="request-label">Населённый пункт</label>
                            <input type="text" class="field-text" placeholder="Белгород"></input>
                        </div>
                    </div>

                    <div class="pattern"></div>

                    <div class="center">
                        <h2>Заявление</h2>
                        <p>Прошу принять меня в члены автономной некоммерческой организации «ОФИЦЕРЫ И СОЛДАТЫ РОССИИ».
                            Цели и задачи организации разделяю, обязуюсь соблюдать Устав и Кодекс этики организации.</p>
                    </div>


                    <div class="request-box">
                        <p><span class="letter">контакты</span> номер домашнего телефона указывается по желанию</p>
                        <div class="g-col-equal-2">
                            <div class="g-col-13">
                                <label for="mobile" class="request-label">Моб. телефон</label>
                                <input id="mobile" type="tel" class="field-text" placeholder="+7 955-978-66-55" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label" for="email">E-mail</label>
                                <input id="email" type="email" class="field-text" placeholder="Белгород"></input>
                            </div>
                            <div class="g-col-13">
                                <label for="homePhone">Дом. телефон</label>
                                <input id="homePhone" type="tel" class="field-text" placeholder="Белгород"></input>
                            </div>
                        </div>
                    </div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">социальная категория</span></p>
                        <ul class="request-check">
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>Семьи погибших при исполнении служебного долга</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>Малолетние узники концлагерей</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>Многодетные семьи</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>Участники ВОВ</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>Чернобыльцы</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>Инвалиды</span>
                            </li>
                        </ul>
                    </div>



                    <div class="request-box">
                        <p class="pb-15"><span class="letter">Ведомственная принадлежность</span></p>
                        <div class="request-list">
                            <div class="g-col-13">
                                <label class="request-label">Вид и род войск</label>
                                <input type="text" class="field-text" placeholder="Белгородская область"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Воинское(специальное) звание</label>
                                <input type="text" class="field-text" placeholder="Белгородская область"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Участие в боевых действиях(где и когда)</label>
                                <input type="text" class="field-text" placeholder="Белгородская область"></input>
                            </div>
                            <div class="g-col-13">
                                <label class="request-label">Сфера деятельности(род занятий, профессия)</label>
                                <input type="text" class="field-text" placeholder="Белгородская область"></input>
                            </div>
                        </div>
                    </div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">кто рекомендовал вступить в движение</span></p>
                        <div class="g-col-13">
                            <label class="request-label">ФИО</label>
                            <input type="text" class="field-text" placeholder="Петров Василий Степанович"></input>
                        </div>

                    </div>
                </div>
            </div>

        </main>

    )

}