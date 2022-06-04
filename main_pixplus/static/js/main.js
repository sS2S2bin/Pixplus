// DIRECBAR SYSTEM
const folderEls = document.querySelectorAll('.folder');
const fileEls = document.querySelectorAll('.file_line');
const dropBtnFiles = document.querySelectorAll('.file_drop');

let folderChildHide = [];
let fileChildHide = [];

for (let i = 0; i < $('.folder').length; i++) {
  folderChildHide[i] = false;
}
for (i = 0; i < $('.file').length; i++) {
  fileChildHide[i] = false;
}

folderEls.forEach(function (folderEl, index) {
  folderEl.addEventListener('click', function () {
    if (!folderChildHide[index]) {
      folderEl.classList.add(`folder-${index}`);
      $(`.folder-${index}`).siblings().css("display", "none");
      folderChildHide[index] = true;
    } else {
      $(`.folder-${index}`).siblings().css("display", "block");
      folderEl.classList.remove(`folder-${index}`);
      folderChildHide[index] = false;
    }
  });
});

fileEls.forEach(function (fileEl, index) {
  let dropBtn = dropBtnFiles[index];
  if (dropBtn.classList.contains('unactive')) {
    dropBtn.innerHTML = "▷"
  }
  dropBtn.addEventListener('click', function () {
    if (!fileChildHide[index]) {
      fileEl.classList.add(`file-${index}`);
      $(`.file-${index}`).siblings().css("display", "none");
      if (dropBtn.classList.contains('active')) {
        dropBtn.innerHTML = "▶"
      }
      fileChildHide[index] = true;
    } else {
      $(`.file-${index}`).siblings().css("display", "flex");
      fileEl.classList.remove(`file-${index}`);
      if (dropBtn.classList.contains('active')) {
        dropBtn.innerHTML = "▼"
      }
      fileChildHide[index] = false;
    }
  });
})

const copyUrlEls = document.querySelectorAll('.copy-url');
const copyResEls = document.querySelectorAll('.copy-res');
const urlTexts = document.querySelectorAll('.url-tooltip-text');
const resTexts = document.querySelectorAll('.res-tooltip-text');


copyUrlEls.forEach(function (copyUrlEl, index) {
  copyUrlEl.addEventListener('click', function () {
    copyUrlEl.classList.add(`btn-${index}`);
    var clipboard = new ClipboardJS(`.btn-${index}`);
    copyUrlEl.setAttribute('data-clipboard-action', 'copy');
    copyUrlEl.setAttribute('data-clipboard-target', `#content-${index}`);
    let content = urlTexts[index];
    content.id = `content-${index}`;

    clipboard.on('success', function (e) {
      console.log(e);
    });

    clipboard.on('error', function (e) {
      console.log(e);
    });

    $('.alert-box-url').fadeIn();
    setTimeout(function () {
      $('.alert-box-url').fadeOut();
    }, 2000);

  });
})

copyResEls.forEach(function (copyResEl, index) {
  copyResEl.addEventListener('click', function () {
    copyResEl.classList.add(`btn-${index}`);
    var clipboard = new ClipboardJS(`.btn-${index}`);
    copyResEl.setAttribute('data-clipboard-action', 'copy');
    copyResEl.setAttribute('data-clipboard-target', `#content-${index}`);
    let content = resTexts[index];
    content.id = `content-${index}`;

    clipboard.on('success', function (e) {
      console.log(e);
    });

    clipboard.on('error', function (e) {
      console.log(e);
    });

    $('.alert-box-res').fadeIn();
    setTimeout(function () {
      $('.alert-box-res').fadeOut();
    }, 2000);

  });
})

let commentStr = "";
const commentBtns = document.querySelectorAll('.commentBtn');
const commentBoxs = document.querySelectorAll('.content-comment-box');
commentBtns.forEach(function (commentBtn, index) {
  commentStr = `
    <form class="content-comment comment-${index}">
      <input id="commentInput" type="text" placeholder="comment를 입력해 주세요.">
      <button id="commentSubmit" type="submit">등록</button>
    </form>
  `
  commentBtn.addEventListener('click', function () {
    commentBoxs[index].innerHTML = commentStr;
  })
})



const target = document.querySelector('.target');
const result = document.querySelector('.result');
const screen = document.querySelector('.screen');

function selectText() {
  var selectionText = "";
  if (document.getSelection) {
    selectionText = document.getSelection();
  } else if (document.selection) {
    selectionText = document.selection.createRange().text;
  }
  return selectionText;
}

let sentence = "";
document.onmouseup = function () {
  console.log(""+selectText());
  result.innerHTML = selectText();
}
// sentence = $('.result').html();
// console.log(sentence);
const textarea = $('.screen').contents().find('span');
result.innerHTML = textarea;
