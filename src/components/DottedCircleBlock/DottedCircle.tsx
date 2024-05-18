import clsx from 'clsx';
import { useState } from 'react';

// TODO: MAKE IT RESPONSIVE < 300px
const CIRCLE_SIZE = 120;
const SMALL_CIRCLE_SIZE_HIGHLIGHTED = 3;
const SMALL_CIRCLE_SIZE = 2.2;
const NUMBER_OF_CIRCLES = 20;
const ANIMATION_SPEED = 2;
const START_ANIMATION_INDEX: null | number = null;

const CIRCLES = [...Array(NUMBER_OF_CIRCLES).keys()].map((key, index) => {
  const angle = (index / NUMBER_OF_CIRCLES) * 2 * Math.PI;
  const cx = CIRCLE_SIZE / 2 + (CIRCLE_SIZE / 2.5) * Math.cos(angle);
  const cy = CIRCLE_SIZE / 2 + (CIRCLE_SIZE / 2.5) * Math.sin(angle);
  return {
    key,
    cx,
    cy,
  };
});

type DottedCircleType = {
  highlighted?: boolean;
  className: string;
};

export function DottedCircle({ highlighted, className }: DottedCircleType) {
  const [START_ANIMATION_FROM] = useState<number>(
    START_ANIMATION_INDEX ?? Math.floor(Math.random() * NUMBER_OF_CIRCLES),
  );

  function getDelay(index: number) {
    if (index >= START_ANIMATION_FROM) {
      return index - START_ANIMATION_FROM;
    }

    return NUMBER_OF_CIRCLES - START_ANIMATION_FROM + index;
  }

  return (
    <svg
      width={'100%'}
      height={'100%'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
    >
      {CIRCLES.map(({ cx, cy, key }, index) => {
        return (
          <circle
            key={key}
            cx={cx}
            cy={cy}
            r={highlighted ? SMALL_CIRCLE_SIZE_HIGHLIGHTED : SMALL_CIRCLE_SIZE}
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animationDelay: `${getDelay(index) / ANIMATION_SPEED}s`,
              animationDuration: `${NUMBER_OF_CIRCLES / ANIMATION_SPEED}s`,
            }}
            className={clsx('animate-bubble-up', className)}
          />
        );
      })}
    </svg>
  );
}
