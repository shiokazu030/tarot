const cardPool = [
  {name:"星",icon:"✦",upright:"希望が残る",reversed:"期待しすぎに注意",past:{upright:"これまでの関係には、やさしい希望や好意が残っていました。",reversed:"これまで期待が大きくなりすぎて、不安も膨らみやすかったようです。"},present:{upright:"今の彼には、まだ前向きな気持ちや安心感が残っていそうです。",reversed:"今の彼は気持ちを見失いやすく、前向きになりきれない状態かもしれません。"},future:{upright:"今後は少しずつ希望が戻りやすい流れです。",reversed:"今後は期待だけで動くより、現実的な距離感を整えることが大切です。"}},
  {name:"月",icon:"☽",upright:"迷いと本音",reversed:"不安が晴れる",past:{upright:"これまで彼の中には迷いや不安があり、本音が見えにくかったようです。",reversed:"これまでの誤解や不安が、少しずつ整理されてきた流れです。"},present:{upright:"今の彼の気持ちはまだ曖昧で、自分でも整理できていない可能性があります。",reversed:"今の彼は、少しずつ本音や状況を見つめ直し始めていそうです。"},future:{upright:"今後は焦るほど不安が強まりやすいので、静かに様子を見るのが吉です。",reversed:"今後は見えなかった気持ちや状況が、少しずつ分かりやすくなりそうです。"}},
  {name:"恋人",icon:"♡",upright:"惹かれ合い",reversed:"迷う選択",past:{upright:"これまでのやり取りには、彼が心地よさや魅力を感じる瞬間がありました。",reversed:"これまで惹かれる気持ちはあっても、迷いやタイミングのズレがあったようです。"},present:{upright:"今の彼は、あなたとの関係に惹かれる感覚を持っていそうです。",reversed:"今の彼は気持ちが揺れやすく、関係をどう進めるか迷っているかもしれません。"},future:{upright:"今後は素直な言葉が距離を縮めるきっかけになりそうです。",reversed:"今後は勢いだけで進めず、相手の反応を見ながら慎重に選ぶことが大切です。"}},
  {name:"運命の輪",icon:"◎",upright:"流れが変わる",reversed:"タイミング待ち",past:{upright:"これまでの関係は、偶然やタイミングに大きく左右されていたようです。",reversed:"これまでタイミングが合わず、動きたいのに動けない流れがあったかもしれません。"},present:{upright:"今は関係が動き出すきっかけが近づいている気配があります。",reversed:"今は無理に動かすより、タイミングを待つ方が良さそうです。"},future:{upright:"今後は状況が変わり、関係に新しい流れが生まれやすいです。",reversed:"今後は焦って動くと空回りしやすいので、流れを見極めることが必要です。"}},
  {name:"隠者",icon:"♢",upright:"内省と距離",reversed:"閉じこもり",past:{upright:"これまで彼は自分の気持ちを内側で整理しようとしていたようです。",reversed:"これまで距離を置きすぎて、気持ちが伝わりにくくなっていた可能性があります。"},present:{upright:"今の彼は一人で考える時間を必要としていそうです。",reversed:"今の彼は気持ちを閉じ込みすぎて、素直に動けない状態かもしれません。"},future:{upright:"今後は相手のペースを尊重することで、静かに信頼が育ちやすいです。",reversed:"今後は放置しすぎると距離が固定されやすいので、短く自然な接点が大事です。"}},
  {name:"太陽",icon:"☀",upright:"明るい好意",reversed:"素直になれない",past:{upright:"これまで彼の中には、あなたとの明るい記憶や楽しい印象が残っていました。",reversed:"これまで好意はあっても、素直に出せない場面があったようです。"},present:{upright:"今の彼はあなたとの関わりに前向きさや安心感を感じていそうです。",reversed:"今の彼は明るく接したい気持ちはあっても、どこか照れや迷いがありそうです。"},future:{upright:"今後は自然体で明るく関わるほど、良い方向に進みやすいです。",reversed:"今後は深刻に考えすぎず、軽やかなやり取りを意識すると流れが戻りやすいです。"}},
  {name:"女教皇",icon:"♛",upright:"静かな本音",reversed:"考えすぎ",past:{upright:"これまで彼は感情を表に出さず、静かにあなたを見ていたようです。",reversed:"これまで考えすぎや警戒心で、素直な気持ちが隠れやすかったようです。"},present:{upright:"今の彼は表には出さなくても、内側であなたのことを気にしている可能性があります。",reversed:"今の彼は考えすぎて、行動に移せない状態かもしれません。"},future:{upright:"今後は静かな信頼や理解が関係を支える流れになりそうです。",reversed:"今後は誤解を避けるために、分かりやすい言葉を少し足すことが大切です。"}},
  {name:"塔",icon:"⚡",upright:"急な変化",reversed:"崩れる前の修正",past:{upright:"これまで2人の間に、急な変化やショックがあった可能性があります。",reversed:"これまで関係の違和感を感じながらも、何とか保ってきた流れです。"},present:{upright:"今は彼の中で気持ちや状況が大きく揺れているかもしれません。",reversed:"今は大きく崩れる前に、関わり方を見直すタイミングです。"},future:{upright:"今後は一度流れが大きく変わる可能性があります。怖がりすぎず、必要な変化として受け止めることが大切です。",reversed:"今後は早めにズレを修正すれば、悪化を防げる可能性があります。"}},
  {name:"力",icon:"♌",upright:"やさしい粘り",reversed:"無理しすぎ",past:{upright:"これまであなたは、彼との関係に対してやさしく粘り強く向き合ってきたようです。",reversed:"これまで我慢や無理が多く、気持ちが疲れやすかったかもしれません。"},present:{upright:"今の彼には、あなたの穏やかさや包容力が伝わりやすい時です。",reversed:"今は頑張りすぎると、彼にも自分にも負担が出やすい状態です。"},future:{upright:"今後は強く迫るより、やわらかく関わることで関係が安定しやすいです。",reversed:"今後は無理して追うより、自分を整えることが関係改善につながります。"}}
];

