export const uiLanguages = ['no', 'en', 'ja'] as const;
export type UILang = (typeof uiLanguages)[number];

export const uiLanguageNames: Record<UILang, string> = {
  no: 'Norsk',
  en: 'English',
  ja: '日本語',
};

export type CategoryKey =
  | 'daily-life'
  | 'friends'
  | 'jobb'
  | 'it-utvikling'
  | 'lærlingplass'
  | 'health'
  | 'dog'
  | 'cooking'
  | 'norway-life'
  | 'frontend-office'
  | 'health-medical'
  | 'office-smalltalk';

export const categories: CategoryKey[] = [
  'daily-life',
  'friends',
  'jobb',
  'it-utvikling',
  'lærlingplass',
  'health',
  'dog',
  'cooking',
  'norway-life',
  'frontend-office',
  'health-medical',
  'office-smalltalk',
];

export type LevelKey = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'natural';
export type LegacyLevelKey = 'basic' | 'useful' | 'daily' | 'advanced';
export const levels: LevelKey[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'natural'];

export function normalizeLevelKey(level: string): LevelKey {
  const legacyLevels: Record<LegacyLevelKey, LevelKey> = {
    basic: 'a1',
    useful: 'a2',
    daily: 'b1',
    advanced: 'b2',
  };
  if (level in legacyLevels) {
    return legacyLevels[level as LegacyLevelKey];
  }
  return levels.includes(level as LevelKey) ? (level as LevelKey) : 'natural';
}

export type TargetTextLanguage = UILang;

export const languageNames: Record<TargetTextLanguage, Record<UILang, string>> = {
  no: { no: 'Norsk', en: 'Norwegian', ja: 'ノルウェー語' },
  en: { no: 'Engelsk', en: 'English', ja: '英語' },
  ja: { no: 'Japansk', en: 'Japanese', ja: '日本語' },
};

export const categoryLabels: Record<CategoryKey, Record<UILang, string>> = {
  'daily-life': { no: 'Hverdagsliv', en: 'Daily Life', ja: '日常生活' },
  friends: { no: 'Venner', en: 'Friends', ja: '友達' },
  jobb: { no: 'Jobb', en: 'Job', ja: '仕事' },
  'it-utvikling': { no: 'IT-utvikling', en: 'IT Development', ja: 'IT開発' },
  lærlingplass: { no: 'Lærlingplass', en: 'Apprenticeship', ja: '見習い' },
  health: { no: 'Helse', en: 'Health', ja: '健康' },
  dog: { no: 'Hund', en: 'Dog', ja: '犬' },
  cooking: { no: 'Matlaging', en: 'Cooking', ja: '料理' },
  'norway-life': { no: 'Norge', en: 'Norway Life', ja: 'ノルウェー生活' },
  'frontend-office': { no: 'Frontend og kontor', en: 'Frontend & Office', ja: 'フロントエンド・オフィス' },
  'health-medical': { no: 'Helse og medisin', en: 'Health & Medical', ja: '医療・ヘルスケア' },
  'office-smalltalk': { no: 'Småprat på jobb', en: 'Office Small Talk', ja: '職場の雑談' },
};

export const levelLabels: Record<LevelKey, Record<UILang, string>> = {
  a1: { no: 'A1 · Beginner', en: 'A1 · Beginner', ja: 'A1 · Beginner' },
  a2: { no: 'A2 · Elementary', en: 'A2 · Elementary', ja: 'A2 · Elementary' },
  b1: { no: 'B1 · Intermediate', en: 'B1 · Intermediate', ja: 'B1 · Intermediate' },
  b2: { no: 'B2 · Upper Intermediate', en: 'B2 · Upper Intermediate', ja: 'B2 · Upper Intermediate' },
  c1: { no: 'C1 · Advanced', en: 'C1 · Advanced', ja: 'C1 · Advanced' },
  natural: { no: 'Natural', en: 'Natural', ja: 'Natural' },
};

