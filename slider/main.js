let myPhoto=[
    'photo/one.jpg',
    'photo/two.jpg',
    'photo/three.jpg',
    'photo/four.jpg',
]

let photo=document.querySelector("#slider img")
photo.src=myPhoto[0]

let currentSlide=0

const nextBtn=document.querySelector("#slider .next")
const prevBtn=document.querySelector("#slider .prev")
nextBtn.addEventListener("click",function(){
    currentSlide+=1
    if(currentSlide>=myPhoto.length){
        currentSlide=1
    }
    photo.src=myPhoto[currentSlide]
})

prevBtn.addEventListener("click",function(){
    currentSlide-=1
    if(currentSlide==-1){
        currentSlide=myPhoto.length-1
    }
     photo.src=myPhoto[currentSlide]
})