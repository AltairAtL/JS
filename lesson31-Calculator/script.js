$(document).ready(function () {
  $(".btn").click(function (e) {
    e.preventDefault();
    let num = parseFloat($(this).html());
    $(".calculator__scoreboard").append(num);
    $(".calculator__input").val($(".calculator__input").val() + num);
  });

  $(".op").click(function (e) {
    e.preventDefault();
    let op = $(this).html();
    $(".calculator__scoreboard").append(op);
    $(".calculator__input").val($(".calculator__input").val() + op);
  });

  $(".calculator__eq").click(function () {
    $(".calculator__input").val(eval($(".calculator__input").val()));
    $(".calculator__scoreboard").html(eval($(".calculator__input").val()));
  });

  $(".calculator__c").click(function () {
    $(".calculator__input").val("");
    $(".calculator__scoreboard").html("");
  });
});
