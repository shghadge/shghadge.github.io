import React, { Component, ReactNode } from "react";

interface TimelineProps {
  children: ReactNode[];
  accentColor?: string; // e.g. 'bg-violet-400'
}

class Timeline extends Component<TimelineProps> {
  static defaultProps = {
    accentColor: "bg-orange-400",
  };

  render() {
    const { children, accentColor } = this.props;
    return (
      <div className="w-full relative pl-3">
        {/* Small screens: 2-column grid */}
        <div className="grid grid-cols-[2px_1fr] gap-x-5 sm:hidden">
          {React.Children.map(children, (child, idx) => {
            const isLast = idx === React.Children.count(children) - 1;
            return (
              <React.Fragment key={idx}>
                {/* Timeline column */}
                <div className="col-span-1 flex flex-col items-center justify-between relative top-2">
                  {/* Dot at the very top using Tailwind for absolute top-center */}
                  <span
                    className={`w-3 h-3 flex rounded-full ${accentColor} border-slate-900 z-20`}
                  />
                  {/* Vertical line, skip for last */}
                  {!isLast && (
                    <div className="left-1/2 flex h-full w-0.5 bg-orange-400/70 " />
                  )}
                </div>
                {/* Content column */}
                <div className="col-span-1 pb-5 mt-0">{child}</div>
              </React.Fragment>
            );
          })}

          {/* Dot at the bottom */}
          {/* <div className="col-span-1 flex flex-col items-center justify-between relative top-2">
            <span
              className={`w-3 h-3 flex rounded-full ${accentColor} border-slate-900 z-20`}
            />
          </div> */}
        </div>
        {/* Large screens: alternating timeline */}
        <div
          className="hidden sm:grid w-full"
          style={{ gridTemplateColumns: "1fr 1px 1fr" }}
        >
          {React.Children.map(children, (child, idx) => {
            const isLast = idx === React.Children.count(children) - 1;
            return (
              <React.Fragment key={idx}>
                {/* Left cell (even rows) */}
                <div
                  className={`pr-8 col-span-1 row-span-1 flex items-center justify-end ${
                    idx % 2 === 0 ? "" : "invisible"
                  }`}
                >
                  {idx % 2 === 0 ? child : null}
                </div>
                {/* Timeline line and dot */}
                <div className="col-span-1 row-span-1 flex flex-col items-center justify-start relative top-2">
                  <span
                    className={`absolute  top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${accentColor}  border-slate-900 z-20`}
                  />
                  {/* Vertical line, skip for last */}
                  {!isLast && (
                    <div className={`w-0.25 h-full  ${accentColor} rounded-full`} />
                  )}
                </div>
                {/* Right cell (odd rows) */}
                <div
                  className={`pl-8 col-span-1 row-span-1 flex items-center justify-start ${
                    idx % 2 === 1 ? "" : "invisible"
                  }`}
                >
                  {idx % 2 === 1 ? child : null}
                </div>
              </React.Fragment>
            );
          })}

          {/* Dot after the last row */}
          {/* <div className="col-span-1 row-span-1" />
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-start relative">
            <span
              className={`w-4 h-4 rounded-full ${accentColor} border-2 border-slate-900 z-20`}
            />
          </div>
          <div className="col-span-1 row-span-1" /> */}
        </div>
      </div>
    );
  }
}

export default Timeline;