const worryMessages = {
  "復縁": {
    resultLead: "復縁の流れとして、過去のつながり・今の彼の本音・これから戻れる可能性を見ていきます。",
    lineLead: "このカードの詳しい意味と、復縁に向けて今送るべきLINE例文をLINEで受け取れます。"
  },
  "片思い": {
    resultLead: "片思いの流れとして、彼の印象・今の距離感・これから近づくきっかけを見ていきます。",
    lineLead: "このカードの詳しい意味と、彼に自然に近づくための一言メッセージをLINEで受け取れます。"
  },
  "恋人": {
    resultLead: "恋人関係の流れとして、これまでのすれ違い・今の彼の気持ち・今後の向き合い方を見ていきます。",
    lineLead: "このカードの詳しい意味と、彼との関係を整えるための会話例をLINEで受け取れます。"
  },
  "音信不通": {
    resultLead: "音信不通の流れとして、彼が離れた理由・今の心理・連絡が来る可能性を見ていきます。",
    lineLead: "このカードの詳しい意味と、音信不通の彼へ送るなら避けたい言葉・送るべき言葉をLINEで受け取れます。"
  }
};

const phases = [
  { key: "past", label: "過去", title: "まずは「過去」のカードを選んでください", text: "今の恋に影響している、これまでの流れを見ていきます。" },
  { key: "present", label: "現在", title: "次は「現在」のカードを選んでください", text: "今この瞬間の彼の気持ちや、2人の空気感を見ていきます。" },
  { key: "future", label: "未来", title: "最後に「未来」のカードを選んでください", text: "この先、2人の流れがどう動きやすいかを見ていきます。" }
];

let selectedWorry = "復縁";
let currentPhaseIndex = 0;
let selectedCards = {};

const phaseTitle = document.getElementById("phaseTitle");
const phaseText = document.getElementById("phaseText");
const result = document.getElementById("result");
const resultGrid = document.getElementById("resultGrid");
const summaryText = document.getElementById("summaryText");
const retryButton = document.getElementById("retryButton");
const resultLead = document.getElementById("resultLead");
const lineLead = document.getElementById("lineLead");
const lineButton = document.getElementById("lineButton");
const readerTitle = document.getElementById("readerTitle");

const readerName = document.getElementById("readerName");
const lineButtonText = document.getElementById("lineButtonText");
const lineLeadText = document.getElementById("lineLeadText");
const lineUrl = document.getElementById("lineUrl");

const slotEls = {
  past: document.getElementById("pastSlot"),
  present: document.getElementById("presentSlot"),
  future: document.getElementById("futureSlot")
};

