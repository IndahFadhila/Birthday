// ================================================================
// KONFIG — edit sesuai kebutuhan
// ================================================================
const KONFIG = {
    pengirim: 'Indah Fadhila',
    pengirimAlias: 'ROXYINN',
    bahasa: 'id'
};

// ================================================================
// I18N — dictionary teks (ID / EN)
// ================================================================
const I18N = {
    id: {
        welcome_title: 'Happy Birthday',
        welcome_sub: 'tap tombol untuk buka kejutannya',
        welcome_btn: 'Buka',
        welcome_from: 'dari',
        form_title: 'Kenalan dulu yuk',
        form_sub: 'Isi data biar aku bisa kasih ucapan yang pas',
        form_nama: 'Nama kamu',
        form_nama_ph: 'Contoh: Rani',
        form_tgl: 'Tanggal lahir',
        form_cita: 'Cita-cita atau harapan',
        form_cita_ph: 'Dokter, keliling dunia...',
        form_btn: 'Lanjut',
        flip_hint: 'Tap kartunya untuk buka',
        flip_untuk: 'Untuk',
        flip_tap: 'tap',
        next: 'Lanjut',
        fun_title: 'Tahukah kamu?',
        fun_sub: 'Fakta unik tentang kamu',
        stat_hari: 'Hari sudah kamu jalani',
        stat_jam: 'Jam kamu hidup',
        stat_detak: 'Detak jantung (kira-kira)',
        stat_nafas: 'Kali kamu bernafas',
        zodiak_label: 'Zodiak kamu',
        photo_title: 'Bikin Kartu Foto',
        photo_sub: 'Pilih foto lucumu, kartunya bisa langsung didownload',
        photo_upload: 'Upload Foto',
        photo_camera: 'Ambil Foto',
        pick_design: 'Desain',
        pick_color: 'Warna',
        photo_add: 'Tambah',
        photo_reset: 'Reset',
        photo_download: 'Download',
        photo_share: 'Share',
        photo_next: 'Lanjut ke Moments',
        mom_title: 'Moments Bareng',
        mom_sub: 'Upload foto-foto bareng, jadi slideshow yang bisa didownload video',
        mom_upload: 'Pilih Foto Bareng',
        mom_play: 'Play',
        mom_stop: 'Stop',
        mom_download: 'Video',
        mom_recording: 'Merekam...',
        mom_next: 'Lanjut ke Wishes',
        mom_novideo: 'Browsermu belum support export video. Coba Chrome/Edge terbaru.',
        mom_caption: (n) => `Moments bareng ${n}`,
        wish_title: 'Wishes Wall',
        wish_sub: 'Tulis harapan tahun ini, disimpan dan bisa kamu baca lagi tahun depan',
        wish_placeholder: 'Tahun ini aku pengen...',
        wish_save: 'Simpan',
        wish_empty: 'Belum ada wish tersimpan. Yuk tulis yang pertama!',
        wish_next: 'Lanjut Tiup Lilin',
        cake_title: 'Ayo tiup lilinnya',
        cake_hint: 'Tap tombol',
        cake_hint2: 'untuk padamkan semua lilin',
        cake_btn: 'Tiup',
        cake_wish: 'Yeay, make a wish!',
        cake_wish_sub: 'Semoga semua harapanmu terkabul',
        credit_title: 'Sekian dari aku',
        credit_body: 'Semoga hari ini penuh tawa, coklat, dan hal-hal yang bikin kamu senyum sepanjang tahun.',
        countdown_label: 'Ultah kamu berikutnya dalam:',
        cd_day: 'hari', cd_hour: 'jam', cd_min: 'menit', cd_sec: 'detik',
        credit_made: 'Dibuat dengan',
        credit_by: 'oleh',
        credit_share: 'Share ke WA',
        credit_restart: 'Ulangi',
        cam_cancel: 'Batal',
        cam_snap: 'Jepret',
        share_text: (nama) => `Hey ${nama}! Aku bikin sesuatu spesial buat ultahmu, dibuka ya!`,
        card_happy: 'Happy Birthday',
        card_signature: (nama) => `with love, ${nama}`,
        card_tahun: 'tahun'
    },
    en: {
        welcome_title: 'Happy Birthday',
        welcome_sub: 'tap the button to open your surprise',
        welcome_btn: 'Open',
        welcome_from: 'from',
        form_title: 'Let\'s get to know you',
        form_sub: 'Fill in your info for a personalized greeting',
        form_nama: 'Your name',
        form_nama_ph: 'e.g. Rani',
        form_tgl: 'Date of birth',
        form_cita: 'Dream or wish',
        form_cita_ph: 'Doctor, travel the world...',
        form_btn: 'Next',
        flip_hint: 'Tap the card to open',
        flip_untuk: 'For',
        flip_tap: 'tap ✨',
        next: 'Next',
        fun_title: 'Did you know?',
        fun_sub: 'Fun facts about you',
        stat_hari: 'Days you\'ve lived',
        stat_jam: 'Hours alive',
        stat_detak: 'Heartbeats (approx)',
        stat_nafas: 'Times you\'ve breathed',
        zodiak_label: 'Your zodiac',
        photo_title: 'Make a Photo Card',
        photo_sub: 'Pick your cutest photo, ready to download',
        photo_upload: 'Upload Photo',
        photo_camera: 'Take Photo',
        pick_design: 'Design',
        pick_color: 'Color',
        photo_add: 'Add',
        photo_reset: 'Reset',
        photo_download: 'Download',
        photo_share: 'Share',
        photo_next: 'Go to Moments',
        mom_title: 'Moments Together',
        mom_sub: 'Upload your photos together, becomes a downloadable video slideshow',
        mom_upload: 'Choose Photos Together',
        mom_play: 'Play',
        mom_stop: 'Stop',
        mom_download: 'Video',
        mom_recording: 'Recording...',
        mom_next: 'Go to Wishes',
        mom_novideo: 'Your browser does not support video export. Try latest Chrome/Edge.',
        mom_caption: (n) => `Moments with ${n}`,
        wish_title: 'Wishes Wall',
        wish_sub: 'Write your wishes for this year, saved so you can read them again',
        wish_placeholder: 'This year I want...',
        wish_save: 'Save',
        wish_empty: 'No wishes yet. Write the first one!',
        wish_next: 'Blow the Candles',
        cake_title: 'Blow out the candles',
        cake_hint: 'Tap the button',
        cake_hint2: 'times to blow out all candles',
        cake_btn: 'Blow',
        cake_wish: 'Yay, make a wish!',
        cake_wish_sub: 'May all your wishes come true',
        credit_title: 'That\'s all from me',
        credit_body: 'May today be full of laughter, chocolate, and things that make you smile all year.',
        countdown_label: 'Your next birthday in:',
        cd_day: 'days', cd_hour: 'hrs', cd_min: 'min', cd_sec: 'sec',
        credit_made: 'Made with',
        credit_by: 'by',
        credit_share: 'Share to WA',
        credit_restart: 'Restart',
        cam_cancel: 'Cancel',
        cam_snap: 'Snap',
        share_text: (nama) => `Hey ${nama}! I made something special for your birthday, open it!`,
        card_happy: 'Happy Birthday',
        card_signature: (nama) => `with love, ${nama}`,
        card_tahun: 'years old'
    }
};

