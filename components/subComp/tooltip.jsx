import "./tooltip.css";

export default function ToolTip({isVisable, text, size}) {
    
    
    
  return (
    <>
    
    <div className={`tooltip-container ${!isVisable?'!hidden':''}`}>
  <div className="icon" tabIndex="0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"
      ></path>
    </svg>
  </div>
  <div className="tooltip">
    <p>{text}</p>
  </div>
</div>

    </>
  );
}
