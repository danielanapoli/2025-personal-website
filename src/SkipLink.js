import { Link } from "react-router-dom";

export function SkipToContentLink() {
    return (<SkipLink skipToId="content">Skip to main</SkipLink>);
}

function SkipLink({skipToId, children}) {
    
    const skipTo = (skipToId) => {
        var skipToElement = document.getElementById(skipToId);
        skipToElement.tabIndex = -1;
        skipToElement.focus();
    }

    return (
        <Link onClick={() => skipTo(skipToId)} className="skip-to-main-link">{children}</Link>
    )
}

export default SkipLink;