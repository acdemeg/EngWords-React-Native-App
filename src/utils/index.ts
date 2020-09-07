import wordList from '../../wordsList.json';

let mapWordsTranslate: Map<string, string> = new Map(Object.entries(wordList));
let mapWordsSelectFlag: Map<string, boolean> = new Map();
let arrWords: Array<string> = []; 
const STEP: number = 5;
const LAST_PAGE: number = mapWordsTranslate.size - STEP;

interface IReturnFunction<ValueType>{
  (): ValueType;
}

const getNewIdGenerator = (): IReturnFunction<number>  => {
  let id: number = 0;
  return (): number => {
    id += 1;
    return id;
  };
};

const setInitializeData = (): void => {
  mapWordsTranslate = new Map(Object.entries(wordList));
  mapWordsSelectFlag = new Map();
  arrWords = [];
  mapWordsTranslate.forEach((v,k) => arrWords.push(k));
  arrWords = shuffle(arrWords);
  arrWords.forEach(v => mapWordsSelectFlag.set(v, false));
}

const calculatePercentSelectedWords = (): number => {
  let count: number = 0;
  mapWordsSelectFlag.forEach((v,k) => v ? ++count : count);
  return Math.round((count / arrWords.length) * 100); 

};

//перемешать порядок слов случайным образом
const shuffle = (arrWords: Array<string>): Array<string> => {
  let array: Array<string> = arrWords;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { 
  getNewIdGenerator,
  setInitializeData,
  calculatePercentSelectedWords,
  STEP,
  LAST_PAGE,
  mapWordsSelectFlag,
  arrWords
 };