import { observer } from "mobx-react-lite";
import React, { ReactElement, ReactNode } from "react";
import { Dialog, Popover, PopoverProps } from "react-aria-components";

interface ReactPopoverProps extends Omit<PopoverProps, "children"> {
  children: ReactNode;
  onChangePopover?: (val: boolean) => void;
}

const ReactPopover: React.FC<ReactPopoverProps> = ({
  children,
  ...props
}): ReactElement => (
  <Popover offset={20} {...props}>
    <Dialog className="outline-none shadow-lg rounded-[8px]">{children}</Dialog>
  </Popover>
);
export default observer(ReactPopover);
