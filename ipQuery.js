// IP Adresi ile Yer ve Coğrafi Konum Bulma 
function trackIP() {
    const ip = document.getElementById('ipInput').value;

    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('IP adresi bulunamadı');
            }
            return response.json();
        })
        .then(data => {
            const city = data.city;
            const country = data.country_name;
            const latitude = data.latitude;
            const longitude = data.longitude;
            //                                                      Şehir    Ülke         Enlem         Boylam
            document.getElementById('ipInfo').innerHTML = `Konum: ${city}, ${country} (${latitude}, ${longitude})`;
        })
        .catch(error => {
            document.getElementById('ipInfo').innerHTML = 'Hata: ' + error.message;
        });
}
