var myImage = document.querySelector('.about .about-image img');
var id;
var images = ["D:\iti\html&css\profile2\WhatsApp Image 2025-01-21 at 12.53.39_f143676f.jpg", "D:\iti\html&css\profile2\WhatsApp Image 2025-01-21 at 12.53.39_f143676f.jpg", "D:\iti\html&css\profile2\Screenshot 2025-01-14 132134.png"]
var i = 0;
function show() {
    myImage.src = images[i];
    i++
    if (i == images.length)
        i = 0;
}
id = setInterval(show, 2000);
