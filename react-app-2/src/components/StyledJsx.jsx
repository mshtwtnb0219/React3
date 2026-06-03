export const StyledJsx = () => {
    // next.jsで使用されているスタイルの記述方法
  return (
    <>
      <div className="container">
        <p>Styled JSXの例</p>
        <button>Fight</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px;
          border-radius: 16px;
          padding: 8px;
          margin: 8px;
        }
      `}</style>
    </>
  );
};
