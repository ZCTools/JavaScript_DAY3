// Zafiyet Taraması
function scanVulnerabilities() {
    var code = document.getElementById("inputCode").value; // Kullanıcının girdiği kodu al

    var vulnerabilities = detectVulnerabilities(code); // Güvenlik zafiyetlerini tespit et

    displayResults(vulnerabilities); // Sonuçları ekrana yazdır
}

function detectVulnerabilities(code) {
    // Basit bir örnek: XSS saldırısı tespiti
    var vulnerabilities = [];

    // Örnek: <script>alert("XSS saldırısı");</script>
    if (code.includes("<script>")) {
        vulnerabilities.push("XSS saldırısı potansiyeli bulundu!");
    }

    // Daha fazla güvenlik zafiyeti tespiti için kod buraya eklenebilir

    return vulnerabilities;
}

function displayResults(vulnerabilities) {
    var resultDiv = document.getElementById("scanResult");
    resultDiv.innerHTML = ""; // Önceki sonuçları temizle

    if (vulnerabilities.length === 0) {
        resultDiv.innerText = "Güvenlik zafiyeti bulunamadı.";
    } else {
        resultDiv.innerHTML = "<h2>Güvenlik Zafiyetleri:</h2>";
        var ul = document.createElement("ul");
        vulnerabilities.forEach(function(vulnerability) {
            var li = document.createElement("li");
            li.innerText = vulnerability;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    }
}
