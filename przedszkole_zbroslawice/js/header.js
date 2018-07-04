
document.addEventListener("DOMContentLoaded", function () {
    //
//menu

    var menuSubLi = document.querySelectorAll('.has-children');


    for (var i = 0; i < menuSubLi.length; i++) {


        menuSubLi[i].addEventListener('mouseover', function () {


            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'flex';
            }
        });




        menuSubLi[i].addEventListener('mouseout', function () {

            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'none';
            }

        });

    }

//gallery


   //var galleryArray = document.querySelectorAll('.gallery');
   //var bodyEl = document.querySelector('body');

   //console.log(galleryArray);
   //console.log(bodyEl);


   //for (var i = 0; i < galleryArray.length; i++) {

   //    galleryArray[i].addEventListener('click', function () {

   //        var src = this.querySelector('img').src;

   //        var newDiv = document.createElement('div');

   //        newDiv.classList.add('fullScreen');

   //        var newImg = document.createElement('img');
   //        newImg.src = src;
   //        newDiv.appendChild(newImg);

   //        var newBtn = document.createElement('button');

   //        newBtn.classList.add('close');

   //        newDiv.appendChild(newBtn);

   //        bodyEl.appendChild(newDiv);



   //        newBtn.addEventListener('click', function () {

   //            var div = this.parentElement;

   //            div.parentElement.removeChild(div);

   //        })

   //    });
   //}

});







