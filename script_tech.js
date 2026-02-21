document.addEventListener('DOMContentLoaded', () => {
    // QR Code Generation
    // Using a simple QR API for no-dependency feel, but could be replaced with qrcode.js
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rodinné+Centrum+Milovice";
    const qrContainer = document.getElementById('map-qr');
    
    // Generate QR via an API for simplicity in this demo
    const qrImg = document.createElement('img');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(mapUrl)}`;
    qrImg.alt = "Map QR Code";
    qrImg.style.width = "100%";
    qrImg.style.height = "100%";
    qrContainer.appendChild(qrImg);

    // ICS Calendar Invite Functionality
    window.downloadICS = function() {
        const event = {
            title: "Emi's 6th Birthday Party",
            description: "Rainbow Unicorn High-Tech Celebration!",
            location: "Rodinné Centrum Milovice",
            start: "20260321T140000",
            end: "20260321T180000"
        };

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PROID:-//Tech Invitation//EN",
            "BEGIN:VEVENT",
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `LOCATION:${event.location}`,
            `DTSTART:${event.start}`,
            `DTEND:${event.end}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'emi_birthday.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Glitch effect on hover for the title
    const title = document.querySelector('.rainbow-glow');
    title.addEventListener('mouseover', () => {
        title.style.filter = `drop-shadow(0 0 20px var(--accent-blue)) contrast(1.2)`;
    });
    title.addEventListener('mouseout', () => {
        title.style.filter = `drop-shadow(0 0 15px rgba(138, 91, 255, 0.3))`;
    });
});
