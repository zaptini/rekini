const pirmais=document.querySelector('.pirmais')
const otrais=document.querySelector('.otrais')
const rezultats1=document.querySelector('#rezultats')
const rezultats=document.querySelector('.rezultats')
const iesniegt=document.querySelector('#iesniegt')
let pirmaisCipars = Math.round(Math.random()*100)+1
let otraisCipars = Math.round(Math.random()*100)+1
let rezultatsCipars=0;
let skaits=0;

if (pirmaisCipars>otraisCipars) {
    pirmais.textContent=pirmaisCipars;
    otrais.textContent="-"+otraisCipars
    rezultatsCipars=(pirmaisCipars-otraisCipars)
    }

else if (pirmaisCipars<otraisCipars) {
    pirmais.textContent=otraisCipars;
    otrais.textContent="-"+pirmaisCipars
    rezultatsCipars=(otraisCipars-pirmaisCipars)
    }

rezultats1.addEventListener('input', function () {
    rezultats.textContent=rezultats1.value
    document.querySelector('.pazust').classList.remove('pb-14')
    document.querySelector('.pazust').classList.add('pb-2')
},true)

rezultats1.addEventListener('input', function () {
    if (rezultats1.value==""){
    document.querySelector('.pazust').classList.add('pb-14')
    document.querySelector('.pazust').classList.remove('pb-2')
}},true)


function pazina() {
    alert("Apsveicu tu atrisināji pareizi!")
    console.log("gggggg ")
}

iesniegt.addEventListener('click', function () {
    if(rezultatsCipars==rezultats1.value){
        pazina()
        }
    else {
        event.preventDefault()
        document.body.style.backgroundColor="pink"
        
        skaits =skaits+1
        if (skaits<2){
            document.querySelector('.kluda').innerText=`Tev ir ${skaits} kļūda!`

        }
        else {
            document.querySelector('.kluda').innerText=`Tev ir ${skaits} kļūdas!`
        }}

})