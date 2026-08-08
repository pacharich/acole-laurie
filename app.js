// ============ 出演可能日 ============
// 候補日が確定したら SCHEDULE_DATES に日付を追加し、
// AVAILABILITY にモデルごとの出欠（'ok' | 'ng' | 'pending'）を入れると自動表示されます。
const SCHEDULE_DATES = [];

const AVAILABILITY = {
  // 例: mio: SCHEDULE_DATES.map(date => ({ date, status: 'pending' })),
};

const PLACEHOLDER = '情報待ち';

// ============ Model Data ============
// 新婦役モデル
const FEMALES = [
  {
    id: 'mio', name: 'ミオ', age: 33,
    height: 153, size: 'B 82cm / W 55cm / H 86cm',
    shoe: '22.5cm', exp: PLACEHOLDER, location: '東京都',
    achievementTitle: '出演経歴・実績',
    achievementSections: [
      {
        title: '出演経歴',
        items: [
          "MicheBloomin' PR", '9unq（クアンク）PR', 'PLACOLE & DRESSY',
          'Regression クレイマスク', 'Eclat Charme', '東京ミッドタウン八重洲',
          '東京プリンスホテル', 'Afternoon Tea'
        ]
      },
      {
        title: '雑誌掲載',
        items: ['美人百花', 'non-no', 'anan']
      },
      {
        title: '舞台・広告モデル 等',
        items: ['舞台 ガンバの冒険', '翼を下さい', 'アラビアンナイト']
      },
      {
        title: '映画・ドラマ',
        items: [
          'ネバーダンス（佐藤克則 監督）',
          '夢の中へ（宮崎彩代 監督／女優賞）',
          'お姫様になりたくて（川地廣和 監督）',
          '恋に至る病（木村承子 監督）',
          '世にも奇妙な物語（生徒役）'
        ]
      },
      {
        title: '企業PV',
        items: ['Panasonic', 'KDDI']
      }
    ]
  },
  {
    id: 'maika', name: 'マイカ', age: 29,
    height: 154, size: PLACEHOLDER,
    shoe: '22.5cm', exp: PLACEHOLDER, location: '東京都',
    achievementTitle: '出演歴',
    achievementSections: [
      {
        title: 'ドラマ',
        items: [
          'CX 月9「5→9 私に恋したお坊さん」',
          'EX「ハケン占い師アタル」',
          'TX「牙狼-GARO- 魔戒烈伝」'
        ]
      },
      {
        title: 'バラエティ',
        items: [
          'CX「痛快TVスカッとジャパン」4度出演',
          'TOKAIケーブルネットワーク「田中律子の旅するSUP」2年レギュラー',
          '「直撃！シンソウ坂上」'
        ]
      },
      {
        title: '映画',
        items: ['トモダチゲーム', '海にうかぶ月', '志乃ちゃんは自分の名前が言えない', '友だちのパパがすき']
      },
      {
        title: 'CM',
        items: ['ソフトバンク', 'HONDA（Web）', 'GungHo']
      },
      {
        title: '舞台',
        items: ['「-Knights- アーサー王と円卓の騎士」2年連続']
      },
      {
        title: 'MV',
        items: ['ASIAN KUNG-FU GENERATION「オペラグラス」']
      }
    ]
  },
  {
    id: 'kano', name: 'カノ', age: 29,
    height: 157, size: 'B 70cm / W 55cm / H 82cm',
    shoe: '23.0cm', exp: PLACEHOLDER, location: '大阪府',
    achievementTitle: '主な出演歴・実績',
    achievementSections: [
      {
        title: 'ブライダル',
        items: [
          'STATICE PHOTOGRAPHY', 'PHOTO STUDIO 麗', '阿部写真館',
          'THE PACIFIC HARBOR', 'ブライダルコアときわ', 'POPCORN KOBE',
          'STUDIO ARC', '着物くろーぜっと JuJu', 'ホテルロイヤルクラシック大阪'
        ]
      },
      {
        title: '広告（スチール）',
        items: [
          'NAZUNA', 'Hana Musubi', '花と蝶〜fleur papillon〜', 'toiki', 'ojnn',
          'CYBER PUNK PHOTO SUMMIT', 'OKURU.', 'DR PLANT', 'may.B',
          'DearMyLoveRose', 'kirakurai'
        ]
      },
      {
        title: '広告（ムービー）',
        items: ['HOTEL SHE 泊まれる演劇', '宝塚市国際環境協会 ナチュールスパ宝塚']
      },
      {
        title: '雑誌掲載・その他',
        items: [
          'ar 2023年9月号', 'Hair Magazine yes vol.10', 'sweet 2024年9月号',
          'HELLOO MY NAME IS… SNS広告担当（2023/10〜）',
          'フォトグラファー伊坂謙 様 ライティングワークショップ モデル'
        ]
      }
    ]
  },
  {
    id: 'nakamura', name: '中村恵利華', age: 26,
    height: 163.5, size: 'B 79cm / W 60cm / H 86cm',
    shoe: '24.0cm', clothesSize: '7号', hairColor: 'ロング・ダークブラウン',
    exp: 5, location: '東京都',
    achievementTitle: '出演実績',
    achievementSections: [
      {
        title: '広告',
        items: [
          'Microsoft Surface「サがつく、Surface」映像広告',
          'SHIMBOL モニターレコーダー 紹介映像',
          '静岡県 南伊豆町 観光PR映像',
          '吉野家 TikTok用映像広告',
          'オンディーヌ 振袖広告',
          '味の素「0.1gのチャレンジ」Web用映像広告',
          'ヒルトン東京ベイ 屋外プール プロモーション映像',
          'SmallRig SNS用映像広告',
          'SAKURA TOKYO 着物・浴衣広告',
          '眼鏡市場 Web用広告',
          'ReFa Web用広告',
          'Walkerplus／キャラWalker Web記事レポーター',
          'OMO7横浜 by 星野リゾート ルーフトップイベント イメージ広告',
          'JTBショッピング Refeela イメージ広告',
          'A．LIFE 卒業振袖専門店 MARUTAMA',
          'nifty colors 傘・日傘・レインコート 広告',
          'SOLSHADE 日傘・折りたたみ傘 広告',
          'bon bonheur 鞄・リュックサック イメージ広告',
          'リクルートスタッフィング イメージ広告'
        ]
      },
      {
        title: 'アパレル',
        items: [
          'Joint Space Webサイトコーディネート',
          'MARK STYLER スタイルコーディネート',
          'Leyline イメージモデル',
          '株式会社アサクラ ドリードール スタイルコーディネート',
          'Cherir Mignon',
          'Elishe Holiday Collection'
        ]
      },
      {
        title: 'ショー・イベント',
        items: [
          'TGC SHIZUOKA 2023',
          'TRUNK HOTEL ブライダルショー',
          'ホテル雅叙園 模擬結婚式（花嫁役）',
          'ANA クラウンプラザホテル富山 模擬結婚式（花嫁役）',
          'CP＋2026'
        ]
      },
      {
        title: 'ブライダル',
        items: [
          'NOUVELLE', 'CLAIRE BRIDAL STUDIO', 'FLARE 横浜元町本店',
          'アンジェリカ・ノートルダム（大阪）', 'アールベルアンジェ奈良（奈良）',
          'ララ・マリー（山口）', 'STUDIO ARC（神奈川）',
          'ホテルサンライフガーデン（神奈川）', 'ANA クラウンプラザホテル富山',
          'エルシオンKISARAZU（千葉）', 'ザ・チェルシーコートおゆみ野ガーデン（千葉）',
          'ザ テンダーハウスウエディング', 'ワタベウェディング',
          'wa-bi', 'faccie ウエディング', 'tetowa', 'torutokoya', 'アトリエゆか'
        ]
      },
      {
        title: '雑誌',
        items: [
          '小学館『CanCam』', '主婦の友社『Ray』', 'ハースト婦人画報社『25ans』',
          'ネコ・パブリッシング『大人の愛されヘアカタログ』', '晋遊舎『リアルオーダーヘアブック』'
        ]
      },
      {
        title: 'MV出演',
        items: ['Blue Purple「Night Queen」']
      }
    ]
  }
];

