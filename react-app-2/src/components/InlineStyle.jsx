export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px",
    borderRadius: "16px",
    padding: "8px",
    margin: "8px",
  };

  const titleStyle = {};

  const buttonStyle = {};


  return (
    // インラインスタイルは、JavaScriptのオブジェクトでスタイルを定義する
    <div style={containerStyle}>
      <p style={titleStyle}>Inline styleの例</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  );
};
