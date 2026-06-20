let currentPlatform = 'youtube';
function setPlatform(btn, platform) {
    currentPlatform = platform;
    document.querySelectorAll('.p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

async function fetchVideo() {
    const url = document.getElementById("urlInput").value.trim();
    if (!url) { alert("لنک درج کریں!"); return; }

    try {
        const response = await fetch("/api/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: url })
        });
        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            alert("لنک درست نہیں ہے یا ویڈیو ڈاؤن لوڈ نہیں ہو سکتی۔");
        }
    } catch (e) {
        alert("سرور میں مسئلہ آ رہا ہے۔");
    }
}