const ZODIAK = [
    { nama: 'Capricorn',  mulai: [12, 22], akhir: [1, 19],
      descId: 'Disiplin, pekerja keras, ambisius.', descEn: 'Disciplined, hard-working, ambitious.' },
    { nama: 'Aquarius',   mulai: [1, 20],  akhir: [2, 18],
      descId: 'Kreatif, mandiri, pemikir bebas.', descEn: 'Creative, independent, free thinker.' },
    { nama: 'Pisces',     mulai: [2, 19],  akhir: [3, 20],
      descId: 'Empatik, artistik, penuh imajinasi.', descEn: 'Empathetic, artistic, imaginative.' },
    { nama: 'Aries',      mulai: [3, 21],  akhir: [4, 19],
      descId: 'Berani, spontan, penuh energi.', descEn: 'Brave, spontaneous, full of energy.' },
    { nama: 'Taurus',     mulai: [4, 20],  akhir: [5, 20],
      descId: 'Sabar, setia, cinta kenyamanan.', descEn: 'Patient, loyal, loves comfort.' },
    { nama: 'Gemini',     mulai: [5, 21],  akhir: [6, 20],
      descId: 'Cerdas, penasaran, gampang bergaul.', descEn: 'Smart, curious, sociable.' },
    { nama: 'Cancer',     mulai: [6, 21],  akhir: [7, 22],
      descId: 'Peduli, protektif, hangat.', descEn: 'Caring, protective, warm.' },
    { nama: 'Leo',        mulai: [7, 23],  akhir: [8, 22],
      descId: 'Percaya diri, karismatik, murah hati.', descEn: 'Confident, charismatic, generous.' },
    { nama: 'Virgo',      mulai: [8, 23],  akhir: [9, 22],
      descId: 'Teliti, analitis, dapat diandalkan.', descEn: 'Meticulous, analytical, reliable.' },
    { nama: 'Libra',      mulai: [9, 23],  akhir: [10, 22],
      descId: 'Adil, diplomatis, cinta keindahan.', descEn: 'Fair, diplomatic, loves beauty.' },
    { nama: 'Scorpio',    mulai: [10, 23], akhir: [11, 21],
      descId: 'Intens, penuh passion, misterius.', descEn: 'Intense, passionate, mysterious.' },
    { nama: 'Sagittarius',mulai: [11, 22], akhir: [12, 21],
      descId: 'Petualang, optimis, jujur.', descEn: 'Adventurous, optimistic, honest.' }
];

// SVG paths per zodiak — konsisten stroke style
const ZODIAK_SVG = {
    'Aries':       '<path d="M6 14 C 6 6 10 5 12 8 C 14 5 18 6 18 14 M12 8 L12 20"/>',
    'Taurus':      '<circle cx="12" cy="15" r="4.5"/><path d="M4 6 C 8 10 12 10.5 12 10.5 M 20 6 C 16 10 12 10.5 12 10.5"/>',
    'Gemini':      '<line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/><path d="M7 5 Q 12 3 17 5"/><path d="M7 19 Q 12 21 17 19"/>',
    'Cancer':      '<circle cx="8" cy="10" r="2" fill="currentColor" stroke="none"/><circle cx="16" cy="14" r="2" fill="currentColor" stroke="none"/><path d="M5 10 Q 12 4 19 10 M 5 14 Q 12 20 19 14"/>',
    'Leo':         '<circle cx="9" cy="15" r="3.5"/><path d="M9 11 C 5 4 20 5 17 12 C 15 15 13 14 12 13"/>',
    'Virgo':       '<path d="M4 20 L 4 8 Q 5 6 7 8 L 7 20 M 7 12 Q 8 8 10 8 Q 12 8 12 12 L 12 20 M 12 12 Q 12 8 14 8 Q 16 8 16 14 L 16 18 Q 16 20 18 19 Q 20 17 18 15"/>',
    'Libra':       '<line x1="4" y1="19" x2="20" y2="19"/><path d="M4 15 Q 12 8 20 15"/><line x1="10" y1="15" x2="10" y2="19"/><line x1="14" y1="15" x2="14" y2="19"/>',
    'Scorpio':     '<path d="M4 20 L 4 8 Q 5 6 7 8 L 7 20 M 7 12 Q 8 8 10 8 Q 12 8 12 12 L 12 20 M 12 12 Q 12 8 14 8 Q 16 8 16 14 L 16 16 L 20 16 M 18 14 L 20 16 L 18 18"/>',
    'Sagittarius': '<line x1="5" y1="19" x2="19" y2="5"/><path d="M19 5 L 14 5 M 19 5 L 19 10"/><path d="M9 15 L 12 12 L 15 15"/>',
    'Capricorn':   '<path d="M4 8 L 5 10 Q 6 14 8 14 Q 11 14 11 11 Q 11 8 15 8 Q 20 8 20 14 M 15 14 A 3 3 0 0 0 21 14 M 15 14 A 3 3 0 0 1 21 14"/>',
    'Aquarius':    '<path d="M4 10 Q 6 6 8 10 Q 10 14 12 10 Q 14 6 16 10 Q 18 14 20 10"/><path d="M4 15 Q 6 11 8 15 Q 10 19 12 15 Q 14 11 16 15 Q 18 19 20 15"/>',
    'Pisces':      '<path d="M6 5 Q 9 12 6 19"/><path d="M18 5 Q 15 12 18 19"/><line x1="4" y1="12" x2="20" y2="12"/>'
};

