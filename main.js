let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  // .typeString('<span style="color: #a586e7;">Soy Programadora Frontend en Tecnolochicas.</span>')
  .typeString('Desarrollo sitios web y escribo artículos sobre programación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
