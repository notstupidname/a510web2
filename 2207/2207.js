(function() {
"use strict"

const body = document.querySelector('body');
const areaLinks = document.querySelectorAll('.area-link');
const svgAreas = document.querySelectorAll('.svg-area');

for (const areaLink of areaLinks){
    areaLink.addEventListener('mouseover',function(e){
        const areaNumber = this.dataset.area;
        const svgArea = document.querySelector(`.svg-area[data-area="${areaNumber}"]`);
        // console.log(svgArea);
        if (svgArea){
            svgArea.classList.add('area-active');
        };
          
    });

    areaLink.addEventListener('mouseout',function(e){
        const areaNumber = this.dataset.area;
        const svgArea = document.querySelector(`.svg-area[data-area="${areaNumber}"]`);
        // console.log(svgArea);
        if (svgArea){
            svgArea.classList.remove('area-active');
        };
          
    });
};

for (const svgArea of svgAreas){
    svgArea.addEventListener('mouseover',function(e){
        console.log("!!!");
    });
}
})();
