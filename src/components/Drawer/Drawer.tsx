import { useRef } from 'react';

import { Transition, TransitionStatus } from 'react-transition-group';
import { BaseDrawer, DrawerProps } from './BaseDrawer';

const DURATION = 300;

const TRANSITION_STYLES: Partial<
  Record<TransitionStatus, React.CSSProperties>
> = {
  entering: { transform: 'translateX(0px)' },
  entered: { transform: 'translateX(0px)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
};

export function Drawer({ onClose, open, title, children }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <Transition
      nodeRef={drawerRef}
      in={open}
      mountOnEnter
      unmountOnExit
      timeout={DURATION}
    >
      {(state) => (
        <BaseDrawer
          onClose={onClose}
          open={open}
          title={title}
          ref={drawerRef}
          style={{
            transition: `transform ${DURATION}ms ease-in-out`,
            transform: 'translateX(100%)',
            ...TRANSITION_STYLES[state],
          }}
        >
          {children}
        </BaseDrawer>
      )}
    </Transition>
  );
}
