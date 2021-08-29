$(document).ready(function () {
  var currentFloor = 2; // Переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /*Кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /*Кнопка уменьшения этажа*/
  var modal= $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");


  // Функция при наведении мышкой на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // Удаляем активный класс этажей
    currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
  $(".counter").text(currentFloor); // Записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); /* При клике на этаж, вызвать окно */
  modalCloseButton.on("click", toggleModal); /* При клике кнопки закрыть, убираети окно */
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () { // Отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // Проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // Прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // Форматируем переменную с этажем, что бы быыло 01, а не 1
      $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей 
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function() {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
 function toggleModal () { // Функция открыть-закрыть окно
    modal.toggleClass("is-open");
  } 
});