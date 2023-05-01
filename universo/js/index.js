import { Router } from "./router.js";
import Events  from "./events.js";
import { Change } from "./change.js";
import { button } from "./elements.js"

const router = new Router()
const change = Change()


router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universe.html')
router.add('/explorar', '/pages/explorer.html')
router.add(404, '/pages/404.html')

change.homeChange()

Events({router, change, button})

window.onpopstate = () => {
    router.handle()
    
}
