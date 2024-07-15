// ads.js

const adImages = [
    'https://s.yimg.com/cv/apiv2/adspecs/format/demos/33/Publix_sw__160x600_1630036809791.jpg',
    'https://live.staticflickr.com/8339/8263840740_b14ae73d1a_z.jpg'
];

// Function to get a random image URL
function getRandomAdImageUrl() {
    const randomIndex = Math.floor(Math.random() * adImages.length);
    return adImages[randomIndex];
}

// Function to update ad image
function updateAdImage() {
    const adSpace = document.getElementById('ad-space');
    const randomImageUrl = getRandomAdImageUrl();
    adSpace.style.backgroundImage = `url('${randomImageUrl}')`;
}

// Initial load of ad image
updateAdImage();

// Change ad image every 60 seconds
setInterval(updateAdImage, 60000);

