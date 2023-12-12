let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ed5887;">Enseño programación web y estudio desarrollo de software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