document.querySelectorAll(".worry-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".worry-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    selectedWorry = button.dataset.worry;
  });
});

function getRandomCard(excludeNames = []) {
  const available = cardPool.filter(card => !excludeNames.includes(card.name));
  const base = available[Math.floor(Math.random() * available.length)];
  const isReversed = Math.random() < 0.38;
  return {
    ...base,
    orientation: isReversed ? "逆位置" : "正位置",
    keyword: isReversed ? base.reversed : base.upright,
    orientationKey: isReversed ? "reversed" : "upright"
  };
}

function updatePhaseUI() {
  const phase = phases[currentPhaseIndex];
  if (!phase) return;
  phaseTitle.textContent = phase.title;
  phaseText.textContent = phase.text;
}

document.querySelectorAll(".tarot-card").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentPhaseIndex >= phases.length) return;
    if (button.classList.contains("selected")) return;

    document.querySelectorAll(".tarot-card").forEach(b => b.disabled = true);
    button.classList.add("selected");

    setTimeout(() => {
      const phase = phases[currentPhaseIndex];
      const usedNames = Object.values(selectedCards).map(card => card.name);
      const picked = getRandomCard(usedNames);

      selectedCards[phase.key] = picked;
      slotEls[phase.key].textContent = `${picked.icon} ${picked.name} / ${picked.orientation}`;
      currentPhaseIndex += 1;

      document.querySelectorAll(".tarot-card").forEach(b => {
        b.disabled = false;
        b.classList.remove("selected");
      });

      if (currentPhaseIndex < phases.length) {
        updatePhaseUI();
      } else {
        showResult();
      }
    }, 700);
  });
});

function showResult() {
  phaseTitle.textContent = "3枚すべて選びました";
  phaseText.textContent = "下にスクロールして結果を確認してください。";

  resultGrid.innerHTML = "";

  phases.forEach((phase) => {
    const card = selectedCards[phase.key];
    const article = document.createElement("article");
    article.className = "result-item";
    article.innerHTML = `
      <p class="mini-label">${phase.label}</p>
      <div class="icon">${card.icon}</div>
      <h3>${card.name}</h3>
      <p class="pos">${card.orientation} / ${card.keyword}</p>
      <p>${card[phase.key][card.orientationKey]}</p>
    `;
    resultGrid.appendChild(article);
  });

  resultLead.textContent = worryMessages[selectedWorry].resultLead;
  summaryText.textContent = makeSummary(selectedCards);

  const customReader = readerName.value.trim();
  readerTitle.textContent = customReader ? `${customReader}からのご案内` : "さらに詳しく知りたい方へ";
  lineLead.textContent = lineLeadText.value.trim() || worryMessages[selectedWorry].lineLead;
  lineButton.textContent = lineButtonText.value.trim() || "詳しい解釈をLINEで受け取る";
  lineButton.href = lineUrl.value.trim() || "#";

  result.classList.remove("hidden");
  result.classList.add("show");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function makeSummary(cards) {
  const past = cards.past;
  const present = cards.present;
  const future = cards.future;
  const worryPrefix = {
    "復縁": "復縁を考えるなら",
    "片思い": "片思いを進めるなら",
    "恋人": "今の関係を整えるなら",
    "音信不通": "音信不通の状況を見るなら"
  }[selectedWorry];

  return `${worryPrefix}、過去の「${past.name}/${past.orientation}」は、これまでの関係に「${past.keyword}」の流れがあったことを示しています。現在の「${present.name}/${present.orientation}」から見ると、今の彼の気持ちは「${present.keyword}」に近い状態。未来の「${future.name}/${future.orientation}」は、これから「${future.keyword}」の方向へ動きやすいことを表しています。今は結果を急ぎすぎず、相手の反応を見ながら、あなた自身が落ち着いて動ける形を選ぶのが良さそうです。`;
}

retryButton.addEventListener("click", () => {
  currentPhaseIndex = 0;
  selectedCards = {};
  phases.forEach(phase => {
    slotEls[phase.key].textContent = "未選択";
  });
  updatePhaseUI();
  result.classList.add("hidden");
  result.classList.remove("show");
  document.getElementById("spread").scrollIntoView({ behavior: "smooth", block: "start" });
});

updatePhaseUI();
