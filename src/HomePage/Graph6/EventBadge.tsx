import { useRef } from 'react';
import {
  Transition,
  SwitchTransition,
  TransitionStatus,
} from 'react-transition-group';
import type { Event } from './types';

const LABEL_ANIMATION_DURATION = 200;
const DOT_ANIMATION_DURATION = LABEL_ANIMATION_DURATION * 4;

const TRANSITION_STYLES: Partial<
  Record<TransitionStatus, React.CSSProperties>
> = {
  entering: { transform: 'translateY(-10px)', opacity: 0 },
  entered: { transform: 'translateY(0px)', opacity: 1 },
  exiting: { transform: 'translateY(10px)', opacity: 0 },
};

function getDefaultStyles(duration: number) {
  return {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  };
}

type EventBadgeProps = {
  selectedEventName?: Event['name'];
  dotRef: React.RefObject<SVGSVGElement>;
};

export function EventBadge({
  selectedEventName = 'Planned events',
  dotRef,
}: EventBadgeProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  return (
    <div className="grid grid-cols-7">
      <div
        className={`col-start-1 col-end-6 flex items-center p-2 pl-4 min-h-10 gap-4 border-2 border-solid border-primary/30 rounded-full`}
      >
        <div>
          <svg
            ref={dotRef}
            style={{
              ...getDefaultStyles(DOT_ANIMATION_DURATION),
            }}
            width={12}
            height={12}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50%" cy="50%" r="50%" className="fill-primary" />
          </svg>
        </div>
        <SwitchTransition>
          <Transition
            key={selectedEventName}
            nodeRef={textRef}
            timeout={LABEL_ANIMATION_DURATION}
          >
            {(state) => (
              <span
                className="uppercase text-[0.75rem] line-clamp-1"
                ref={textRef}
                style={{
                  ...getDefaultStyles(LABEL_ANIMATION_DURATION),
                  ...TRANSITION_STYLES[state],
                }}
              >
                {selectedEventName}
              </span>
            )}
          </Transition>
        </SwitchTransition>
      </div>
    </div>
  );
}
