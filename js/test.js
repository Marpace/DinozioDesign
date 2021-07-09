// *************************************   TEST CODE  ************************************

const trigger1 = document.querySelector('#button-1');
const trigger2 = document.querySelector('#button-2');

const lines = document.getElementsByClassName('line');
const linesArray = [...lines];

const wrap = document.querySelector('#wrap');

const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');
const line4 = document.querySelector('#line-4');
const line5 = document.querySelector('#line-5');
const line6 = document.querySelector('#line-6');
const line7 = document.querySelector('#line-7');
const line8 = document.querySelector('#line-8');
const line9 = document.querySelector('#line-9');
const line10 = document.querySelector('#line-10');
const line11 = document.querySelector('#line-11');
const line12 = document.querySelector('#line-12');
const line13 = document.querySelector('#line-13');
const line14 = document.querySelector('#line-14');
const line15 = document.querySelector('#line-15');
const line16 = document.querySelector('#line-16');
const line17 = document.querySelector('#line-17');
const line18 = document.querySelector('#line-18');
const line19 = document.querySelector('#line-19');
const line20 = document.querySelector('#line-20');
const line21 = document.querySelector('#line-21');

trigger1.addEventListener('click', function(){

    line1.style.height = '2px';
    line1.style.width = '200px';
    line2.style.height = '300px';
    line2.style.width = '2px';
    line3.style.height = '2px';
    line3.style.width = '450px';
    line4.style.height = '151px';
    line4.style.width = '2px';
    line5.style.height = '2px';
    line5.style.width = '250px';
    line6.style.height = '218px';
    line6.style.width = '2px';
    line7.style.height = '2px';
    line7.style.width = '130px';
    line8.style.height = '2px';
    line8.style.width = '40px';
    line9.style.height = '2px';
    line9.style.width = '130px';
    line10.style.height = '10px';
    line10.style.width = '2px';
    line11.style.height = '30px';
    line11.style.width = '2px';
    line12.style.height = '89px';
    line12.style.width = '2px';
    line13.style.height = '2px';
    line13.style.width = '10px';
    line14.style.height = '2px';
    line14.style.width = '30px';
    line15.style.height = '89px';
    line15.style.width = '2px';
    line16.style.height = '2px';
    line16.style.width = '140px';
    line17.style.height = '52px';
    line17.style.width = '2px';
    line18.style.height = '2px';
    line18.style.width = '39px';
    line19.style.height = '1px';
    line19.style.width = '30px';
    line20.style.height = '30px';
    line20.style.width = '1px';
    line21.style.height = '1px';
    line21.style.width = '30px';

    setTimeout(() => {
        line19.style.transform = "rotate(45deg)"
        line20.style.transform = "rotate(45deg)"
        line21.style.transform = "rotate(45deg)"
    }, 1000);

});

trigger2.addEventListener('click', function(){
  
    wrap.style.height = "0"
});