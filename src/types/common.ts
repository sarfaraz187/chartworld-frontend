export type ToggleBtnType = { title: string; isActive: boolean };

export type ContextType = {
  toggleBtnState: ToggleBtnType;
  setToggleBtnState: React.Dispatch<React.SetStateAction<ToggleBtnType>>;
};
