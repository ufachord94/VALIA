"""Munta el prototip v6: tipografia del nom + CSS + cos + dades (fotos i icones) + scripts."""
import base64, io, json
from PIL import Image, ImageFilter
V6 = '/home/claude/v6'; V5 = '/home/claude/v5'; P = '/home/claude/photos'

def webp_file(path, size=None, q=68, blur=0, crop=None):
    im = Image.open(path).convert('RGB')
    if crop: im = im.crop(crop)
    if size: im = im.resize(size, Image.LANCZOS)
    if blur: im = im.filter(ImageFilter.GaussianBlur(blur))
    b = io.BytesIO(); im.save(b, 'WEBP', quality=q, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode()
def raw_webp(path):
    return 'data:image/webp;base64,' + base64.b64encode(open(path, 'rb').read()).decode()

photos = {
    # composicions il·lustratives fetes per programa (a substituir per fotos reals)
    'fageda': webp_file(f'{P}/fageda.png', q=64), 'gallecs': webp_file(f'{P}/gallecs.png', q=62),
    'termes': webp_file(f'{P}/termes.png', q=66), 'smfai': webp_file(f'{P}/smfai.png', q=70),
    'load': webp_file(f'{P}/fageda.png', size=(260, 562), q=70, blur=5),
}
# fotos de l'equip: NOMÉS al carrusel de la pantalla 2 (accés)
for k in ['family', 'hikers', 'sea']:
    photos[f'{k}_raw'] = raw_webp(f'{V5}/img/{k}_raw.webp')

fonts = open(f'{V5}/fonts.css').read().split('\n')
fonts = '\n'.join(l for l in fonts if "'GV Fraunces'" in l)
css = ''.join(open(f'{V6}/{n}').read() + '\n' for n in ['ios.css', 'ios2.css', 'page.css'])
body = open(f'{V6}/body.html').read()
lucide = json.load(open('/home/claude/build/lucide_icons.json'))
ORDER = ['spring.js', 'rig.js', 'anim.js', 'mascot.js', 'app.js', 'ui.js', 'scr_onb.js', 'scr_chat.js', 'scr_explore.js',
         'scr_route.js', 'scr_profile.js', 'scr_rewards.js', 'loading.js', 'main.js', 'page.js']
js = [open(f'{V6}/{n}').read() for n in ORDER]
head = ('<title>Prototip GreenVallès v6</title>\n'
        '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">\n'
        f'<style>\n{fonts}\n{css}\n</style>\n')
data = (f'<script>document.documentElement.lang="ca";\nconst PH={json.dumps(photos)};\n'
        f'const LUCIDE={json.dumps(lucide, ensure_ascii=False)};\n</script>\n')
scripts = ''.join(f'<script>\n{j}\n</script>\n' for j in js)
page = head + body + '\n' + data + scripts
open(f'{V6}/v6.html', 'w').write(page)
test = ('<!doctype html><html lang="ca"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
        '<style>:root{color-scheme:light}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + page + '</body></html>')
open(f'{V6}/v6_test.html', 'w').write(test)
print('v6.html', len(page) // 1024, 'KB; fotos', sum(len(v) for v in photos.values()) // 1024, 'KB; tipografia', len(fonts) // 1024,
      'KB; icones', len(json.dumps(lucide)) // 1024, 'KB; JS', sum(len(j) for j in js) // 1024, 'KB; CSS', len(css) // 1024, 'KB')
for k, v in photos.items(): print(' ', k, len(v) // 1024, 'KB')