function zodiakSvg(nama) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ZODIAK_SVG[nama] || ''}</svg>`;
}

// ================================================================
// State
// ================================================================
const dataUser = {
    nama: '',
    tanggalLahir: '',
    umur: 0,
    citaCita: '',
    fotos: [],
    slideIdx: 0,
    moments: [],
    currentMoment: 0
};

// ================================================================
// Card palettes + designs
// ================================================================
const PALETTES = {
    blush:    { bg1: '#fef1ec', bg2: '#f5dfe6', accent: '#b8557a', accent2: '#8867a8', ink: '#3d2340', soft: '#8a5c73', divider: '#c9a961' },
    lavender: { bg1: '#f0eaf5', bg2: '#e6d5f0', accent: '#8867a8', accent2: '#b8557a', ink: '#3d2340', soft: '#7d6a90', divider: '#c9a961' },
    peach:    { bg1: '#fff0e6', bg2: '#ffdcc4', accent: '#e8843c', accent2: '#c9603a', ink: '#5a2f1a', soft: '#a06845', divider: '#b8935a' },
    mint:     { bg1: '#e8f5ee', bg2: '#c8e8d5', accent: '#4a9b78', accent2: '#2d7a5a', ink: '#1a3d2c', soft: '#5c8574', divider: '#a89860' },
    sky:      { bg1: '#e8f0f8', bg2: '#c4d9ea', accent: '#4a80b8', accent2: '#2d5f8a', ink: '#1a3040', soft: '#5c7590', divider: '#b8a860' },
    cream:    { bg1: '#fdf5e6', bg2: '#f5e6c4', accent: '#b8935a', accent2: '#8a6f42', ink: '#3d2f1a', soft: '#8a7660', divider: '#c9a961' }
};

const cardConfig = { design: 'polaroid', color: 'blush' };

// ================================================================
// Utility
// ================================================================
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function t(key) { return I18N[KONFIG.bahasa][key]; }

function formatAngka(n) {
    return new Intl.NumberFormat(KONFIG.bahasa === 'id' ? 'id-ID' : 'en-US').format(n);
}

function formatTanggalId(d, bahasa = KONFIG.bahasa) {
    const bulanId = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const bulanEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const b = bahasa === 'id' ? bulanId : bulanEn;
    return `${d.getDate()} ${b[d.getMonth()]} ${d.getFullYear()}`;
}

// ================================================================
// I18N applier
// ================================================================
function terjemahkan() {
    document.documentElement.lang = KONFIG.bahasa;
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const v = I18N[KONFIG.bahasa][key];
        if (typeof v === 'string') el.textContent = v;
    });
    $$('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const v = I18N[KONFIG.bahasa][key];
        if (typeof v === 'string') el.placeholder = v;
    });
    $('#langLabel').textContent = KONFIG.bahasa.toUpperCase();
    $('#signName0').textContent = KONFIG.pengirim;
    $('#signName1').textContent = KONFIG.pengirim;
    $('#signName2').textContent = KONFIG.pengirim;

    if (dataUser.nama) {
        $('#namaPenerimaFlip').textContent = dataUser.nama;
        buildUcapan();
        buildFunFacts();
        buildZodiak();
    }
    renderWishes();
    if (dataUser.fotos.length > 0) renderKartu();
}

$('#langToggle').addEventListener('click', () => {
    KONFIG.bahasa = KONFIG.bahasa === 'id' ? 'en' : 'id';
    terjemahkan();
});

// ================================================================
// Audio
// ================================================================
const backsound = $('#backsound');
const tiupAudio = $('#tiupAudio');
const musicBtn  = $('#musicToggle');

backsound.volume = 0.4;
tiupAudio.volume = 0.7;

let musicOn = false;
let musicAttempting = false;

async function nyalakanMusik() {
    if (musicOn || musicAttempting) return;
    if (!backsound.paused) {
        musicOn = true;
        setMusicUI(true);
        return;
    }
    musicAttempting = true;
    try {
        await backsound.play();
        musicOn = true;
        setMusicUI(true);
    } catch (e) {
        // autoplay blocked
    }
    musicAttempting = false;
}

function matikanMusik() {
    backsound.pause();
    musicOn = false;
    setMusicUI(false);
}

function setMusicUI(on) {
    if (on) {
        musicBtn.classList.add('playing');
        musicBtn.classList.remove('muted');
    } else {
        musicBtn.classList.remove('playing');
        musicBtn.classList.add('muted');
    }
}

musicBtn.addEventListener('click', () => {
    if (musicOn) matikanMusik(); else nyalakanMusik();
});

// Auto-play saat load; kalau browser block → coba lagi pas first user gesture
window.addEventListener('load', async () => {
    await nyalakanMusik();
    if (musicOn) return;

    const kickOff = async () => {
        await nyalakanMusik();
        if (musicOn) {
            document.removeEventListener('pointerdown', kickOff);
            document.removeEventListener('keydown', kickOff);
        }
    };
    document.addEventListener('pointerdown', kickOff);
    document.addEventListener('keydown', kickOff);
});

// ================================================================
// Navigasi halaman
// ================================================================
let halamanAktif = 1;

function keHalaman(nomor) {
    halamanAktif = nomor;
    $$('.halaman').forEach(el => el.classList.remove('aktif'));
    const target = $('#halaman' + nomor);
    if (target) target.classList.add('aktif');

    // Back button visibility
    $('#backBtn').style.display = nomor > 1 ? 'flex' : 'none';

    if (nomor === 3) $('#flipCard').classList.remove('flipped');
    if (nomor === 5 && dataUser.fotos.length > 0) renderKartu();
    if (nomor === 6 && dataUser.moments.length > 0) renderMomentFrame(dataUser.currentMoment);
    if (nomor === 8) resetKue();
    if (nomor === 9) startCountdown();
    else stopCountdown();

    if (nomor !== 6) stopSlideshow();

    window.scrollTo(0, 0);
}

function kembali() {
    if (halamanAktif > 1) keHalaman(halamanAktif - 1);
}

// ================================================================
// Form → hitung umur & bangun konten
// ================================================================
function hitungUmur(tanggalLahir) {
    const lahir = new Date(tanggalLahir);
    const kini = new Date();
    let umur = kini.getFullYear() - lahir.getFullYear();
    const belum = kini.getMonth() < lahir.getMonth() ||
                  (kini.getMonth() === lahir.getMonth() && kini.getDate() < lahir.getDate());
    if (belum) umur--;
    return Math.max(0, umur);
}

function submitForm(event) {
    event.preventDefault();
    dataUser.nama         = $('#nama').value.trim();
    dataUser.tanggalLahir = $('#tanggalLahir').value;
    dataUser.citaCita     = $('#citaCita').value.trim();
    dataUser.umur         = hitungUmur(dataUser.tanggalLahir);

    $('#namaPenerimaFlip').textContent = dataUser.nama;
    buildUcapan();
    buildFunFacts();
    buildZodiak();
    renderWishes();

    keHalaman(3);
    return false;
}

function buildUcapan() {
    $('#ucapanNama').textContent = KONFIG.bahasa === 'id'
        ? `Selamat Ulang Tahun, ${dataUser.nama}!`
        : `Happy Birthday, ${dataUser.nama}!`;
    $('#ucapanBody').textContent = KONFIG.bahasa === 'id'
        ? `Di usia ${dataUser.umur} tahun ini, semoga kamu makin dekat sama impianmu jadi ${dataUser.citaCita}. Sehat selalu, bahagia terus, dan nikmatin hari spesialmu ini ya!`
        : `At ${dataUser.umur} years old, may you get closer to your dream of becoming ${dataUser.citaCita}. Stay healthy, keep smiling, and enjoy your special day!`;
}

// ================================================================
// Flip card
// ================================================================
function flipUcapan() {
    $('#flipCard').classList.toggle('flipped');
}

// ================================================================
// Fun facts
// ================================================================
function buildFunFacts() {
    if (!dataUser.tanggalLahir) return;
    const lahir = new Date(dataUser.tanggalLahir);
    const kini  = new Date();
    const msLive = kini - lahir;
    const hari = Math.floor(msLive / 86400000);
    const jam  = Math.floor(msLive / 3600000);
    const menit = Math.floor(msLive / 60000);
    const detak = menit * 72;   // 72 bpm avg
    const nafas = menit * 16;   // 16 breaths/min avg

    $('#statHari').textContent  = formatAngka(hari);
    $('#statJam').textContent   = formatAngka(jam);
    $('#statDetak').textContent = formatAngka(detak);
    $('#statNafas').textContent = formatAngka(nafas);
}

// ================================================================
// Zodiak
// ================================================================
function cariZodiak(tanggalLahir) {
    const d = new Date(tanggalLahir);
    const b = d.getMonth() + 1;
    const h = d.getDate();
    for (const z of ZODIAK) {
        const [mB, mH] = z.mulai;
        const [aB, aH] = z.akhir;
        if (mB === aB) {
            if (b === mB && h >= mH && h <= aH) return z;
        } else {
            // rentang lintas tahun (Capricorn)
            if ((b === mB && h >= mH) || (b === aB && h <= aH)) return z;
        }
    }
    return ZODIAK[0];
}

function buildZodiak() {
    if (!dataUser.tanggalLahir) return;
    const z = cariZodiak(dataUser.tanggalLahir);
    $('#zodiakSymbol').innerHTML = zodiakSvg(z.nama);
    $('#zodiakNama').textContent   = z.nama;
    $('#zodiakDesc').textContent   = KONFIG.bahasa === 'id' ? z.descId : z.descEn;
}

// ================================================================
// Photo card
// ================================================================
const fotoInput  = $('#fotoInput');
const cardWrap   = $('#cardPreviewWrap');
const cardCanvas = $('#cardCanvas');
const downloadBtn = $('#downloadBtn');
const slideControls = $('#slideControls');
const cardControls = $('#cardControls');

fotoInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
        if (f.size > 5 * 1024 * 1024) continue;
        const dataUrl = await fileKeDataUrl(f);
        dataUser.fotos.push(dataUrl);
    }
    e.target.value = '';
    if (dataUser.fotos.length > 0) {
        dataUser.slideIdx = dataUser.fotos.length - 1;
        await renderKartu();
        cardWrap.classList.add('show');
        cardControls.classList.add('show');
        downloadBtn.disabled = false;
        toggleSlideControls();
    }
});

function fileKeDataUrl(file) {
    return new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = rej;
        r.readAsDataURL(file);
    });
}

function tambahFoto() {
    fotoInput.click();
}

function resetFoto() {
    dataUser.fotos = [];
    dataUser.slideIdx = 0;
    cardWrap.classList.remove('show');
    cardControls.classList.remove('show');
    downloadBtn.disabled = true;
    toggleSlideControls();
}

function toggleSlideControls() {
    if (dataUser.fotos.length > 1) {
        slideControls.classList.add('show');
        $('#slideIdx').textContent   = dataUser.slideIdx + 1;
        $('#slideTotal').textContent = dataUser.fotos.length;
    } else {
        slideControls.classList.remove('show');
    }
}

async function slidePrev() {
    if (dataUser.fotos.length < 2) return;
    dataUser.slideIdx = (dataUser.slideIdx - 1 + dataUser.fotos.length) % dataUser.fotos.length;
    await renderKartu();
    toggleSlideControls();
}
async function slideNext() {
    if (dataUser.fotos.length < 2) return;
    dataUser.slideIdx = (dataUser.slideIdx + 1) % dataUser.fotos.length;
    await renderKartu();
    toggleSlideControls();
}

// ---------- Camera ----------
let cameraStream = null;
async function bukaKamera() {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' }, audio: false
        });
        const v = $('#cameraVideo');
        v.srcObject = cameraStream;
        $('#cameraModal').classList.add('show');
    } catch (e) {
        alert(KONFIG.bahasa === 'id'
            ? 'Kamera tidak bisa diakses. Coba izinkan permission-nya.'
            : 'Cannot access camera. Please allow permission.');
    }
}

function tutupKamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
        cameraStream = null;
    }
    $('#cameraModal').classList.remove('show');
}

async function ambilFoto() {
    if (!cameraStream) return;
    const v = $('#cameraVideo');
    const c = document.createElement('canvas');
    c.width  = v.videoWidth;
    c.height = v.videoHeight;
    const cx = c.getContext('2d');
    // mirror agar sesuai preview
    cx.translate(c.width, 0);
    cx.scale(-1, 1);
    cx.drawImage(v, 0, 0);
    const dataUrl = c.toDataURL('image/jpeg', 0.92);
    dataUser.fotos.push(dataUrl);
    dataUser.slideIdx = dataUser.fotos.length - 1;
    tutupKamera();
    await renderKartu();
    cardWrap.classList.add('show');
    cardControls.classList.add('show');
    downloadBtn.disabled = false;
    toggleSlideControls();
}

// ---------- Render kartu (canvas) ----------
function bungkusTeks(ctx, teks, x, y, maxLebar, tinggiBaris) {
    const kata = teks.split(' ');
    let baris = '';
    const barisArr = [];
    for (const w of kata) {
        const tes = baris + w + ' ';
        if (ctx.measureText(tes).width > maxLebar && baris) {
            barisArr.push(baris.trim());
            baris = w + ' ';
        } else {
            baris = tes;
        }
    }
    if (baris) barisArr.push(baris.trim());
    barisArr.forEach((b, i) => ctx.fillText(b, x, y + i * tinggiBaris));
    return barisArr.length;
}

// ---------- Card style picker handlers ----------
$$('.design-opt').forEach(btn => {
    btn.addEventListener('click', async () => {
        $$('.design-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cardConfig.design = btn.dataset.design;
        if (dataUser.fotos.length > 0) await renderKartu();
    });
});

$$('.color-opt').forEach(btn => {
    btn.addEventListener('click', async () => {
        $$('.color-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cardConfig.color = btn.dataset.color;
        if (dataUser.fotos.length > 0) await renderKartu();
    });
});

// ---------- Helper: load image ----------
function loadImg(src) {
    return new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = rej;
        img.src = src;
    });
}

function coverDraw(ctx, img, dx, dy, dw, dh) {
    const rImg   = img.width / img.height;
    const rDest  = dw / dh;
    let sx, sy, sw, sh;
    if (rImg > rDest) {
        sh = img.height; sw = sh * rDest;
        sx = (img.width - sw) / 2; sy = 0;
    } else {
        sw = img.width; sh = sw / rDest;
        sx = 0; sy = (img.height - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}

function hexToRgba(hex, a) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substr(0, 2), 16);
    const g = parseInt(h.substr(2, 2), 16);
    const b = parseInt(h.substr(4, 2), 16);
    return `rgba(${r},${g},${b},${a})`;
}

// ---------- Main render dispatcher ----------
async function renderKartu() {
    if (dataUser.fotos.length === 0) return;
    try { await document.fonts.ready; } catch (e) {}
    const p = PALETTES[cardConfig.color] || PALETTES.blush;
    if      (cardConfig.design === 'ribbon')  await renderRibbon(p);
    else if (cardConfig.design === 'minimal') await renderMinimal(p);
    else                                       await renderPolaroid(p);
}

// ---------- Design 1: Polaroid (elegant classic) ----------
async function renderPolaroid(p) {
    const ctx = cardCanvas.getContext('2d');
    const W = 720, H = 1020;
    cardCanvas.width = W; cardCanvas.height = H;

    // background
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, p.bg1);
    grad.addColorStop(1, p.bg2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // thin border
    ctx.strokeStyle = hexToRgba(p.accent, 0.35);
    ctx.lineWidth = 1.5;
    ctx.strokeRect(24, 24, W - 48, H - 48);

    // corner dots
    ctx.fillStyle = hexToRgba(p.accent, 0.4);
    [[38, 38], [W - 38, 38], [38, H - 38], [W - 38, H - 38]].forEach(([x, y]) => {
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
    });

    // eyebrow
    ctx.fillStyle = p.soft;
    ctx.font = '14px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(KONFIG.bahasa === 'id' ? 'UNTUK YANG SPESIAL' : 'FOR SOMEONE SPECIAL', W / 2, 80);

    // title
    ctx.fillStyle = p.accent;
    ctx.font = '58px Pacifico, cursive';
    ctx.fillText(t('card_happy'), W / 2, 140);

    // divider
    ctx.strokeStyle = hexToRgba(p.divider, 0.6);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 100, 170); ctx.lineTo(W / 2 - 12, 170);
    ctx.moveTo(W / 2 + 12, 170);  ctx.lineTo(W / 2 + 100, 170);
    ctx.stroke();
    ctx.fillStyle = p.divider;
    ctx.beginPath(); ctx.arc(W / 2, 170, 3, 0, Math.PI * 2); ctx.fill();

    // polaroid frame
    const fx = 100, fy = 200, fw = W - 200, fh = 480;
    ctx.save();
    ctx.shadowColor = hexToRgba(p.accent, 0.22);
    ctx.shadowBlur = 24; ctx.shadowOffsetY = 10;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(fx - 16, fy - 16, fw + 32, fh + 84);
    ctx.restore();

    const img = await loadImg(dataUser.fotos[dataUser.slideIdx]);
    coverDraw(ctx, img, fx, fy, fw, fh);

    // date caption
    ctx.fillStyle = p.soft;
    ctx.font = '22px Pacifico, cursive';
    ctx.textAlign = 'center';
    ctx.fillText(formatTanggalId(new Date()), W / 2, fy + fh + 50);

    // name
    ctx.fillStyle = p.ink;
    ctx.font = '600 46px Cormorant Garamond, serif';
    ctx.fillText(dataUser.nama || '—', W / 2, 810);

    // age
    ctx.fillStyle = p.soft;
    ctx.font = '22px Poppins, sans-serif';
    ctx.fillText(`${dataUser.umur} ${t('card_tahun')}`, W / 2, 842);

    // ornament + signature
    ctx.strokeStyle = hexToRgba(p.accent, 0.4);
    ctx.beginPath(); ctx.moveTo(W / 2 - 50, 895); ctx.lineTo(W / 2 + 50, 895); ctx.stroke();
    ctx.fillStyle = p.accent;
    ctx.font = '26px Pacifico, cursive';
    ctx.fillText(t('card_signature')(KONFIG.pengirim), W / 2, 940);
}

// ---------- Design 2: Ribbon banner ----------
async function renderRibbon(p) {
    const ctx = cardCanvas.getContext('2d');
    const W = 720, H = 1020;
    cardCanvas.width = W; cardCanvas.height = H;

    // background with subtle diagonal stripes
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, p.bg1);
    grad.addColorStop(1, p.bg2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // subtle stripe pattern
    ctx.strokeStyle = hexToRgba(p.accent, 0.05);
    ctx.lineWidth = 2;
    for (let i = -H; i < W + H; i += 20) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke();
    }

    // outer double frame
    ctx.strokeStyle = hexToRgba(p.accent, 0.5);
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, W - 60, H - 60);
    ctx.strokeStyle = hexToRgba(p.accent, 0.3);
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, W - 80, H - 80);

    // ribbon banner at top
    const ribbonY = 100, ribbonH = 70;
    ctx.fillStyle = p.accent;
    ctx.beginPath();
    ctx.moveTo(60, ribbonY);
    ctx.lineTo(W - 60, ribbonY);
    ctx.lineTo(W - 40, ribbonY + ribbonH / 2);
    ctx.lineTo(W - 60, ribbonY + ribbonH);
    ctx.lineTo(60, ribbonY + ribbonH);
    ctx.lineTo(40, ribbonY + ribbonH / 2);
    ctx.closePath();
    ctx.fill();
    // ribbon shadow flip
    ctx.fillStyle = hexToRgba(p.accent2, 0.4);
    ctx.fillRect(40, ribbonY + ribbonH, 20, 12);
    ctx.beginPath();
    ctx.moveTo(40, ribbonY + ribbonH);
    ctx.lineTo(60, ribbonY + ribbonH);
    ctx.lineTo(60, ribbonY + ribbonH + 12);
    ctx.closePath(); ctx.fill();
    ctx.fillRect(W - 60, ribbonY + ribbonH, 20, 12);
    ctx.beginPath();
    ctx.moveTo(W - 60, ribbonY + ribbonH);
    ctx.lineTo(W - 40, ribbonY + ribbonH);
    ctx.lineTo(W - 60, ribbonY + ribbonH + 12);
    ctx.closePath(); ctx.fill();

    // ribbon text
    ctx.fillStyle = '#fff';
    ctx.font = '44px Pacifico, cursive';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(t('card_happy'), W / 2, ribbonY + ribbonH / 2 + 2);
    ctx.textBaseline = 'alphabetic';

    // photo area (rounded corners via clip)
    const fx = 90, fy = 230, fw = W - 180, fh = 480;
    ctx.save();
    ctx.shadowColor = hexToRgba(p.accent, 0.25);
    ctx.shadowBlur = 20; ctx.shadowOffsetY = 8;
    ctx.fillStyle = '#fff';
    // rounded rect
    const r = 14;
    ctx.beginPath();
    ctx.moveTo(fx - 10 + r, fy - 10);
    ctx.arcTo(fx - 10 + fw + 20, fy - 10, fx - 10 + fw + 20, fy - 10 + r, r);
    ctx.arcTo(fx - 10 + fw + 20, fy - 10 + fh + 20, fx - 10 + fw + 20 - r, fy - 10 + fh + 20, r);
    ctx.arcTo(fx - 10, fy - 10 + fh + 20, fx - 10, fy - 10 + fh + 20 - r, r);
    ctx.arcTo(fx - 10, fy - 10, fx - 10 + r, fy - 10, r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // clip photo to rounded
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(fx + r - 4, fy);
    ctx.arcTo(fx + fw, fy, fx + fw, fy + r - 4, r - 4);
    ctx.arcTo(fx + fw, fy + fh, fx + fw - r + 4, fy + fh, r - 4);
    ctx.arcTo(fx, fy + fh, fx, fy + fh - r + 4, r - 4);
    ctx.arcTo(fx, fy, fx + r - 4, fy, r - 4);
    ctx.closePath();
    ctx.clip();
    const img = await loadImg(dataUser.fotos[dataUser.slideIdx]);
    coverDraw(ctx, img, fx, fy, fw, fh);
    ctx.restore();

    // decorative stars around
    ctx.fillStyle = hexToRgba(p.divider, 0.7);
    [[60, 200], [W - 60, 200], [60, 730], [W - 60, 730]].forEach(([x, y]) => {
        drawStar(ctx, x, y, 5, 8, 4);
    });

    // name
    ctx.fillStyle = p.ink;
    ctx.font = 'italic 500 42px Cormorant Garamond, serif';
    ctx.textAlign = 'center';
    ctx.fillText(dataUser.nama || '—', W / 2, 800);

    // age
    ctx.fillStyle = p.soft;
    ctx.font = '20px Poppins, sans-serif';
    ctx.fillText(`${dataUser.umur} ${t('card_tahun')} · ${formatTanggalId(new Date())}`, W / 2, 832);

    // signature block
    ctx.strokeStyle = hexToRgba(p.accent, 0.4);
    ctx.beginPath(); ctx.moveTo(W / 2 - 60, 890); ctx.lineTo(W / 2 + 60, 890); ctx.stroke();
    ctx.fillStyle = p.accent;
    ctx.font = '24px Pacifico, cursive';
    ctx.fillText(t('card_signature')(KONFIG.pengirim), W / 2, 930);
}

function drawStar(ctx, cx, cy, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    let x = cx, y = cy;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outer);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outer;
        y = cy + Math.sin(rot) * outer;
        ctx.lineTo(x, y); rot += step;
        x = cx + Math.cos(rot) * inner;
        y = cy + Math.sin(rot) * inner;
        ctx.lineTo(x, y); rot += step;
    }
    ctx.lineTo(cx, cy - outer);
    ctx.closePath();
    ctx.fill();
}

// ---------- Design 3: Modern Minimal (photo dominant + gradient overlay) ----------
async function renderMinimal(p) {
    const ctx = cardCanvas.getContext('2d');
    const W = 720, H = 1020;
    cardCanvas.width = W; cardCanvas.height = H;

    // photo takes full bg
    const img = await loadImg(dataUser.fotos[dataUser.slideIdx]);
    coverDraw(ctx, img, 0, 0, W, H);

    // dark gradient bottom
    const grad = ctx.createLinearGradient(0, H * 0.45, 0, H);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.4, hexToRgba(p.ink, 0.5));
    grad.addColorStop(1, hexToRgba(p.ink, 0.92));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // top-right small accent tag
    ctx.fillStyle = hexToRgba('#000000', 0.35);
    const tag = KONFIG.bahasa === 'id' ? 'HBD' : 'HBD';
    ctx.font = '600 12px Poppins, sans-serif';
    const tagW = ctx.measureText(tag).width + 20;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(W - tagW - 30, 30, tagW, 26, 13) : ctx.rect(W - tagW - 30, 30, tagW, 26);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(tag, W - tagW / 2 - 30, 47);

    // eyebrow
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '600 12px Poppins, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(formatTanggalId(new Date()).toUpperCase(), 60, H - 260);

    // Happy Birthday (small script above name)
    ctx.fillStyle = '#fff';
    ctx.font = '36px Pacifico, cursive';
    ctx.textAlign = 'left';
    ctx.fillText(t('card_happy'), 60, H - 210);

    // Big name
    ctx.fillStyle = '#fff';
    ctx.font = '700 66px Fredoka, sans-serif';
    ctx.textAlign = 'left';
    const namaTxt = (dataUser.nama || '—');
    ctx.fillText(namaTxt, 60, H - 140);

    // Age
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '400 22px Poppins, sans-serif';
    ctx.fillText(`${dataUser.umur} ${t('card_tahun')}`, 60, H - 105);

    // thin line
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, H - 80); ctx.lineTo(W - 60, H - 80); ctx.stroke();

    // signature
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = 'italic 500 22px Cormorant Garamond, serif';
    ctx.textAlign = 'left';
    ctx.fillText(t('card_signature')(KONFIG.pengirim), 60, H - 50);
}

function downloadKartu() {
    if (dataUser.fotos.length === 0) return;
    const link = document.createElement('a');
    const namaSlug = (dataUser.nama || 'ultah').toLowerCase().replace(/\s+/g, '-');
    const suffix = dataUser.fotos.length > 1 ? `-${dataUser.slideIdx + 1}` : '';
    link.download = `ultah-${namaSlug}${suffix}.png`;
    link.href = cardCanvas.toDataURL('image/png');
    link.click();
}

// ================================================================
// Moments Together (slideshow + video export)
// ================================================================
const momentsInput   = $('#momentsInput');
const momentsCanvas  = $('#momentsCanvas');
const momentsPreview = $('#momentsPreview');
const momentThumbs   = $('#momentThumbs');
const playSlideBtn   = $('#playSlideBtn');
const downloadVideoBtn = $('#downloadVideoBtn');

momentsInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
        if (f.size > 8 * 1024 * 1024) continue;
        const dataUrl = await fileKeDataUrl(f);
        dataUser.moments.push(dataUrl);
    }
    e.target.value = '';
    if (dataUser.moments.length > 0) {
        dataUser.currentMoment = dataUser.moments.length - 1;
        momentsPreview.classList.add('show');
        await renderMomentFrame(dataUser.currentMoment);
        renderMomentThumbs();
    }
});

async function renderMomentFrame(idx) {
    if (idx < 0 || idx >= dataUser.moments.length) return;
    dataUser.currentMoment = idx;
    const ctx = momentsCanvas.getContext('2d');
    const W = 720, H = 720;
    momentsCanvas.width = W;
    momentsCanvas.height = H;

    try { await document.fonts.ready; } catch (e) {}

    // Photo cover-fit
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, W, H);
    const img = await loadImg(dataUser.moments[idx]);
    coverDraw(ctx, img, 0, 0, W, H);

    // Bottom dark gradient overlay
    const grad = ctx.createLinearGradient(0, H * 0.55, 0, H);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.78)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Small tag top-right
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.font = '600 12px Poppins, sans-serif';
    const tag = KONFIG.bahasa === 'id' ? 'MOMENT' : 'MOMENT';
    const tagW = ctx.measureText(tag).width + 20;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(W - tagW - 24, 24, tagW, 24, 12);
    else ctx.rect(W - tagW - 24, 24, tagW, 24);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(tag, W - tagW / 2 - 24, 40);

    // Caption (italic serif)
    ctx.fillStyle = '#fff';
    ctx.font = 'italic 500 30px Cormorant Garamond, serif';
    ctx.textAlign = 'center';
    const cap = t('mom_caption')(KONFIG.pengirim);
    ctx.fillText(cap, W / 2, H - 62);

    // Counter
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '400 14px Poppins, sans-serif';
    ctx.fillText(`${idx + 1} / ${dataUser.moments.length}`, W / 2, H - 34);
}

function renderMomentThumbs() {
    momentThumbs.innerHTML = '';
    dataUser.moments.forEach((foto, i) => {
        const thumb = document.createElement('div');
        thumb.className = 'moment-thumb' + (i === dataUser.currentMoment ? ' active' : '');
        thumb.style.backgroundImage = `url(${foto})`;
        thumb.onclick = async () => {
            await renderMomentFrame(i);
            renderMomentThumbs();
        };
        const del = document.createElement('button');
        del.className = 'del-mini';
        del.textContent = '×';
        del.onclick = async (e) => {
            e.stopPropagation();
            dataUser.moments.splice(i, 1);
            if (dataUser.moments.length === 0) {
                momentsPreview.classList.remove('show');
                dataUser.currentMoment = 0;
                stopSlideshow();
                renderMomentThumbs();
                return;
            }
            const newIdx = Math.min(dataUser.currentMoment, dataUser.moments.length - 1);
            await renderMomentFrame(newIdx);
            renderMomentThumbs();
        };
        thumb.appendChild(del);
        momentThumbs.appendChild(thumb);
    });
}

// Crossfade transition antar frame (smooth)
async function transitionToMoment(newIdx) {
    const ctx = momentsCanvas.getContext('2d');
    const W = momentsCanvas.width || 720;
    const H = momentsCanvas.height || 720;

    // Snapshot frame lama sebagai image
    let oldFrame = null;
    if (momentsCanvas.width > 0) {
        oldFrame = new Image();
        oldFrame.src = momentsCanvas.toDataURL();
        await new Promise(r => { oldFrame.onload = r; oldFrame.onerror = r; });
    }

    // Render frame baru penuh dulu
    await renderMomentFrame(newIdx);

    // Kalau gak ada frame lama, langsung selesai
    if (!oldFrame) return;

    // Snapshot frame baru
    const newFrame = new Image();
    newFrame.src = momentsCanvas.toDataURL();
    await new Promise(r => { newFrame.onload = r; newFrame.onerror = r; });

    // Crossfade animation
    const duration = 700;
    const start = performance.now();

    await new Promise(resolve => {
        function step() {
            const t = Math.min(1, (performance.now() - start) / duration);
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            ctx.clearRect(0, 0, W, H);
            ctx.globalAlpha = 1;
            ctx.drawImage(newFrame, 0, 0, W, H);
            ctx.globalAlpha = 1 - eased;
            ctx.drawImage(oldFrame, 0, 0, W, H);
            ctx.globalAlpha = 1;
            if (t < 1) requestAnimationFrame(step);
            else resolve();
        }
        requestAnimationFrame(step);
    });
}

let slideshowPlaying = false;
let slideshowTimer = null;
const SLIDE_HOLD_MS = 3200;

function toggleSlideshow() {
    if (slideshowPlaying) stopSlideshow();
    else playSlideshow();
}

function playSlideshow() {
    if (dataUser.moments.length === 0) return;
    slideshowPlaying = true;
    playSlideBtn.querySelector('span').textContent = t('mom_stop');
    playNextSlide(dataUser.currentMoment);
}

function stopSlideshow() {
    slideshowPlaying = false;
    if (slideshowTimer) { clearTimeout(slideshowTimer); slideshowTimer = null; }
    if (playSlideBtn) playSlideBtn.querySelector('span').textContent = t('mom_play');
}

async function playNextSlide(idx) {
    if (!slideshowPlaying) return;
    await transitionToMoment(idx);
    renderMomentThumbs();
    const next = (idx + 1) % dataUser.moments.length;
    slideshowTimer = setTimeout(() => playNextSlide(next), SLIDE_HOLD_MS);
}

// ---------- Audio capture untuk video (Web Audio API) ----------
let audioContext = null;
let audioSource  = null;
let audioDest    = null;

async function setupAudioCapture() {
    if (audioDest) return;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') await audioContext.resume();
        audioSource = audioContext.createMediaElementSource(backsound);
        audioDest = audioContext.createMediaStreamDestination();
        audioSource.connect(audioDest);
        audioSource.connect(audioContext.destination);
    } catch (e) {
        console.warn('Audio capture setup failed:', e);
        audioDest = null;
    }
}

async function downloadVideo() {
    if (dataUser.moments.length === 0) return;
    if (typeof MediaRecorder === 'undefined' || !momentsCanvas.captureStream) {
        alert(t('mom_novideo'));
        return;
    }

    stopSlideshow();

    const btnLabel = downloadVideoBtn.querySelector('span');
    const originalText = btnLabel.textContent;
    downloadVideoBtn.disabled = true;
    btnLabel.textContent = t('mom_recording');

    // Setup audio capture + pastikan musik main
    await setupAudioCapture();
    if (backsound.paused) {
        try { await backsound.play(); musicOn = true; setMusicUI(true); } catch (e) {}
    }
    if (audioContext && audioContext.state === 'suspended') {
        try { await audioContext.resume(); } catch (e) {}
    }

    try {
        // Pastikan canvas size sudah di-init (render 1 frame dulu tanpa transisi)
        await renderMomentFrame(0);

        const videoStream = momentsCanvas.captureStream(30);
        let combinedStream = videoStream;
        if (audioDest) {
            combinedStream = new MediaStream([
                ...videoStream.getVideoTracks(),
                ...audioDest.stream.getAudioTracks()
            ]);
        }

        let mime = 'video/webm';
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus'))      mime = 'video/webm;codecs=vp9,opus';
        else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus')) mime = 'video/webm;codecs=vp8,opus';
        else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9'))      mime = 'video/webm;codecs=vp9';
        else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8'))      mime = 'video/webm;codecs=vp8';

        const recorder = new MediaRecorder(combinedStream, { mimeType: mime });
        const chunks = [];
        recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
        const done = new Promise(res => recorder.onstop = res);
        recorder.start();

        // Hold di frame pertama sebentar
        await new Promise(r => setTimeout(r, SLIDE_HOLD_MS));

        // Loop transisi ke frame berikutnya
        for (let i = 1; i < dataUser.moments.length; i++) {
            await transitionToMoment(i);
            renderMomentThumbs();
            await new Promise(r => setTimeout(r, SLIDE_HOLD_MS));
        }

        recorder.stop();
        await done;

        const blob = new Blob(chunks, { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const namaSlug = (KONFIG.pengirim || 'moments').toLowerCase().replace(/\s+/g, '-');
        a.download = `moments-${namaSlug}.webm`;
        a.href = url;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
    } catch (err) {
        console.error(err);
        alert('Error: ' + err.message);
    }

    downloadVideoBtn.disabled = false;
    btnLabel.textContent = originalText;
}

// ================================================================
// Wishes Wall (localStorage)
// ================================================================
function wishKey() {
    const slug = (dataUser.nama || 'anon').toLowerCase().replace(/\s+/g, '-');
    return `wishes-${slug}`;
}

function ambilWishes() {
    try { return JSON.parse(localStorage.getItem(wishKey()) || '[]'); }
    catch (e) { return []; }
}

function simpanWish() {
    const txt = $('#wishText').value.trim();
    if (!txt) return;
    const list = ambilWishes();
    list.unshift({ text: txt, tanggal: new Date().toISOString() });
    localStorage.setItem(wishKey(), JSON.stringify(list));
    $('#wishText').value = '';
    renderWishes();
}

function hapusWish(idx) {
    const list = ambilWishes();
    list.splice(idx, 1);
    localStorage.setItem(wishKey(), JSON.stringify(list));
    renderWishes();
}

function renderWishes() {
    const list = ambilWishes();
    const wrap = $('#wishList');
    const empty = $('#wishEmpty');
    wrap.innerHTML = '';
    if (list.length === 0) {
        empty.classList.add('show');
        return;
    }
    empty.classList.remove('show');
    list.forEach((w, i) => {
        const el = document.createElement('div');
        el.className = 'wish-item';
        const d = new Date(w.tanggal);
        const tglStr = formatTanggalId(d);
        el.innerHTML = `
            <p class="wish-body"></p>
            <div class="wish-date">
                <span>${tglStr}</span>
                <button class="wish-del" onclick="hapusWish(${i})">✕</button>
            </div>`;
        el.querySelector('.wish-body').textContent = w.text;
        wrap.appendChild(el);
    });
}

// ================================================================
// Tiup lilin
// ================================================================
let hitungTiupan = 0;
const totalLilin = 3;
let tiupTimer = null;

function updateSisaLilin() {
    const sisa = totalLilin - hitungTiupan;
    $('#sisaLilin').textContent = sisa;
}

function tiupLilin() {
    if (hitungTiupan >= totalLilin) return;
    try { tiupAudio.currentTime = 0; tiupAudio.play(); } catch (e) {}
    const lilinTarget = $(`.lilin[data-lilin="${hitungTiupan + 1}"]`);
    if (lilinTarget) lilinTarget.classList.add('padam');
    hitungTiupan++;
    updateSisaLilin();
    if (hitungTiupan >= totalLilin) {
        $('#tiupBtn').disabled = true;
        $('#popup').classList.add('show');
        letusanConfetti();
        tiupTimer = setTimeout(() => keHalaman(9), 3800);
    }
}

function resetKue() {
    if (tiupTimer) { clearTimeout(tiupTimer); tiupTimer = null; }
    hitungTiupan = 0;
    updateSisaLilin();
    $$('.lilin').forEach(l => l.classList.remove('padam'));
    $('#popup').classList.remove('show');
    $('#tiupBtn').disabled = false;
}

// ================================================================
// Countdown ke ultah berikutnya
// ================================================================
let countdownTimer = null;
function startCountdown() {
    if (!dataUser.tanggalLahir) return;
    tickCountdown();
    countdownTimer = setInterval(tickCountdown, 1000);
}
function stopCountdown() {
    if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
}
function tickCountdown() {
    const kini  = new Date();
    const lahir = new Date(dataUser.tanggalLahir);
    let next = new Date(kini.getFullYear(), lahir.getMonth(), lahir.getDate(),
                        lahir.getHours(), lahir.getMinutes());
    if (next <= kini) next = new Date(kini.getFullYear() + 1, lahir.getMonth(), lahir.getDate(),
                                      lahir.getHours(), lahir.getMinutes());
    const diff = next - kini;
    const day  = Math.floor(diff / 86400000);
    const hr   = Math.floor((diff % 86400000) / 3600000);
    const mn   = Math.floor((diff % 3600000) / 60000);
    const sc   = Math.floor((diff % 60000) / 1000);
    $('#cdDay').textContent  = day;
    $('#cdHour').textContent = String(hr).padStart(2, '0');
    $('#cdMin').textContent  = String(mn).padStart(2, '0');
    $('#cdSec').textContent  = String(sc).padStart(2, '0');
}

// ================================================================
// Share ke WhatsApp
// ================================================================
function shareWA() {
    const teks = t('share_text')(dataUser.nama || '');
    const url = `https://wa.me/?text=${encodeURIComponent(teks)}`;
    window.open(url, '_blank');
}