// 新郎役モデル（プロフィール・実績は情報待ち）
const MALES = [
  {
    id: 'ryan', name: 'ライアン', age: PLACEHOLDER,
    height: PLACEHOLDER, size: PLACEHOLDER, shoe: PLACEHOLDER,
    exp: PLACEHOLDER, location: PLACEHOLDER,
    achievementTitle: '実績', achievements: [PLACEHOLDER]
  },
  {
    id: 'ryoma', name: 'リョウマ', age: PLACEHOLDER,
    height: PLACEHOLDER, size: PLACEHOLDER, shoe: PLACEHOLDER,
    exp: PLACEHOLDER, location: PLACEHOLDER,
    achievementTitle: '実績', achievements: [PLACEHOLDER]
  },
  {
    id: 'ogawa', name: 'オガワ', age: PLACEHOLDER,
    height: PLACEHOLDER, size: PLACEHOLDER, shoe: PLACEHOLDER,
    exp: PLACEHOLDER, location: PLACEHOLDER,
    achievementTitle: '実績', achievements: [PLACEHOLDER]
  },
  {
    id: 'tbd', name: '選定中', age: PLACEHOLDER,
    height: PLACEHOLDER, size: PLACEHOLDER, shoe: PLACEHOLDER,
    exp: PLACEHOLDER, location: PLACEHOLDER,
    achievementTitle: '実績', achievements: ['選定中（決定次第ご案内いたします）']
  }
];

