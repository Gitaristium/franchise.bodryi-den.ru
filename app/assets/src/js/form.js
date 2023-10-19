// ввод только цифр в поле input tel
$(document).ready(function () {
  $("form").keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  // AJAX отправка формы
  /* Article FructCode.com */
  $("#btn-ajax__form").click(function (e) {
    event.preventDefault();

    $("#ajax__form input").removeClass("error error-mail");
    if (
      $('#ajax__form input[name="user__name"]').val().length > 0 &&
      $('#ajax__form input[name="user__city"]').val().length > 0 &&
      $('#ajax__form input[name="user__phone"]').val().length > 0
    ) {
      if ($('#ajax__form input[name="user__email"]').val().length > 0) {
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,6}$/i;
        var mail = $('#ajax__form input[name="user__email"]').val();
        if (mail.search(pattern) == 0) {
          sendAjaxForm("result_form", "ajax__form", "send.php");

          return false;
        } else {
          $('#ajax__form input[name="user__email"]').addClass("error-mail");
        }
      } else {
        sendAjaxForm("result_form", "ajax__form", "send.php");

        return false;
      }
    } else {
      $("#ajax__form input").each(function () {
        $(this).attr("aria-required") == "true" &&
          $(this).val().length == 0 &&
          $(this).addClass("error");
      });

      //.addClass("error");
    }
  });

  $("#btn-ajax__modal").click(function (e) {
    event.preventDefault();
    $("#ajax__modal input").removeClass("error error-mail");
    if (
      $('#ajax__modal input[name="user__name"]').val().length > 0 &&
      $('#ajax__modal input[name="user__city"]').val().length > 0 &&
      $('#ajax__modal input[name="user__phone"]').val().length > 0
    ) {
      if ($('#ajax__modal input[name="user__email"]').val().length > 0) {
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,6}$/i;
        var mail = $('#ajax__modal input[name="user__email"]').val();
        if (mail.search(pattern) == 0) {
          sendAjaxModal("result_form", "ajax__modal", "send.php");

          return false;
        } else {
          $('#ajax__modal input[name="user__email"]').addClass("error-mail");
        }
      } else {
        sendAjaxModal("result_form", "ajax__modal", "send.php");

        return false;
      }
    } else {
      $("#ajax__modal input").each(function () {
        $(this).attr("aria-required") == "true" &&
          $(this).val().length == 0 &&
          $(this).addClass("error");
      });

      //.addClass("error");
    }
  });

  $(".input-box").click(function (e) {
    $(this).children("input").removeClass("error error-mail");
  });

  function sendAjaxForm(result_form, ajax__form, url) {
    $(".input__btn").text("отправляем").prop("disabled", true);
    $.ajax({
      url: "send.php",
      type: "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#" + ajax__form).serialize(), // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно
        $("#sended").addClass("active");
        setTimeout(() => {
          $(".input").val("");
        }, 1000);
        // ym(87461192, "reachGoal", "send_form");
        $(".input__btn").text("получить бизнес-план").prop("disabled", false);
        ym(
          95060645,
          "reachGoal",
          $('#ajax__form input[name="click__ya-target"]').val()
        );
      },
      error: function (response) {
        // Данные не отправлены
        alert("error");
        $(".input__btn").text("получить бизнес-план").prop("disabled", false);
      },
    });
  }
  function sendAjaxModal(result_form, ajax__modal, url) {
    $(".input__btn").text("отправляем").prop("disabled", true);
    $.ajax({
      url: "send.php",
      type: "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#" + ajax__modal).serialize(), // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно
        $("#popup").addClass("inactive");

        setTimeout(() => {
          $("#popup").removeClass("active inactive");
          $("#sended").addClass("active");
        }, 500);

        setTimeout(() => {
          $(".input").val("");
        }, 1000);
        // ym(87461192, "reachGoal", "send_form");
        $(".input__btn").text("получить бизнес-план").prop("disabled", false);
        ym(
          95060645,
          "reachGoal",
          $('#ajax__modal input[name="click__ya-target"]').val()
        );
      },
      error: function (response) {
        // Данные не отправлены
        // alert("error");
        $(".input__btn").text("получить бизнес-план").prop("disabled", false);
      },
    });
  }

  // ввод только цифр в поле input tel
  var telInput = $('input[type="tel"]');

  for (var i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
      dpcmTel(this);
    };
  }
  function dpcmTel(input) {
    var value = input.value;
    var re = /[^0-9\-\(\)\+\ ]/gi;
    if (re.test(value)) {
      value = value.replace(re, "");
      input.value = value;
    }
  }
});
