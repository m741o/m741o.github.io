const farewellTracks = [
  "audio/farewell/bye_bye.mp3",
  "audio/farewell/bye_bye_cya.mp3",
  "audio/farewell/rblx_bye.mp3",
  "audio/farewell/ok_bye_bye.mp3",
  "audio/farewell/bye_bye_jevil.mp3",
  "audio/farewell/bye_bye_jinx.mp3",
  "audio/farewell/bye_have_a_gr8_time.mp3",
  "audio/farewell/flowery_goodbye.mp3"
];

document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;
  if (link.target !== '_blank') return;          // only new-tab links

  const href = link.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  // Only external links
  const currentHost = window.location.host;
  const linkHost = new URL(href, window.location.href).host;
  if (linkHost === currentHost) return;

  if (farewellTracks.length > 0) {
    const track = farewellTracks[Math.floor(Math.random() * farewellTracks.length)];
    const audio = new Audio(track);
    audio.volume = 0.7;
    audio.play().catch(() => {});
  }

});
