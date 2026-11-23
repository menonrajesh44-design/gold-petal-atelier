(() => {
 const section = document.getElementById('atelier-videos');
 const player = section.querySelector('video');
 const buttons = section.querySelectorAll('[data-film]');
 buttons.forEach(button => button.addEventListener('click', () => {
   player.pause();
   section.querySelector('.atelier-video-stage').classList.toggle('portrait-film',button.dataset.portrait === 'true');
   player.src = button.dataset.film;
   player.setAttribute('aria-label', 'Gold Petal Atelier ' + button.textContent);
   buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
   player.load();
   const playback = player.play();
   if (playback) playback.catch(() => {});
 }));
})();
