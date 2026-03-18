/* ==================== PROJECT DATA ==================== */
/*
    BUTTON RULES — per project:
    - github: 'url'  → shows GitHub button
    - github: '#'    → hides GitHub button
    - github: absent → hides GitHub button
    - live:   'url'  → shows Live Demo button
    - live:   '#'    → hides Live Demo button
    - live:   absent → hides Live Demo button
    - youtube: 'VIDEO_ID' → shows embedded walkthrough
    - youtube: absent     → hides video section
    - screenshots: [...]  → shows screenshot grid
    - screenshots: absent → hides screenshot section
*/
const projectData = [
    {
        number: '01',
        roman: 'I',
        title: 'DBrands Minimart',
        tagline: 'An e-commerce experience built with care',
        desc: 'DBrands Minimart is a fully functional online minimart featuring dynamic product listings, a real-time shopping cart, and a smooth checkout process. Every interaction was designed to feel natural and frictionless, from browsing shelves to completing a purchase.',
        process: 'The project began with wireframing in Figma — mapping every user journey from landing to checkout. I focused on semantic HTML structure first, then layered in CSS Grid layouts and vanilla JavaScript for cart logic. No frameworks, just clean fundamentals.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Figma'],
        github: 'https://github.com/Rafael2023272/DBrandsMinimart.github.io',
        live: 'https://d-brands-minimart-github-io.vercel.app/',
        gradA: '#3b2314', gradB: '#6b4a2e',
        screenshots: [
            { src: 'Media/p1-img1.png', caption: 'Image 1' },
            { src: 'Media/p1-img2.png', caption: 'Image 2' },
            { src: 'Media/p1-img3.png', caption: 'Image 3' },
            { src: 'Media/p1-img4.png', caption: 'Image 4' },
            { src: 'Media/p1-img5.png', caption: 'Image 5' },
            { src: 'Media/p1-img6.png', caption: 'Image 6' }
        ],
        youtube: 'DD6r1k_IMoM'
    },
    {
        number: '02',
        roman: 'II',
        title: 'AeroVision',
        tagline: 'Aviation data, elegantly visualised',
        desc: 'AeroVision is a full-featured online aviation information system developed with the intention of being an online community platform catering to aviation fans, students, and professionals alike who are generally fascinated with commercial airplanes, primarily concentrating on the two major producers: Airbus and Boeing.',
        process: 'I integrated a third-party flight data API and built a custom data-normalisation layer to handle inconsistent responses. The frontend was designed around readability first — clear typographic hierarchy and subtle animations guide the eye without distracting from the data.',
        tech: ['REST API', 'MongoDB', 'JavaScript', 'CSS3', 'HTML5'],
        github: 'https://github.com/Rafael2023272/AeroVision',
        live: 'https://aero-vision-three.vercel.app/',
        gradA: '#1e3a2f', gradB: '#2d6a4f',
        screenshots: [
            { src: 'Media/p2-img1.png', caption: 'Image 1' },
            { src: 'Media/p2-img2.png', caption: 'Image 2' },
            { src: 'Media/p2-img3.png', caption: 'Image 3' },
            { src: 'Media/p2-img4.png', caption: 'Image 4' },
            { src: 'Media/p2-img5.png', caption: 'Image 5' },
            { src: 'Media/p2-img6.png', caption: 'Image 6' }
        ],
        youtube: 'HPr8UnYYYbI'
    },
    {
        number: '03',
        roman: 'III',
        title: '2D Mini Game',
        tagline: 'A pixel world built from Inspiration',
        desc: 'Sisyphus is a 2D Game made in Unity. It\'s a side-scrolling adventure game set in an eerie, mysterious forest and cave. The character represents Sisyphus, he is being cursed, because he disturbs the forest. The character needs to navigate and find the portal going back to the real world. It\'s a single treacherous level filled with deadly traps and relentless enemies.',
        process: 'The 2D game emphasizes atmospheric immersion, precision-based mechanics, and survival. This game has no collectibles for recovery of health nor coins. The player will respawn again and again until the player reaches the end of the game. The main focus of this 2D game is purely on strategy and skill to escape the forest and cave and break Sisyphus\' eternal curse.',
        tech: ['Unity', 'C#', 'Pixel Art', 'Game Design', 'Animation'],
        github: '#',
        live: 'https://rafael03.itch.io/sisyphus',
        gradA: '#2a1a3e', gradB: '#4a2d6b',
        screenshots: [
            { src: 'Media/p3-img1.png', caption: 'Image 1' },
            { src: 'Media/p3-img2.png', caption: 'Image 2' },
            { src: 'Media/p3-img3.png', caption: 'Image 3' },
            { src: 'Media/p3-img4.png', caption: 'Image 4' },
            { src: 'Media/p3-img5.png', caption: 'Image 5' },
            { src: 'Media/p3-img6.png', caption: 'Image 6' }
        ],
        youtube: 'vAmjnFG5jEY'
    },
    {
        number: '04',
        roman: 'IV',
        title: 'UX/UI Design',
        tagline: 'Interfaces that speak before words do',
        desc: 'Task Master is the ultimate reminder app for us busy students. Task Master seamlessly combines your daily tasks, offering intuitive and customized reminders to keep you on track, whether managing your assessments deadlines, personal goals, or even class assignments, Task Master is here to help its user-friendly interface and have customizable design ensure you stay organized and productive at the same time.',
        process: 'The development of Task Master started with identifying the challenge students face in managing multiple tasks and deadlines. The goal was to create a simple and intuitive reminder application that helps users stay organized. The design focused on a clean interface and customizable reminders, allowing students to easily manage assignments, deadlines, and personal tasks in one place.',
        tech: ['Figma', 'Canva', 'Design Systems', 'Prototyping'],
        github: '#',
        live: 'https://www.figma.com/design/XKorBgYO2JY9XXztZNitkt/App-Prototype?node-id=0-1&t=54I2vYL1ViXBgu41-1',
        gradA: '#3b1a1a', gradB: '#7a3535',
        screenshots: [
            { src: 'Media/p4-img1.png', caption: 'Image 1' },
            { src: 'Media/p4-img2.png', caption: 'Image 2' },
            { src: 'Media/p4-img3.png', caption: 'Image 3' },
            { src: 'Media/p4-img4.png', caption: 'Image 4' },
            { src: 'Media/p4-img5.png', caption: 'Image 5' },
            { src: 'Media/p4-img6.png', caption: 'Image 6' }
        ],
        youtube: 'a9QtPp8e3SA'
    },
    {
        number: '05',
        roman: 'V',
        title: 'Interactive Storytelling',
        tagline: 'Every click unfolds a new chapter',
        desc: 'This interactive story follows a man who finds a laptop containing disturbing images and videos of hostages. When threatened by the laptop’s owner, he seeks help from his friends. Unlike the original movie, all characters survive and the culprit is eventually caught.',
        process: 'The story was developed to balance suspense and interactivity. I focused on creating branching paths where decisions affect outcomes, ensuring player engagement while maintaining narrative coherence. This project challenged me to combine storytelling with interactive design, applying lessons learned in class to create an immersive experience.',
        tech: ['JavaScript', 'Storytelling', 'HTML5', 'Twine', 'Narrative Design'],
        github: '#',
        live: '#',
        gradA: '#1a2e3b', gradB: '#2d5a7a',
        screenshots: [
            { src: 'Media/p5-img1.png', caption: 'Image 1' },
            { src: 'Media/p5-img2.png', caption: 'Image 2' },
            { src: 'Media/p5-img3.png', caption: 'Image 3' },
            { src: 'Media/p5-img4.png', caption: 'Image 4' },
            { src: 'Media/p5-img5.png', caption: 'Image 5' },
            { src: 'Media/p5-img6.png', caption: 'Image 6' }
        ],
        youtube: 'Ff1jyd0OuEM'
    },
    {
        number: '06',
        roman: 'VI',
        title: 'Yarah Consultancy',
        tagline: 'A digital presence built for trust',
        desc: 'A professional website for Yarah Consultancy — designed to convey authority, warmth, and reliability from the first scroll. Features include a service showcase, team profiles, contact integration, and a secure enquiry system with backend validation.',
        process: 'The brief demanded professionalism without coldness. I built a warm, structured layout with strong typographic hierarchy and restrained use of colour. The backend handles form submissions securely, with server-side validation and email notifications for every enquiry.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Security'],
        github: 'https://yarah-consultants.github.io/Yarah-Consultants/',
        live: 'https://yarah-consultants.github.io/Yarah-Consultants/',
        gradA: '#1a2a1a', gradB: '#2d5a35',
        screenshots: [
            { src: 'Media/p6-img1.png', caption: 'Image 1' },
            { src: 'Media/p6-img2.png', caption: 'Image 2' },
            { src: 'Media/p6-img3.png', caption: 'Image 3' },
            { src: 'Media/p6-img4.png', caption: 'Image 4' },
            { src: 'Media/p6-img5.png', caption: 'Image 5' },
        ],
        
    },
    {
        number: '07',
        roman: 'VII',
        title: 'Clash of Clans',
        tagline: 'Clash of Clans Inspired Website',
        desc: 'This project was one of my first web development projects during my first year at university. The goal was to design and build a themed website based on the popular mobile game Clash of Clans.',
        process: 'The website was developed using HTML, CSS, and basic JavaScript, focusing on creating a visually engaging layout inspired by the game\'s style and branding. It includes multiple pages showcasing game features, characters, and gameplay elements while maintaining a structured and user-friendly navigation system.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/Rafael2023272/Rafael2023272.github.io.git',
        live: 'https://rafael2023272.github.io/',
        gradA: '#1a2a1a', gradB: '#2d5a35',
        screenshots: [
            { src: 'Media/p7-img1.png', caption: 'Image 1' },
            { src: 'Media/p7-img2.png', caption: 'Image 2' },
            { src: 'Media/p7-img3.png', caption: 'Image 3' },
            { src: 'Media/p7-img4.png', caption: 'Image 4' },
            { src: 'Media/p7-img5.png', caption: 'Image 5' },
            { src: 'Media/p7-img6.png', caption: 'Image 6' }
        ],
        youtube: 'AEXXERcVz4E'
    },
    {
        number: '08',
        roman: 'VIII',
        title: 'Commercial Ad',
        tagline: 'Student Commercial Ad Project',
        desc: 'A collaborative commercial advertisement project where our team carefully planned every shot, angle, and lighting setup to produce a visually engaging promotional video.',
        process: 'The project required careful attention to shots, camera angles, and lighting to create a polished and well-structured final result. The experience strengthened our teamwork and creative production skills.',
        tech: ['Video Production', 'Filming', 'Video Editing', 'Camera Work'],
        github: '#',
        live: '#',
        gradA: '#2e1a0e', gradB: '#5a3420',
        screenshots: [
            { src: 'Media/p8-img1.jpg', caption: 'Image 1' },
            { src: 'Media/p8-img2.jpg', caption: 'Image 2' },
            { src: 'Media/p8-img3.jpg', caption: 'Image 3' },
            { src: 'Media/p8-img4.jpg', caption: 'Image 4' },
        ],
        youtube: 'OYf5bKMMP9Q'
    },
    {
    number: '09',
    roman: 'IX',
    title: 'AI-Assisted Tools Research',
    tagline: 'Academic Research Project',
    desc: 'A research study examining the effects of AI-assisted tools on the credibility of student projects within Creative Computing education.',
    process: 'A quantitative survey was conducted with 85 Creative Computing students across first, second, and third year levels. The research analyzed AI usage patterns, its impact on project quality and authenticity, and student awareness of academic integrity policies related to AI-assisted tools.',
    tech: ['Academic Research', 'Quantitative Survey', 'Data Analysis', 'AI Ethics', 'Higher Education Studies'],
    github: '#',
    live: 'https://drive.google.com/drive/folders/1EHI4rcB4wpUtgLetwAeAi3R-Ae8nO3W_?usp=sharing',
    gradA: '#1a1a2e',
    gradB: '#3a3a6a'
},
{
    number: '10',
    roman: 'X',
    title: 'Space Shooter Game',
    tagline: 'Arcade Shooter Game Built with p5.js',
    desc: 'A browser-based space shooter game inspired by classic arcade titles where players control a spaceship, avoid enemy attacks, and eliminate incoming threats.',
    process: 'Developed using p5.js and JavaScript, the project focuses on interactive gameplay mechanics including player movement, enemy spawning, collision detection, score tracking, and real-time animations. The game explores fundamental principles of arcade game design and responsive player interaction.',
    tech: ['JavaScript', 'p5.js', 'Game Development', 'Collision Detection', 'Interactive Graphics'],
    github: '#',
    live: 'https://editor.p5js.org/Rafael2023272/full/HNdcJfRad',
    gradA: '#0b1a2a',
    gradB: '#1f3b5c',
    screenshots: [
        { src: 'Media/p10-img1.png', caption: 'Image 1' },
        { src: 'Media/p10-img2.png', caption: 'Image 2' },
        { src: 'Media/p10-img3.png', caption: 'Image 3' },
    ],
    youtube: 'HBQbUtVFmeA'
},
{
    number: '11',
    roman: 'XI',
    title: 'Stop Motion Animation',
    tagline: 'Frame-by-Frame Animation Project',
    desc: 'A stop motion animation project created by capturing individual frames and combining them into a continuous sequence to produce movement and storytelling.',
    process: 'The animation was produced using a frame-by-frame technique where physical objects were slightly moved and photographed repeatedly. The images were then compiled and edited into a smooth animation sequence, focusing on timing, motion consistency, and visual storytelling.',
    tech: ['Stop Motion', 'Photography', 'Frame-by-Frame Animation', 'Video Editing'],
    github: '#',
    live: '#',
    gradA: '#3b2a4a',
    gradB: '#7a4f9a',
    youtube: 'F6QPGernMWE'
},
{
    number: '12',
    roman: 'XII',
    title: 'Student Performance Prediction',
    tagline: 'Machine Learning Classification Project',
    desc: 'A supervised machine learning project designed to predict student performance based on behavioral, demographic, and educational variables.',
    process: 'The project implements a supervised machine learning classification model to forecast student outcomes using factors such as attendance, study habits, parental engagement, and previous academic performance. The model achieved a prediction accuracy of 96%, demonstrating the potential of machine learning in educational analytics and early intervention systems.',
    tech: ['Machine Learning', 'Supervised Learning', 'Data Analysis', 'Predictive Modeling', 'Kaggle'],
    github: 'https://github.com/DC-BSU-RAK/assignment-1-experiment-portfolio-Rafael2023272.git',
    live: 'https://www.kaggle.com/code/rafaelpurisima/a2-machine-learning',
    gradA: '#411b3c',
    gradB: '#ff3a4a',
    youtube: 'UY9aTLgYOYs'
},
{
    number: '13',
    roman: 'XIII',
    title: 'Smartphone App - FUTURIS',
    tagline: 'Smartphone App project made in Android Studio',
    desc: 'Futuris is aimed at developing an application enabling a digital “time capsule” where users can write messages to themselves, which they can unlock at a later time. Built on the emotional mindfulness of reflecting on passing thoughts, dreams, or goals, it allows users to revisit those sentiments in the future with the concept inspired by time capsules and journaling.',
    process: 'I chose to use Gson in combination with SharedPreferences to store local data. Without requiring a large database, this method offered a simple yet effective way to store and retrieve a list of capsule objects. I filled the RecyclerView with a custom CapsuleAdapter to allow each item to display its title, message (if unlocked), unlock date, and delete button. A crucial part of the reasoning was the unlock mechanism. I used SimpleDateFormat to compare the current date with the capsules unlock date. If the unlock date hasnt passed, the message displays a lock emoji and conceals the content. After the date has passed, the message is revealed.',
    tech: ['Smartphone App', 'Kotlin', 'Android', 'Android Studio'],
    github: 'https://github.com/DC-BSU-RAK/projects-collection-2025-Rafael2023272.git',
    live: '#',
    gradA: '#1b413e',
    gradB: '#3affbd',
    youtube: '5ECuda8mFJ8'
},
{
    number: '14',
    roman: 'XIV',
    title: 'Code Lab 2 - CINEMOUNT',
    tagline: 'Code Lab 2 Python Project',
    desc: 'Cinemount is a movie application based on the Movie Database (TMDb) API, its offer the users to interactive to the platform to explore and know the movie details. My goal is to showcase my programming skills and knowledge such as API integration, logic for programming, and use of GUI techniques for user UI.',
    process: 'My key features in my data driven app are a navigation bar consists of popular, top rated, now showing, upcoming movies, and a search bar for the user to search a specific movie. The user will be able to view the movie details and information, including the Title of the movie, released date, IMDB score, duration, cast, production, genre, and a concise overview for an idea of what the movie is about. I also add some back, like & disklike, watch now, add to favorites buttons to enhance the user experience.',
    tech: ['Code Lab II', 'Python', 'Vs code', 'UX/UI'],
    github: 'https://github.com/CodeLab-II/skills-portfolio-Rafael2023272.git',
    live: '#',
    gradA: '#1b4124',
    gradB: '#61ff3a',
    screenshots: [
            { src: 'Media/p13-img1.png', caption: 'Image 1' },
            { src: 'Media/p13-img2.png', caption: 'Image 2' },
            { src: 'Media/p13-img3.png', caption: 'Image 3' },
            { src: 'Media/p13-img4.png', caption: 'Image 4' },
            { src: 'Media/p13-img5.png', caption: 'Image 5' },
        ],
    youtube: 'THkEzLmRIIQ'
}
];

