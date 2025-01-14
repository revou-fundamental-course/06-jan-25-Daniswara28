document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen yang dibutuhkan
    const form = document.getElementById('message-form');
    const nameInput = document.getElementById('name');
    const birthDateInput = document.getElementById('birth-date');
    const genderInputs = document.getElementsByName('gender');
    const messageInput = document.getElementById('message');
    
    // Ambil elemen untuk welcome message dan output
    const welcomeMessage = document.getElementById('user-name');
    const outputName = document.getElementById('output-name');
    const outputBirthDate = document.getElementById('output-birth-date');
    const outputGender = document.getElementById('output-gender');
    const outputMessage = document.getElementById('output-message');
    const currentTimeElement = document.getElementById('current-time');
    
    // Tambahkan gambar untuk banner slide
    let slideIndex = 0;
    const images = [
        'url(https://revou-fundamental-course.github.io/06-jan-25-Daniswara28/src/banner1.jpeg)',
        'url(https://revou-fundamental-course.github.io/06-jan-25-Daniswara28/src/banner2.jpg)',
        'url(https://revou-fundamental-course.github.io/06-jan-25-Daniswara28/src/banner3.png)'
    ];
    
    // Fungsi untuk mengubah background gambar
    function changeBackgroundImage() {
        const welcomeSection = document.getElementById('welcome');
        if (welcomeSection) {
            // Ganti background image berdasarkan indeks
            slideIndex = (slideIndex + 1) % images.length; // Loop kembali ke awal
            welcomeSection.style.backgroundImage = images[slideIndex];
        }
    }

    // Set gambar pertama langsung saat halaman dimuat
    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection) {
        welcomeSection.style.backgroundImage = images[0];
    }

    // Ganti gambar setiap 5 detik
    setInterval(changeBackgroundImage, 5000);

    
    // Fungsi untuk memvalidasi form
    form.addEventListener('submit', function (event) {
        // Mencegah form untuk submit jika ada input yang kosong
        event.preventDefault();
        
        let valid = true;
        let errorMessage = '';

        // Validasi Nama
        if (nameInput.value.trim() === '') {
            valid = false;
            errorMessage += 'Nama harus diisi.\n';
        }

        // Validasi Tanggal Lahir
        if (!birthDateInput.value) {
            valid = false;
            errorMessage += 'Tanggal lahir harus diisi.\n';
        }

        // Validasi Jenis Kelamin
        let genderSelected = false;
        for (let i = 0; i < genderInputs.length; i++) {
            if (genderInputs[i].checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            valid = false;
            errorMessage += 'Jenis kelamin harus dipilih.\n';
        }

        // Validasi Pesan
        if (messageInput.value.trim() === '') {
            valid = false;
            errorMessage += 'Pesan harus diisi.\n';
        }

        // Jika form valid, tampilkan welcome message dan output, jika tidak, tampilkan error
        if (valid) {
            // Update welcome message dengan nama pengguna
            welcomeMessage.textContent = nameInput.value;

            // Tampilkan data di output
            outputName.textContent = nameInput.value;
            outputBirthDate.textContent = birthDateInput.value;
            
            // Menampilkan gender yang dipilih
            let genderValue = '';
            for (let i = 0; i < genderInputs.length; i++) {
                if (genderInputs[i].checked) {
                    genderValue = genderInputs[i].value;
                    break;
                }
            }
            outputGender.textContent = genderValue;

            outputMessage.textContent = messageInput.value;

            // Tampilkan waktu saat ini
            const currentTime = new Date().toLocaleString();
            currentTimeElement.textContent = currentTime;

            // Reset form setelah submit
            form.reset();
        } else {
            alert(errorMessage); // Menampilkan pesan error
        }
    });
});