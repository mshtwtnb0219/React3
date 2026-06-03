import { useState ,useCallback, useMemo} from "react";
import { ChildArea } from "./ClildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModule } from "./components/CssModule";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponets } from "./components/StyledComponets";
// import { Emotin } from "./components/Emotion";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const  onClickOpen = () => {
    setOpen(!open);
  }

  // openの値が変更されたときだけ、onClickClose関数が再生成される
  const onClickClose = useCallback(() => {
    setOpen(false);
  },[] );

const tmp = useMemo(() => 1 + 3,[]);
console.log(tmp);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br/>
      <br/>
      <button onClick={onClickOpen}>表示</button>
      {/* 子コンポーネントの再レンダリングの抑止 */}
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle/>
      <CssModule/>
      <StyledJsx/>
      <StyledComponets/>
      {/* <Emotin/> */}
    </>
  );
};