// ================================================================
// Confetti canvas
// ================================================================
const canvas = $('#confetti');
const ctxC = canvas.getContext('2d');
let confettiPartikel = [];
let confettiAktif = false;

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const warnaConfetti = ['#b8557a', '#8867a8', '#c9a961', '#e8a5c1', '#a48fd1', '#f5c9d6'];

function letusanConfetti() {
    confettiPartikel = [];
    for (let i = 0; i < 180; i++) {
        confettiPartikel.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 120,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 12,
            vy: Math.random() * -14 - 4,
            g: 0.28,
            size: Math.random() * 8 + 4,
            warna: warnaConfetti[Math.floor(Math.random() * warnaConfetti.length)],
            rot: Math.random() * Math.PI * 2,
            vrot: (Math.random() - 0.5) * 0.3,
            hidup: 200
        });
    }
    if (!confettiAktif) {
        confettiAktif = true;
        animasiConfetti();
    }
}

function animasiConfetti() {
    ctxC.clearRect(0, 0, canvas.width, canvas.height);
    confettiPartikel.forEach(p => {
        p.vy += p.g;
        p.x  += p.vx;
        p.y  += p.vy;
        p.rot += p.vrot;
        p.hidup--;

        ctxC.save();
        ctxC.translate(p.x, p.y);
        ctxC.rotate(p.rot);
        ctxC.fillStyle = p.warna;
        ctxC.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        ctxC.restore();
    });
    confettiPartikel = confettiPartikel.filter(p => p.hidup > 0 && p.y < canvas.height + 40);
    if (confettiPartikel.length > 0) requestAnimationFrame(animasiConfetti);
    else { confettiAktif = false; ctxC.clearRect(0, 0, canvas.width, canvas.height); }
}

// ================================================================
// Init
// ================================================================
setMusicUI(false);
updateSisaLilin();
terjemahkan();
