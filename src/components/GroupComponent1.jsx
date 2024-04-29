import { useMemo } from "react";
import "./GroupComponent1.css";

const GroupComponent1 = ({ maskGroup, propPadding }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="mask-group-parent">
      <img className="mask-group-icon1" loading="lazy" alt="" src={maskGroup} />
      <div className="john-doe-group">
        <div className="john-doe3">John Doe</div>
        <div className="senior-python-develpper1">Senior Python Develpper</div>
        <div className="hired-by-stella1">Hired by: Stella</div>
      </div>
      <div className="frame-wrapper91">
        <button className="rectangle-parent44" style={groupButtonStyle}>
          <div className="frame-child135" />
          <div className="details4">Details</div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent1;
