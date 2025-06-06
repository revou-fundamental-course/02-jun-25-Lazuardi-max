document.addEventListener("DOMContentLoaded", () => {
    // Sambutan nama pengguna
    const studentName = prompt("Masukkan nama kamu:");
    if (studentName) {
        document.getElementById("student-name").textContent = studentName;
    }

    //Validasi dan tampilan hasil form
    const form = document.getElementById("contact-form")
    const result = document.getElementById("form-result")

    form.addEventListener("submit", function (event){
        event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

        // Validasi dasar
        if (!name || !email || !phone || !message) {
            alert("Semua kolom harus diisi!");
            return;
        }

         // Validasi format email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Format email tidak valid!");
            return;
        }

        // Validasi nomor HP (angka, minimal 10 digit)
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Nomor HP harus berupa angka dan 10-15 digit!");
            return;
        }

        result.innerHTML = `
            <h3>Data Anda:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        form.reset();
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
//  Toogle menu (mobile)
const menuToggle = document.getElementById("menu-toggle")
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("show");
    });
}