


export default function ({
    change,
     router,
     button
    }){

    home.addEventListener('click', () => {
        change.homeChange()
        router.route()
    })
    universe.addEventListener('click', () => {
        change.universeChange()
        router.route()
    })
    explorer.addEventListener('click', () => {
        change.explorerChange()
        router.route()
    })

   button.addEventListener('click', () => {
        router.route()
        change.universeChange()
   })
    
}