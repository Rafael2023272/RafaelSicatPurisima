/* ==================== CREATIVE DATA ==================== */
const creativeData = [
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'I',
        src: 'Media/p1.jpeg', 
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'II',
        src: 'Media/p2.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'III',
        src: 'Media/p3.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'IV',
        src: 'Media/p4.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'V',
        src: 'Media/p5.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'VI',
        src: 'Media/p6.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'VII',
        src: 'Media/p7.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'VII',
        src: 'Media/p8.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'IX',
        src: 'Media/p9.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'X',
        src: 'Media/p10.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'XI',
        src: 'Media/p11.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'XII',
        src: 'Media/p12.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'XII',
        src: 'Media/p13.jpeg',
    },
    {
        cat: 'Photography',
        title: 'Untitled',
        caption: 'A captured moment',
        desc: 'An image capturing a unique moment, scene, or feeling, waiting to tell its story.',
        meta: ['Photography', 'Visual', 'Creative', 'Series'],
        roman: 'XIV',
        src: 'Media/p14.jpeg',
    },
];

/* ==================== LIGHTBOX LOGIC ==================== */
let currentLightboxIndex = 0;
const backdrop = document.getElementById('lightboxBackdrop');

function openLightbox(index) {
    currentLightboxIndex = index;
    populateLightbox(index);
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
}

function populateLightbox(index) {
    const d = creativeData[index];
    const imgArea = document.getElementById('lightboxImageArea');

    // Fade out
    imgArea.classList.add('transitioning');

    setTimeout(() => {
        document.getElementById('lightboxCat').textContent     = d.cat;
        document.getElementById('lightboxTitle').textContent   = d.title;
        document.getElementById('lightboxCaption').textContent = d.caption;
        document.getElementById('lightboxDesc').textContent    = d.desc;
        document.getElementById('lightboxCounter').textContent = `${index + 1} of ${creativeData.length}`;

        imgArea.innerHTML = `<img src="${d.src}" alt="${d.title}" />`;
        imgArea.style.background = 'none';

        const metaEl = document.getElementById('lightboxMeta');
        metaEl.innerHTML = d.meta.map(m => `<span class="lightbox-meta-tag">${m}</span>`).join('');

        document.getElementById('lightboxPrev').disabled = index === 0;
        document.getElementById('lightboxNext').disabled = index === creativeData.length - 1;
        document.getElementById('lightboxPrev').style.opacity = index === 0 ? '0.25' : '1';
        document.getElementById('lightboxNext').style.opacity = index === creativeData.length - 1 ? '0.25' : '1';

        // Fade back in
        imgArea.classList.remove('transitioning');
    }, 300);
}


/* ==================== OPEN EVENTS ==================== */
document.querySelectorAll('.gallery-open-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        openLightbox(parseInt(btn.dataset.index));
    });
});

document.querySelectorAll('.gallery-inner').forEach(inner => {
    inner.addEventListener('click', () => {
        const item = inner.closest('.gallery-item');
        if (item) openLightbox(parseInt(item.dataset.index));
    });
});

/* ==================== CLOSE ==================== */
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeLightbox(); });

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});

/* ==================== NAVIGATION ==================== */
document.getElementById('lightboxPrev').addEventListener('click', () => {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        populateLightbox(currentLightboxIndex);
    }
});

document.getElementById('lightboxNext').addEventListener('click', () => {
    if (currentLightboxIndex < creativeData.length - 1) {
        currentLightboxIndex++;
        populateLightbox(currentLightboxIndex);
    }
});

document.addEventListener('keydown', e => {
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
});

/* ==================== SWIPE SUPPORT ==================== */
let touchStartX = 0;

document.getElementById('lightboxContainer').addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.getElementById('lightboxContainer').addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) document.getElementById('lightboxNext').click();
        else document.getElementById('lightboxPrev').click();
    }
});

