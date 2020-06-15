const modals = () =>{
    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              popup = document.querySelector(modalSelector),
              btnClose = document.querySelector(closeSelector);
    
        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target){
                e.preventDefault();
                }
                openPopup();
            });
        });
    
    
        popup.addEventListener('click', (e) =>{
            if(e.target === popup){
                closePopup();
            }
        });
    
        btnClose.addEventListener('click', (e) =>{
            e.preventDefault();
            closePopup();
        });
    
        function openPopup(){
            popup.style.display = 'block';
            document.body.style.overflow = "hidden";
        }
    
        function closePopup(){
            popup.style.display = 'none';
            document.body.style.overflow ="";
        }

    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};



export default modals; 