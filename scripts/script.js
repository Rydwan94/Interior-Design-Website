// class some {
//   constructor(firstNum, secondNumb){
//     this.firstNum = firstNum
//     this.secondNumb = secondNumb
//   }
//   method(){
//     return this.firstNum - this.secondNumb
//   }
// }

// const x = new some(2,5)

// console.log(x.method())

var snd = new Audio("../src/star wars.mp3");
        snd.loop = true;
        snd.autoplay = false;

        // document.getElementById("bstop").onclick = function () { snd.pause(); };

        // document.getElementById("bplay").onclick = function () { snd.play(); };
        
        const s = document.getElementById("bstop")
        const t = document.getElementById("bplay")

        s.addEventListener('click', () => {
          snd.pause()
        })
        t.addEventListener('click', () => {
          snd.play()
        } )