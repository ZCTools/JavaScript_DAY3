// XSS Koruması
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    // Yorum alanındaki metni al
    var comment = document.getElementById("comment").value;

    // XSS saldırılarını önlemek için metni filtrele
    comment = sanitizeHTML(comment);

    // Filtrelenmiş yorumu ekle
    addComment(comment);

    // Formu temizle
    document.getElementById("comment").value = "";
});

function sanitizeHTML(str) {
    // HTML etiketlerini kaldır
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function addComment(comment) {
    // Yorumu listeye ekle
    var li = document.createElement("li");
    li.innerHTML = comment;
    document.getElementById("commentList").appendChild(li);
}
