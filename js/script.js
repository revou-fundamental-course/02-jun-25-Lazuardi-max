// Ganti teks <span id="student-name">...</span> dengan nama pengguna
document.addEventListener("DOMContentLoaded", () => {
    const studentName = prompt("Masukkan nama kamu:");
    if (studentName) {
        document.getElementById("student-name").textContent = studentName;
    }
});

// Validasi form saat submit
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !message) {
            alert("Nama dan pesan harus diisi!");
        } else {
            alert(`Terima kasih, ${name}. Pesan kamu telah dikirim!`);
            form.reset();
        }
    });
});

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
//  Toogle menu untuk layar kecil
document.getElementById("menu-toggle").addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
});