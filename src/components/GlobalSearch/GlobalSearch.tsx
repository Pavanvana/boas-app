import React, { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { SearchIcon } from "../../icons";
import TextField from "../../common/TextField/TextField";

import {
  escapeButtonClass,
  globalSearchContainerClass,
  globalSearchInputClass,
  noSearchTextClass,
} from "./styles";
import "./styles.css";

interface Props {
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
}
const GlobalSearch = (props: Props): React.ReactElement => {
  const { isOpen, onOpenChange } = props;

  const [searchText, setSearchText] = useState<string>("");

  return (
    <DialogTrigger>
      <ModalOverlay
        isOpen={isOpen}
        onOpenChange={() => {
          setSearchText("");
          onOpenChange(false);
        }}
        className="global-search-ModalOverlay"
      >
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="global-search-Modal"
        >
          <Dialog className="outline-none w-full z-20">
            {({ close }) => (
              <div className="flex flex-col w-full">
                <div className={globalSearchContainerClass}>
                  <div className="flex items-center grow">
                    <SearchIcon height={20} width={20} />
                    <TextField
                      value={searchText}
                      onChange={setSearchText}
                      placeholder="Search our store"
                      className="grow ml-[8px]"
                      inputFieldClass={globalSearchInputClass}
                      autoFocus={true}
                    />
                  </div>
                  <button className={escapeButtonClass} onClick={close}>
                    ESC
                  </button>
                </div>
                <hr />
                <div className="m-[8px] p-[3px_10px_3px_10px] min-h-[200px] flex items-center justify-center">
                  {searchText !== "" ? (
                    <div className="overflow-auto max-h-[400px]">
                      {/* TODO: Add search results here */}
                      {false ? (
                        <div>Search results</div>
                      ) : (
                        <div className={noSearchTextClass}>
                          No results for "{searchText}"
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={noSearchTextClass}>No recent searches</div>
                  )}
                </div>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default GlobalSearch;
