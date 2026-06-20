export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const { url } = req.body;
    
    const response = await fetch("https://api.cobalt.tools/api/json", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    res.status(200).json(data);
}
