interface ButtonProp {
  style: string;
  text: string;
  onclick?: () => void;
}
const Button = ({ style, text, onclick }: ButtonProp) => {
  return (
    <button onClick={onclick} className={style}>
      {text}
    </button>
  );
};

export default Button;
