/* ==================== CUSTOM CURSOR ==================== */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});
document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.8)');
document.addEventListener('mouseup',   () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');

/* ==================== DUST PARTICLES ==================== */
const dustContainer = document.getElementById('dust-container');
function spawnDust() {
    const dust = document.createElement('div');
    dust.className = 'dust-particle';
    const x = Math.random() * 100;
    const dur = 8 + Math.random() * 12;
    const delay = Math.random() * 5;
    const size = 1 + Math.random() * 2;
    Object.assign(dust.style, {
        left:      x + 'vw',
        width:     size + 'px',
        height:    size + 'px',
        animationDuration:  dur + 's',
        animationDelay:     delay + 's',
        opacity: 0
    });
    dustContainer.appendChild(dust);
    setTimeout(() => dust.remove(), (dur + delay) * 1000);
}
// Spawn initial particles
for (let i = 0; i < 20; i++) spawnDust();
setInterval(spawnDust, 1200);

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* ==================== SCROLL OBSERVER ==================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stagger children if they exist
            entry.target.querySelectorAll('.skill-card, .project-card, .creative-item').forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.09}s`;
                child.style.opacity = '1';
                child.style.transform = child.style.transform.includes('rotate') ? child.style.transform : 'translateY(0)';
            });
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => observer.observe(el));

/* ==================== HERO PARALLAX ==================== */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity   = Math.max(0, 1 - scrolled * 0.0018);
    }

    /* Nav shadow on scroll */
    const nav = document.querySelector('nav');
    if (scrolled > 60) {
        nav.style.boxShadow = '0 2px 30px rgba(30,18,8,0.5)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

/* ==================== CONTACT FORM ==================== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    const btn  = this.querySelector('.submit-button');

    // Ink-dry animation
    btn.textContent = '✦ Sending... ✦';
    btn.style.opacity = '0.7';
    setTimeout(() => {
        btn.textContent = '✦ Letter Sent ✦';
        btn.style.opacity = '1';
        btn.style.borderColor = 'var(--sepia)';
        btn.style.color = 'var(--sepia)';
        setTimeout(() => {
            alert(`Dear ${data.name},\n\nYour letter has been received with great care.\nI shall write back with ink and intention soon.\n\n— Rafael`);
            this.reset();
            btn.textContent = '✦ Send the Letter ✦';
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 600);
    }, 900);
});

/* ==================== GOLD QUILL TRAIL ==================== */
let lastTrail = 0;
document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastTrail < 40) return; // throttle
    lastTrail = now;

    const dot = document.createElement('div');
    Object.assign(dot.style, {
        position:      'fixed',
        left:          e.clientX + 'px',
        top:           e.clientY + 'px',
        width:         '4px',
        height:        '4px',
        background:    'var(--gold-light)',
        borderRadius:  '50%',
        pointerEvents: 'none',
        opacity:       '0.5',
        zIndex:        '9996',
        transform:     'translate(-50%,-50%)',
        transition:    'all 0.6s ease'
    });
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
        dot.style.opacity   = '0';
        dot.style.transform = 'translate(-50%,-50%) scale(5)';
    });
    setTimeout(() => dot.remove(), 600);
});

/* ==================== TYPEWRITER ON HERO H1 ==================== */
// Subtle ink-bleed on hover of section titles
document.querySelectorAll('.section-title').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.textShadow = '2px 2px 0 rgba(201,146,42,0.25), 0 0 30px rgba(201,146,42,0.15)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.textShadow = '';
    });
});

/* ==================== SKILL CARDS STAGGER ==================== */
document.querySelectorAll('.skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
});

/* ==================== PAPER SHUFFLE ON PROJECT CARDS ==================== */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '';
    });
});

/* ==================== CREATIVE ITEMS SLIGHT ROTATION RESET ==================== */
document.querySelectorAll('.creative-item').forEach((item, i) => {
    const baseRot = i % 2 === 0 ? -1 : 0.8;
    item.style.transform = `rotate(${baseRot}deg)`;
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'rotate(0deg) scale(1.04)';
        item.style.zIndex = '10';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = `rotate(${baseRot}deg)`;
        item.style.zIndex = '';
    });
});

/* ==================== STICKY NOTE RANDOM ROTATIONS ==================== */
document.querySelectorAll('.sticky-note').forEach(note => {
    const rot = (Math.random() - 0.5) * 2;
    note.style.transform = `rotate(${rot}deg)`;
    note.addEventListener('mouseenter', () => note.style.transform = 'rotate(0deg) scale(1.01)');
    note.addEventListener('mouseleave', () => note.style.transform = `rotate(${rot}deg)`);
});

/* ==================== TAPE STRIP WOBBLE ==================== */
document.querySelectorAll('.tape-strip').forEach(tape => {
    const rot = (Math.random() * 8 - 4);
    tape.style.transform += ` rotate(${rot}deg)`;
});

/* ==================== SCROLL PROGRESS INDICATOR ==================== */
const progressBar = document.createElement('div');
Object.assign(progressBar.style, {
    position:   'fixed',
    top:        '0', left: '0',
    height:     '2px',
    width:      '0%',
    background: 'linear-gradient(90deg, var(--rust), var(--gold-light))',
    zIndex:     '9999',
    transition: 'width 0.1s ease',
    pointerEvents: 'none'
});
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const total   = document.documentElement.scrollHeight - window.innerHeight;
    const current = window.pageYOffset;
    progressBar.style.width = ((current / total) * 100) + '%';
});

/* ==================== INK SPLASH ON CLICK ==================== */
document.addEventListener('click', e => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
    const splash = document.createElement('div');
    Object.assign(splash.style, {
        position:      'fixed',
        left:          e.clientX + 'px',
        top:           e.clientY + 'px',
        width:         '6px',
        height:        '6px',
        borderRadius:  '50%',
        background:    'var(--gold)',
        pointerEvents: 'none',
        zIndex:        '9997',
        transform:     'translate(-50%,-50%) scale(0)',
        transition:    'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        opacity:       '0.7',
        boxShadow:     '0 0 0 0 var(--gold)'
    });
    document.body.appendChild(splash);
    requestAnimationFrame(() => {
        splash.style.transform  = 'translate(-50%,-50%) scale(8)';
        splash.style.opacity    = '0';
        splash.style.boxShadow  = '0 0 0 10px rgba(201,146,42,0)';
    });
    setTimeout(() => splash.remove(), 500);
});

/* ==================== RESUME MODAL ==================== */
const resumeBackdrop = document.getElementById('resumeBackdrop');
const openResumeBtn  = document.getElementById('openResumeModal');
const resumeCloseBtn = document.getElementById('resumeClose');

if (openResumeBtn) {
    openResumeBtn.addEventListener('click', () => {
        resumeBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
}
if (resumeCloseBtn) {
    resumeCloseBtn.addEventListener('click', () => {
        resumeBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    });
}
if (resumeBackdrop) {
    resumeBackdrop.addEventListener('click', e => {
        if (e.target === resumeBackdrop) {
            resumeBackdrop.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && resumeBackdrop && resumeBackdrop.classList.contains('open')) {
        resumeBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }
});

/* ==================== CONTACT FORM ==================== */
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-button');
    btn.textContent = '✦ Sending... ✦';
    btn.disabled = true;

    const res = await fetch('https://formspree.io/f/xgonzpge', {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
        this.innerHTML = `
            <p style="font-family:'IM Fell English',serif; font-size:22px; color:var(--sepia); text-align:center; font-style:italic; padding: 40px 0;">
                Your letter has been sent. ✦<br><br>
                <span style="font-size:16px; opacity:0.7;">I'll write back with ink and intention.</span>
            </p>`;
    } else {
        btn.textContent = '✦ Something went wrong — try again ✦';
        btn.disabled = false;
    }
});
