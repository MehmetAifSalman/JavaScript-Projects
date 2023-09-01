var models = [
    {
        name : "BMW 418d",
        image : "img/bmw.jpg",
        link : "https://www.kosifleroto.com.tr/bmw/4serisi/grancoupe/teknikveriler"
    },
    {
        name : "Mazda CX-3",
        image : "img/mazda.jpg",
        link : "https://..com.tr/bmw/4serisi/grancoupe/teknikveriler"
    },
    {
        name : "Volvo S60",
        image : "img/volvo.jpg",
        link : "https://www.kosifleroto.com.tr/bmw/4serisi/grancoupe/teknikveriler"
    },
    {
        name : "Skoda Superb",
        image : "img/skoda.jpg",
        link : "https://www.kosifleroto.com.tr/bmw/4serisi/grancoupe/teknikveriler"
    },
    {
        name : "Honda Civic",
        image : "img/honda.jpg",
        link : "https://www.kosifleroto.com.tr/bmw/4serisi/grancoupe/teknikveriler"
    }
]
var index = 1;
var slaytCount = models.length

var settings = {
    duration : "1000",
    random : true
}

init(settings);

function init(settings){
    setInterval(function(){
       
        if(settings.random){
            index = Math.floor(Math.random() * slaytCount);
        }else{

        }
        ShowSlide(index)



    },settings.duration)
}



document.querySelector(".fa-arrow-left").addEventListener("click",function(){
    index--;
    console.log(index);
    
    ShowSlide(index)
})
document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    index++;
    console.log(index);
    ShowSlide(index)
})

function ShowSlide(i){

    index = i;
    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >=slaytCount){
        index = 0
    }

    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    
}



