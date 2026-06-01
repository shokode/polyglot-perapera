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
  | 'norway-life';

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
];

export type LevelKey = 'basic' | 'useful' | 'daily' | 'natural' | 'advanced';
export const levels: LevelKey[] = ['basic', 'useful', 'daily', 'natural', 'advanced'];

export type TextLanguage = UILang;

export const languageNames: Record<TextLanguage, Record<UILang, string>> = {
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
};

export const levelLabels: Record<LevelKey, Record<UILang, string>> = {
  basic: { no: 'Basis', en: 'Basic', ja: '基礎' },
  useful: { no: 'Nyttig', en: 'Useful', ja: '役に立つ' },
  daily: { no: 'Daglig', en: 'Daily', ja: '日常' },
  natural: { no: 'Naturlig', en: 'Natural', ja: '自然な' },
  advanced: { no: 'Avansert', en: 'Advanced', ja: '上級' },
};

export type UILabels = {
  title: string;
  subtitle: string;
  language: string;
  category: string;
  level: string;
  start: string;
  view: string;
  allCategories: string;
  allLevels: string;
  allLanguages: string;
  noResults: string;
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
  wpm: string;
  japaneseTranslation: string;
  englishTranslation: string;
  usefulExpressions: string;
  grammarFromText: string;
  levelLabel: string;
  expressionStatusNew: string;
  expressionStatusReview: string;
  expressionStatusLearned: string;
  expressionStatusAction: string;
  expressionTextForm: string;
  reviewPageTitle: string;
  noReviewItems: string;
  keepReviewing: string;
  markAsLearned: string;
  expressionPracticePrefix: string;
  expressionPracticeSuffix: string;
  expressionNotPracticed: string;
  highRepetition: string;
};

export const uiText: Record<UILang, UILabels> = {
  no: {
    title: 'Les, skriv, lær',
    subtitle: 'Multispråklig lesing og skriving med naturlige tekster.',
    language: 'Språk',
    category: 'Kategori',
    level: 'Nivå',
    start: 'Start',
    view: 'Åpne',
    allCategories: 'Alle kategorier',
    allLevels: 'Alle nivåer',
    allLanguages: 'Alle språk',
    noResults: 'Ingen tekster funnet for valgene dine.',
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
    wpm: 'WPM',
    japaneseTranslation: 'Japansk oversettelse',
    englishTranslation: 'Engelsk oversettelse',
    usefulExpressions: 'Nyttige uttrykk',
    grammarFromText: 'Grammatikk fra denne teksten',
    levelLabel: 'Nivå',
    expressionStatusNew: 'Ny',
    expressionStatusReview: 'Repeter',
    expressionStatusLearned: 'Lært',
    expressionStatusAction: 'Klikk for å endre status',
    expressionTextForm: 'Form i teksten',
    reviewPageTitle: 'Repeter',
    noReviewItems: 'Ingen uttrykk å repetere ennå',
    keepReviewing: 'Fortsett å repetere',
    markAsLearned: 'Marker som lært',
    expressionPracticePrefix: 'Øvd ',
    expressionPracticeSuffix: ' ganger',
    expressionNotPracticed: 'Ikke øvd',
    highRepetition: 'Mye repetisjon',
  },
  en: {
    title: 'Read & Type',
    subtitle: 'Multilingual reading and typing with natural texts.',
    language: 'Language',
    category: 'Category',
    level: 'Level',
    start: 'Start',
    view: 'Open',
    allCategories: 'All categories',
    allLevels: 'All levels',
    allLanguages: 'All languages',
    noResults: 'No texts match your filters.',
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
    wpm: 'WPM',
    japaneseTranslation: 'Japanese Translation',
    englishTranslation: 'English Translation',
    usefulExpressions: 'Useful expressions',
    grammarFromText: 'Grammar from this text',
    levelLabel: 'Level',
    expressionStatusNew: 'New',
    expressionStatusReview: 'Review',
    expressionStatusLearned: 'Learned',
    expressionStatusAction: 'Click to change status',
    expressionTextForm: 'Text form',
    reviewPageTitle: 'Review',
    noReviewItems: 'No review items yet',
    keepReviewing: 'Keep reviewing',
    markAsLearned: 'Mark as learned',
    expressionPracticePrefix: 'Practiced ',
    expressionPracticeSuffix: ' times',
    expressionNotPracticed: 'Not practiced',
    highRepetition: 'High repetition',
  },
  ja: {
    title: '読むと打つ',
    subtitle: '自然なテキストで学ぶ多言語のリーディングとタイピング。',
    language: '言語',
    category: 'カテゴリー',
    level: 'レベル',
    start: '開始',
    view: '開く',
    allCategories: 'すべてのカテゴリー',
    allLevels: 'すべてのレベル',
    allLanguages: 'すべての言語',
    noResults: 'フィルターに一致するテキストがありません。',
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
    wpm: 'WPM',
    japaneseTranslation: '日本語訳',
    englishTranslation: '英語訳',
    usefulExpressions: '便利な表現',
    grammarFromText: 'この文章の文法',
    levelLabel: 'レベル',
    expressionStatusNew: '新規',
    expressionStatusReview: '復習',
    expressionStatusLearned: '覚えた',
    expressionStatusAction: 'クリックしてステータスを変更',
    expressionTextForm: '本文の形',
    reviewPageTitle: '復習',
    noReviewItems: '復習する表現はまだありません',
    keepReviewing: '復習を続ける',
    markAsLearned: '覚えた',
    expressionPracticePrefix: '',
    expressionPracticeSuffix: '回練習',
    expressionNotPracticed: '未練習',
    highRepetition: 'たくさん復習',
  },
};
