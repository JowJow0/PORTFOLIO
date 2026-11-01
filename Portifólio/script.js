/* =========================================================

   PORTFÓLIO — JONATHAN FERREIRA

   JavaScript otimizado

   ========================================================= */



/* =========================================================

   1. TRADUÇÕES

   ========================================================= */



const translations = {

    pt: {

        nav: {

            about: "Sobre",

            skills: "Skills",

            services: "Serviços",

            projects: "Projetos",

            contact: "Contato"

        },



        hero: {

            typing: [

                "Desenvolvedor Web",

                "Desenvolvedor FullStack",

                "Criador de Sistemas",

                "Criador de Soluções Digitais",

                "Apaixonado por Tecnologia",

                "I love Coffee"

            ],

            description:

                "Transformando ideias em experiências digitais, sistemas e soluções criativas.",

            projects: "Ver meus projetos",

            contact: "Entre em contato",

            about: ">_ Sobre mim",

            skills: ">_ Minhas Skills",

            services: ">_ Meus Serviços",

            project: ">_ Meus Projetos",

            contactMenu: ">_ Entre em Contato"

        },



        about: {

            label: "SOBRE MIM",

            title: "Muito prazer, <span>Jonathan.</span>",

            text1:

                "Sou profissional da área de tecnologia, apaixonado por desenvolvimento, inovação e criação de soluções digitais.",

            text2:

                "Bacharelando em Ciência da Computação e Tecnólogo em Análise e Desenvolvimento de Sistemas.",

            text3:

                "Minha trajetória une tecnologia, criatividade e educação. Gosto de transformar problemas em soluções práticas e experiências digitais interessantes.",

            text4:

                "Atualmente venho ampliando meus conhecimentos em desenvolvimento de software, desenvolvimento web, banco de dados e novas tecnologias.",

            terminalWhoami: "Desenvolvedor & Criador",

            terminalObjective: "Criar. Aprender. Evoluir."

        },



        skills: {

            label: "TECNOLOGIAS",

            title: "Minhas <span>Skills</span>"

        },



        services: {

            label: "O QUE EU FAÇO",

            title: "Meus <span>Serviços</span>",



            webTitle: "Desenvolvimento Web",

            webDescription:

                "Criação de sites modernos, responsivos, interativos e pensados para oferecer uma boa experiência ao usuário.",



            systemsTitle: "Desenvolvimento de Sistemas",

            systemsDescription:

                "Desenvolvimento de soluções personalizadas para automatizar processos e resolver problemas específicos.",



            digitalTitle: "Soluções Digitais",

            digitalDescription:

                "Transformação de ideias em projetos digitais funcionais, criativos e alinhados aos objetivos de cada projeto."

        },



        projects: {

            label: "PORTFÓLIO",

            title: "Meus <span>Projetos</span>",

            description:

                "Alguns dos projetos que desenvolvi durante minha trajetória acadêmica e profissional.",



            all: "Todos",

            web: "Web",

            javascript: "JavaScript",

            java: "Java",



            github: "GitHub",

            demo: "Demo",

            details: "Ver detalhes",

            technologies: "Tecnologias utilizadas",

            close: "Fechar",

            openGithub: "Abrir GitHub",

            viewProject: "Acessar projeto",
            viewLinkedIn: "Ver no LinkedIn",
            likeProject: "Curtir projeto",
            likedProject: "Curtido"

        },



        contact: {

            label: "CONTATO",

            title: "Vamos criar algo <span>juntos?</span>",

            description:

                "Você tem alguma ideia, projeto ou vontade de realizar algo? Entre em contato comigo.",

            email: "Enviar e-mail",

            whatsapp: "WhatsApp"

        },



        footer: {

            rights: "Todos os direitos reservados.",

            developed: "Desenvolvido com HTML · CSS · JavaScript"

        }

    },



    en: {

        nav: {

            about: "About",

            skills: "Skills",

            services: "Services",

            projects: "Projects",

            contact: "Contact"

        },



        hero: {

            typing: [

                "Web Developer",

                "FullStack Developer",

                "Systems Developer",

                "Digital Solutions Creator",

                "Technology Enthusiast",

                "I love Coffee"

            ],

            description:

                "Turning ideas into digital experiences, systems and creative solutions.",

            projects: "View my projects",

            contact: "Get in touch",

            about: ">_ About me",

            skills: ">_ My Skills",

            services: ">_ My Services",

            project: ">_ My Projects",

            contactMenu: ">_ Get in Touch"

        },



        about: {

            label: "ABOUT ME",

            title: "Nice to meet you, <span>I'm Jonathan.</span>",

            text1:

                "I am a technology professional passionate about development, innovation and creating digital solutions.",

            text2:

                "Bachelor's student in Computer Science and Technologist in Systems Analysis and Development.",

            text3:

                "My journey combines technology, creativity and education. I enjoy turning problems into practical solutions and interesting digital experiences.",

            text4:

                "I am currently expanding my knowledge in software development, web development, databases and new technologies.",

            terminalWhoami: "Developer & Creator",

            terminalObjective: "Create. Learn. Evolve."

        },



        skills: {

            label: "TECHNOLOGIES",

            title: "My <span>Skills</span>"

        },



        services: {

            label: "WHAT I DO",

            title: "My <span>Services</span>",



            webTitle: "Web Development",

            webDescription:

                "Creation of modern, responsive and interactive websites focused on providing a great user experience.",



            systemsTitle: "Systems Development",

            systemsDescription:

                "Development of customized solutions to automate processes and solve specific problems.",



            digitalTitle: "Digital Solutions",

            digitalDescription:

                "Turning ideas into functional and creative digital projects aligned with each project's goals."

        },



        projects: {

            label: "PORTFOLIO",

            title: "My <span>Projects</span>",

            description:

                "Some of the projects I developed throughout my academic and professional journey.",



            all: "All",

            web: "Web",

            javascript: "JavaScript",

            java: "Java",



            github: "GitHub",

            demo: "Demo",

            details: "View details",

            technologies: "Technologies used",

            close: "Close",

            openGithub: "Open GitHub",

            viewProject: "Open project",
            viewLinkedIn: "View on LinkedIn",
            likeProject: "Like project",
            likedProject: "Liked"

        },



        contact: {

            label: "CONTACT",

            title: "Let's create something <span>together?</span>",

            description:

                "Have an idea, project or opportunity? Get in touch with me.",

            email: "Send email",

            whatsapp: "WhatsApp"

        },



        footer: {

            rights: "All rights reserved.",

            developed: "Developed with HTML · CSS · JavaScript"

        }

    }

};





