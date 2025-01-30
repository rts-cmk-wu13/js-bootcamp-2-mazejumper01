

  function skjulElementViaCssSelector(cssSelector) {
    element = document.querySelector(cssSelector);
    element.style.display = "none";
}

skjulElementViaCssSelector("");