export type UILabels = {
  title: string;
  subtitle: string;
  language: string;
  practiceLanguage: string;
  category: string;
  level: string;
  start: string;
  startRecommended: string;
  randomPractice: string;
  view: string;
  allCategories: string;
  allLevels: string;
  allLanguages: string;
  noResults: string;
  todayPractice: string;
  totalSessions: string;
  learnedExpressions: string;
  reviewingExpressions: string;
  newExpressions: string;
  averageSpeed: string;
  favorite: string;
  favorited: string;
  reviewLater: string;
  learned: string;
  readTypeUnderstand: string;
  focusNaturalMeaning: string;
  typingPractice: string;
  typingPlaceholder: string;
  progress: string;
  accuracy: string;
  mistakes: string;
  wpm: string;
  cpm: string;
  completionMessage: string;
  selfAssessmentPrompt: string;
  assessmentPerfect: string;
  assessmentMostly: string;
  assessmentUnsure: string;
  assessmentAgain: string;
  assessmentSaved: string;
  nextRecommended: string;
  practiceAgain: string;
  backHome: string;
  addToReview: string;
  addedToReview: string;
  translationPracticeReviewUnavailable: string;
  japaneseTranslation: string;
  englishTranslation: string;
  norwegianTranslation: string;
  typeThisInJapanese: string;
  typeThisInEnglish: string;
  typeThisInNorwegian: string;
  translationPracticePrefix: string;
  originalText: string;
  translationPracticeNoCards: string;
  usefulExpressions: string;
  grammarFromText: string;
  levelLabel: string;
  expressionStatusNew: string;
  expressionStatusReview: string;
  expressionStatusLearned: string;
  expressionStatusAction: string;
  expressionTextForm: string;
  expressionDetails: string;
  expressionExample: string;
  showExpressionExample: string;
  hideExpressionExample: string;
  reviewPageTitle: string;
  noReviewItems: string;
  practiceThisText: string;
  keepReviewing: string;
  markAsLearned: string;
  expressionPracticePrefix: string;
  expressionPracticeSuffix: string;
  expressionNotPracticed: string;
  highRepetition: string;
  sortLabel: string;
  filterLabel: string;
  sortMostPracticed: string;
  sortLeastPracticed: string;
  sortRecentlyPracticed: string;
  sortAlphabetical: string;
  sortNewestDefault: string;
  sortEasiestFirst: string;
  sortHardestFirst: string;
  filterAll: string;
  lastPracticedPrefix: string;
  lastPracticedToday: string;
};

