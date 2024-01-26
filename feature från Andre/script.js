//Andrés Mr Spy
function showImage() {
    const spyImage = document.createElement("img");
    spyImage.src = "1085386-200.png";
    spyImage.alt = "Mr Spy";
    spyImage.classList.add("spyImage");
  
    //alternative-version
    /*spyImage.src = "1085385-200.png";
    spyImage.alt = "Mr Spy";
    spyImage.classList.add("spyImage");*/
  
    const randomPosition = getRandomPosition();
    spyImage.style.left = randomPosition.x + "px";
    spyImage.style.top = randomPosition.y + "px";
  
    document.body.appendChild(spyImage);
  
    setTimeout(() => {
      spyImage.style.opacity = 1;
    }, 0);
  
    setTimeout(() => {
      hideImage(spyImage);
    }, 1000);
  }
  
  function hideImage(imageElement) {
    imageElement.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(imageElement);
      showImage();
    }, 5000);
  }
  
  showImage();
  //Slut på kod