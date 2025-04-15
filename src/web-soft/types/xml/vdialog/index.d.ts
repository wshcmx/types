interface VDialogEditTextTopElem {
  url: XmlElem<string>;
  desc: XmlElem<string>;
  title: XmlElem<string>;
  is_rich: XmlElem<boolean>;
}

type VDialogEditTextDocument = XmlDocument & {
  TopElem: VDialogEditTextTopElem;
};
