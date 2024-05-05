// 1. Quyidagi html'dagi <div>, <ul> va ikkinchi <li>'larga kirishni kamida 1tadan yolini yozib korsating:
//   <html>
//     <body>
//       <div>Users:</div>
//       <ul>
//         <li>John</li>
//         <li>Pete</li>
//       </ul>
//     </body>
//   </html>






                    // var divElement = document.querySelector('div');
                    // var ulElement = document.querySelector('ul');
                    // var liElements = document.getElementsByTagName('li');
                    // var secondLiByTagName = liElements[1];

                    // console.log(divElement.innerHTML); 
                    // console.log(ulElement.innerHTML); 
                    // console.log(secondLiByTagName.innerHTML);








// 2. <button id="button" class="button">Click</button>: ushbu buttonni Javascript orqalik 3 xil yol bilan tanlab olish mumkin. Ularni yozib korsating.


//    1.     var btn = document.querySelector(".button");
//         console.log(btn)
            

    //  2.       var button = document.getElementById("button");
    //                     console.log(button)


        // 3.        // var button = document.getElementsByTagName("button")[0];
                // console.log(button)


        //  4.       // var button = document.getElementsByClassName("button")[1];

                // console.log(button);

        






// 3. .container ichidagi href'i # ga teng bolgan barcha <a> elementlarni Javascript orqalik tanlab oling va ularni sonini korsating:
//   <div class="container">
//     <a href="#"></a>
//     <a href=""></a>
//     <a href="#"></a>
//     <a href=""></a>
//     <a href="#"></a>
//     <a href="#"></a>
//   </div>


                // var container = document.querySelector('.container');
                // var anchorTags = container.querySelectorAll('a[href="#"]');
                // var showResult = anchorTags.length;
                // console.log(showResult);






// 4. 2 sekunddan keyin <ol> elmenti ichidagi barcha node'larni o'chirib yuboradigan code yozing:
//   <ol id="elem">
//     <li>Hello</li>
//     <li>World</li>
//   </ol>



                // setTimeout (function(){
                //     let elem= document.getElementById('elem');
                //     while(elem.firstChild){
                //         elem.removeChild(elem.firstChild);
                //     }
                // }, 2000)







// 5. Quyidagi array'ni loop qilib xar bir rang uchun 1 ta <ul> elementi ichida bitta <li> elmenti yarating. <li> ichidagi text osha rang va text rangi ham osha rangdan bolsin. Misol uchun, ul elementni birinchi <li> text'i red boladi va uni rangi ham red boladi. Va <li> elementni ustiga bosganda console.log'da "hello" degan yozuv chiqsin:

//   const colors = ['red', 'green', 'blue', 'orange', 'violet']


                    // const colors = ['red', 'green', 'blue', 'orange', 'violet'];
                    // const ul = document.createElement('ul');

                    // colors.forEach(color => {
                    //     const li = document.createElement('li');
                    //     li.textContent = color;
                    //     li.style.color = color;
                    //     li.addEventListener('click', () => console.log("hello"));
                    //     ul.appendChild(li);
                    // });

                    // document.body.appendChild(ul);