/* =========================================================

   2. ESTADO

   ========================================================= */



let currentLanguage =

    localStorage.getItem("portfolioLanguage") === "en"

        ? "en"

        : "pt";



let currentProjectFilter = "todos";



let wordIndex = 0;

let characterIndex = 0;

let deleting = false;

let typingTimer = null;





/* =========================================================

   3. ELEMENTOS DO DOM

   ========================================================= */



const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);



const menuButton = $("#menuButton");

const mobileNav = $("#mobileNav");



const languageSwitcher = $("#languageSwitcher");

const mobileLanguageSwitcher = $("#mobileLanguageSwitcher");

const currentLanguageElement = $("#currentLanguage");



const typingElement = $("#typingText");



const skillsGrid = $("#skillsGrid");

const projectsGrid = $("#projectsGrid");

const filtersContainer = $("#projectFilters");



const currentYear = $("#currentYear");





/* =========================================================

   4. FUNÇÕES UTILITÁRIAS

   ========================================================= */



function getTranslation(path) {

    return path.split(".").reduce(

        (object, key) => object?.[key],

        translations[currentLanguage]

    );

}





function setTranslatedContent(element, value) {

    if (!element || value === undefined) return;



    const icon = element.querySelector("i");



    if (icon) {

        element.innerHTML = "";

        element.appendChild(icon);

        element.appendChild(document.createTextNode(value));

    } else {

        element.innerHTML = value;

    }

}





/* =========================================================

   5. IDIOMA

   ========================================================= */



