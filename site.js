/* サカエ塗装サービス様 ご提案用デモサイト 共通スクリプト */
var IMG = "https://crayonimg.e-shops.jp/cms-dimg/1029921/";

var CO = {
  name: "サカエ塗装サービス",
  corp: "株式会社サカエコーポレーション",
  tel: "042-313-0601",
  telLink: "0423130601",
  free: "0120-714-350",
  freeLink: "0120714350",
  hours: "9:00〜20:00",
  addr: "〒189-0014 東京都東村山市本町1-6-73 野口橋ビル1F"
};

/* 価格つきの施工事例(今のHPに掲載の6件) [地域, お名前, 坪数, 塗料, 工期, 完工, 価格] */
var PRICED = [
  ["西東京市","S様邸","22坪","外壁・屋根・付帯:ラジカル系塗料","10日","2019年6月","910,000円"],
  ["東久留米市","W様邸","28坪","ラジカル系・変成シリコン・クリスタコート","13日","2019年5月","670,000円"],
  ["所沢市","O様邸","30坪","外壁:無機系/屋根:フッ素/付帯:ラジカル系","14日","2021年5月","800,000円"],
  ["東村山市","M様邸","28坪","外壁・屋根・付帯:ラジカル系塗料","11日","2019年7月","1,100,000円"],
  ["東村山市","S様邸","30坪","ラジカル系塗料(クリスタコート)","14日","2020年4月","780,000円"],
  ["東村山市","S様邸","35坪","外壁・付帯:ラジカル系/屋根:フッ素/コーキング:オートンイクシード","14日","2020年9月","930,000円"]
];

/* 施工事例(今のHPに掲載の写真つき事例) [地域, お名前, 写真1, 写真2] */
var WORKS = [
  ["東村山市","M様邸","810210/773_850.jpg","810213/787_850.jpg"],
  ["立川市","Y様邸","766837/850_667.jpg","766838/850_637.jpg"],
  ["東村山市","K様邸","789026/850_662.jpg","789029/850_709.jpg"],
  ["西東京市","T様邸","868276/645_850.jpg","868277/731_850.jpg"],
  ["東村山市","S様邸","876541/850_551.jpg","876542/850_606.jpg"],
  ["所沢市","S様邸","779781/833_850.jpg","779782/850_682.jpg"],
  ["東村山市","H様邸","884966/588_850.jpg","884968/788_850.jpg"],
  ["西東京市","S様邸","854383/850_836.jpg","854384/819_850.jpg"],
  ["小金井市","H様邸","792959/323_509.jpg","792962/639_782.jpg"],
  ["立川市","I様邸","840208/850_515.jpg","840206/850_515.jpg"],
  ["杉並区","HN様","899748/563_850.png","899750/411_850.png"],
  ["板橋区","Tビル","989925/361_850.jpg","989926/356_850.jpg"],
  ["所沢市","O様邸","1360621/850_478.jpg","1360622/850_477.jpg"],
  ["国分寺市","HS様","1751766/1000_873.jpg","1751767/1000_865.jpg"],
  ["東久留米市","K様邸","761829/850_717.jpg","761830/850_695.jpg"],
  ["東村山市","S様邸","750447/850_603.jpg","750448/850_625.jpg"],
  ["東久留米市","W様邸","744567/850_621.jpg","744568/850_578.jpg"],
  ["新座市","H様邸","737097/850_678.jpg","737099/850_703.jpg"],
  ["東久留米市","K様邸","729540/512_440.jpg","729541/436_352.jpg"],
  ["東村山市","K様邸","729545/738_850.jpg","729547/756_850.jpg"],
  ["国分寺市","U様邸","738076/850_626.jpg","738077/850_620.jpg"],
  ["小金井市","T様邸","729549/797_850.jpg","729551/798_850.jpg"],
  ["所沢市","Y様邸","729553/850_847.jpg","729554/671_655.jpg"],
  ["所沢市","コーポT様","592928/850_667.png","592930/600_400.jpg"],
  ["立川市","集合住宅M様","592898/850_612.png","592897/850_478.png"],
  ["あきる野市","F様邸","315707/560_321.jpg","315709/390_228.jpg"],
  ["西多摩郡","Y様邸","414160/378_398.png","414161/369_301.jpg"],
  ["小金井市","F様邸","445588/162_199.png","445590/480_512.jpg"],
  ["国分寺市","N様邸","460523/640_459.png","460526/470_349.png"],
  ["国分寺市","M様邸","414171/640_480.jpg","414172/640_480.jpg"],
  ["東久留米市","K様邸","450006/367_479.png",""],
  ["武蔵村山市","Y様邸","450021/594_383.png",""],
  ["国分寺市","コーポK様","450025/289_633.png","450026/367_585.png"],
  ["所沢市","S様邸","514330/397_292.png",""],
  ["東大和市","K様邸","514333/278_201.png",""],
  ["所沢市","玄関ドア交換","613820/271_640.jpg","613822/241_640.jpg"],
  ["東村山市","K様邸","116651/537_367.jpg","116652/517_421.jpg"],
  ["国立市","N様邸","116649/538_576.jpg","116643/637_765.jpg"],
  ["所沢市","N様邸","239424/785_850.jpg","239425/819_850.jpg"],
  ["東村山市","A様邸","89785/535_474.jpg","89786/548_471.jpg"],
  ["八王子市","O様邸","116658/270_336.jpg","116666/680_478.jpg"],
  ["青梅市","O様邸","164511/595_478.jpg","164514/595_382.jpg"],
  ["小平市","I様邸","89792/850_478.jpg","89793/850_478.jpg"],
  ["世田谷区","W様邸","116657/512_288.jpg",""],
  ["朝霞市","U様邸","116614/604_850.jpg",""],
  ["中野区","M興業様","89794/478_850.jpg","89795/850_478.jpg"]
];

