import './glitchText.css'

interface CustomStyle extends React.CSSProperties {
    "--index"?: number;
  }
  

const GlitchText = ({text}:{text:string}) => {
    return <div className="stack" style={{ "--stacks": 3 } as CustomStyle}>
    <span style={{ "--index": 0 } as CustomStyle}>{text}</span>
    <span style={{ "--index": 1 } as CustomStyle}>{text}</span>
    <span style={{ "--index": 2 } as CustomStyle}>{text}</span>
  </div>
}

export default GlitchText