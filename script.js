document.addEventListener("DOMContentLoaded", () => {
    
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nameInput.value && emailInput.value && messageInput.value) {
            alert("Merci pour votre message, " + nameInput.value + " ! Nous reviendrons vers vous rapidement.");
            form.reset();
        } else {
            alert("Veuillez remplir tous les champs avant d'envoyer le message.");
        }
    });

    
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

   
    const details = document.querySelector("details");

    details.addEventListener("toggle", () => {
        if (details.open) {
            console.log("Détails ouverts.");
        } else {
            console.log("Détails fermés.");
        }
    });
});
