import React from 'react';
import { View } from 'react-native';
import { getNewIdGenerator } from '../utils';
import WordContainer from './WordContainer';
import { STEP, arrWords } from '../utils/index';

const getNextWordId = getNewIdGenerator();

interface PageContainerProps {
  counter: number;
}


const Validator: React.FC<PageContainerProps> =({ counter }) => {
  const pageWords: string[] = [];
  for(let i = 0; i < STEP; i++){
    pageWords.push(arrWords[i + counter]);
  }
  return (
    <View>
      {pageWords.map(v => <WordContainer key={getNextWordId()} word={v} />)}
    </View>
  );
}

export default Validator;