function applyLanguage(language = currentLanguage) {

    currentLanguage = language === "en" ? "en" : "pt";



    $$("[data-i18n]").forEach((element) => {

        const value = getTranslation(element.dataset.i18n);



        if (value !== undefined) {

            setTranslatedContent(element, value);

        }

    });



    document.documentElement.lang =

        currentLanguage === "pt"

            ? "pt-BR"

            : "en";



    if (currentLanguageElement) {

        currentLanguageElement.textContent =

            currentLanguage.toUpperCase();

    }



    localStorage.setItem(

        "portfolioLanguage",

        currentLanguage

    );



    restartTyping();

    renderSkills();

    renderFilters();

    renderProjects();

}





function toggleLanguage() {

    applyLanguage(

        currentLanguage === "pt"

            ? "en"

            : "pt"

    );

}





/* =========================================================

   6. EFEITO DE DIGITAÇÃO

   ========================================================= */



function typingEffect() {

    if (!typingElement) return;



    const words = translations[currentLanguage].hero.typing;



    if (!words.length) return;



    const currentWord = words[wordIndex];



    if (!deleting) {

        characterIndex++;



        typingElement.textContent =

            currentWord.substring(0, characterIndex);



        if (characterIndex === currentWord.length) {

            deleting = true;



            typingTimer = setTimeout(

                typingEffect,

                1800

            );



            return;

        }

    } else {

        characterIndex--;



        typingElement.textContent =

            currentWord.substring(0, characterIndex);



        if (characterIndex === 0) {

            deleting = false;

            wordIndex =

                (wordIndex + 1) % words.length;

        }

    }



    typingTimer = setTimeout(

        typingEffect,

        deleting ? 45 : 80

    );

}





function restartTyping() {

    clearTimeout(typingTimer);



    wordIndex = 0;

    characterIndex = 0;

    deleting = false;



    if (typingElement) {

        typingElement.textContent = "";

    }



    typingEffect();

}





/* =========================================================

   7. SKILLS

   ========================================================= */



const skills = [

    {

        nome: {

            pt: "HTML5",

            en: "HTML5"

        },

        icone: "fa-brands fa-html5"

    },

    {

        nome: {

            pt: "CSS3",

            en: "CSS3"

        },

        icone: "fa-brands fa-css3-alt"

    },

    {

        nome: {

            pt: "JavaScript",

            en: "JavaScript"

        },

        icone: "fa-brands fa-js"

    },

    {

        nome: {

            pt: "Java",

            en: "Java"

        },

        icone: "fa-brands fa-java"

    },

    {

        nome: {

            pt: "React",

            en: "React"

        },

        icone: "fa-brands fa-react"

    },

    {

        nome: {

            pt: "GitHub",

            en: "GitHub"

        },

        icone: "fa-brands fa-github"

    },

    {

        nome: {

            pt: "PHP",

            en: "PHP"

        },

        icone: "fa-brands fa-php"

    },

    {

        nome: {

            pt: "Banco de Dados",

            en: "Databases"

        },

        icone: "fa-solid fa-database"

    }

];





function renderSkills() {

    if (!skillsGrid) return;



    skillsGrid.innerHTML = skills

        .map(

            (skill) => `

                <div class="skill-card">

                    <i class="${skill.icone}"></i>

                    <span>${skill.nome[currentLanguage]}</span>

                </div>

            `

        )

        .join("");

}





/* =========================================================

   8. PROJETOS

   ========================================================= */



