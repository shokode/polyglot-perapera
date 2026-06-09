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
  home: string;
  review: string;
  title: string;
  subtitle: string;
  language: string;
  practiceLanguage: string;
  category: string;
  level: string;
  start: string;
  startRecommended: string;
  todayRecommendation: string;
  recommendationReasonPinned: string;
  recommendationReasonAgain: string;
  recommendationReasonShaky: string;
  recommendationReasonReview: string;
  recommendationReasonLowPractice: string;
  recommendationReasonUnpracticed: string;
  recommendationReasonLearned: string;
  randomPractice: string;
  view: string;
  viewDetails: string;
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
  averageWpm: string;
  averageCpm: string;
  favorite: string;
  favorited: string;
  reviewLater: string;
  learned: string;
  readTypeUnderstand: string;
  focusNaturalMeaning: string;
  typingPractice: string;
  typingPlaceholder: string;
  typingMode: string;
  typingModeStrict: string;
  typingModeFlow: string;
  typingModeFlowDescription: string;
  typingInputLabel: string;
  japaneseTypingInputLabel: string;
  translationHintTitle: string;
  translationHintAction: string;
  progress: string;
  accuracy: string;
  mistakes: string;
  wpm: string;
  cpm: string;
  completionMessage: string;
  completionPerfectMessage: string;
  completionFinishedMessage: string;
  completionFinishedNote: string;
  selfAssessmentPrompt: string;
  assessmentPerfect: string;
  assessmentMostly: string;
  assessmentUnsure: string;
  assessmentAgain: string;
  assessmentSaved: string;
  expressionAutoReviewNotice: string;
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
  currentExpression: string;
  expressionExample: string;
  showExpressionExample: string;
  hideExpressionExample: string;
  reviewPageTitle: string;
  reviewSummaryTotal: string;
  reviewSummaryStatus: string;
  reviewSummarySort: string;
  reviewModeCardList: string;
  reviewModeFlashcards: string;
  flashcardShowAnswer: string;
  flashcardHideAnswer: string;
  flashcardAgain: string;
  flashcardUnsure: string;
  flashcardGood: string;
  flashcardLearned: string;
  flashcardClose: string;
  flashcardSessionComplete: string;
  flashcardContinueSession: string;
  flashcardBackToReview: string;
  flashcardSessionSubtitle: string;
  flashcardSessionPerfect: string;
  flashcardSessionRetryNotice: string;
  flashcardSourceText: string;
  flashcardChooseMeaning: string;
  flashcardCorrect: string;
  flashcardWrong: string;
  flashcardNext: string;
  flashcardResultCorrect: string;
  flashcardResultWrong: string;
  flashcardResultLearned: string;
  flashcardBaseForm: string;
  starredPageTitle: string;
  noReviewItems: string;
  noStarredItems: string;
  practiceThisText: string;
  practiceStarredRandomly: string;
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
  pinText: string;
  unpinText: string;
  pinnedText: string;
  showMore: string;
  cardCountDisplay: string;
  cardCountRemaining: string;
  authSignIn: string;
  authSignUp: string;
  authSignOut: string;
  authEmail: string;
  authPassword: string;
  authModalTitle: string;
  authSignUpHint: string;
  authProcessing: string;
  authCheckEmail: string;
  authClose: string;
  themeLabel: string;
  themeOcean: string;
  themeMidnightHaze: string;
  themePastelNight: string;
  themeRetro: string;
};

