var dikt = [
   {
        quvote: '"Если называть Python заменой BASIC, то тогда и трансформер Optimus Prime — это только замена грузовика."',
        autor:"Cory Dodt"
    },

    {
        quvote: '"Болтовня ничего не стоит. Покажите мне код."',
        autor:"Linus Torvalds"
    },
    {
        quvote: '"С — это причудливый, несовершенный, но невероятно успешный язык."',
        autor:"Dennis M. Ritchie."
    },
    {
        quvote: '"Программирование — это как бить себя по лицу, рано или поздно ваш нос будет кровоточить."',
        autor:"Kyle Woodbury"
    },
    {
        quvote: '"Иногда лучше остаться спать дома в понедельник, чем провести всю неделю отлаживая написанный в понедельник код."',
        autor:"Christopher Thompson"
    },
    {
        quvote: '"Измерять продуктивность программирования подсчетом строк кода — это так же, как оценивать постройку самолета по его весу."',
        autor:"Bill Gates"
    },
    {
        quvote: '"Программирование — это наука избранных, но в реальности все наоборот — просто много людей создают программы, которые используют чужие программы, как-будто строя стену из маленьких кирпичиков."',
        autor:"Donald Knuth"
    },
    {
        quvote: '"Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня."',
        autor:"Larry Wall"
    },
    {
        quvote: '"Итерация свойственна человеку, рекурсия божественна."',
        autor:"L. Peter Deutsch"
    },
    {
        quvote: '"Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования."',
        autor:"Linus Torvalds"
    },
    {
        quvote: '"Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.."',
        autor:"Martin Golding"
    },
    {
        quvote: '" Есть два способа создания дизайна программы. Один из них, это сделать его настолько простым, что в нем, очевидно, не будет недостатков. Другой способ — сделать его настолько запутанным, что в нем не будет очевидных недостатков."',
        autor:"C.A. R. Hoare"
    },
    {
        quvote: '" Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника."',
        autor:"Eric S. Raymond"
    },


];

function randoms(words1) {
            
    return Math.floor(Math.random() * (words1.length - 0 )) + 0;
    
    };




document.addEventListener("DOMContentLoaded", function(event){
        let number = randoms(dikt);


    var text = document.getElementById("text");
           text.innerHTML = "";
           text.innerHTML = dikt[number].quvote;
    
    var author = document.getElementById("author");
        author.innerHTML = "";
        author.innerHTML = dikt[number].autor;
      });



    var scroller = document.getElementById("new-quote")

    scroller.onclick = function()  {

    let number = randoms(dikt);


    var text = document.getElementById("text");
           text.innerHTML = "";
           text.innerHTML = dikt[number].quvote;
           
    
    var author = document.getElementById("author");
        author.innerHTML = "";
        author.innerHTML = dikt[number].autor;
        
        
 };


 var closew = document.getElementById("close")

 closew.onclick = function()  {

    document.getElementById("aboutus").className = "wow";

};


var openw = document.getElementById("aboutuslink")

openw.onclick = function()  {

    document.getElementById("aboutus").className = "about";

};

var rq = document.getElementById("rq")

rq.onclick = function()  {

    document.getElementById("quote-box").className = "sheyk";

    

};

