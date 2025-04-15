type MailMessageSender = {
  address: XmlElem<string>;
  name: XmlElem<string>;
};

type MailMessageRecipient = {
  address: XmlElem<string>;
  name: XmlElem<string>;
};

type MailMessageAttachment = {
  name: XmlElem<string>;
  file_name: XmlElem<string>;
  data: XmlElem<Binary>;
  id: XmlElem<string>;
  cid: XmlElem<string>;
  url: XmlElem<string>;
};

type MailMessage = {
  sender: MailMessageSender;
  date: XmlElem<Date>;
  recipients: XmlMultiElem<MailMessageRecipient>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  html_body: XmlElem<string>;
  attachments: XmlMultiElem<MailMessageAttachment>;
  draft_url: XmlElem<string>;
  Show(): void;
  Send(): void;
};
