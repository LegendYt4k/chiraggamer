const { spawn } = require('child_process');

const ffmpegCommand = 'ffmpeg -stream_loop -1 -re -i g.mp4 -stream_loop -1 -re -i https://stream-152.zeno.fm/ez4m4918n98uv -c:v libx264 -pix_fmt yuvj420p -maxrate 512k -preset ultrafast -r 12 -framerate 1 -g 48 -crf 23 -c:a aac -b:a 96k -ar 44100 -strict -2 -video_track_timescale 100 -b:v 500k -s 1280x720 -f flv rtmp://a.rtmp.youtube.com/live2/xxr2-pf89-k1c0-egz6-f0y2';

const ffmpegProcess = spawn(ffmpegCommand, {
  shell: true,
  stdio: 'inherit' // Use 'inherit' to show the logs in the console
});

ffmpegProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Bot Online!');
  } else {
    console.error(`FFmpeg process exited with code ${code}`);
  }
});

ffmpegProcess.on('error', (err) => {
  console.error('Error starting FFmpeg process:', err);
});
