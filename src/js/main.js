import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../css/theme/ajfisher.css';
import '../css/fontawesome/css/fontawesome.min.css';
import '../css/fontawesome/css/brands.min.css';

let showNotes = false;
if( window.location.href.match( /print-pdf/gi ) ) {
  showNotes = true;
} else if( window.location.href.match( /wdcl2024/gi ) ) {
  // turn the notes on if we're in prod as well
  showNotes = true;
}

// Initialize Reveal.js
let deck = new Reveal({
  width: 1280,
  height: 720,

  center: false,
  controls: false,
  controlsTutorial: false,
  progress: true,
  touch: true,
  transition: 'fade',
  backgroundTransition: 'fade',

  totalTime: 1740,

  plugins: [
    Markdown,
    Notes
  ],

  showNotes,
  pdfSeparateFragments: false
});

deck.initialize().then(() => {
  console.log('Reveal.js is inited');
  console.log(`Notes on: ${showNotes}`);
  if( window.location.href.match( /wdcl2024/gi ) ) {
    document.getElementsByTagName("body")[0].classList.add('production');
  }
  if (window.location.href.match(/embed/gi )) {
    document.getElementsByTagName("body")[0].classList.add('embed');
  }
}).catch(error => {
  console.log('error init', error);
});
