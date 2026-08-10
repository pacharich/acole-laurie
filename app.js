// ============ 出演可能日 ============
// 全モデル 9/8・9/9 両日／前泊・中日泊対応可（ヒーロー部に共通表示）
const SCHEDULE_DATES = [];
const AVAILABILITY = {};

const PLACEHOLDER = '情報待ち';
const NA = '—';

// ============ Model Data ============
// 新婦役モデル（PDF「アコールローリエ 撮影候補モデル資料（新婦役）」＋追加提供分）
const FEMALES = [
  {
    id: 'mio', name: 'ミオ', age: 33,
    height: 153, size: 'B 82cm / W 55cm / H 86cm',
    shoe: '22.5cm', exp: NA, location: '東京都（石川県出身）',
    extra: [['体重', '47kg']],
    videos: ['https://youtube.com/shorts/A7apU18DWgU', 'https://youtu.be/SeRlnOSx54k'],
    achievementTitle: '出演経歴・実績',
    achievementSections: [
      { title: '出演経歴', items: [
        "MicheBloomin' PR", '9unq（クアンク）PR', 'PLACOLE & DRESSY',
        'Regression クレイマスク', 'Eclat Charme', '東京ミッドタウン八重洲',
        '東京プリンスホテル', 'Afternoon Tea' ] },
      { title: '雑誌掲載', items: ['美人百花', 'non-no', 'anan'] },
      { title: '舞台', items: ['ガンバの冒険', '翼を下さい', 'アラビアンナイト'] },
      { title: '映画', items: [
        'ネバーダンス（佐藤克則 監督）', '夢の中へ（宮崎彩代 監督／女優賞）',
        'お姫様になりたくて（川地廣和 監督）', '恋に至る病（木村承子 監督）' ] },
      { title: 'ドラマ', items: ['世にも奇妙な物語（生徒役）'] },
      { title: '企業PV', items: ['Panasonic', 'KDDI'] }
    ]
  },
  {
    id: 'maika', name: 'マイカ', age: 29,
    height: 154, size: 'B 77cm / W 55cm / H 80cm',
    shoe: '22.5cm', hairColor: 'ナチュラルブラウン', exp: NA, location: '東京都（千葉県出身）',
    extra: [['体重', '40kg'], ['運転免許', 'あり']],
    achievementTitle: '主な出演作',
    achievementSections: [
      { title: 'ドラマ', items: [
        'CX 月9「5→9 私に恋したお坊さん」／レギュラー生徒役',
        'NTV系 深夜ドラマ「ザンビ」',
        'EX「ハケン占い師アタル」',
        'TX「牙狼-GARO- 魔戒烈伝」／ヒバナ役' ] },
      { title: '映画', items: [
        '「トモダチゲーム」／花宮満役', '「海にうかぶ月」／平田美希役',
        '「志乃ちゃんは自分の名前が言えない」', '「友だちのパパがすき」／友人役' ] },
      { title: 'バラエティ', items: [
        'CX「痛快TVスカッとジャパン」4度出演',
        '「直撃！シンソウ坂上」〜日航123便からのメッセージ・33年目の真相〜／田淵満役' ] },
      { title: '舞台', items: ['「-Knights- アーサー王と円卓の騎士」／ニムエ役　2年連続'] },
      { title: 'CM', items: ['ソフトバンク', 'HONDA（web）', 'GungHo'] },
      { title: 'MV', items: ['ASIAN KUNG-FU GENERATION「オペラグラス」／バレリーナ'] },
      { title: 'ブライダルモデル', items: ['THE TOAI'] },
      { title: 'SNS広告', items: [
        'ハップアール', 'EPSON', 'サモエドカフェ moffu', '舞子スノーリゾート',
        'アパマンショップ 信濃土地', '珈琲倶楽部', 'KG高等学園', '東京ドームホテル',
        'アゲルキャリア', '鍛高譚／合同酒精', '牛たん とろろ 麦めし ねぎし', '蒲田矯正歯科' ] },
      { title: 'SNSショートドラマ', items: [
        '僕らの恋はかくれんぼ。', '金融女子が沼すぎる!?', '株式会社 World Change Analysis' ] }
    ]
  },
  {
    id: 'kano', name: 'カノ', age: 29,
    height: 157, size: 'B 70cm / W 55cm / H 82cm',
    shoe: '23.0cm', exp: NA, location: '大阪府（愛知県出身）',
    achievementTitle: '主な出演歴・実績',
    achievementSections: [
      { title: 'ブライダル', items: [
        'STATICE PHOTOGRAPHY', 'PHOTO STUDIO 麗', '阿部写真館', 'THE PACIFIC HARBOR',
        'ブライダルコアときわ', 'POPCORN KOBE', 'STUDIO ARC', '着物くろーぜっと JuJu',
        'ホテルロイヤルクラシック大阪' ] },
      { title: '広告（スチール）', items: [
        'NAZUNA', 'Hana Musubi', '花と蝶〜fleur papillon〜', 'toiki', 'ojnn',
        'CYBER PUNK PHOTO SUMMIT', 'OKURU.', 'DR PLANT', 'may.B', 'DearMyLoveRose', 'kirakurai' ] },
      { title: '広告（ムービー）', items: ['HOTEL SHE 泊まれる演劇', '宝塚市国際環境協会 ナチュールスパ宝塚'] },
      { title: '雑誌掲載・その他', items: [
        'ar 2023年9月号', 'Hair Magazine yes vol.10', 'sweet 2024年9月号',
        'HELLOO MY NAME IS… SNS広告担当（2023/10〜）',
        'フォトグラファー伊坂謙 様 ライティングワークショップ モデル' ] }
    ]
  },
  {
    id: 'nakamura', name: 'エリカ', age: 26,
    height: 163.5, size: 'B 79cm / W 60cm / H 86cm',
    shoe: '24.0cm', clothesSize: '7号', hairColor: 'ロング・ダークブラウン',
    exp: NA, location: '東京都',
    extra: [['爪・ピアス', '素爪・ピアスなし']],
    achievementTitle: '出演実績',
    achievementSections: [
      { title: 'ブライダル', items: [
        'NOUVELLE', 'CLAIRE BRIDAL STUDIO', 'FLARE 横浜元町本店', 'アンジェリカ・ノートルダム（大阪）',
        'アールベルアンジェ奈良（奈良）', 'ララ・マリー（山口）', 'STUDIO ARC（神奈川）' ] },
      { title: '広告', items: [
        'Microsoft Surface「サがつく、Surface」映像広告', 'SHIMBOL モニターレコーダー 紹介映像',
        '静岡県 南伊豆町 観光PR映像', '吉野家 TikTok用映像広告', 'オンディーヌ 振袖広告',
        '味の素「0.1のチャレンジ」Web用映像広告', 'ヒルトン東京ベイ 屋外プール プロモーション映像',
        'nifty colors 傘・日傘・レインコート 広告', 'SOLSHADE 日傘・折りたたみ傘 広告',
        'bon bonheur 鞄・リュックサック イメージ広告', 'リクルートスタッフィング イメージ広告' ] },
      { title: 'アパレル', items: [
        'Joint Space Webサイトコーディネート', 'MARK STYLER スタイルコーディネート', 'Leyline イメージモデル' ] },
      { title: 'ショー・イベント', items: [
        'TRUNK HOTEL ブライダルショー', 'ホテル雅叙園 模擬結婚式（花嫁役）',
        'ANA クラウンプラザホテル富山 模擬結婚式（花嫁役）', 'CP+2026',
        'ホテルサンライフガーデン（神奈川）', 'エルシオンKISARAZU（千葉）',
        'ザ・チェルシーコートおゆみ野ガーデン（千葉）', 'ザ テンダーハウスウエディング', 'ワタベウェディング' ] },
      { title: '雑誌', items: [
        '小学館『CanCam』', '主婦の友社『Ray』', 'ハースト婦人画報社『25ans』',
        'ネコ・パブリッシング『大人の愛されヘアカタログ』', '晋遊舎『リアルオーダーヘアブック』' ] },
      { title: 'MV出演', items: ['Blue Purple「Night」'] }
    ]
  },
  {
    id: 'yuna', name: 'ゆな', age: 29,
    height: 160, size: 'B 70cm / W 68cm / H 88cm',
    shoe: '24.0cm', clothesSize: 'ドレス 5・6号', exp: NA, location: '大阪府',
    extra: [['ピアス', '穴なし']],
    achievementTitle: 'ブライダル実績',
    achievements: [
      '【2024年】ポップコーン神戸／オルガブランカ（展示会モデル）／ラヴァンセーヌ／アンテリーベ／309wedding／nestbythesea／レイジーシンデレラ',
      '【2025年】スポサブランカ',
      '【2026年】幸三郎ウエディング（展示会モデル）／ひよしや／丸福衣装店'
    ]
  },
  {
    id: 'yurina', name: 'ゆりな', age: 24,
    height: 168, size: NA, shoe: null, exp: NA, location: '東京都（兵庫県神戸市出身）',
    extra: [['体重', '45kg']],
    achievementTitle: '実績',
    achievements: ['wabiwasou', 'platinum dress style', 'studio arc', 'faccie ウェディング', 'FORTE BRIDAL']
  },
  {
    id: 'fumika', name: 'ふみか', age: 25,
    height: 155, size: NA, shoe: null, exp: NA, location: '埼玉県',
    extra: [['体重', '42kg']],
    achievementTitle: '実績',
    achievementSections: [
      { title: 'ブライダル', items: ['ces wedding', 'Enn wedding', 'Ksmily', 'nouvelle Photo wedding'] },
      { title: 'サロンモデル実績', items: ['2025年 サロンモデルランキング 第1位'] },
      { title: '出演・美容企業', items: [
        'ReFa（MTG株式会社）', '日本ロレアル株式会社', 'クオレ株式会社', '株式会社クレイツ',
        '株式会社アトリエはるか', '株式会社ホテラバ', 'Aiロボティクス株式会社', '品川美容外科' ] },
      { title: 'アパレル', items: [
        '3rd株式会社', 'Olu.株式会社', '株式会社パル', '株式会社マージナルドット', 'MIIA', 'LEJA' ] },
      { title: '雑誌・メディア', items: [
        'CLASSY.', 'Oggi', '美的', 'ar', 'WWD', 'リアルオーダーヘアブック（表紙）' ] }
    ]
  },
  {
    id: 'yui', name: 'ゆい', age: 26,
    height: 157.8, size: NA, shoe: null, exp: NA, location: '東京都板橋区',
    extra: [['体重', '43kg']],
    achievementTitle: '出演実績',
    achievements: [
      'CanCam兼andGIRL 読者モデル', '東京プリンスホテル様／SNS広告', 'オーマイティース様／SNS広告',
      '株式会社タップル様／SNS広告', 'JR東海様／SNS広告', '長谷工ジョブクリエイト様／SNS広告・LP・HP',
      'しまむら様／SNS広告・紙チラシ・店頭POP', '東京カレンダー様／SNS広告', 'nouvelle様／SNS広告',
      'ディープラス様／SNS広告', '3rd inc.様／SNS広告・LP', 'HBL様／SNS広告・LP',
      '花王様（suisai）／SNS広告・ドンキホーテサイネージ・LP', 'ルミネ様／SNS広告', 'シャドテン様／SNS広告',
      'freee様／SNS広告', 'PATRIC様／SNS広告', 'ユンス様／SNS広告', 'ロペピクニック様／SNS広告', 'オルビス様／SNS広告'
    ]
  },
  {
    id: 'sky', name: 'スカイ', age: 26,
    height: 160, size: 'B 78cm / W 58cm / H 86cm',
    shoe: '23.5cm', clothesSize: 'ドレス 5〜7号／指輪 8号', exp: 6, location: '東京都↔大阪府（大阪府出身）',
    extra: [['体重', '44kg']],
    cardNote: '千葉エリア式場のSNS（Instagramリール）出演歴あり。競合につき、要ご確認',
    achievementTitle: 'モデル活動実績',
    achievementSections: [
      { title: 'ブライダルモデル活動実績', items: [
        'JRクレメントホテル高松', 'ONELIFE 横浜', 'スタジオゼロ（宇治・長堀橋・岡山・奈良・堺）',
        'スタジオアーク', 'フォレストテラス熊本', 'レイジーシンデレラ', '欅', 'THE SORAKUEN',
        'スタジオアンルージュ', 'ワタベウェディング', 'カサデアンジェラ馬車道', 'FANTADRESS',
        'ハルウェディング', 'ベルクラシック姫路', '東京ステーションホテル', 'STELLA BRIDAL 等' ] },
      { title: 'その他モデル活動実績', items: [
        '今ちゃんの実は…TV出演／ええじゃないか TV出演／ブルーメの丘 PV出演',
        'あべのハルカス WEB広告／ザ プリンスパークタワーホテル 広告／ホテルリリーフなんば大国町 広告',
        'REFA 登壇モデル／ENAMOR 登壇モデル',
        'ミルボン スタイリング剤パンフ広告／サンコール スタイリング剤パンフ広告',
        'PREPPY 雑誌掲載／SAVVY 雑誌掲載／リアルオーダーヘアブック 雑誌掲載多数',
        'ホットペッパービューティー 雑誌掲載多数',
        'メルセデスベンツ広告／眼鏡市場広告／SANGO株式会社 企業PV',
        'ソフィーナ／ナリス／ジョンセンムル／松風／VO5／MEDULLA 等' ] }
    ],
    warning: {
      title: '競合に関する確認事項',
      body: [
        'スカイ様は、千葉エリアの結婚式場「ラセーヌブランシュ千葉」様のInstagramリール投稿にご出演歴がございます。',
        '広告としての正式なご起用ではなく、SNS投稿（リール）のみでのご出演となるため、御社の競合条件（直近5年以内・対象エリア内）に該当するかどうかは、恐れ入りますが貴社にてご判断いただけますと幸いです。'
      ]
    }
  }
];