/* ==================== MODAL LOGIC ==================== */
let currentProjectIndex = 0;

const backdrop    = document.getElementById('modalBackdrop');
const modalPaper  = document.getElementById('modalPaper');
const modalRight  = document.querySelector('.modal-right') || modalPaper;

function openModal(index) {
    currentProjectIndex = index;
    populateModal(index);
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalRight.scrollTop = 0;
}

function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    const videoEmbed = document.getElementById('modalVideoEmbed');
    if (videoEmbed) videoEmbed.src = '';
}

function populateModal(index) {
    const p = projectData[index];

    // Header text (right column)
    document.getElementById('modalNumber').textContent  = `Project № ${p.number}`;
    document.getElementById('modalTitle').textContent   = p.title;
    document.getElementById('modalTagline').textContent = p.tagline;
    document.getElementById('modalDesc').textContent    = p.desc;
    document.getElementById('modalProcess').textContent = p.process;
    document.getElementById('modalCount').textContent   = `${index + 1} of ${projectData.length}`;

    // Left column — title, tagline, roman numeral, gradient
    const leftTitle   = document.getElementById('modalLeftTitle');
    const leftTagline = document.getElementById('modalLeftTagline');
    const leftNumber  = document.getElementById('modalLeftNumber');
    const leftRoman   = document.getElementById('modalRoman');
    const modalLeft   = document.querySelector('.modal-left');

    if (leftTitle)   leftTitle.textContent   = p.title;
    if (leftTagline) leftTagline.textContent = p.tagline;
    if (leftNumber)  leftNumber.textContent  = `Project № ${p.number}`;
    if (leftRoman)   leftRoman.textContent   = p.roman;
    if (modalLeft)   modalLeft.style.background = `linear-gradient(160deg, ${p.gradA}, ${p.gradB})`;

    // Tech tags
    document.getElementById('modalTech').innerHTML =
        p.tech.map(t => `<span class="modal-tech-item">${t}</span>`).join('');

    // GitHub button
    const githubBtn = document.getElementById('modalGithub');
    const hasGithub = p.github && p.github !== '#';
    githubBtn.style.display = hasGithub ? '' : 'none';
    if (hasGithub) githubBtn.href = p.github;

    // Live Demo button
    const liveBtn = document.getElementById('modalLive');
    const hasLive = p.live && p.live !== '#';
    liveBtn.style.display = hasLive ? '' : 'none';
    if (hasLive) liveBtn.href = p.live;

    // Actions row — hide if neither button shows
    const actionsEl = document.querySelector('.modal-actions');
    if (actionsEl) actionsEl.style.display = (hasGithub || hasLive) ? 'flex' : 'none';

    // Screenshots
    const screenshotsSection = document.getElementById('modalScreenshotsSection');
    const screenshotsGrid    = document.getElementById('modalScreenshots');
    const shots = p.screenshots || [];

    if (shots.length === 0) {
        screenshotsSection.style.display = 'none';
        screenshotsGrid.innerHTML = '';
    } else {
        screenshotsSection.style.display = 'block';
        screenshotsGrid.innerHTML = shots.map((shot, i) =>
            `<div class="modal-screenshot-slot" data-shot="${i}">
                <img src="${shot.src}" alt="${shot.caption}" loading="lazy">
                <p class="modal-screenshot-caption">${shot.caption}</p>
            </div>`
        ).join('');

        screenshotsGrid.querySelectorAll('.modal-screenshot-slot').forEach(slot => {
            slot.addEventListener('click', () => {
                const s = shots[parseInt(slot.dataset.shot)];
                openLightbox(s.src, s.caption);
            });
        });
    }

    // YouTube embed
    const videoSection = document.getElementById('modalVideoSection');
    const videoEmbed   = document.getElementById('modalVideoEmbed');

    if (p.youtube) {
        videoSection.style.display = 'block';
        videoEmbed.src = `https://www.youtube.com/embed/${p.youtube}`;
    } else {
        videoSection.style.display = 'none';
        videoEmbed.src = '';
    }

    // Nav arrows
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    prevBtn.disabled      = index === 0;
    nextBtn.disabled      = index === projectData.length - 1;
    prevBtn.style.opacity = index === 0 ? '0.3' : '1';
    nextBtn.style.opacity = index === projectData.length - 1 ? '0.3' : '1';
}