let currentTab = 'female';
let lbList = FEMALES;
let lbIdx = 0;
let lbShot = 0;

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function getPhotos(m) {
  const genderKey = currentTab === 'female' ? 'female' : 'male';
  return (PHOTO_DATA[genderKey] && PHOTO_DATA[genderKey][m.id]) || [];
}

function photoSrc(photo) {
  return 'data:image/jpeg;base64,' + photo.b64;
}

// 数値なら単位付き、文字列（情報待ち等）ならそのまま
function heightDisp(h) { return typeof h === 'number' ? h + 'cm' : h; }
function ageDisp(a)    { return typeof a === 'number' ? a + '歳' : a; }
function expDisp(e)    { return typeof e === 'number' ? e + '年' : (e != null ? e : 'なし'); }

// ============ Grid render ============
function buildCard(m, i, gender) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = m.id;

  const numLabel = (gender === 'female' ? '新婦役' : '新郎役') + String(i + 1).padStart(2, '0');
  const savedTab = currentTab;
  currentTab = gender;
  const photos = getPhotos(m);
  currentTab = savedTab;
  const firstPhoto = photos[0];
  const photoCountLabel = photos.length ? photos.length + '枚' : '写真情報待ち';

  card.innerHTML = `
    <div class="card-photo">
      ${firstPhoto
        ? `<img class="card-img" src="${photoSrc(firstPhoto)}" alt="${m.name}" loading="lazy">`
        : '<div class="card-img-empty"></div>'
      }
      <span class="card-no">${numLabel}</span>
      <span class="card-photocount">${photoCountLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-name">
        <span class="nm">${m.name}</span>
        <span class="age">${ageDisp(m.age)}</span>
      </div>
      <div class="card-loc">${m.location}</div>
      <div class="card-stat">
        <span><span class="l">身長</span>${heightDisp(m.height)}</span>
        <span><span class="l">芸歴</span>${expDisp(m.exp)}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => {
    currentTab = gender;
    lbList = gender === 'female' ? FEMALES : MALES;
    openLightbox(i);
  });
  return card;
}

function renderAllGrids() {
  const gf = $('#gridFemale');
  const gm = $('#gridMale');
  gf.innerHTML = '';
  gm.innerHTML = '';
  FEMALES.forEach((m, i) => gf.appendChild(buildCard(m, i, 'female')));
  MALES.forEach((m, i)   => gm.appendChild(buildCard(m, i, 'male')));
}

// ============ Lightbox ============
const lb = $('#lb');

function openLightbox(idx) {
  lbList = currentTab === 'female' ? FEMALES : MALES;
  lbIdx = idx;
  lbShot = 0;
  renderLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const m = lbList[lbIdx];
  const numLabel = (currentTab === 'female' ? '新婦役' : '新郎役') + String(lbIdx + 1).padStart(2, '0');
  const photos = getPhotos(m);
  const photo = photos[lbShot];

  // ---- main image ----
  const main = $('#lbMain');
  main.innerHTML = '';
  if (photo) {
    const img = document.createElement('img');
    img.src = photoSrc(photo);
    img.alt = m.name;
    img.className = lbShot === 0 ? 'lb-img-cover' : 'lb-img-natural';
    main.appendChild(img);
  } else {
    main.innerHTML = '<div style="color:rgba(255,255,255,.4);font-size:13px;letter-spacing:.1em;">写真情報待ち</div>';
  }

  // ---- thumbnail strip ----
  const strip = $('#lbStrip');
  strip.innerHTML = '';
  photos.forEach((p, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === lbShot ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = photoSrc(p);
    tImg.alt = String(i + 1).padStart(2, '0');
    thumb.appendChild(tImg);
    const no = document.createElement('span');
    no.className = 'lb-thumb-no';
    no.textContent = String(i + 1).padStart(2, '0');
    thumb.appendChild(no);
    thumb.addEventListener('click', () => { lbShot = i; renderLightbox(); });
    strip.appendChild(thumb);
  });

  // ---- header info ----
  $('#lbId').innerHTML = photos.length
    ? `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;<strong>${String(lbShot + 1).padStart(2, '0')}</strong> / ${photos.length}枚`
    : `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;写真情報待ち`;

  // ---- profile ----
  $('#lbName').innerHTML = typeof m.age === 'number'
    ? `${m.name} <span class="age">${m.age}歳</span>`
    : `${m.name}`;
  $('#lbLoc').textContent = m.location;
  $('#lbHeight').textContent = typeof m.height === 'number' ? m.height : m.height;
  $('#lbHeightUnit').style.display = typeof m.height === 'number' ? '' : 'none';
  $('#lbAge').textContent = m.age;
  $('#lbAgeUnit').textContent = typeof m.age === 'number' ? '歳' : '';
  $('#lbSize').textContent = m.size;
  $('#lbLocSpec').textContent = m.location;

  // shoe
  const specShoe = $('#specShoe');
  if (m.shoe) { specShoe.style.display = ''; $('#lbShoe').textContent = m.shoe; }
  else { specShoe.style.display = 'none'; }

  // exp
  $('#specExp').style.display = '';
  $('#lbExp').textContent = expDisp(m.exp);

  // hair / eye / clothes
  const specHair = $('#specHair');
  const specEye = $('#specEye');
  const specClothes = $('#specClothes');
  if (m.hairColor) { specHair.style.display = ''; $('#lbHair').textContent = m.hairColor; } else { specHair.style.display = 'none'; }
  if (m.eyeColor)  { specEye.style.display = '';  $('#lbEye').textContent = m.eyeColor; }  else { specEye.style.display = 'none'; }
  if (m.clothesSize) { specClothes.style.display = ''; $('#lbClothes').textContent = m.clothesSize; } else { specClothes.style.display = 'none'; }

  // 出演可能日
  const avail = AVAILABILITY[m.id] || [];
  const schedSection = $('#lbSchedule');
  if (avail.length) {
    schedSection.style.display = '';
    $('#lbScheduleCards').innerHTML = avail.map(d => {
      const cls   = d.status === 'ok' ? 'avail-ok' : d.status === 'ng' ? 'avail-ng' : 'avail-pending';
      const badge = d.status === 'ok' ? '○' : d.status === 'ng' ? '✕' : '－';
      const label = d.status === 'ok' ? '出演可' : d.status === 'ng' ? '出演不可' : '未定';
      return `
        <div class="avail-card ${cls}">
          <span class="avail-date">${d.date}</span>
          <span class="avail-badge">${badge}</span>
          <span class="avail-label">${label}</span>
        </div>
      `;
    }).join('');
  } else {
    schedSection.style.display = 'none';
  }

  // achievements
  const achSection = $('#lbAchievements');
  if (m.achievementSections && m.achievementSections.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '活動実績';
    $('#lbAchList').innerHTML = m.achievementSections.map(sec => `
      <li class="ach-section-title">${sec.title}</li>
      ${sec.items.map(a => `<li>${a}</li>`).join('')}
    `).join('');
  } else if (m.achievements && m.achievements.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '実績';
    const noteHtml = m.achievementNote ? `<li class="ach-note">${m.achievementNote}</li>` : '';
    $('#lbAchList').innerHTML = noteHtml + m.achievements.map(a => `<li>${a}</li>`).join('');
  } else {
    achSection.style.display = 'none';
  }

  // nav buttons
  $('#lbPrev').disabled = lbIdx === 0;
  $('#lbNext').disabled = lbIdx === lbList.length - 1;
}

$('#lbPrev').addEventListener('click', () => {
  if (lbIdx > 0) { lbIdx--; lbShot = 0; renderLightbox(); }
});
$('#lbNext').addEventListener('click', () => {
  if (lbIdx < lbList.length - 1) { lbIdx++; lbShot = 0; renderLightbox(); }
});
$('#lbClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft'  && !$('#lbPrev').disabled) { lbIdx--; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowRight' && !$('#lbNext').disabled) { lbIdx++; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); if (lbShot > 0) { lbShot--; renderLightbox(); } }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const photos = getPhotos(lbList[lbIdx]);
    if (lbShot < photos.length - 1) { lbShot++; renderLightbox(); }
  }
});

// ============ Init ============
renderAllGrids();
