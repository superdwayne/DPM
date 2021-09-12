import { Link } from "react-router-dom";
import { useScollPosition } from '../Close/scrollhook';

const Close = () => {
const scroll = useScollPosition();
const page = window.location.pathname
console.log(scroll + page)
    return (

<Link to="/" data-page="/" >
    <svg className="close-content" viewBox="0 0 42 42" >
          <path d="M34.6118 9.86307L32.1369 7.3882L21 18.5251L9.86307 7.3882L7.3882 9.86307L18.5251 21L7.3882 32.1369L9.86307 34.6118L21 23.4749L32.1369 34.6118L34.6118 32.1369L23.4749 21L34.6118 9.86307Z"
              fill={scroll > 0.84 && page === '/websites' ? "black" : scroll > 0.34 && page === "/interactiveemails" ? "black" : "white"}>
          </path>
    </svg>
  </Link>
    )
    }

export default Close;
    