import React, { useState } from 'react';
import Preview from './src/components/Preview';
import Main from './src/components/Main';
import ResultScreen from './src/components/ResultScreen';

const App: React.FC = () => {
  /**
   * костыль так как был баг с react-navigate
   */
  const [isShowPreview, setIsShowPreview] = useState<boolean>(true);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  if(isShowPreview){
    return (
      <Preview offPreview={setIsShowPreview}/>
    );
  }
  else if(isShowResult){
    return <ResultScreen reset={setIsShowResult}/>
  }
  else return <Main toEndTest={setIsShowResult}/>
}

export default App;
