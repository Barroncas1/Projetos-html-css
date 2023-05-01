import { home, universe, explorer, body, div } from "./elements.js"

export function Change(){ 

    function homeChange() { 
        bold(home, explorer, universe)
        body.style.backgroundImage = "url('assets/mountains-universe-1.png')"
        div.classList.remove('aa')
    }
    
    function universeChange() {
        bold(universe, home, explorer)
        body.style.backgroundImage = "url('assets/mountains-universe02.png')"
        div.classList.add('aa')
        
    }

    function explorerChange(){
        bold(explorer, universe, home)
        body.style.backgroundImage = "url('assets/mountains-universe-3.png')"
        div.classList.add('aa')
    }

    function bold(file1, file2, file3){
        file1.style.fontWeight = '700'
        file2.style.fontWeight = '400'
        file3.style.fontWeight = '400'
        file1.style.color = '#ffffff'
    }

    function bb(){
        div.classList.add('aa')
    }
    

    return {
        homeChange,
        universeChange,
        explorerChange
    }
}