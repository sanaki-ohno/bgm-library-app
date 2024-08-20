import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/audio-sample/:filename', (req, res) => {
  const filename = req.params.filename;
  console.log('Requested filename:', filename); // デバッグログ

  const filePath = join(__dirname, 'public', 'audio', filename);
  console.log('Full file path:', filePath); // デバッグログ

  if (!fs.existsSync(filePath)) {
    console.log('File not found:', filePath); // デバッグログ
    return res.status(404).send('File not found');
  }

  res.contentType('audio/mpeg');

  ffmpeg(filePath)
    .setStartTime(0)
    .duration(30)
    .format('mp3')
    .audioCodec('libmp3lame')
    .audioBitrate(128)
    .on('error', (err) => {
      console.error('FFmpeg error:', err.message);
      res.status(500).send('An error occurred while processing the audio');
    })
    .pipe(res, { end: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
