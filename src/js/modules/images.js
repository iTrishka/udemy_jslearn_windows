const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    
    imgPopup.style.justifyContent = 'center'; //выровнили блок по горизонтаи
    imgPopup.style.alignItems = 'center'; //по вертикали
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);
    bigImage.style.height = '80%';

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute('href');
            console.log(path);
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });
};

export default images;