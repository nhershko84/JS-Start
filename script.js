// script.js

// const homeContent = "<p>Welcome to my portfolio homepage!</p>";
// const aboutContent = "<p>About me: I am a passionate web developer.</p>";
// const contactContent = "<p>Contact me at: N.Hershko84@Gmail.com</p>";
// const resumeContent = "<p>Download my resume: <a href='assets/Resume.pdf' download='YourResumeName.pdf'>Resume</a></p>";

// Initial content
document.getElementById('content').innerHTML = homeContent;

// Event listeners for button clicks
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

document.getElementById('homeBtn').addEventListener('click', () => {
  window.location.href = 'home.html'; // Adjust the path based on your project structure
});

// Repeat this for other buttons and HTML files





// 






// const homeContent = "<p>Welcome to my portfolio homepage!</p>";
// const aboutContent = "<p>About me: I am a passionate web developer.</p>";
// const contactContent = "<p>Contact me at: N.Hershko84@Gmail.com</p>";
// const resumeContent = "<p>Download my resume: <a href= assets/Resume.pdf download='YourResumeName.pdf'>Resume</a></p>";

// // script.js

// // Event listeners for button clicks
// document.getElementById('homeBtn').addEventListener('click', () => {
//   window.location.href = 'home.html';
// });

// document.getElementById('aboutBtn').addEventListener('click', () => {
//   window.location.href = 'about.html';
// });

// document.getElementById('contactBtn').addEventListener('click', () => {
//   window.location.href = 'contact.html';
// });

// document.getElementById('resumeBtn').addEventListener('click', () => {
//   window.location.href = 'resume.html';
// });



// Initial content
// document.getElementById('content').innerHTML = homeContent;

// Event listeners for button clicks
// document.getElementById('homeBtn').addEventListener('click', () => {
//     document.getElementById('content').innerHTML = homeContent;
// });

// document.getElementById('aboutBtn').addEventListener('click', () => {
//     document.getElementById('content').innerHTML = aboutContent;
// });

// document.getElementById('contactBtn').addEventListener('click', () => {
//     document.getElementById('content').innerHTML = contactContent;
// });

// document.getElementById('resumeBtn').addEventListener('click', () => {
//     document.getElementById('content').innerHTML = resumeContent;
// });