const projetos = [

    {

        id: "sistema-bazar",



        titulo: {

            pt: "Sistema do Bazar",

            en: "Charity Bazaar System"

        },



        descricao: {

            pt: "Sistema desenvolvido para gerenciamento de vendas e produtos de um bazar beneficente.",

            en: "System developed to manage sales and products for a charity bazaar."

        },



        detalhes: {

            pt: "Sistema desenvolvido para auxiliar no controle de produtos, vendas e organização de um bazar beneficente.",

            en: "System developed to help manage products, sales and organization for a charity bazaar."

        },



        imagem:

            "Image/assets/projetos/Imagem_Projetos/imagem_sistema_bazar.jpeg",



        video: "Image/assets/projetos/Video_Projetos/video_sistema_bazar.h264",

        gif:

            "Image",



        tecnologias: [

            "HTML",

            "CSS",

            "JavaScript"

        ],



        categoria: "javascript",



        github: "#",

        demo: "#"

    },



    {

        id: "convite-digital",



        titulo: {

            pt: "Convite Digital",

            en: "Digital Invitation"

        },



        descricao: {

            pt: "Site interativo desenvolvido para apresentação de um convite digital personalizado.",

            en: "Interactive website developed for a personalized digital invitation."

        },



        detalhes: {

            pt: "Projeto desenvolvido para criar uma experiência interativa de convite digital, utilizando elementos visuais e animações.",

            en: "Project developed to create an interactive digital invitation experience using visual elements and animations."

        },



        imagem:

            "Image/assets/projetos/Imagem_Projetos/imagem_convite_digital.jpeg",



        video: "Image/assets/projetos/Video_Projetos/video_convite_digital.h264",

        gif:

            "assets/projetos/Imagem_Projetos/Gif_convite.gif",



        tecnologias: [

            "HTML",

            "CSS",

            "JavaScript"

        ],



        categoria: "web",



        github: "https://github.com/JowJow0/Convite-Aniversario",

        linkedin: "https://www.linkedin.com/in/jonathan-ferreira-perfil/",

        demo: "https://jowjow0.github.io/Convite-Aniversario"

    },



    {

        id: "sorteio-bingo",



        titulo: {

            pt: "Sorteio de Bingo",

            en: "Bingo Draw System"

        },



        descricao: {

            pt: "Sistema desenvolvido para realizar sorteios de bingo de forma visual e interativa.",

            en: "System developed to perform bingo draws in a visual and interactive way."

        },



        detalhes: {

            pt: "Aplicação web criada para realizar sorteios de bingo de maneira simples, visual e interativa.",

            en: "Web application created to perform bingo draws in a simple, visual and interactive way."

        },



        imagem:

            "Image/assets/projetos/Imagem_Projetos/imagem_sorteio_de_bingo.png",



        video: "Image/assets/projetos/Video_Projetos/video_sorteio_bingo.h264",

        gif:

            "assets/projetos/Imagem_Projetos/Gif_Bingo.gif",



        tecnologias: [

            "HTML",

            "CSS",

            "JavaScript"

        ],



        categoria: "javascript",



        github: "https://github.com/JowJow0/Sorteio-de-Bingo",

        linkedin: "https://www.linkedin.com/in/jonathan-ferreira-perfil/",

        demo: "#"

    },



    {

        id: "caixa-evento",



        titulo: {

            pt: "Caixa de Evento",

            en: "Event Cashier"

        },



        descricao: {

            pt: "Sistema desenvolvido para controle e gerenciamento financeiro de eventos.",

            en: "System developed for event financial control and management."

        },



        detalhes: {

            pt: "Sistema desenvolvido para registrar movimentações financeiras, organizar valores e facilitar o controle de caixa durante eventos.",

            en: "System developed to record financial transactions, organize values and simplify cash management during events."

        },



        imagem:

            "Image/assets/projetos/Imagem_Projetos/imagem_Caixa.png",


        video: "Image/assets/projetos/Video_Projetos/video_caixa_evento.h264",



        gif:

            "Image/assets/projetos/Gif_Projetos/Gif_Caixa.gif",



        tecnologias: [

            "HTML",

            "CSS",

            "JavaScript",

            "LocalStorage"

        ],



        categoria: "javascript",



        github: "#",

        demo: "#"

    }

];





/* =========================================================

   9. FILTROS DOS PROJETOS

   ========================================================= */



const categorias = [

    {

        valor: "todos",

        traducao: "all"

    },

    {

        valor: "web",

        traducao: "web"

    },

    {

        valor: "javascript",

        traducao: "javascript"

    },

    {

        valor: "java",

        traducao: "java"

    }

];





function renderFilters() {

    if (!filtersContainer) return;



    filtersContainer.innerHTML = categorias

        .map(

            (categoria) => `

                <button

                    class="filter-button ${

                        currentProjectFilter === categoria.valor

                            ? "active"

                            : ""

                    }"

                    data-filter="${categoria.valor}"

                    type="button"

                >

                    ${translations[currentLanguage].projects[categoria.traducao]}

                </button>

            `

        )

        .join("");

}





/* =========================================================

   10. CARDS DOS PROJETOS

   ========================================================= */



