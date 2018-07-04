
document.addEventListener("DOMContentLoaded", function () {

    //slider

    var rightButton = document.querySelector(".right-arrow");
    var leftButton = document.querySelector('.left-arrow');

    var listSlider = document.querySelectorAll(".news");
    console.log(listSlider)
    //console.log(listSlider);

    var listArr = [];
    var counter = 0;

    for (var i = 0; i < listSlider.length; i++) {
        listArr.push(listSlider[i])
    }
console.log(listArr);
   // listArr[counter].classList.add('visible');

    rightButton.addEventListener('click', function () {
        listArr[counter].classList.remove('visible');
        counter++;
        if (counter >= listArr.length) {
            counter = 0
        }
        listArr[counter].classList.add('visible');
    });

    leftButton.addEventListener('click', function () {
        listArr[counter].classList.remove('visible');
        counter--;
        if (counter < 0) {
            counter = listArr.length - 1
        }
        listArr[counter].classList.add('visible');
    });

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


    var galleryArray = document.querySelectorAll('.gallery');
    var bodyEl = document.querySelector('body');

    console.log(galleryArray);
    console.log(bodyEl);


    for (var i = 0; i < galleryArray.length; i++) {

        galleryArray[i].addEventListener('click', function () {

            var src = this.querySelector('img').src;

            var newDiv = document.createElement('div');

            newDiv.classList.add('fullScreen');

            var newImg = document.createElement('img');
            newImg.src = src;
            newDiv.appendChild(newImg);

            var newBtn = document.createElement('button');

            newBtn.classList.add('close');

            newDiv.appendChild(newBtn);

            bodyEl.appendChild(newDiv);



            newBtn.addEventListener('click', function () {

                var div = this.parentElement;

                div.parentElement.removeChild(div);

            })

        });
    }

});







