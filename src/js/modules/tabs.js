const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();
    
    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
            
            tab.forEach((tab, i) =>{
                if(tab == target || target.parentNode == tab){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;