function renderProjects() {

    if (!projectsGrid) return;



    const projetosFiltrados =

        currentProjectFilter === "todos"

            ? projetos

            : projetos.filter(

                (projeto) =>

                    projeto.categoria === currentProjectFilter

            );



    if (!projetosFiltrados.length) {

        projectsGrid.innerHTML = `

            <div class="projects-empty">

                Nenhum projeto encontrado.

            </div>

        `;



        return;

    }



    projectsGrid.innerHTML = projetosFiltrados

        .map(

            (projeto, index) => `

                <article

                    class="project-card"

                    data-project-id="${projeto.id}"

                    tabindex="0"

                    role="button"

                    aria-label="${projeto.titulo[currentLanguage]}"

                    style="animation-delay: ${index * 0.1}s"

                >

                    <div class="project-image">



                        <img

                            src="${projeto.imagem}"

                            alt="${projeto.titulo[currentLanguage]}"

                            class="project-static-image"

                            loading="lazy"

                        >



                        ${

                            projeto.gif

                                ? `

                                    <img

                                        src="${projeto.gif}"

                                        alt=""

                                        class="project-gif"

                                        loading="lazy"

                                    >

                                `

                                : ""

                        }



                        <div class="project-overlay">

                            <span>

                                ${translations[currentLanguage].projects.details}

                            </span>

                        </div>

                    </div>



                    <div class="project-info">

                        <h3>

                            ${projeto.titulo[currentLanguage]}

                        </h3>



                        <p>

                            ${projeto.descricao[currentLanguage]}

                        </p>



                        <div class="project-tags">

                            ${projeto.tecnologias

                                .map(

                                    (tech) =>

                                        `<span>${tech}</span>`

                                )

                                .join("")}

                        </div>

                    </div>

                </article>

            `

        )

        .join("");

}





/* =========================================================

   11. MODAL DE PROJETO

   ========================================================= */



function isProjectLiked(projectId) {
    try {
        return localStorage.getItem(`portfolio-like-${projectId}`) === "true";
    } catch (error) {
        return false;
    }
}

function setProjectLiked(projectId, liked) {
    try {
        localStorage.setItem(`portfolio-like-${projectId}`, String(liked));
    } catch (error) {
        // O botão continua funcionando visualmente mesmo se o navegador bloquear o armazenamento.
    }
}

