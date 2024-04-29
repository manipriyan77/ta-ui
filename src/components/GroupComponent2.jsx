import { useMemo } from "react";
import "./GroupComponent2.css";

const GroupComponent2 = ({ user16, propPadding, propHeight, propPadding1 }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="frame-parent97" style={groupDiv1Style}>
      <div className="user-1-6-wrapper" style={frameDiv6Style}>
        <img className="user-1-6-icon" loading="lazy" alt="" src={user16} />
      </div>
      <div className="john-doe-python-developer-parent">
        <div className="john-doe-python-container">
          <span>{`John Doe `}</span>
          <span className="python-developer1">[Python Developer]</span>
        </div>
        <div className="interview-with-stella">Interview with Stella</div>
        <div className="mins-ago4">15 mins ago</div>
      </div>
    </div>
  );
};

export default GroupComponent2;
