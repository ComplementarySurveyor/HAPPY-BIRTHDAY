// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to change text opacity
function opacity(letter_id, opacity) {
    var el = document.getElementById(letter_id);
    el.style.opacity = opacity;
}

// Function to remove the element with a fade out effect
function remove(letter_id, speed) {
    setTimeout(function() {
        el.style.pointerEvents = 'none'; // Disable the element
    });
    var seconds = speed / 1000;
    var el = document.getElementById(letter_id);
    el.style.transition = "opacity " + seconds + "s ease";
    el.style.opacity = 0;

}

// Function to get a random image from the Images folder
function getRandomImage() {
    var images = [
        'pic1.jpg', 
        'pic2.jpg',
        'pic3.jpg',
        'pic4.jpg',
    ];
    var image = images[Math.floor(Math.random() * images.length)];
    return './Images/' + image;
}

// Function to handle letter click and change background image
function handleLetterClick() {
    document.body.style.backgroundImage = "url("+getRandomImage()+")";
}

// Add event listeners to each letter
// I just copied this from the internet, I don't know how it works
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.letter').forEach(function(span) {
        span.addEventListener('click', function() {
            document.querySelector('audio').play();
            setTimeout(function() {
            if (j === 0) {
                typeAllMessages();
            }
            handleLetterClick(span.id);
            }, 1000); // Delay of 1 second (1000 milliseconds)
        });
    });
});

var speed = 100; // Speed of typing in milliseconds

const messages = [
    "You can click the letters above...",
    "In order to see a random picture", 
    "I could add any number of messages I want", 
    "msg 4", 
    "msg 5", 
    "w/ love, Arfarf and Prangprang"
];

var j=0; // Index of the message

function typeAllMessages() {
    // Loop through all messages
    if (j < messages.length) {

        // Message index
        var message = messages[j];

        // Loop through each letter of the message in the correct order
        for (let i = 0; i < message.length; i++) {
            setTimeout(function() {
            document.getElementById("animText").innerHTML += message.charAt(i);
            }, i * speed);
        }

        // Loop through each letter of the message in reverse
        setTimeout(function() {
            for (let i = message.length; i >= 0; i--) {
            setTimeout(function() {
                document.getElementById("animText").innerHTML = message.substring(0, i);
            }, (message.length - i) * speed * 0.25);
            }
        }, message.length * speed *1.5);
        
        // Increment message index
        j++;
        
        // Call the function again
        setTimeout(function() {
            typeAllMessages();
        }, message.length * 2 * speed);
    }
}