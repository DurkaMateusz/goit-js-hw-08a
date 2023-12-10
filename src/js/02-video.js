import Player from '@vimeo/player';
import throttle from 'lodash.throttle'
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on(
    'timeupdate',
    throttle(
      data => localStorage.setItem('videoplayer-current-time', data.seconds),
      1000
    )
  );
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    player
      .setCurrentTime(storedTime)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
  
          default:
            // some other error occurred
            break;
        }
      });
  }