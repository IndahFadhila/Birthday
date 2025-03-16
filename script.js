// Ambil elemen audio untuk backsound dan suara tiup lilin
const backsound = document.getElementById('backsound');
const tiupAudio = document.getElementById('tiupAudio');

// Fungsi untuk memulai backsound
function mulaiBacksound() {
    backsound.play();
}

// Navigasi halaman
function keHalaman1() {
    document.getElementById('halaman5').classList.add('hidden');
    document.getElementById('halaman1').classList.remove('hidden');
}

function keHalaman2() {
    document.getElementById('halaman1').classList.add('hidden');
    document.getElementById('halaman2').classList.remove('hidden');
}

function keHalaman3(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const citaCita = document.getElementById('citaCita').value;

    const ucapan = `Selamat Ulang Tahun, ${nama}! Semoga di usia yang ke-${new Date().getFullYear() - new Date(tanggalLahir).getFullYear()} ini, kamu bisa meraih cita-citamu menjadi ${citaCita}.`;
    document.getElementById('ucapan').innerText = ucapan;

    document.getElementById('halaman2').classList.add('hidden');
    document.getElementById('halaman3').classList.remove('hidden');
}

function keHalaman4() {
    document.getElementById('halaman3').classList.add('hidden');
    document.getElementById('halaman4').classList.remove('hidden');
}

let hitungTiupan = 0;

function tiupLilin() {
    const api = document.getElementById('api');

    // Mainkan efek suara tiup lilin
    tiupAudio.play();

    // Kurangi ukuran api setiap kali ditiup
    hitungTiupan++;
    const scale = 1 - (hitungTiupan * 0.1);
    api.style.transform = `translateX(-50%) scale(${scale})`;

    // Jika sudah ditiup 10 kali, matikan api
    if (hitungTiupan >= 10) {
        api.style.display = 'none';
        document.getElementById('popup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('halaman4').classList.add('hidden');
            document.getElementById('halaman5').classList.remove('hidden');
        }, 6000);
    }
}