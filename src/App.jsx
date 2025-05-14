import { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {
  // 開発時かつStrictModeのときはCompornentが2回レンダリングされる。
  console.log('--App--');
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);

  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  // []の中身の変数に変更があったときだけ、useEffeceの中身が動作する
  useEffect(() => {
    if(num > 0){
      if(num % 3 == 0){
        isShowFace || setIsShowFace(true);
      }else{
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);



  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>＼(^o^)／</p>}
    </>
  );
};
