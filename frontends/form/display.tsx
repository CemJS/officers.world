import { Cemjsx } from "cemjs-all"



export const display = function () {

    return (
        <main>
            <div class="container">
                <div class="form_inner"></div>
                <h1 class='title'>В общероссийскую общественную организацию "ОФИЦЕРЫ И СОЛДАТЫ МИРА"</h1>
                <div class="request">
                    <div class="request-box g-col-13">
                        <div 
                            class="request-img"
                            onclick={()=>{
                                this.Ref.chooseImg.click()

                            }}    
                        >
                            <input
                                ref='chooseImg'
                                hidden
                                type='file'
                                accept=".jpg, .jpeg, .png"
                                onchange={()=>{
                                    console.log(this.Ref.chooseImg.files);
                                    let chooseImg = this.Ref.chooseImg.files;
                                    if(this.Ref.chooseImg.files && this.Ref.chooseImg.files.length){
                                        this.Ref.avatar.src = window.URL.createObjectURL(this.Ref.chooseImg.files[0]);
                                        this.Ref.avatar.setAttribute('height', '100%');
                                        this.Ref.avatarText.hidden = true;
                                    }
                                }}
                            />
                            <img ref="avatar"></img>
                            <span ref="avatarText">место для фото</span>
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
                        <p class="pb-15"><span class="letter">образование, ученая степень, ученое звание</span></p>
                        <ul class="request-check">
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>среднее</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>высшее</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>кандидат наук</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>Доктор наук</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>доцент</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>профессор</span>
                            </li>
                        </ul>
                    </div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">Ведомственная принадлежность</span></p>
                        <ul class="request-check fcb">
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>мо</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>мвд</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>вв мвд</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>мчс</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>фсб</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>росгвардия</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>свр</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фсо</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>судебные органы</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>ск</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фсин</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фскн</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>фснп</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фмс</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фссп</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>фнс</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>фтс</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>прокуратура</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>иное</span>
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
                        <p class="pb-15"><span class="letter">государственные награды, почётные звания</span></p>
                        <ul class="request-check">
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>герой советского союза</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>герой россии</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>ордена</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>медали</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>знак отличия</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>почётное звание</span>
                            </li>
                        </ul>
                    </div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">Наименование наград</span></p>
                        <textarea class="field-text awards" placeholder="напишите напименование своих наград, через запятую">

                        </textarea>
                    </div>

                    <div class="pattern"></div>
                        <div class="text-attancion">
                            <p>Согласно Ф3 от 27.07.06 №152-Ф3 даю своё согласие Автономной некоммерческой организации "Офицеры и солдаты мира" на обработку персональных данных любым, не запрещенным законом способом.</p>
                            <p>Подтверждаю, что на момент подачи настоящего заявления я не имею судимость, не занимаюсь противоправной деятельностью и не являюсь подозреваемым или обвиняемым в совершении преступления.</p>
                            <p>Я осведомлен, что в Автономной некоммерческой организации не предусмотрена обязательная уплата членских взносов.</p>
                        </div>
                    <div class="pattern"></div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">могу быть полезен движению в вопросах</span></p>
                        <ul class="request-check">
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>финансовая помощь</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" checked="checked" />
                                    <span></span>
                                </label>
                                <span>экспертная помощь</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>организационная помощь</span>
                            </li>
                            <li class="request-check_item">
                                <label checked="checked">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <span>участие в мероприятиях</span>
                            </li>
                        </ul>
                    </div>

                    <div class="request-box">
                        <div class="g-col-13">
                            <label class="request-label">другое</label>
                            <input type="text" class="field-text" placeholder="Петров Василий Степанович"></input>
                        </div>

                    </div>

                    <div class="request-box">
                        <p class="pb-15"><span class="letter">кто рекомендовал вступить в движение</span></p>
                        <div class="g-col-13">
                            <label class="request-label">ФИО</label>
                            <input type="text" class="field-text" placeholder="Петров Василий Степанович"></input>
                        </div>

                    </div>

                    <div class="center">
                        <a class="btn">
                            <span>Подать заявление</span>
                            <span class="pseudo"></span>
                        </a>
                    </div>
                </div>
            </div>

        </main>

    )

}