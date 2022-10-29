const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const slider = document.querySelector('.example__wrapper');
const sliderWrapper = slider.querySelector('.example__slider-wrapper');
const sliderFatCat = sliderWrapper.querySelector('.example__image-wrapper--fat-cat');
const sliderThinCat = sliderWrapper.querySelector('.example__image-wrapper--thin-cat');
const sliderDivider = sliderWrapper.querySelector('.example__divider');

let isMoveable = false;
let dividerPositionInPercentage = 50;
let newDividerPositionInPercentage;
let dividerPosition;
let newDividerPosition;

function onSliderDividerStart(evt) {
  switch (evt.type) {
    case 'touchstart':
      dividerPosition = evt.touches[0].clientX;
      break;
    case 'mousedown':
      dividerPosition = evt.x;
      break;
  }

  isMoveable = true;
}

function onSliderDividerMove(evt) {
  if (isMoveable) {
    switch (evt.type) {
      case 'touchmove':
        document.body.style.overflow = 'hidden';
        newDividerPosition = evt.touches[0].clientX;
        break;
      case 'mousemove':
        newDividerPosition = evt.x;
        break;
    }

    const sliderWidth = sliderWrapper.offsetWidth;
    newDividerPositionInPercentage = dividerPositionInPercentage + (newDividerPosition - dividerPosition) / sliderWidth * 100;

    if (newDividerPositionInPercentage < 0) {
      newDividerPositionInPercentage = 0;
    } else if (newDividerPositionInPercentage > 100) {
      newDividerPositionInPercentage = 100;
    }

    sliderDivider.style.left = `${newDividerPositionInPercentage}%`;
    sliderFatCat.style.flexBasis = `${newDividerPositionInPercentage}%`;
    sliderThinCat.style.flexBasis = `${100 - newDividerPositionInPercentage}%`;
  }
}

function onSliderDividerEnd(evt) {
  if (evt.type === 'touchend') {
    document.body.style.overflow = 'unset';
  }

  dividerPositionInPercentage = newDividerPositionInPercentage;
  isMoveable = false;
}

if (isMobile) {
  sliderDivider.addEventListener('touchstart', (evt) => onSliderDividerStart(evt));
  sliderDivider.addEventListener('touchmove', (evt) => onSliderDividerMove(evt));
  document.addEventListener('touchend', (evt) => onSliderDividerEnd(evt));
} else {
  sliderDivider.addEventListener('mousedown', (evt) => onSliderDividerStart(evt));
  slider.addEventListener('mousemove', (evt) => onSliderDividerMove(evt));
  document.addEventListener('mouseup', (evt) => onSliderDividerEnd(evt));
}
