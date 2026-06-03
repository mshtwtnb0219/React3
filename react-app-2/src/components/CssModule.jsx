import classes from "./CssModiule.module.scss";

// CSS Moduleの例 非推奨
export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p>CSS Moduleの例</p>
      <button>Fight</button>
    </div>
  );
};