// 新郎役モデル（PDF「アコールローリエ 撮影候補モデル資料（新郎役）」準拠）
const MALES = [
  {
    id: 'kouki', name: 'こうき', age: 33,
    height: 177, size: NA, shoe: null, exp: NA, location: NA,
    extra: [['体重', '63kg']],
    achievementTitle: '実績',
    achievementSections: [
      { title: '実績【ブライダル】', items: [
        'torutokoya', '帝国ホテル東京 ブライダルフェアモデル', 'ホテル日航大阪 ブライダルフェアモデル',
        'studio ARC', 'パビリオンコート京都', 'ヒカリヤ ウェディング', 'Satoyama Villa 本陣',
        'A&T Wedding', 'オークラアクトシティ浜松', '小林写真館', 'プリンセスガーデン横浜',
        'クレールブライダルスタジオ', 'アメイジンググレイス前橋', '星野リゾート／リゾナーレ八ヶ岳', '他多数' ] },
      { title: '実績【広告】', items: [
        'アメリカン・エキスプレス・ジャパン', 'MUJI HOTEL GINZA', 'JTB×SHIPS「チル旅 長野木曽福島編」',
        'CEZANNE', 'ネスレ日本株式会社', 'タカラトミー ポケモン', 'LIXIL ランドリープラス' ] },
      { title: '実績【WEB】', items: [
        'こくみん共済COOP', 'Yahoo！きっず', 'はなさく生命', '楽天でんき', '双日テックイノベーション',
        'カーセンサー×日産 SOTOASOBI' ] },
      { title: '実績【CM】', items: [
        'HIS 夏先ドリキャンペーン2026 TV-CM', '東京都環境局「便利でECoシェアサイクル」TV-CM',
        'GoodsLuck! TV-CM', '日本工営株式会社 TV-CM', 'MUFG×Salesforce Web-CM',
        '東京都主税局 Web-CM', 'LIFULL AIホームズくん Web-CM' ] }
    ]
  },
  {
    id: 'ryoma', name: 'りょうま', age: 30,
    height: 176, size: 'B 84cm / W 81cm / H 95cm',
    shoe: '27.0cm', clothesSize: 'Y5', exp: NA, location: '横浜市',
    extra: [['体重', '63kg'], ['利き手', '右']],
    achievementTitle: '実績',
    achievementSections: [
      { title: 'サイズ詳細', items: [
        '頭まわり56cm／首まわり38cm／着丈49cm／肩幅40cm／袖丈59cm',
        'バスト84cm／ウエスト81cm／ヒップ95cm',
        'ひじ丈28cm／手首16cm／股上24cm／股下82cm',
        '手のひら 右17.5cm・左18cm／腕回り 右25cm・左25cm',
        '太腿51cm／ひざ丈53cm／ゆき丈80cm',
        '靴27cm／服 Y5／Tシャツ M／ジーンズ 31インチ',
        '指輪 右：薬指14号・小指7号／左：薬指13号・小指9号' ] },
      { title: '実績【ブライダル・ゼクシィ】（新郎役）', items: [
        'ホテル ザ・テラス ザ・ガーデン水戸（茨城）', 'マリーゴールドプルミエ（鳥栖）',
        'ウェディングコートエミリア（山口）', 'リバティ ウエディングアプロッシュ（大分）',
        'マリエール神水苑（熊本）', 'マリーゴールドプルミエ（佐賀）', 'アーセンティア迎賓館（大阪）',
        'A&T wedding', 'レンブラントホテル', '新百合ヶ丘ホテルモリノ', 'チッタ ウェディング川崎（神奈川）',
        'ブラスブルー目白', 'ラ クラリエール三鷹の森', 'ロイヤルパインズホテル浦和', 'recipe 名古屋', '他多数' ] },
      { title: '実績【広告・PV】', items: [
        'オリエンタルホテル福岡', 'リッチモンドホテル宮崎', 'おふろの王様 広告', '穴吹ハウジングサービス',
        'タイクレ', 'モンハンNOW', '他多数' ] },
      { title: '実績【TVCM】', items: [
        'アルプス技研', 'Lenovo', 'good不動産', '霧島酒造株式会社',
        'ガンダムシリーズアパレル「strict-g」', 'イトシマレモネード', '奉行クラウド' ] },
      { title: '実績【ファッションモデル】', items: [
        'PRADA／mac-house／converse／harvesty／strict-g／my day',
        '薬王堂 コラボTシャツ／ZOZOタウン 他多数', 'スチールモデル多数' ] }
    ]
  },
  {
    id: 'ryan', name: 'ライアン', age: 30,
    height: 175, size: 'B 82cm / W 73cm / H 89cm',
    shoe: '27.0cm', clothesSize: 'タキシード Y帯6号／A帯4号', exp: NA,
    location: '東京都世田谷区（埼玉県出身）',
    extra: [['体重', '60kg']],
    achievementTitle: '実績',
    achievementSections: [
      { title: 'サイズ詳細', items: [
        '首周り38cm', '手長／手幅 19.5cm／9cm',
        'リングサイズ：人差し指19号／薬指15号／左中指20号' ] },
      { title: '実績【ブライダル】（新郎役／記載外はブライズメイド等）', items: [
        'ワタベウェディング芝公園スタジオ', 'Lucis Wedding 上野東天紅（2020・21）', 'White Wall Wedding',
        '松浦衣裳店（名古屋）', 'torutokoya photo&movie（2020・21）', '大国魂神社', 'アールベルアンジェ仙台',
        'フォレスターナ軽井沢（ブライズメイド）', 'マリエール諏訪（ブライズメイド）',
        '品川プリンスホテル Chapel TENKEI&MARRY（ブライズメイド・2021年）', 'スタジオアクア大宮',
        '大国魂神社 模擬挙式', 'STUDIO ZERO YOKOHAMA（2022年）',
        "ホットペッパーウェディング 三井ガーデンホテル銀座プレミア E'VOLTA", 'ノートルダム横浜みなとみらい',
        'モントレ仙台', 'ワタベウェディング沖縄（2023年）', 'フォトメゾンエクラン 福岡／大阪／名古屋',
        'ベルヴィ ラヴァンセーヌ静岡', 'ヴェルディ宇都宮', 'ノートルダム宇部山口（2024年）', '乃木会館',
        'マナーハウス写風館（守山）／マナーヴィレッジ写風館（米原）', 'アジュール竹芝',
        'モモナ横浜関内店 フォトウェディング', 'A&T WEDDING', 'SWITCH WEDDING TOKYO', 'ベルクラシック神戸' ] }
    ]
  },
  {
    id: 'ogawa', name: 'ゆうき', age: 28,
    height: 181, size: 'B 84.5cm / W 79cm / H 93cm',
    shoe: '27.5cm', exp: NA, location: '東京都（福岡県北九州出身）',
    extra: [['体重', '64kg']],
    achievementTitle: '実績',
    achievementSections: [
      { title: '実績【広告】（すべてメインキャスト出演）', items: [
        'JCB／オーディオテクニカ／クラシエ／木下グループ／創建ルナシティ',
        'サムスン電子ジャパン／トランスコスモス／キットカット／プティマイン',
        '福田アンドパートナーズ／タクトホーム／富士フイルム',
        'モビリティリゾートもてぎ／ポーラ ルジャパン／ジャクリジャパン／横浜マリンタワー など' ] },
      { title: '実績【舞台】', items: [
        '「酔いどれ天使」演出：三池崇史／脚本：蓬莱竜太（東京公演/明治座 2021.9.5〜20、大阪公演/新歌舞伎座 2021.10.1〜11）',
        '「うちの担任絶対スパイ」松原 魅次役（品川六行会ホール 2023.10）' ] },
      { title: '実績【映画】', items: [
        '「第8番 悲愴」近衛 風役・近衛 陽役（渡邉豊 監督）2024',
        '「東京リベンジャーズ」（英勉 監督）2021.7' ] },
      { title: '実績【ドラマ】', items: [
        'サントフェリーチェ掛川 オリジナルドラマ ゆうき役', 'ル・クレア オリジナルドラマ 健太役',
        '横浜ロイヤルオークホテル オリジナルドラマ 主演', 'テレビ埼玉「3つのルール」島津健一役',
        'TBS「その恋あたためますか？」バスケ少年役' ] },
      { title: '実績【MV作品】', items: [
        'がらり「正体不明のLADY」／ISAMIKAWAMURA「幸せの道」／シェルミィ「バイバイ」',
        'ハイエナカー「とけないハート」／釈迦坊主「loess」／YMCK「ご安全に」' ] },
      { title: '実績【ブライダル・ゼクシィ】（すべて新郎役）', items: [
        'ホテルオークラ東京／アウトリガーリーフ（Hawaii）／ホテル雅叙園東京／ホテル椿山荘東京',
        'ウェスティンホテル横浜／サンシャイン水族館／東京大神宮／マリエール広島／アソシア静岡',
        'FURIAN山ノ上迎賓館／JRホテルクレメント徳島／ヒカリフルコート高崎／ロイヤルチェスター太田',
        'ベルブランシェ天童／リーガロイヤルホテル京都／シェラトン東京ベイ／キングアンバサダー熊谷',
        '横浜ロイヤルパークホテル／ホテルメトロポリタン盛岡／ダイワロイネットホテル和歌山／ノートルダムマリノア など' ] }
    ]
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
function photoSrc(photo) { return 'data:image/jpeg;base64,' + photo.b64; }

function ytId(url) {
  const m = String(url).match(/(?:shorts\/|youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}
function heightDisp(h) { return typeof h === 'number' ? h + 'cm' : h; }
function ageDisp(a)    { return typeof a === 'number' ? a + '歳' : a; }
function expDisp(e)    { return typeof e === 'number' ? e + '年' : (e != null ? e : '—'); }

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
        : '<div class="card-img-empty"></div>'}
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
      </div>
      ${m.cardNote ? `<div class="card-note">${m.cardNote}</div>` : ''}
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

  $('#lbId').innerHTML = photos.length
    ? `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;<strong>${String(lbShot + 1).padStart(2, '0')}</strong> / ${photos.length}枚`
    : `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;写真情報待ち`;

  $('#lbName').innerHTML = typeof m.age === 'number'
    ? `${m.name} <span class="age">${m.age}歳</span>` : `${m.name}`;
  $('#lbLoc').textContent = m.location;
  $('#lbHeight').textContent = m.height;
  $('#lbHeightUnit').style.display = typeof m.height === 'number' ? '' : 'none';
  $('#lbAge').textContent = m.age;
  $('#lbAgeUnit').textContent = typeof m.age === 'number' ? '歳' : '';
  $('#lbSize').textContent = m.size;
  $('#lbLocSpec').textContent = m.location;

  const specShoe = $('#specShoe');
  if (m.shoe) { specShoe.style.display = ''; $('#lbShoe').textContent = m.shoe; }
  else { specShoe.style.display = 'none'; }

  $('#specExp').style.display = 'none';

  const specHair = $('#specHair'), specEye = $('#specEye'), specClothes = $('#specClothes');
  if (m.hairColor) { specHair.style.display = ''; $('#lbHair').textContent = m.hairColor; } else { specHair.style.display = 'none'; }
  if (m.eyeColor)  { specEye.style.display = '';  $('#lbEye').textContent = m.eyeColor; }  else { specEye.style.display = 'none'; }
  if (m.clothesSize) { specClothes.style.display = ''; $('#lbClothes').textContent = m.clothesSize; } else { specClothes.style.display = 'none'; }

  // 追加プロフィール項目（体重・運転免許・利き手・ピアス等）
  document.querySelectorAll('.spec.extra-spec').forEach(e => e.remove());
  const specsBox = document.querySelector('.specs');
  (m.extra || []).forEach(([label, val]) => {
    const d = document.createElement('div');
    d.className = 'spec extra-spec';
    d.innerHTML = `<div class="spec-l">${label}</div><div class="spec-v">${val}</div>`;
    specsBox.appendChild(d);
  });

  // イメージ動画（体重＝specsの直後に表示）
  document.querySelectorAll('.lb-videos').forEach(e => e.remove());
  if (m.videos && m.videos.length) {
    const box = document.createElement('div');
    box.className = 'lb-videos';
    box.style.cssText = 'margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);';
    box.innerHTML =
      '<div style="font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:var(--accent);margin-bottom:12px;text-transform:uppercase;font-weight:600;">MOVIE ／ イメージ動画</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;">' +
      m.videos.map(u => {
        const id = ytId(u);
        return `<div style="position:relative;width:200px;max-width:100%;aspect-ratio:9/16;border-radius:8px;overflow:hidden;background:#000;">
          <iframe src="https://www.youtube.com/embed/${id}" title="イメージ動画" loading="lazy"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
      }).join('') +
      '</div>';
    const specsEl = document.querySelector('.specs');
    specsEl.parentNode.insertBefore(box, specsEl.nextSibling);
  }

  const avail = AVAILABILITY[m.id] || [];
  const schedSection = $('#lbSchedule');
  if (avail.length) {
    schedSection.style.display = '';
    $('#lbScheduleCards').innerHTML = avail.map(d => {
      const cls   = d.status === 'ok' ? 'avail-ok' : d.status === 'ng' ? 'avail-ng' : 'avail-pending';
      const badge = d.status === 'ok' ? '○' : d.status === 'ng' ? '✕' : '－';
      const label = d.status === 'ok' ? '出演可' : d.status === 'ng' ? '出演不可' : '未定';
      return `<div class="avail-card ${cls}"><span class="avail-date">${d.date}</span><span class="avail-badge">${badge}</span><span class="avail-label">${label}</span></div>`;
    }).join('');
  } else { schedSection.style.display = 'none'; }

  const achSection = $('#lbAchievements');
  if (m.achievementSections && m.achievementSections.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '活動実績';
    $('#lbAchList').innerHTML = m.achievementSections.map(sec => `
      <li class="ach-section-title">${sec.title}</li>
      ${sec.items.map(a => `<li>${a}</li>`).join('')}`).join('');
  } else if (m.achievements && m.achievements.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '実績';
    const noteHtml = m.achievementNote ? `<li class="ach-note">${m.achievementNote}</li>` : '';
    $('#lbAchList').innerHTML = noteHtml + m.achievements.map(a => `<li>${a}</li>`).join('');
  } else { achSection.style.display = 'none'; }

  // 競合などの注意事項（枠で強調）
  document.querySelectorAll('.lb-warning-box').forEach(e => e.remove());
  if (m.warning) {
    const box = document.createElement('div');
    box.className = 'lb-warning-box';
    box.style.cssText = 'margin-top:22px;padding:16px 18px;border:1.5px solid var(--accent);border-radius:8px;background:rgba(196,69,45,.14);';
    box.innerHTML =
      `<div style="display:flex;align-items:center;gap:8px;font-weight:700;color:#ff9b86;font-size:13px;letter-spacing:.03em;margin-bottom:10px;">
         <span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">!</span>
         ${m.warning.title}
       </div>` +
      m.warning.body.map(t => `<p style="margin:0 0 8px;font-size:12px;line-height:1.75;color:rgba(255,255,255,.88);">${t}</p>`).join('');
    const btns = document.querySelector('.lb-actions-bottom');
    btns.parentNode.insertBefore(box, btns);
  }

  $('#lbPrev').disabled = lbIdx === 0;
  $('#lbNext').disabled = lbIdx === lbList.length - 1;
}

$('#lbPrev').addEventListener('click', () => { if (lbIdx > 0) { lbIdx--; lbShot = 0; renderLightbox(); } });
$('#lbNext').addEventListener('click', () => { if (lbIdx < lbList.length - 1) { lbIdx++; lbShot = 0; renderLightbox(); } });
$('#lbClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft'  && !$('#lbPrev').disabled) { lbIdx--; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowRight' && !$('#lbNext').disabled) { lbIdx++; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); if (lbShot > 0) { lbShot--; renderLightbox(); } }
  if (e.key === 'ArrowDown') { e.preventDefault(); const ph = getPhotos(lbList[lbIdx]); if (lbShot < ph.length - 1) { lbShot++; renderLightbox(); } }
});

renderAllGrids();
