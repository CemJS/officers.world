import { Cemjsx } from "cemjs-all"
import earn from '@images/logo/earn.png'

export const display = function () {
    return (
        <div class="home home_container">
            <h1 class="home_title">{this.Static.title}</h1>
            <h2 class="home_subtitle">{this.Static.site}</h2>
            <img class="home_logoCem" src={earn}></img>
        </div>
    )

}