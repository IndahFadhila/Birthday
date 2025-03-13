// function keHalaman2() {
//     document.getElementById('halaman1').classList.add('hidden');
//     document.getElementById('halaman2').classList.remove('hidden');
// }

// function keHalaman3(event) {
//     event.preventDefault();
//     const nama = document.getElementById('nama').value;
//     const tanggalLahir = document.getElementById('tanggalLahir').value;
//     const citaCita = document.getElementById('citaCita').value;

//     const ucapan = `Selamat Ulang Tahun, ${nama}! Semoga di usia yang ke-${new Date().getFullYear() - new Date(tanggalLahir).getFullYear()} ini ataupun tahun-tahun berikutnya, kamu bisa meraih cita-citamu menjadi ${citaCita}.`;
//     document.getElementById('ucapan').innerText = ucapan;

//     document.getElementById('halaman2').classList.add('hidden');
//     document.getElementById('halaman3').classList.remove('hidden');
// }

// function keHalaman4() {
//     document.getElementById('halaman3').classList.add('hidden');
//     document.getElementById('halaman4').classList.remove('hidden');
// }

// let hitungTiupan = 0;

// function tiupLilin() {
//     const api = document.getElementById('api');
//     const tiupAudio = document.getElementById('tiupAudio');

//     // Mainkan efek suara
//     tiupAudio.play();

//     // Kurangi ukuran api setiap kali ditiup
//     hitungTiupan++;
//     const scale = 1 - (hitungTiupan * 0.1);
//     api.style.transform = `translateX(-50%) scale(${scale})`;

//     // Jika sudah ditiup 10 kali, matikan api
//     if (hitungTiupan >= 10) {
//         api.style.display = 'none';
//         document.getElementById('popup').style.display = 'block';
//         setTimeout(() => {
//             document.getElementById('halaman4').classList.add('hidden');
//             document.getElementById('halaman5').classList.remove('hidden');
//         }, 5000);
//     }
// }

// function pilihKartu() {
//     const kartu = document.querySelector('.kartu');
//     const tiupAudio = document.getElementById('tiupAudio');

//     // Balik kartu
//     kartu.classList.add('terbalik');

//     setTimeout(() => {
//         kartu.classList.add('zoom');
//         tiupAudio.play(); // Mainkan efek suara jika diperlukan
//     }, 600); // Sesuaikan dengan durasi animasi balik kartu

//     setTimeout(() => {
//         document.getElementById('halaman2').classList.add('hidden');
//         document.getElementById('halaman3').classList.remove('hidden');
//     }, 1600); // Sesuaikan dengan durasi animasi zoom
// }

// Backsound
const backsounds = [
    document.getElementById('backsound1'),
    document.getElementById('backsound2'),
    document.getElementById('backsound3'),
    document.getElementById('backsound4'),
    document.getElementById('backsound5')
];

function putarBacksound(halaman) {
    // Hentikan semua backsound
    backsounds.forEach(sound => sound.pause());
    // Putar backsound sesuai halaman
    backsounds[halaman - 1].play();
}

// Navigasi halaman
function keHalaman2() {
    document.getElementById('halaman1').classList.add('hidden');
    document.getElementById('halaman2').classList.remove('hidden');
    putarBacksound(2);
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
    putarBacksound(3);
}

function keHalaman4() {
    document.getElementById('halaman3').classList.add('hidden');
    document.getElementById('halaman4').classList.remove('hidden');
    putarBacksound(4);
}

function keHalaman5() {
    document.getElementById('halaman4').classList.add('hidden');
    document.getElementById('halaman5').classList.remove('hidden');
    putarBacksound(5);
}

function keHalaman6() {
    document.getElementById('halaman5').classList.add('hidden');
    document.getElementById('halaman6').classList.remove('hidden');
    putarBacksound(6);
}

// Pilih Foto
function pilihFoto(idFoto, penjelasan) {
    document.getElementById('teksPenjelasan').innerText = penjelasan;
    document.getElementById('penjelasanFoto').classList.remove('hidden');
}

// Tiup Lilin
let hitungTiupan = 0;

function tiupLilin() {
    const api = document.getElementById('api');
    const tiupAudio = document.getElementById('tiupAudio');

    // Mainkan efek suara
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
            keHalaman6();
        }, 2000);
    }
}

// Mulai backsound di halaman 1
putarBacksound(1);