function openProjectModal(project) {
    if (!project) return;

    // Remove qualquer modal anterior imediatamente para evitar pop-ups duplicados.
    document.querySelectorAll(".project-modal").forEach((item) => item.remove());

    const translation = translations[currentLanguage].projects;
    const modal = document.createElement("div");
    const preview = project.gif || project.imagem;
    const videoMarkup = project.video
        ? `<video class="project-modal-video" controls autoplay muted loop playsinline preload="metadata" poster="${project.imagem}" data-fallback="${preview}" aria-label="Demonstração do projeto ${project.titulo[currentLanguage]}">
                <source src="${project.video}" type="video/mp4">
            </video>`
        : `<img src="${preview}" alt="${project.titulo[currentLanguage]}" loading="lazy">`;
    const liked = isProjectLiked(project.id);
    const githubUrl = project.github && project.github !== "#" ? project.github : "";
    const linkedInUrl = project.linkedin || "https://www.linkedin.com/in/jonathan-ferreira-perfil/";
    const demoUrl = project.demo && project.demo !== "#" ? project.demo : "";

    modal.className = "project-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", project.titulo[currentLanguage]);

    modal.innerHTML = `
        <div class="project-modal-overlay"></div>
        <section class="project-modal-content" role="document">
            <button class="project-modal-close" type="button" aria-label="${translation.close}">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="project-modal-preview">
                ${videoMarkup}
                <span class="project-modal-preview-badge"><i class="fa-solid fa-play"></i> ${currentLanguage === "pt" ? "Demonstração" : "Demo"}</span>
            </div>
            <div class="project-modal-body">
                <span class="project-modal-category">${project.categoria}</span>
                <h2>${project.titulo[currentLanguage]}</h2>
                <p class="project-modal-description">${project.descricao[currentLanguage]}</p>
                <p class="project-modal-details">${project.detalhes[currentLanguage]}</p>
                <h3>${translation.technologies}</h3>
                <div class="project-modal-technologies">
                    ${project.tecnologias.map((tech) => `<span>${tech}</span>`).join("")}
                </div>
                <div class="project-modal-actions">
                    ${githubUrl ? `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="button secondary-button"><i class="fa-brands fa-github"></i>${translation.openGithub}</a>` : ""}
                    ${linkedInUrl ? `<a href="${linkedInUrl}" target="_blank" rel="noopener noreferrer" class="button secondary-button"><i class="fa-brands fa-linkedin"></i>${translation.viewLinkedIn}</a>` : ""}
                    ${demoUrl ? `<a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="button primary-button"><i class="fa-solid fa-arrow-up-right-from-square"></i>${translation.viewProject}</a>` : ""}
                    <button class="button like-button${liked ? " is-liked" : ""}" type="button" aria-pressed="${liked}" data-like-project="${project.id}">
                        <i class="${liked ? "fa-solid" : "fa-regular"} fa-heart"></i>
                        <span>${liked ? translation.likedProject : translation.likeProject}</span>
                    </button>
                </div>
            </div>
        </section>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    const modalVideo = modal.querySelector(".project-modal-video");
    if (modalVideo) {
        modalVideo.addEventListener("error", () => {
            const fallbackImage = document.createElement("img");
            fallbackImage.src = modalVideo.dataset.fallback || project.imagem;
            fallbackImage.alt = project.titulo[currentLanguage];
            fallbackImage.className = "project-modal-video-fallback";
            fallbackImage.loading = "lazy";
            modalVideo.replaceWith(fallbackImage);
        }, { once: true });

        // O navegador pode bloquear o autoplay; os controles continuam disponíveis.
        const playPromise = modalVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
        }
    }

    requestAnimationFrame(() => modal.classList.add("active"));
    modal.querySelector(".project-modal-close")?.focus();
}

function closeProjectModal() {
    const modal = document.querySelector(".project-modal");
    if (!modal) return;

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    modal.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.removeAttribute("src");
        video.querySelectorAll("source").forEach((source) => source.removeAttribute("src"));
        video.load();
    });
    window.setTimeout(() => modal.remove(), 260);
}

/* =========================================================

   12. EVENTOS DOS PROJETOS

   ========================================================= */



projectsGrid?.addEventListener("click", (event) => {

    const card =

        event.target.closest(".project-card");



    if (!card) return;



    const project =

        projetos.find(

            (item) =>

                item.id === card.dataset.projectId

        );



    openProjectModal(project);

});





projectsGrid?.addEventListener("keydown", (event) => {

    if (

        event.key !== "Enter" &&

        event.key !== " "

    ) {

        return;

    }



    const card =

        event.target.closest(".project-card");



    if (!card) return;



    event.preventDefault();



    const project =

        projetos.find(

            (item) =>

                item.id === card.dataset.projectId

        );



    openProjectModal(project);

});





filtersContainer?.addEventListener("click", (event) => {

    const button =

        event.target.closest(".filter-button");



    if (!button) return;



    currentProjectFilter =

        button.dataset.filter;



    renderFilters();

    renderProjects();

});





document.addEventListener("click", (event) => {

    if (

        event.target.closest(

            ".project-modal-close"

        ) ||

        event.target.classList.contains(

            "project-modal-overlay"

        )

    ) {

        closeProjectModal();

    }

});





document.addEventListener("click", (event) => {
    const likeButton = event.target.closest("[data-like-project]");
    if (!likeButton) return;

    const projectId = likeButton.dataset.likeProject;
    const liked = !isProjectLiked(projectId);
    setProjectLiked(projectId, liked);
    likeButton.classList.toggle("is-liked", liked);
    likeButton.setAttribute("aria-pressed", String(liked));
    const icon = likeButton.querySelector("i");
    if (icon) {
        icon.classList.toggle("fa-solid", liked);
        icon.classList.toggle("fa-regular", !liked);
    }
    const label = likeButton.querySelector("span");
    if (label) label.textContent = liked
        ? translations[currentLanguage].projects.likedProject
        : translations[currentLanguage].projects.likeProject;
});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProjectModal();

    }

});





/* =========================================================

   13. MENU MOBILE

   ========================================================= */



function openMobileMenu() {

    mobileNav?.classList.add("active");

    menuButton?.classList.add("active");



    document.body.classList.add("menu-open");



    menuButton?.setAttribute(

        "aria-expanded",

        "true"

    );



    const icon =

        menuButton?.querySelector("i");



    icon?.classList.remove("fa-bars");

    icon?.classList.add("fa-xmark");

}





function closeMobileMenu() {

    mobileNav?.classList.remove("active");

    menuButton?.classList.remove("active");



    document.body.classList.remove("menu-open");



    menuButton?.setAttribute(

        "aria-expanded",

        "false"

    );



    const icon =

        menuButton?.querySelector("i");



    icon?.classList.remove("fa-xmark");

    icon?.classList.add("fa-bars");

}





menuButton?.addEventListener("click", () => {

    mobileNav?.classList.contains("active")

        ? closeMobileMenu()

        : openMobileMenu();

});





mobileNav?.querySelectorAll("a").forEach((link) => {

    link.addEventListener(

        "click",

        closeMobileMenu

    );

});





/* =========================================================

   14. IDIOMA

   ========================================================= */



languageSwitcher?.addEventListener(

    "click",

    toggleLanguage

);



mobileLanguageSwitcher?.addEventListener(

    "click",

    toggleLanguage

);





/* =========================================================

   15. ANIMAÇÃO DE REVEAL

   ========================================================= */



function initRevealAnimation() {

    const elements = $$(".reveal");



    if (!elements.length) return;



    if (!("IntersectionObserver" in window)) {

        elements.forEach((element) =>

            element.classList.add("visible")

        );



        return;

    }



    const observer =

        new IntersectionObserver(

            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;



                    entry.target.classList.add(

                        "visible"

                    );



                    observerInstance.unobserve(

                        entry.target

                    );

                });

            },

            {

                threshold: 0.15

            }

        );



    elements.forEach((element) =>

        observer.observe(element)

    );

}





/* =========================================================

   16. ANO DO FOOTER

   ========================================================= */



if (currentYear) {

    currentYear.textContent =

        new Date().getFullYear();

}





/* =========================================================

   17. NAVEGAÇÃO ATIVA

   ========================================================= */



function updateActiveNavigation() {

    const sections = $$("main section[id]");

    const navLinks = $$(".desktop-nav a");



    let currentSection = "";



    sections.forEach((section) => {

        const sectionTop =

            section.offsetTop - 180;



        if (

            window.scrollY >= sectionTop

        ) {

            currentSection =

                section.id;

        }

    });



    navLinks.forEach((link) => {

        link.classList.toggle(

            "active",

            link.getAttribute("href") ===

                `#${currentSection}`

        );

    });

}





