import wordList from '../wordsList.json';

const mapWordsTranslate = new Map(Object.entries(wordList));
const mapWordsSelectFlag = new Map();
const arrWords = []; 
const STEP = 6;
const LAST_PAGE = mapWordsTranslate.size - STEP;

export {
  mapWordsTranslate,
  mapWordsSelectFlag,
  arrWords,
  STEP,
  LAST_PAGE, 
}