document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let date = new Date().toLocaleDateString();

    let certificate = `
        <h2>Certificate of Participation</h2>
        <p>This is to certify that</p>
        <h3>${name}</h3>
        <p>has successfully participated in this event.</p>
        <p>Date: ${date}</p>
    `;

    document.getElementById('certificate').innerHTML = certificate;
    document.getElementById('certificate').style.display = 'block';
});