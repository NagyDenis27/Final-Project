window.onload = function () {
  const random = () => {
    const imageCircle = document.querySelector(".f1");
    const images = [
      "url(./images/image1.jpg)",
      "url(./images/image2.jpg)",
      "url(./images/image3.jpg)",
      "url(./images/image4.jpg)",
      "url(./images/image5.jpg)",
      "url(./images/image6.jpg)",
      "url(./images/image7.jpg)",
      "url(./images/image8.jpg)",
      "url(./images/image9.jpg)",
      "url(./images/image10.jpg)",
    ];

    const imgMath = images[Math.floor(Math.random() * images.length)];
    imageCircle.style.backgroundImage = imgMath;
  };
  const interval = setInterval(random, 2000);
};