window.addEventListener(

    "scroll",

    updateActiveNavigation,

    {

        passive: true

    }

);





/* =========================================================

   18. EFEITO PARALLAX DO HERO

   ========================================================= */



const heroContainer =

    $(".hero-container");





if (heroContainer) {

    document.addEventListener(

        "mousemove",

        (event) => {

            if (window.innerWidth <= 800) {

                return;

            }



            const x =

                (window.innerWidth / 2 -

                    event.clientX) /

                70;



            const y =

                (window.innerHeight / 2 -

                    event.clientY) /

                70;



            heroContainer.style.transform =

                `translate(${x}px, ${y}px)`;

        }

    );



    document.addEventListener(

        "mouseleave",

        () => {

            heroContainer.style.transform =

                "translate(0, 0)";

        }

    );

}





/* =========================================================

   19. FECHAR MENU COM ESC

   ========================================================= */



document.addEventListener(

    "keydown",

    (event) => {

        if (

            event.key === "Escape" &&

            mobileNav?.classList.contains("active")

        ) {

            closeMobileMenu();

        }

    }

);





/* =========================================================

   20. INICIALIZAÇÃO

   ========================================================= */



document.addEventListener(

    "DOMContentLoaded",

    () => {

        applyLanguage(currentLanguage);

        initRevealAnimation();

        updateActiveNavigation();

    }

);