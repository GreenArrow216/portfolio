import { ReactNode } from "react";
import "./badge.css"

const Badge = ({children}: {children:ReactNode}) => {
    return (
        <span className="cyberpunk-badge">
         {children}
        </span>
      );
}

export default Badge