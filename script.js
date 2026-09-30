/* ================= PINDAH HALAMAN ================= */

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= JAWABAN BENAR / SALAH ================= */

function checkAnswer(button, correctAnswer) {

    const answer = button.parentElement.querySelector(".answer");

    if (correctAnswer === true) {

        answer.innerHTML =
            "✅ BENAR — Pernyataan tersebut sesuai dengan materi.";

        answer.style.color = "#26733b";

    } else {

        answer.innerHTML =
            "❌ SALAH — Pernyataan tersebut tidak sesuai dengan materi.";

        answer.style.color = "#a83232";

    }

    button.innerHTML = "Jawaban ditampilkan";
}


/* ================= FOTO BESAR ================= */

function openImage(imageSource) {

    const modal = document.getElementById("imageModal");

    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";

    modalImage.src = imageSource;
}


/* ================= TUTUP FOTO ================= */

function closeImage() {

    document.getElementById("imageModal").style.display = "none";

}


/* ================= ESC UNTUK MENUTUP FOTO ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeImage();

    }

});