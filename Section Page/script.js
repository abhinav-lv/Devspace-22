'use strict';
// document.querySelector('.tag').addEventListener('click',function(){
//     document.querySelector('.tag').style.backgroundColor='#402f7c';
//     document.querySelector('.tag').style.color='#e4d8ff';

//     // if(document.querySelector('.tag').style.backgroundColor==='#e4d8ff'){
//     //     document.querySelector('.tag').style.backgroundColor='#402f7c';
//     //     document.querySelector('.tag').style.color='#e4d8ff';
//     // }

//     // else if(document.querySelector('.tag').style.backgroundColor==='#402f7c'){
//     //     document.querySelector('.tag').style.backgroundColor='#e4d8ff';
//     //     document.querySelector('.tag').style.color='#402f7c';
//     // }
// });

let tag_state=0;

document.querySelector(".tags").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "BUTTON") {
        if(tag_state==1){
            e.target.style.backgroundColor='#e4d8ff';
            e.target.style.color='#402f7c';
            tag_state=0;
        }

        else if(tag_state==0){
            e.target.style.backgroundColor='#402f7c';
            e.target.style.color='#e4d8ff';
            tag_state=1;
        }
	}
});