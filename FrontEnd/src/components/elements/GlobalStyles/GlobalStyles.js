import PropTypes from "prop-types";
import './index.css';

function GlobalStyles({children}) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
