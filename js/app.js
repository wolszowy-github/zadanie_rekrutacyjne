document.addEventListener('DOMContentLoaded', function(){
  var deleteBox = document.querySelectorAll('.deleteTD');
  var confirm = document.querySelectorAll('.txtConfirm');
  console.log(deleteBox);
  console.log(confirm);

  for (var i = 0; i < deleteBox.length; i++) {
    deleteBox[i].addEventListener('click',function(){
      this.classList.toggle('hidden');
      this.nextElementSibling.classList.toggle('hidden');
    });
  }

  for (var i = 0; i < confirm.length; i++) {
    confirm[i].addEventListener('click',function(){
      this.parentNode.parentNode.removeChild(this.parentElement);
    });
  }
});
