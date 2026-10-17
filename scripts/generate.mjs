import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { reels } from '../src/reels.mjs';
const week = new Date().toISOString().slice(0,10);
for (const [index, reel] of reels.entries()) {
  const dir = join('generated', `reel-${index+1}`);
  await mkdir(dir, {recursive:true});
  const html = `<!doctype html><html lang="es"><head><meta charset="UTF-8"><style>
  *{box-sizing:border-box}body{margin:0;background:#101b12;color:white;font-family:Arial,sans-serif}
  #stage{width:1080px;height:1920px;position:relative;overflow:hidden;background:radial-gradient(circle at 80% 20%,#28a728 0%,#102617 55%,#09110d 100%)}
  .clip{position:absolute;left:80px;right:80px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:800}
  .brand{top:125px;color:#33ff33;font-size:72px}.headline{top:480px;height:650px;font-size:110px;line-height:1.1}
  .sub{top:1260px;font-size:54px;font-weight:400}.cta{top:1560px;background:#33ff33;color:#071309;border-radius:32px;padding:35px;font-size:52px}
  </style></head><body><div id="stage" data-composition-id="zona-${index+1}" data-start="0" data-width="1080" data-height="1920">
  <div class="clip brand" data-start="0" data-duration="12" data-track-index="0">ZonaQuintas</div>
  <div class="clip headline" data-start="1" data-duration="10" data-track-index="1">${escapeHTML(reel.title)}</div>
  <div class="clip sub" data-start="2" data-duration="9" data-track-index="2">${escapeHTML(reel.subtitle)}</div>
  <div class="clip cta" data-start="7" data-duration="5" data-track-index="3">${escapeHTML(reel.cta)}</div>
  </div></body></html>`;
  await writeFile(join(dir,'index.html'),html);
}
await writeFile('generated/manifest.json', JSON.stringify({week,reels},null,2));
function escapeHTML(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
