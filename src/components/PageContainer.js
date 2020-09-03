import React from 'react';
import { getNewIdGenerator } from '../utils';
import WordContainer from './WordContainer';
import { STEP, arrWords } from '../constants';

const getNextWordId = getNewIdGenerator();

const PageContainer =({ counter }) => {
  const pageWords = [];
  for(let i = 0; i < STEP; i++){
    pageWords.push(arrWords[i + counter]);
  }
  return pageWords.map(v => <WordContainer key={getNextWordId()} word={v} />);
}

export default PageContainer;