

  function skjulElementViaCssSelector(cssSelector) {
   let element = document.querySelector(cssSelector);
   if (element) element.style.display = "none";
}

skjulElementViaCssSelector(".store");
