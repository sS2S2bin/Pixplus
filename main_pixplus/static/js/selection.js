const selectArea = document.querySelector('.content-text > p');

function pointOn() {
  $('.alert-box-point').fadeIn();
  setTimeout(function () {
    $('.alert-box-point').fadeOut();
  }, 2000);
  let pointC = true;
  $(".point_tool").attr("src", "/static/icon/pointing_active.svg");
  selectArea.onmouseup = function () {
    if (pointC) {
      var selectionText;
      console.log(Range);
      selectionText = document.getSelection().getRangeAt(0);
      var node = document.createElement('span');
      node.classList.add('point');
      node.innerHTML = selectionText;
      selectionText.deleteContents();
      selectionText.insertNode(node);
      pointC = !pointC;
      if (!pointC) {
        $(".point_tool").attr("src", "/static/icon/pointing_disable.svg");
      }
    }
  }
}

function eraseOn() {
  $('.alert-box-erase').fadeIn();
  setTimeout(function () {
    $('.alert-box-erase').fadeOut();
  }, 2000);
  let eraseC = true;
  $(".erase_tool").attr("src", "/static/icon/eraser_active.svg");
  selectArea.onmouseup = function () {
    if (eraseC) {
      var selectionText;
      console.log(Range);
      selectionText = document.getSelection().getRangeAt(0);
      var node = document.createElement('span');
      node.classList.add('erase');
      node.innerHTML = selectionText;
      selectionText.deleteContents();
      selectionText.insertNode(node);
      eraseC = !eraseC;
      if (!eraseC) {
        $(".erase_tool").attr("src", "/static/icon/eraser_disable.svg");
      }
    }
  }
}

function boldOn() {
  $('.alert-box-bold').fadeIn();
  setTimeout(function () {
    $('.alert-box-bold').fadeOut();
  }, 2000);
  let boldC = true;
  $(".bold_tool").attr("src", "/static/icon/bold_active.svg");
  selectArea.onmouseup = function () {
    if (boldC) {
      var selectionText;
      console.log(Range);
      selectionText = document.getSelection().getRangeAt(0);
      var node = document.createElement('span');
      node.classList.add('text--bold');
      node.innerHTML = selectionText;
      selectionText.deleteContents();
      selectionText.insertNode(node);
      boldC = !boldC;
      if (!boldC) {
        $(".bold_tool").attr("src", "/static/icon/bold_disable.svg");
      }
    }
  }
}