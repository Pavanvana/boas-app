import { observer } from "mobx-react-lite";
import React, { ReactElement, ReactNode } from "react";
import { Dialog, Popover } from "react-aria-components";

interface ReactPopoverProps {
  children: ReactNode;
}

const ReactPopover: React.FC<ReactPopoverProps> = ({
  children,
}): ReactElement => (
  <Popover offset={-10}>
    <Dialog className="outline-none shadow-lg rounded-[8px]">{children}</Dialog>
  </Popover>
);
export default observer(ReactPopover);
