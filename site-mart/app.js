let nextdom = document.getElementById('next')
let prevdom = document.getElementById('prev')
let carosseul = document.querySelector('.carosseul')
let listcarosseul = document.querySelector('.carosseul .list')
let trummaildom = document.querySelector('.carosseul .thumail')

nextdom.onclick = function(){
    showSlider('next')
}

//função-prev
prevdom.onclick = function(){
    showSlider('prev')
}


let timerunning = 3000 //tempo para a próxima pagina
let timeautonext =  6000 //tempo para a próxima página

let runtimeou 
let runautoRun = setTimeout(() =>{
    nextdom.click()
},timeautonext )



function showSlider(type){
    let itemSlider = document.querySelectorAll('.carosseul .list .item')
    let itemtrurm = document.querySelectorAll('.carosseul .thumail .item')
    //next-bnt
    if (type === 'next'){
        listcarosseul.appendChild(itemSlider[0])
        trummaildom.appendChild(itemtrurm[0])
        carosseul.classList.add('next')
    }else{
        let positionitem = itemSlider.length - 1
        listcarosseul.prepend(itemSlider[positionitem])
        trummaildom.prepend(itemtrurm[positionitem])
        carosseul.classList.add('prev')
    }


    //tempo
    clearTimeout(runtimeou)
    runtimeou = setTimeout (() =>{
      carosseul.classList.remove('next')
      carosseul.classList.remove('prev')
    },timerunning )

    clearTimeout(runautoRun)
    runtimeou = setTimeout(() =>{
        nextdom.click()
    },timeautonext )
}







