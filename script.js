(() => {
    const mobileWidth = 680;

    const addMenuBackground = () => {
        const pageWidth = window.innerWidth;
        const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const navigation = document.querySelector("header nav");

        if (pageWidth > mobileWidth) {
            boddyOffset > 0 ? navigation.classList.add("nav-fixed") : navigation.classList.remove("nav-fixed");
        }
    }

    const onNavItemClick = () => {
        const navItemList = document.querySelectorAll(".section-link");
        const navItems = [...navItemList];

        navItems.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

                scrollToSection(sectionId);
            })
        })
    }

    const scrollToSection = sectionId => {
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth;

        if (sectionId !== "#") {
            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
        } else {
            sectionPosition = 0;
        }

        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionPosition
        })
    };
    const reviewChange = () => {
        let firstChild, lastChild;
        const prevArrow = document.querySelector('#review-prev');
        const nextArrow = document.querySelector('#review-next');
        const reviews = document.querySelector('.reviews ul');

        document.addEventListener('click', () => {
                if (event.target === prevArrow) {
                    lastChild = reviews.lastElementChild;
                    reviews.insertAdjacentElement('afterbegin', lastChild)
                } else if (event.target === nextArrow) {
                    firstChild = reviews.firstElementChild;
                    reviews.insertAdjacentElement('beforeend', firstChild)
                }
            }
        )
    };


    const onGalleryImageClick = () => {
        const galleryImageList = document.querySelectorAll('#gallery li');
        const galleryImages = [...galleryImageList];

        galleryImages.forEach(image => {
            image.addEventListener('click', event => {
                galleryImageOpen(event.target);
            })
        });
    }

    const galleryImageOpen = image => {
        const imageSrc = image.getAttribute("src");
        const openedImage = `<div class="backdrop">
<img src="${imageSrc}" alt="" />
<span class="backdrop-close">X</span></div>`;

        document.body.insertAdjacentHTML('beforeend', openedImage);
        galleryImageClose();



    };

    const galleryImageClose = () => {
        const closeButton = document.querySelector('.backdrop-close');
        closeButton.addEventListener('click', () => {
            const backdrop = document.querySelector('.backdrop');
            backdrop.remove();
        })
    }



    window.addEventListener("scroll", () => {
        addMenuBackground();
    });


    onNavItemClick();
    reviewChange();
    onGalleryImageClick();

})();