export const uiText: Record<UILang, UILabels> = {
  no: {
    home: 'Hjem',
    review: 'Repeter',
    title: 'Polyglotyping',
    subtitle: 'Multispråklig lesing og skriving med naturlige tekster.',
    language: 'Språk',
    practiceLanguage: 'Øvingsspråk',
    category: 'Kategori',
    level: 'Nivå',
    start: 'Start',
    startRecommended: 'Start anbefalt',
    todayRecommendation: 'Dagens anbefaling',
    recommendationReasonPinned: 'Festet',
    recommendationReasonAgain: 'Øv igjen',
    recommendationReasonShaky: 'Litt usikker',
    recommendationReasonReview: 'Repeteres',
    recommendationReasonLowPractice: 'Lite øvd',
    recommendationReasonUnpracticed: 'Ikke øvd ennå',
    recommendationReasonLearned: 'Lært',
    randomPractice: 'Tilfeldig øvelse',
    view: 'Åpne',
    viewDetails: 'Se detaljer',
    allCategories: 'Alle kategorier',
    allLevels: 'Alle nivåer',
    allLanguages: 'Alle språk',
    noResults: 'Ingen tekster funnet for valgene dine.',
    todayPractice: 'Fremgang',
    totalSessions: 'Øvinger totalt',
    learnedExpressions: 'Lært',
    reviewingExpressions: 'Repeteres',
    newExpressions: 'Nye',
    averageSpeed: 'Gjennomsnittsfart',
    averageWpm: 'Snitt WPM',
    averageCpm: 'Snitt CPM',
    favorite: '❤️ Favoritt',
    favorited: '❤️ Favorittert',
    reviewLater: '⭐ Se senere',
    learned: '✅ Lært',
    readTypeUnderstand: 'Les → Skriv → Forstå',
    focusNaturalMeaning: 'Fokuser på naturlig mening og grammatikk i kontekst. Skriv hele teksten under og få oversettelse, uttrykk og grammatikk etterpå.',
    typingPractice: 'Skriveøvelse',
    typingPlaceholder: 'Begynn å skrive her...',
    typingMode: 'Skrivemodus',
    typingModeStrict: 'Nøyaktig modus',
    typingModeFlow: 'Flytmodus',
    typingModeFlowDescription: 'Feil telles, men du trenger ikke slette dem. Markøren venter til du skriver riktig tegn.',
    typingInputLabel: 'Inndata',
    japaneseTypingInputLabel: 'Japansk inndata',
    translationHintTitle: 'Forståelseshint',
    translationHintAction: 'Vis oversettelse',
    progress: 'Fremgang',
    accuracy: 'Nøyaktighet',
    mistakes: 'Feil',
    wpm: 'WPM',
    cpm: 'tegn/min',
    completionMessage: 'Ferdig! Bra jobbet.',
    completionPerfectMessage: 'Ferdig!',
    completionFinishedMessage: 'Fullført',
    completionFinishedNote: 'Det er noen feil. Du kan øve igjen eller velge hvor godt du forstod teksten.',
    selfAssessmentPrompt: 'Hvor godt forstod du denne teksten?',
    assessmentPerfect: 'Alt klart',
    assessmentMostly: 'Ganske klart',
    assessmentUnsure: 'Litt usikker',
    assessmentAgain: 'Øv igjen',
    assessmentSaved: 'Lagret',
    expressionAutoReviewNotice: 'Nye relaterte uttrykk ble lagt til repetisjon.',
    nextRecommended: 'Neste anbefalte',
    practiceAgain: 'Øv igjen',
    backHome: 'Tilbake hjem',
    addToReview: 'Legg til repetisjon',
    addedToReview: 'Lagt til repetisjon',
    translationPracticeReviewUnavailable: 'Uttrykkskort kan legges til fra vanlig tekstøving.',
    japaneseTranslation: 'JA',
    englishTranslation: 'EN',
    norwegianTranslation: 'NO',
    typeThisInJapanese: 'Skriv på JA',
    typeThisInEnglish: 'Skriv på EN',
    typeThisInNorwegian: 'Skriv på NO',
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
    currentExpression: 'Aktuelt uttrykk',
    expressionExample: 'Eksempel',
    showExpressionExample: 'Vis eksempel',
    hideExpressionExample: 'Skjul eksempel',
    reviewPageTitle: 'Repeter',
    reviewSummaryTotal: 'Totalt',
    reviewSummaryStatus: 'Status',
    reviewSummarySort: 'Sortering',
    reviewModeCardList: 'Kortliste',
    reviewModeFlashcards: 'Flashkort',
    flashcardShowAnswer: 'Vis svar',
    flashcardHideAnswer: 'Skjul svar',
    flashcardAgain: 'Øv igjen',
    flashcardUnsure: 'Litt usikker',
    flashcardGood: 'Ganske bra',
    flashcardLearned: 'Lært',
    flashcardClose: 'Lukk',
    flashcardSessionComplete: 'Økten er ferdig',
    flashcardContinueSession: 'Neste 5 kort',
    flashcardBackToReview: 'Tilbake til repetisjon',
    flashcardSessionSubtitle: '5 spørsmål unnagjort. Her er resultatet.',
    flashcardSessionPerfect: 'Alle riktige',
    flashcardSessionRetryNotice: 'Kortene du bommet på kommer tilbake i neste økt.',
    flashcardSourceText: 'Kildetekst',
    flashcardChooseMeaning: 'Velg betydningen av:',
    flashcardCorrect: 'Riktig',
    flashcardWrong: 'Feil',
    flashcardNext: 'Neste',
    flashcardResultCorrect: 'Riktig',
    flashcardResultWrong: 'Feil',
    flashcardResultLearned: 'Flyttet til Lært',
    flashcardBaseForm: 'Grunnform',
    starredPageTitle: 'Stjernemerket',
    noReviewItems: 'Ingen uttrykk å repetere ennå',
    noStarredItems: 'Ingen stjernemerkede elementer ennå',
    practiceThisText: 'Øv på denne teksten',
    practiceStarredRandomly: 'Øv tilfeldig fra stjernemerkede',
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
    pinText: 'Fest',
    unpinText: 'Fjern festing',
    pinnedText: 'Festet',
    showMore: 'Vis mer',
    cardCountDisplay: 'Viser {visible} av {total}',
    cardCountRemaining: 'Vis mer ({remaining} igjen)',
    authSignIn: 'Logg inn',
    authSignUp: 'Registrer deg',
    authSignOut: 'Logg ut',
    authEmail: 'E-post',
    authPassword: 'Passord',
    authModalTitle: 'Logg inn',
    authSignUpHint: 'Har du ikke konto?',
    authProcessing: 'Vent litt …',
    authCheckEmail: 'Sjekk e-posten din for å bekrefte kontoen.',
    authClose: 'Lukk',
    themeLabel: 'Tema',
    themeOcean: 'Ocean',
    themeMidnightHaze: 'Midnight Haze',
    themePastelNight: 'Pastel Night',
    themeRetro: 'Retro',
  },
  en: {
    home: 'Home',
    review: 'Review',
    title: 'Polyglotyping',
    subtitle: 'Multilingual reading and typing with natural texts.',
    language: 'Language',
    practiceLanguage: 'Practice language',
    category: 'Category',
    level: 'Level',
    start: 'Start',
    startRecommended: 'Start recommended',
    todayRecommendation: "Today's recommendation",
    recommendationReasonPinned: 'Pinned',
    recommendationReasonAgain: 'Practice again',
    recommendationReasonShaky: 'A bit shaky',
    recommendationReasonReview: 'In review',
    recommendationReasonLowPractice: 'Lightly practiced',
    recommendationReasonUnpracticed: 'Unpracticed',
    recommendationReasonLearned: 'Learned',
    randomPractice: 'Random practice',
    view: 'Open',
    viewDetails: 'View details',
    allCategories: 'All categories',
    allLevels: 'All levels',
    allLanguages: 'All languages',
    noResults: 'No texts match your filters.',
    todayPractice: 'Progress',
    totalSessions: 'Total practices',
    learnedExpressions: 'Learned',
    reviewingExpressions: 'In review',
    newExpressions: 'New',
    averageSpeed: 'Average speed',
    averageWpm: 'Avg WPM',
    averageCpm: 'Avg CPM',
    favorite: '❤️ Favorite',
    favorited: '❤️ Favorited',
    reviewLater: '⭐ Review Later',
    learned: '✅ Learned',
    readTypeUnderstand: 'Read → Type → Understand',
    focusNaturalMeaning: 'Focus on natural meaning and grammar in context. Type the full text below and unlock translation, expressions, and grammar notes after completion.',
    typingPractice: 'Typing practice',
    typingPlaceholder: 'Start typing here...',
    typingMode: 'Typing mode',
    typingModeStrict: 'Strict mode',
    typingModeFlow: 'Flow mode',
    typingModeFlowDescription: 'Mistakes are counted, but you do not need to delete them. The cursor waits until you type the correct character.',
    typingInputLabel: 'Input',
    japaneseTypingInputLabel: 'Japanese input',
    translationHintTitle: 'Meaning hint',
    translationHintAction: 'Show translation',
    progress: 'Progress',
    accuracy: 'Accuracy',
    mistakes: 'Mistakes',
    wpm: 'WPM',
    cpm: 'CPM',
    completionMessage: 'Complete! Nice work.',
    completionPerfectMessage: 'Complete!',
    completionFinishedMessage: 'Finished',
    completionFinishedNote: 'There are some mistakes. You can practice again or choose your understanding level.',
    selfAssessmentPrompt: 'How well did you understand this text?',
    assessmentPerfect: 'All clear',
    assessmentMostly: 'Mostly clear',
    assessmentUnsure: 'A bit unsure',
    assessmentAgain: 'Practice again',
    assessmentSaved: 'Saved',
    expressionAutoReviewNotice: 'New related expressions were added to Review.',
    nextRecommended: 'Next recommended',
    practiceAgain: 'Practice again',
    backHome: 'Back home',
    addToReview: 'Add to review',
    addedToReview: 'Added to review',
    translationPracticeReviewUnavailable: 'Expression review is available from regular text practice.',
    japaneseTranslation: 'JA',
    englishTranslation: 'EN',
    norwegianTranslation: 'NO',
    typeThisInJapanese: 'Type in JA',
    typeThisInEnglish: 'Type in EN',
    typeThisInNorwegian: 'Type in NO',
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
    currentExpression: 'Current expression',
    expressionExample: 'Example',
    showExpressionExample: 'Show example',
    hideExpressionExample: 'Hide example',
    reviewPageTitle: 'Review',
    reviewSummaryTotal: 'Total',
    reviewSummaryStatus: 'Status',
    reviewSummarySort: 'Sort',
    reviewModeCardList: 'Card list',
    reviewModeFlashcards: 'Flashcards',
    flashcardShowAnswer: 'Show answer',
    flashcardHideAnswer: 'Hide answer',
    flashcardAgain: 'Again',
    flashcardUnsure: 'Unsure',
    flashcardGood: 'Good',
    flashcardLearned: 'Learned',
    flashcardClose: 'Close',
    flashcardSessionComplete: 'Session complete',
    flashcardContinueSession: 'Next 5 cards',
    flashcardBackToReview: 'Back to review',
    flashcardSessionSubtitle: 'Nice work on the 5 questions. Here is the result.',
    flashcardSessionPerfect: 'All correct',
    flashcardSessionRetryNotice: 'Cards you missed will come back in the next session.',
    flashcardSourceText: 'Source text',
    flashcardChooseMeaning: 'Choose the meaning of:',
    flashcardCorrect: 'Correct',
    flashcardWrong: 'Wrong',
    flashcardNext: 'Next',
    flashcardResultCorrect: 'Correct',
    flashcardResultWrong: 'Wrong',
    flashcardResultLearned: 'Moved to Learned',
    flashcardBaseForm: 'Base form',
    starredPageTitle: 'Starred',
    noReviewItems: 'No review items yet',
    noStarredItems: 'No starred items yet',
    practiceThisText: 'Practice this text',
    practiceStarredRandomly: 'Practice starred randomly',
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
    pinText: 'Pin',
    unpinText: 'Unpin',
    pinnedText: 'Pinned',
    showMore: 'Show more',
    cardCountDisplay: 'Showing {visible} of {total}',
    cardCountRemaining: 'Show more ({remaining} remaining)',
    authSignIn: 'Sign in',
    authSignUp: 'Sign up',
    authSignOut: 'Sign out',
    authEmail: 'Email',
    authPassword: 'Password',
    authModalTitle: 'Sign in',
    authSignUpHint: "Don't have an account?",
    authProcessing: 'Please wait …',
    authCheckEmail: 'Check your email to confirm your account.',
    authClose: 'Close',
    themeLabel: 'Theme',
    themeOcean: 'Ocean',
    themeMidnightHaze: 'Midnight Haze',
    themePastelNight: 'Pastel Night',
    themeRetro: 'Retro',
  },
  ja: {
    home: 'ホーム',
    review: '復習',
    title: 'Polyglotyping',
    subtitle: '自然なテキストで学ぶ多言語のリーディングとタイピング。',
    language: '言語',
    practiceLanguage: '練習する言語',
    category: 'カテゴリー',
    level: 'レベル',
    start: '開始',
    startRecommended: 'おすすめを開始',
    todayRecommendation: '今日のおすすめ',
    recommendationReasonPinned: 'ピン留め',
    recommendationReasonAgain: 'もう一度',
    recommendationReasonShaky: '少し怪しい',
    recommendationReasonReview: '復習中',
    recommendationReasonLowPractice: '練習少なめ',
    recommendationReasonUnpracticed: '未練習',
    recommendationReasonLearned: '学習済み',
    randomPractice: 'ランダムに練習',
    view: '開く',
    viewDetails: '詳しく見る',
    allCategories: 'すべてのカテゴリー',
    allLevels: 'すべてのレベル',
    allLanguages: 'すべての言語',
    noResults: 'フィルターに一致するテキストがありません。',
    todayPractice: '学習状況',
    totalSessions: '総練習回数',
    learnedExpressions: '覚えた表現',
    reviewingExpressions: '復習中',
    newExpressions: '新規表現',
    averageSpeed: '平均速度',
    averageWpm: '平均WPM',
    averageCpm: '平均CPM',
    favorite: '❤️ お気に入り',
    favorited: '❤️ お気に入り済み',
    reviewLater: '⭐ あとでレビュー',
    learned: '✅ 学習済み',
    readTypeUnderstand: '読む → 打つ → 理解する',
    focusNaturalMeaning: '自然な意味と文法に注目しましょう。下の全文をタイプして、完了後に翻訳・表現・文法を確認できます。',
    typingPractice: 'タイピング練習',
    typingPlaceholder: 'ここに入力してください...',
    typingMode: '入力モード',
    typingModeStrict: '正確モード',
    typingModeFlow: 'フローモード',
    typingModeFlowDescription: '間違えても削除せず、正しい文字を打つまで進みません。',
    typingInputLabel: '入力中',
    japaneseTypingInputLabel: '変換入力',
    translationHintTitle: '理解のヒント',
    translationHintAction: '翻訳を見る',
    progress: '進捗',
    accuracy: '正確さ',
    mistakes: 'ミス',
    wpm: 'WPM',
    cpm: '文字/分',
    completionMessage: '完了しました！おつかれさまです。',
    completionPerfectMessage: '完了しました！',
    completionFinishedMessage: '最後まで打ちました',
    completionFinishedNote: 'ミスがあります。もう一度練習するか、理解度を選んで復習に進めます。',
    selfAssessmentPrompt: 'この文、どれくらい理解できた？',
    assessmentPerfect: '完璧',
    assessmentMostly: 'だいたいOK',
    assessmentUnsure: '少し怪しい',
    assessmentAgain: 'もう一度',
    assessmentSaved: '保存しました',
    expressionAutoReviewNotice: '関連する新規表現を復習に追加しました。',
    nextRecommended: '次のおすすめへ',
    practiceAgain: 'もう一度練習',
    backHome: 'ホームへ戻る',
    addToReview: '復習に追加',
    addedToReview: '復習に追加しました',
    translationPracticeReviewUnavailable: '表現カードの復習追加は通常の本文練習から使えます。',
    japaneseTranslation: 'JA',
    englishTranslation: 'EN',
    norwegianTranslation: 'NO',
    typeThisInJapanese: 'JAで打つ',
    typeThisInEnglish: 'ENで打つ',
    typeThisInNorwegian: 'NOで打つ',
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
    currentExpression: '現在の表現',
    expressionExample: '例文',
    showExpressionExample: '例文を表示',
    hideExpressionExample: '例文を隠す',
    reviewPageTitle: '復習',
    reviewSummaryTotal: '合計',
    reviewSummaryStatus: 'ステータス',
    reviewSummarySort: '並び替え',
    reviewModeCardList: 'カード一覧',
    reviewModeFlashcards: 'フラッシュカード',
    flashcardShowAnswer: '答えを見る',
    flashcardHideAnswer: '答えを隠す',
    flashcardAgain: 'もう一度',
    flashcardUnsure: '少し怪しい',
    flashcardGood: 'だいたいOK',
    flashcardLearned: '覚えた',
    flashcardClose: '閉じる',
    flashcardSessionComplete: 'セッション完了',
    flashcardContinueSession: '次の5枚へ',
    flashcardBackToReview: 'レビューに戻る',
    flashcardSessionSubtitle: '5問おつかれさま。今回の結果です。',
    flashcardSessionPerfect: '全問正解でした',
    flashcardSessionRetryNotice: '間違えたカードは次のセッションでもう一度出ます',
    flashcardSourceText: '出典テキスト',
    flashcardChooseMeaning: '意味を選んでください：',
    flashcardCorrect: '正解',
    flashcardWrong: '不正解',
    flashcardNext: '次へ',
    flashcardResultCorrect: '正解',
    flashcardResultWrong: '不正解',
    flashcardResultLearned: '覚えたに移動',
    flashcardBaseForm: '基本形',
    starredPageTitle: 'お気に入り',
    noReviewItems: '復習する表現はまだありません',
    noStarredItems: 'スター付きの項目はまだありません',
    practiceThisText: 'この文をタイピングする',
    practiceStarredRandomly: 'スター付きからランダム練習',
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
    pinText: 'ピン留め',
    unpinText: 'ピンを外す',
    pinnedText: 'ピン留め済み',
    showMore: 'もっと見る',
    cardCountDisplay: '{total}件中 {visible}件表示',
    cardCountRemaining: 'もっと見る（残り{remaining}件）',
    authSignIn: 'ログイン',
    authSignUp: '新規登録',
    authSignOut: 'ログアウト',
    authEmail: 'メールアドレス',
    authPassword: 'パスワード',
    authModalTitle: 'ログイン',
    authSignUpHint: 'アカウントをお持ちでない方',
    authProcessing: '処理中 …',
    authCheckEmail: '確認メールを送信しました。メールをご確認ください。',
    authClose: '閉じる',
    themeLabel: 'テーマ',
    themeOcean: 'オーシャン',
    themeMidnightHaze: 'ミッドナイトヘイズ',
    themePastelNight: 'パステルナイト',
    themeRetro: 'レトロ',
  },
};