function fallback(el){ var p = el.closest(".photo"); if (p) p.classList.add("noimg"); el.remove(); }

var NAV = [
  ["index.html","トップ"],
  ["service.html","工事のこと"],
  ["works.html","施工事例"],
  ["price.html","塗料と価格"],
  ["flow.html","ご依頼の流れ"],
  ["qa.html","よくある質問"],
  ["company.html","会社概要"],
  ["contact.html","お問い合わせ"]
];

function header(){
  var here = (location.pathname.split("/").pop() || "index.html");
  var links = NAV.map(function(n){
    return '<a href="'+n[0]+'"'+(n[0]===here?' aria-current="page"':'')+'>'+n[1]+'</a>';
  }).join("");
  return '<div class="demo-bar">サカエ塗装サービス様へのご提案用デモサイトです(写真・文章は今のホームページからお借りしています)</div>'+
  '<header class="site-head"><div class="wrap head-in">'+
    '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">栄</span><span class="brand-text"><b>サカエ塗装サービス</b><small>東村山市の外壁塗装・屋根塗装・防水工事</small></span></a>'+
    '<a class="head-tel" href="tel:'+CO.freeLink+'"><small>お見積り無料 '+CO.hours+'</small><b>'+CO.free+'</b></a>'+
    '<button class="menu-btn" aria-expanded="false" aria-controls="gnav">メニュー</button>'+
  '</div><nav id="gnav" class="gnav"><div class="wrap">'+links+'</div></nav></header>';
}

function footer(){
  var links = NAV.map(function(n){ return '<a href="'+n[0]+'">'+n[1]+'</a>'; }).join("");
  return '<section class="cta"><div class="wrap cta-in">'+
    '<div><h2>まずは無料の現地調査から</h2>'+
    '<p>調査とお見積りは無料です。お見積りのあとに、しつこい営業はいたしません。</p></div>'+
    '<div class="cta-btns"><a class="btn btn-tel" href="tel:'+CO.freeLink+'">電話する <b>'+CO.free+'</b></a>'+
    '<a class="btn btn-line" href="contact.html">フォームで相談する</a></div></div></section>'+
  '<footer class="site-foot"><div class="wrap foot-in">'+
    '<div><p class="foot-name">'+CO.name+'</p><p>運営:'+CO.corp+'</p><p>'+CO.addr+'</p><p>フリーダイヤル '+CO.free+' / TEL '+CO.tel+'(受付 '+CO.hours+')</p><p>東京都知事許可(般-3)第153645号</p></div>'+
    '<nav class="foot-nav">'+links+'</nav></div>'+
    '<p class="copy">© Sakae Corporation</p></footer>'+
  '<a class="float-tel" href="tel:'+CO.freeLink+'">無料で電話相談 '+CO.free+'</a>';
}

document.addEventListener("DOMContentLoaded", function(){
  var h = document.getElementById("head"); if (h) h.outerHTML = header();
  var f = document.getElementById("foot"); if (f) f.outerHTML = footer();
  var b = document.querySelector(".menu-btn"), nav = document.getElementById("gnav");
  if (b) b.addEventListener("click", function(){
    var open = nav.classList.toggle("open");
    b.setAttribute("aria-expanded", open ? "true" : "false");
    b.textContent = open ? "閉じる" : "メニュー";
  });
});
