import type { QuizQuestion } from "./types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    text: "洗完頭的隔天，你第一個會注意到什麼？",
    options: [
      { id: "q1-a", choice: "A", label: "欸…怎麼又有點油了" },
      { id: "q1-b", choice: "B", label: "頭皮有沒有哪裡怪怪的？" },
      { id: "q1-c", choice: "C", label: "沒特別感覺，一切正常" },
      { id: "q1-d", choice: "D", label: "髮根還有沒有蓬鬆感？" },
    ],
  },
  {
    id: "q2",
    text: "如果今天突然來不及洗頭，你的反應是？",
    options: [
      { id: "q2-a", choice: "A", label: "崩潰，感覺整天都不舒服" },
      { id: "q2-b", choice: "B", label: "有點阿雜，希望不要癢或悶" },
      { id: "q2-c", choice: "C", label: "還好，整理一下就出門" },
      { id: "q2-d", choice: "D", label: "第一時間先看髮根有沒有塌" },
    ],
  },
  {
    id: "q3",
    text: "戴安全帽 / 帽子一整天後，你最像？",
    options: [
      { id: "q3-a", choice: "A", label: "好悶，超想立刻洗頭" },
      { id: "q3-b", choice: "B", label: "頭皮有點刺刺癢癢的" },
      { id: "q3-c", choice: "C", label: "還好，整理一下就行" },
      { id: "q3-d", choice: "D", label: "髮型扁掉比頭皮更讓我在意" },
    ],
  },
  {
    id: "q4",
    text: "熬夜或壓力大的那幾天，你最容易？",
    options: [
      { id: "q4-a", choice: "A", label: "出油速度突然開外掛" },
      { id: "q4-b", choice: "B", label: "頭皮開始有點鬧脾氣" },
      { id: "q4-c", choice: "C", label: "好像沒太大差別" },
      { id: "q4-d", choice: "D", label: "掉髮好像特別有感" },
    ],
  },
  {
    id: "q5",
    text: "出門前照鏡子，你最容易卡在哪一秒？",
    options: [
      { id: "q5-a", choice: "A", label: "怎麼又塌了…" },
      { id: "q5-b", choice: "B", label: "是不是有點怪怪的？" },
      { id: "q5-c", choice: "C", label: "OK，今天穩穩的" },
      { id: "q5-d", choice: "D", label: "最近髮量是不是…" },
    ],
  },
  {
    id: "q6",
    text: "洗頭的時候，你最在意的是？",
    options: [
      { id: "q6-a", choice: "A", label: "洗完一定要超清爽" },
      { id: "q6-b", choice: "B", label: "不要刺激、舒服就好" },
      { id: "q6-c", choice: "C", label: "順順的、穩穩的就行" },
      { id: "q6-d", choice: "D", label: "希望看起來蓬一點" },
    ],
  },
  {
    id: "q7",
    text: "吹完頭髮後，你最希望看到哪種狀態？",
    options: [
      { id: "q7-a", choice: "A", label: "髮根站起來，清爽有精神" },
      { id: "q7-b", choice: "B", label: "頭皮舒服、不緊不癢" },
      { id: "q7-c", choice: "C", label: "順順自然，沒什麼問題" },
      { id: "q7-d", choice: "D", label: "看起來澎鬆、有份量" },
    ],
  },
  {
    id: "q8",
    text: "如果朋友突然幫你拍頭頂照，你第一個會在意什麼？",
    options: [
      { id: "q8-a", choice: "A", label: "是不是有點油光？" },
      { id: "q8-b", choice: "B", label: "頭皮看起來有沒有不舒服？" },
      { id: "q8-c", choice: "C", label: "看起來還蠻正常的" },
      { id: "q8-d", choice: "D", label: "髮縫是不是太誠實了…" },
    ],
  },
];
