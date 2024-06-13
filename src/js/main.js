import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../css/theme/ajfisher.css';

// Initialize Reveal.js
let deck = new Reveal({
  width: 1280,
  height: 720,

  controls: false,
  controlsTutorial: false,
  progress: true,
  touch: true,
  transition: 'fade',
  backgroundTransition: 'fade',

  plugins: [
    Markdown,
    Notes
  ]
});
deck.initialize().then(() => {
  console.log('Reveal.js is inited');
}).catch(error => {
  console.log('error init', error);
});
