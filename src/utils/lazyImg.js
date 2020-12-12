function lazyImg(ele) {
  if (ele.getAttribute("data-src")) {
    let h = window.innerHeight;
    let offsetTop = ele.offsetTop;
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (offsetTop - scrollTop < h) {
      let src = ele.dataset.src;
      let img = new Image();
      img.src = src;
      img.onload = function() {
        ele.src = src;
        ele.setAttribute("data-src", "");
      };
    }
  }
}
