import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  propPadding,
  propPadding1,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propPadding2,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="frame-wrapper89" style={frameDiv3Style}>
      <div className="senior-developers-parent">
        <div className="senior-developers">Senior Developers</div>
        <div className="frame-wrapper90" style={frameDiv4Style}>
          <div className="rectangle-parent43" style={groupDivStyle}>
            <div className="frame-child134" style={rectangleDivStyle} />
            <div className="div70" style={divStyle}>
              258
            </div>
          </div>
        </div>
        <div className="total-applicants-wrapper" style={frameDiv5Style}>
          <div className="total-applicants">Total Applicants</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
