import type { QuizResult, ScalpCategory } from "./types";

export const QUIZ_RESULTS: Record<ScalpCategory, QuizResult> = {
  oily: {
    category: "oily",
    title: "熱帶雨林",
    subtitle: "清爽控場型",
    description:
      "你對「出油」的雷達很靈敏，隔天、戴帽、熬夜後都容易先注意到油亮或扁塌。代表你其實很在意頭皮是否乾淨、髮根是否有精神。",
    tips: [
      "可選擇溫和但洗淨力足夠的洗髮方式，避免過度滋潤堆積",
      "出油日可縮短洗髮間隔，或局部清潔髮根",
      "吹整時先顧髮根蓬鬆，視覺上會更精神",
    ],
  },
  sensitive: {
    category: "sensitive",
    title: "溫帶霧林",
    subtitle: "舒適優先型",
    description:
      "你常先感受到頭皮「怪怪的」——癢、刺、悶或不適。比起造型，你更在意頭皮是否安定，這代表你對刺激與環境變化相當敏銳。",
    tips: [
      "洗髮水溫不宜過熱，減少抓刮頭皮",
      "換季或壓力大時，簡化造型品與洗護步驟",
      "若持續不適，建議記錄誘發情境並諮詢專業",
    ],
  },
  dry: {
    category: "dry",
    title: "溫帶針葉林",
    subtitle: "保濕平衡型",
    description:
      "你的作答顯示頭皮需要更多溫和與保濕平衡。雖然敏感傾向也可能偏高，但整體來說，你適合把「不乾澀、不緊繃」放在洗護的核心。",
    tips: [
      "避免過度清潔或高頻去油洗髮",
      "吹風前可用毛巾輕壓吸水，減少高溫久吹",
      "選擇標榜保濕、低刺激的洗護配方",
    ],
  },
  neutral: {
    category: "neutral",
    title: "溫帶混合林",
    subtitle: "順其自然型",
    description:
      "你多半覺得「還好、正常、穩穩的」，代表頭皮狀態相對均衡。你不太被單一困擾綁架，重視的是整體舒服、好整理。",
    tips: [
      "維持規律作息與適度清潔即可",
      "季節轉換時再微調洗護，不必過度換產品",
      "持續觀察即可，有變化再對症調整",
    ],
  },
  thin: {
    category: "thin",
    title: "熱帶莽原",
    subtitle: "髮根視覺型",
    description:
      "你特別在意髮根是否塌、造型是否有份量。鏡子前、戴帽後、拍照時，常常第一眼看的是蓬鬆度與線條，而不是單純出油與否。",
    tips: [
      "吹髮時倒吹或撐起髮根，增加立體感",
      "避免過重護髮堆積在髮根",
      "可搭配輕盈蓬鬆類洗護，減少扁塌",
    ],
  },
  hairloss: {
    category: "hairloss",
    title: "溫帶落葉林",
    subtitle: "密度在意型",
    description:
      "你對髮量、髮縫、掉髮的變化特別有感，尤其在壓力期或看照片時。這不代表一定有問題，但代表你正在積極關注頭皮與毛囊的長期狀態。",
    tips: [
      "避免過緊馬尾或長時間拉扯同一區",
      "壓力大時更要規律睡眠與均衡飲食",
      "若掉髮明顯增加，建議及早諮詢皮膚科或專業",
    ],
  },
};

export const SCALP_CATEGORIES: ScalpCategory[] = [
  "oily",
  "sensitive",
  "dry",
  "neutral",
  "thin",
  "hairloss",
];

export function isScalpCategory(value: string): value is ScalpCategory {
  return SCALP_CATEGORIES.includes(value as ScalpCategory);
}

export function getQuizResult(category: ScalpCategory): QuizResult {
  return QUIZ_RESULTS[category];
}