export const uiText: Record<UILang, UILabels> = {
  no: {
    title: 'Les, skriv, lær',
    subtitle: 'Multispråklig lesing og skriving med naturlige tekster.',
    language: 'Språk',
    practiceLanguage: 'Øvingsspråk',
    category: 'Kategori',
    level: 'Nivå',
    start: 'Start',
    startRecommended: 'Start anbefalt',
    randomPractice: 'Tilfeldig øvelse',
    view: 'Åpne',
    allCategories: 'Alle kategorier',
    allLevels: 'Alle nivåer',
    allLanguages: 'Alle språk',
    noResults: 'Ingen tekster funnet for valgene dine.',
    todayPractice: 'Dagens øving',
    totalSessions: 'Totalt antall økter',
    learnedExpressions: 'Lærte uttrykk',
    reviewingExpressions: 'Til repetisjon',
    newExpressions: 'Nye uttrykk',
    averageSpeed: 'Gjennomsnittsfart',
    favorite: '❤️ Favoritt',
    favorited: '❤️ Favorittert',
    reviewLater: '⭐ Se senere',
    learned: '✅ Lært',
    readTypeUnderstand: 'Les → Skriv → Forstå',
    focusNaturalMeaning: 'Fokuser på naturlig mening og grammatikk i kontekst. Skriv hele teksten under og få oversettelse, uttrykk og grammatikk etterpå.',
    typingPractice: 'Skriveøvelse',
    typingPlaceholder: 'Begynn å skrive her...',
    progress: 'Fremgang',
    accuracy: 'Nøyaktighet',
    mistakes: 'Feil',
    wpm: 'WPM',
    cpm: 'tegn/min',
    completionMessage: 'Ferdig! Bra jobbet.',
    selfAssessmentPrompt: 'Hvor godt forstod du teksten?',
    assessmentPerfect: 'Jeg forstod alt',
    assessmentMostly: 'Jeg forstod det meste',
    assessmentUnsure: 'Litt usikker',
    assessmentAgain: 'Øv igjen',
    assessmentSaved: 'Lagret',
    nextRecommended: 'Neste anbefalte',
    practiceAgain: 'Øv igjen',
    backHome: 'Tilbake hjem',
    addToReview: 'Legg til repetisjon',
    addedToReview: 'Lagt til repetisjon',
    translationPracticeReviewUnavailable: 'Uttrykkskort kan legges til fra vanlig tekstøving.',
    japaneseTranslation: 'Japansk oversettelse',
    englishTranslation: 'Engelsk oversettelse',
    norwegianTranslation: 'Norsk oversettelse',
    typeThisInJapanese: 'Skriv denne på japansk',
    typeThisInEnglish: 'Skriv denne på engelsk',
    typeThisInNorwegian: 'Skriv denne på norsk',
    translationPracticePrefix: 'Oversettelsesøvelse: ',
    originalText: 'Originaltekst',
    translationPracticeNoCards: 'Dette er en oversettelsesøvelse, så uttrykkskort vises ikke.',
    usefulExpressions: 'Nyttige uttrykk',
    grammarFromText: 'Grammatikk fra denne teksten',
    levelLabel: 'Nivå',
    expressionStatusNew: 'Ny',
    expressionStatusReview: 'Repeter',
    expressionStatusLearned: 'Lært',
    expressionStatusAction: 'Klikk for å endre status',
    expressionTextForm: 'Form i teksten',
    expressionDetails: 'Se mer',
    expressionExample: 'Eksempel',
    showExpressionExample: 'Vis eksempel',
    hideExpressionExample: 'Skjul eksempel',
    reviewPageTitle: 'Repeter',
    noReviewItems: 'Ingen uttrykk å repetere ennå',
    practiceThisText: 'Øv på denne teksten',
    keepReviewing: 'Fortsett å repetere',
    markAsLearned: 'Marker som lært',
    expressionPracticePrefix: 'Øvd ',
    expressionPracticeSuffix: ' ganger',
    expressionNotPracticed: 'Ikke øvd',
    highRepetition: 'Mye repetisjon',
    sortLabel: 'Sorter',
    filterLabel: 'Status',
    sortMostPracticed: 'Mest øvd først',
    sortLeastPracticed: 'Minst øvd først',
    sortRecentlyPracticed: 'Sist øvd',
    sortAlphabetical: 'A–Å',
    sortNewestDefault: 'Nyeste / standard',
    sortEasiestFirst: 'Lettest først',
    sortHardestFirst: 'Vanskeligst først',
    filterAll: 'Alle',
    lastPracticedPrefix: 'Sist: ',
    lastPracticedToday: 'i dag',
  },
  en: {
    title: 'Read & Type',
    subtitle: 'Multilingual reading and typing with natural texts.',
    language: 'Language',
    practiceLanguage: 'Practice language',
    category: 'Category',
    level: 'Level',
    start: 'Start',
    startRecommended: 'Start recommended',
    randomPractice: 'Random practice',
    view: 'Open',
    allCategories: 'All categories',
    allLevels: 'All levels',
    allLanguages: 'All languages',
    noResults: 'No texts match your filters.',
    todayPractice: 'Today’s practice',
    totalSessions: 'Total sessions',
    learnedExpressions: 'Learned expressions',
    reviewingExpressions: 'Reviewing',
    newExpressions: 'New expressions',
    averageSpeed: 'Average speed',
    favorite: '❤️ Favorite',
    favorited: '❤️ Favorited',
    reviewLater: '⭐ Review Later',
    learned: '✅ Learned',
    readTypeUnderstand: 'Read → Type → Understand',
    focusNaturalMeaning: 'Focus on natural meaning and grammar in context. Type the full text below and unlock translation, expressions, and grammar notes after completion.',
    typingPractice: 'Typing practice',
    typingPlaceholder: 'Start typing here...',
    progress: 'Progress',
    accuracy: 'Accuracy',
    mistakes: 'Mistakes',
    wpm: 'WPM',
    cpm: 'CPM',
    completionMessage: 'Complete! Nice work.',
    selfAssessmentPrompt: 'How well did you understand this text?',
    assessmentPerfect: 'I understood it perfectly',
    assessmentMostly: 'I mostly understood it',
    assessmentUnsure: 'Still a bit unsure',
    assessmentAgain: 'Practice again',
    assessmentSaved: 'Saved',
    nextRecommended: 'Next recommended',
    practiceAgain: 'Practice again',
    backHome: 'Back home',
    addToReview: 'Add to review',
    addedToReview: 'Added to review',
    translationPracticeReviewUnavailable: 'Expression review is available from regular text practice.',
    japaneseTranslation: 'Japanese Translation',
    englishTranslation: 'English Translation',
    norwegianTranslation: 'Norwegian Translation',
    typeThisInJapanese: 'Type this in Japanese',
    typeThisInEnglish: 'Type this in English',
    typeThisInNorwegian: 'Type this in Norwegian',
    translationPracticePrefix: 'Translation Practice: ',
    originalText: 'Original text',
    translationPracticeNoCards: 'This is translation practice, so learning cards are not shown.',
    usefulExpressions: 'Useful expressions',
    grammarFromText: 'Grammar from this text',
    levelLabel: 'Level',
    expressionStatusNew: 'New',
    expressionStatusReview: 'Review',
    expressionStatusLearned: 'Learned',
    expressionStatusAction: 'Click to change status',
    expressionTextForm: 'Text form',
    expressionDetails: 'Details',
    expressionExample: 'Example',
    showExpressionExample: 'Show example',
    hideExpressionExample: 'Hide example',
    reviewPageTitle: 'Review',
    noReviewItems: 'No review items yet',
    practiceThisText: 'Practice this text',
    keepReviewing: 'Keep reviewing',
    markAsLearned: 'Mark as learned',
    expressionPracticePrefix: 'Practiced ',
    expressionPracticeSuffix: ' times',
    expressionNotPracticed: 'Not practiced',
    highRepetition: 'High repetition',
    sortLabel: 'Sort',
    filterLabel: 'Status',
    sortMostPracticed: 'Most practiced first',
    sortLeastPracticed: 'Least practiced first',
    sortRecentlyPracticed: 'Recently practiced',
    sortAlphabetical: 'A–Z',
    sortNewestDefault: 'Newest / default',
    sortEasiestFirst: 'Easiest first',
    sortHardestFirst: 'Hardest first',
    filterAll: 'All',
    lastPracticedPrefix: 'Last: ',
    lastPracticedToday: 'today',
  },
  ja: {
    title: '読むと打つ',
    subtitle: '自然なテキストで学ぶ多言語のリーディングとタイピング。',
    language: '言語',
    practiceLanguage: '練習する言語',
    category: 'カテゴリー',
    level: 'レベル',
    start: '開始',
    startRecommended: 'おすすめを開始',
    randomPractice: 'ランダムに練習',
    view: '開く',
    allCategories: 'すべてのカテゴリー',
    allLevels: 'すべてのレベル',
    allLanguages: 'すべての言語',
    noResults: 'フィルターに一致するテキストがありません。',
    todayPractice: '今日の練習',
    totalSessions: '総練習回数',
    learnedExpressions: '覚えた表現',
    reviewingExpressions: '復習中',
    newExpressions: '新規表現',
    averageSpeed: '平均速度',
    favorite: '❤️ お気に入り',
    favorited: '❤️ お気に入り済み',
    reviewLater: '⭐ あとでレビュー',
    learned: '✅ 学習済み',
    readTypeUnderstand: '読む → 打つ → 理解する',
    focusNaturalMeaning: '自然な意味と文法に注目しましょう。下の全文をタイプして、完了後に翻訳・表現・文法を確認できます。',
    typingPractice: 'タイピング練習',
    typingPlaceholder: 'ここに入力してください...',
    progress: '進捗',
    accuracy: '正確さ',
    mistakes: 'ミス',
    wpm: 'WPM',
    cpm: '文字/分',
    completionMessage: '完了しました！おつかれさまです。',
    selfAssessmentPrompt: 'この文章をどれくらい理解できましたか？',
    assessmentPerfect: '完璧に分かった',
    assessmentMostly: 'だいたい分かった',
    assessmentUnsure: '少し怪しい',
    assessmentAgain: 'もう一度やる',
    assessmentSaved: '保存しました',
    nextRecommended: '次のおすすめへ',
    practiceAgain: 'もう一度練習',
    backHome: 'ホームへ戻る',
    addToReview: '復習に追加',
    addedToReview: '復習に追加しました',
    translationPracticeReviewUnavailable: '表現カードの復習追加は通常の本文練習から使えます。',
    japaneseTranslation: '日本語訳',
    englishTranslation: '英語訳',
    norwegianTranslation: 'ノルウェー語訳',
    typeThisInJapanese: 'この日本語でタイピングする',
    typeThisInEnglish: 'この英語でタイピングする',
    typeThisInNorwegian: 'このノルウェー語でタイピングする',
    translationPracticePrefix: '翻訳タイピング：',
    originalText: '原文',
    translationPracticeNoCards: 'これは翻訳タイピング練習なので、表現カードは表示していません。',
    usefulExpressions: '便利な表現',
    grammarFromText: 'この文章の文法',
    levelLabel: 'レベル',
    expressionStatusNew: '新規',
    expressionStatusReview: '復習',
    expressionStatusLearned: '覚えた',
    expressionStatusAction: 'クリックしてステータスを変更',
    expressionTextForm: '本文の形',
    expressionDetails: '詳しく見る',
    expressionExample: '例文',
    showExpressionExample: '例文を表示',
    hideExpressionExample: '例文を隠す',
    reviewPageTitle: '復習',
    noReviewItems: '復習する表現はまだありません',
    practiceThisText: 'この文をタイピングする',
    keepReviewing: '復習を続ける',
    markAsLearned: '覚えた',
    expressionPracticePrefix: '',
    expressionPracticeSuffix: '回練習',
    expressionNotPracticed: '未練習',
    highRepetition: '何度も復習中',
    sortLabel: '並び替え',
    filterLabel: 'ステータス',
    sortMostPracticed: '練習回数が多い順',
    sortLeastPracticed: '練習回数が少ない順',
    sortRecentlyPracticed: '最近練習した順',
    sortAlphabetical: 'A–Z',
    sortNewestDefault: '新しい順 / 標準',
    sortEasiestFirst: 'レベルが低い順',
    sortHardestFirst: 'レベルが高い順',
    filterAll: 'すべて',
    lastPracticedPrefix: '最後: ',
    lastPracticedToday: '今日',
  },
};
