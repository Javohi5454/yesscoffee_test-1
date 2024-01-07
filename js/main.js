document.addEventListener('DOMContentLoaded', function () {
    const counter3 = document.querySelector('.counter-3');
    
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 10; j++) {
            const div  = document.createElement('div');
            div.className = 'num'
            div.textContent = j
            counter3.appendChild(div)
        }
    }
    
    const finalDiv = document.createElement('div')
    finalDiv.className = 'num'
    finalDiv.textContent = '0'
    counter3.appendChild(finalDiv)
    
    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector('.num').clientHeight;
        const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight
        
        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        })
    }
    
    animate(counter3, 5)
    animate(document.querySelector('.counter-2'), 6)
    animate(document.querySelector('.counter-1'), 2, 4)
})

gsap.to('.digit', {
    top: '-150px',
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut"
})

gsap.from('.loader-1', {
    width: 0,
    duration: 6,
    ease: 'power2.inOut',
})

gsap.from('.loader-2', {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: 'power2.inOut',
})

gsap.to('.loader', {
    background: "none",
    delay: 6,
    duration: 0.1,
})

gsap.to('.loader-1', {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
})

gsap.to('.loader-2', {
    x: -75,
    y: 75,
    duration: 0.5
},
'<')

gsap.to('.loader', {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: 'power2.inOut'
})

gsap.to('.loader', {
    rotate: 45, 
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: 'power2.inOut'
})

gsap.to('.loading-screen', {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: 'power1.inOut'
})

gsap.to('h1', 1.5, {
    delay: 7,
    y: -100,
    ease: 'power4.inOut',
    stagger: {
        amount: 0.1,
    }
})



document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ paused: true });

    tl.to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.out"
    })

    tl.from(
        ".menu-link, .btn", 
        {
            opacity: 0,
            y: 60,
            stragger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
        },
        "<",
    )

    tl.to(
        ".video-preview",
        {
            duration: 1,
            height: "200px",
            ease: "power2.out",
        },
        "<",
    )

    tl.to(
        ".menu-divider",
        {
            duration: 2,
            width: "100%",
            ease: "power4.out",
        },
        "<",
    )

    function openMenu() {
        document.querySelector(".menu-overlay").style.pointerEvents = "all";
        tl.play()
    }

    function closeMenu() {
        document.querySelector(".menu-overlay").style.pointerEvents = "none";
        tl.reverse()
    }

    document.querySelector(".menu-open-btn").addEventListener("click", openMenu);

    document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);

    tl.reverse()
})