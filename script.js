// script.js

// Dummy content for demonstration purposes
const homeContent = "<p>Welcome to my portfolio homepage!</p>";
const aboutContent = "<p>About me: I am a passionate web developer.</p>";
const contactContent = "<p>Contact me at: N.Hershko84@Gmail.com</p>";
const resumeContent = "<p>My resume will be available soon.</p>";


document.getElementById('content').innerHTML = homeContent;

document.getElementById('homeBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = homeContent;
});

document.getElementById('aboutBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = aboutContent;
});

document.getElementById('contactBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = contactContent;
});

document.getElementById('resumeBtn').addEventListener('click', () => {
    document.getElementById('content').innerHTML = resumeContent;
});

