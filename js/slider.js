const isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),slider=document.querySelector(".example__wrapper"),sliderWrapper=slider.querySelector(".example__slider-wrapper"),sliderFatCat=sliderWrapper.querySelector(".example__image-wrapper--fat-cat"),sliderThinCat=sliderWrapper.querySelector(".example__image-wrapper--thin-cat"),sliderDivider=sliderWrapper.querySelector(".example__divider");let newDividerPositionInPercentage,dividerPosition,newDividerPosition,isMoveable=!1,dividerPositionInPercentage=50;function onSliderDividerStart(e){switch(e.type){case"touchstart":dividerPosition=e.touches[0].clientX;break;case"mousedown":dividerPosition=e.x}isMoveable=!0}function onSliderDividerMove(e){if(isMoveable){switch(e.type){case"touchmove":document.body.style.overflow="hidden",newDividerPosition=e.touches[0].clientX;break;case"mousemove":newDividerPosition=e.x}const i=sliderWrapper.offsetWidth;newDividerPositionInPercentage=dividerPositionInPercentage+(newDividerPosition-dividerPosition)/i*100,newDividerPositionInPercentage<0?newDividerPositionInPercentage=0:newDividerPositionInPercentage>100&&(newDividerPositionInPercentage=100),sliderDivider.style.left=`${newDividerPositionInPercentage}%`,sliderFatCat.style.flexBasis=`${newDividerPositionInPercentage}%`,sliderThinCat.style.flexBasis=100-newDividerPositionInPercentage+"%"}}function onSliderDividerEnd(e){"touchend"===e.type&&(document.body.style.overflow="unset"),dividerPositionInPercentage=newDividerPositionInPercentage,isMoveable=!1}isMobile?(sliderDivider.addEventListener("touchstart",(e=>onSliderDividerStart(e))),sliderDivider.addEventListener("touchmove",(e=>onSliderDividerMove(e))),document.addEventListener("touchend",(e=>onSliderDividerEnd(e)))):(sliderDivider.addEventListener("mousedown",(e=>onSliderDividerStart(e))),slider.addEventListener("mousemove",(e=>onSliderDividerMove(e))),document.addEventListener("mouseup",(e=>onSliderDividerEnd(e))));