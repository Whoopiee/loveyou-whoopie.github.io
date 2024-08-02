document.addEventListener("DOMContentLoaded", () => {
  const showImageButton = document.querySelector(".love-button");
  const imageContainer = document.querySelector("#image-container");
  const sampleImage = document.querySelector("#sampleImage");

  function getRandomPosition(
    containerWidth,
    containerHeight,
    imageWidth,
    imageHeight
  ) {
    const x = Math.floor(Math.random() * (containerWidth - imageWidth));
    const y = Math.floor(Math.random() * (containerHeight - imageHeight));
    return { x, y };
  }

  showImageButton.addEventListener("click", () => {
    const container = imageContainer.parentElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = sampleImage.width;
    const imageHeight = sampleImage.height;

    const { x, y } = getRandomPosition(
      containerWidth,
      containerHeight,
      imageWidth,
      imageHeight
    );

    // Показати контейнер з картинкою
    imageContainer.style.display = "block";
    imageContainer.style.left = `${x}px`;
    imageContainer.style.top = `${y}px`;

    // Зробити картинку видимою
    setTimeout(() => {
      sampleImage.style.opacity = "1";
    }, 10); // Невелика затримка, щоб стиль `display` встиг застосуватися

    // Приховати картинку через кілька секунд
    setTimeout(() => {
      sampleImage.style.opacity = "0";
      // Приховати контейнер через кілька секунд після зникнення картинки
      setTimeout(() => {
        imageContainer.style.display = "none";
      }, 500); // Затримка, щоб дати час для плавного зникнення
    }, 500); // Час показу картинки
  });
});
