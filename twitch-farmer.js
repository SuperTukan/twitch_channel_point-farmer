window.setInterval(
  function () {
    if (document.getElementsByClassName("tw-button tw-button--success")[0] != undefined) {
      document.getElementsByClassName("tw-button tw-button--success")[0].click()
    }
  }, Math.floor((Math.random() * 10000)));
