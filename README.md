# Birthday Greeting Site

Kejutan ulang tahun interaktif — 9 halaman, animasi lucu, kartu foto yang bisa didownload, slideshow moments dengan musik latar, dan wishes wall yang tersimpan.

Dibuat pakai vanilla HTML / CSS / JS — tanpa framework, tanpa build step.

---

## Fitur

- **Welcome** — background rainbow yang shift warna, balon warna warni floating up, emoji + sparkle dekorasi
- **Form** — nama, tanggal lahir, cita-cita jadi konten personal di halaman berikutnya
- **Kartu 3D Flip** — amplop dengan wax seal yang bisa dibuka, isinya ucapan personal + tanda tangan
- **Fun Facts + Zodiak** — hitungan hari / jam / detak jantung / nafas yang udah kamu jalani, plus zodiak lengkap dengan SVG icon per sign
- **Kartu Foto** — upload atau ambil foto langsung dari kamera, pilih 1 dari 3 desain (Polaroid, Ribbon, Minimal) × 6 palette warna, download PNG, share ke WhatsApp
- **Moments Bareng** — upload multiple foto jadi slideshow dengan crossfade smooth, download sebagai video WebM lengkap dengan musik latar
- **Wishes Wall** — nulis harapan, disimpen ke localStorage per nama, bisa dibaca lagi tahun depan
- **Tiup Lilin** — kue 2 tingkat dengan 3 lilin, tap tombol untuk padamin, confetti burst di akhir
- **Credit + Countdown** — real-time countdown ke ultah berikutnya, share WA, restart

**Global:** toggle bahasa ID / EN, toggle musik on / off (auto-play dengan first-interaction fallback), tombol back di semua halaman, responsive.

---

## Setup

```bash
git clone https://github.com/IndahFadhila/Birthday.git
cd Birthday
```

Buka `index.html` di browser. Kalau mau pakai fitur kamera atau video export, jalankan lewat HTTP server (browser blokir `getUserMedia` di `file://`):

```bash
python -m http.server 8000
# buka http://localhost:8000
```

---

## Konfigurasi

Edit `script.js` bagian atas untuk ganti nama pengirim:

```js
const KONFIG = {
    pengirim: 'Indah Fadhila',
    pengirimAlias: 'ROXYINN',
    bahasa: 'id'
};
```

Nama pengirim ini muncul di kartu foto, tanda tangan flip card, kredit, dan copyright badge.

---

## Tech

- Vanilla HTML5 / CSS3 / JavaScript (ES2020+)
- Google Fonts: Poppins, Cormorant Garamond, Fredoka, Dancing Script, Pacifico
- Canvas API — render kartu foto & moments slideshow
- MediaRecorder + Web Audio API — export video WebM dengan musik latar
- getUserMedia — capture kamera in-app
- LocalStorage — persistent wishes wall

## Browser support

- Chrome / Edge / Firefox latest → full support (termasuk video export dengan audio)
- Safari 14.5+ → jalan, video export mungkin tanpa audio track
- Mobile browsers → responsive, kamera + video export kerja di Chrome / Edge Android

---

## Copyright

© 2026 Indah Fadhila (ROXYINN). All rights reserved.

Kode ini dibuat khusus untuk kejutan personal. Jangan di-copy atau di-redistribusi tanpa izin. Kalau mau adaptasi buat kejutan sendiri, silakan hubungi dulu.
