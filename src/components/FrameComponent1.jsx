import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  group1310,
  johnSmith,
  group1311,
  propPadding,
  propPadding1,
  propMinWidth,
  propPadding2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const johnSmithStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="frame-parent92">
      <div className="frame-wrapper82" style={frameDivStyle}>
        <img className="frame-child129" loading="lazy" alt="" src={group1310} />
      </div>
      <div className="frame-wrapper83">
        <div className="frame-parent93">
          <div className="john-smith-container" style={frameDiv1Style}>
            <div className="john-smith1" style={johnSmithStyle}>
              {johnSmith}
            </div>
          </div>
          <div className="senior-python-developer">Senior Python Developer</div>
        </div>
      </div>
      <div className="line-parent5">
        <div className="frame-child130" />
        <div className="frame-wrapper84" style={frameDiv2Style}>
          <div className="frame-parent94">
            <div className="frame-wrapper85">
              <div className="frame-parent95">
                <div className="frame-wrapper86">
                  <img
                    className="frame-child131"
                    loading="lazy"
                    alt=""
                    src={group1311}
                  />
                </div>
                <div className="th-feb-2024">19th Feb 2024</div>
              </div>
            </div>
            <div className="line-wrapper1">
              <div className="frame-child132" />
            </div>
            <div className="frame-wrapper87">
              <div className="frame-parent96">
                <div className="frame-wrapper88">
                  <img
                    className="frame-child133"
                    loading="lazy"
                    alt=""
                    src="/group-1317.svg"
                  />
                </div>
                <div className="am">10.30 A.M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