// Open buttons
document.querySelectorAll('.proj-open-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.project)));
});

// Close
document.getElementById('modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });

// Keyboard nav
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); return; }
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  document.getElementById('modalPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('modalNext').click();
});

// Prev / Next buttons
document.getElementById('modalPrev').addEventListener('click', () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        populateModal(currentProjectIndex);
        modalRight.scrollTop = 0;
    }
});
document.getElementById('modalNext').addEventListener('click', () => {
    if (currentProjectIndex < projectData.length - 1) {
        currentProjectIndex++;
        populateModal(currentProjectIndex);
        modalRight.scrollTop = 0;
    }
});

/* ==================== FILTER LOGIC ==================== */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.proj-card').forEach(card => {
            if (filter === 'all' || card.dataset.tags.includes(filter)) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                requestAnimationFrame(() => { card.style.animation = ''; });
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ==================== LIGHTBOX ==================== */
function openLightbox(src, alt) {
    const lightbox = document.getElementById('modalLightbox');
    lightbox.querySelector('img').src = src;
    lightbox.querySelector('img').alt = alt || '';
    lightbox.classList.add('open');
}

document.getElementById('lightboxClose').addEventListener('click', () => {
    document.getElementById('modalLightbox').classList.remove('open');
});
document.getElementById('modalLightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('modalLightbox')) {
        document.getElementById('modalLightbox').classList.remove('open');
    }
});

