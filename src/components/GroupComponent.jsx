import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({ maskGroup, propPadding }) => {
  const frameDiv7Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-parent98">
      <div className="mask-group-container">
        <img className="mask-group-icon2" alt="" src={maskGroup} />
      </div>
      <div className="john-doe-parent1">
        <div className="john-doe4">John Doe</div>
        <div className="frame-parent99">
          <div className="frame-wrapper92" style={frameDiv7Style}>
            <div className="senior-python-develpper-parent">
              <div className="senior-python-develpper2">
                Senior Python Develpper
              </div>
              <div className="hired-by-stella2">Hired by: Stella</div>
            </div>
          </div>
          <button className="rectangle-parent45">
            <div className="frame-child136" />
            <div className="details5">Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
