import { useCartContext } from "./cart-context";

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  return <span className="span">{count}</span>;
};

export default Display;
