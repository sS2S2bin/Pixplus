// DIRECBAR SYSTEM
const folderEls = document.querySelectorAll('.folder');$
const fileEls = document.querySelectorAll('.file_line');
const dropBtnFiles = document.querySelectorAll('.file_drop');

console.log(dropBtnFiles);

let folderChildHide=[];
let fileChildHide=[];

for(let i=0; i<$('.folder').length; i++){
  folderChildHide[i]=false;
}
for(i=0; i<$('.file').length; i++){
  fileChildHide[i]=false;
}

folderEls.forEach(function (folderEl, index) {
  folderEl.addEventListener('click',function(){
    if(!folderChildHide[index]){
      folderEl.classList.add(`folder-${index}`);
      $(`.folder-${index}`).siblings().css("display","none");
      folderChildHide[index]=true;
    }else{
      $(`.folder-${index}`).siblings().css("display","block");
      folderEl.classList.remove(`folder-${index}`);
      folderChildHide[index]=false;
    }
  });
});

fileEls.forEach(function (fileEl, index){
  let dropBtn = dropBtnFiles[index];
  dropBtn.addEventListener('click',function(){
    if(!fileChildHide[index]){
      fileEl.classList.add(`file-${index}`);
      $(`.file-${index}`).siblings().css("display","none");
      dropBtn.classList.remove('unactive');
      fileChildHide[index]=true;
    }else{
      $(`.file-${index}`).siblings().css("display","flex");
      fileEl.classList.remove(`file-${index}`);
      dropBtn.classList.add('unactive');
      fileChildHide[index]=false;
    }
  });
})

//WINDOW SYSTEM I DONT KNOW