interface DialogNotificationTemplateRecipient {
  recipient_type: XmElem<string>;
  func_manager_type_id: XmElem<number>;
  eval_str: XmElem<string>;
  eval_ids_str: XmElem<string>;
  notification_template_id: XmElem<number>;
}

interface DialogNotificationTemplateAttachment {
  name: XmElem<string>;
  data: XmElem<string>;
}

type DialogNotificationTemplateTopElem = XmlTopElem & {
  Doc: DialogNotificationTemplate;
  subject: XmElem<string>;
  body: XmElem<string>;
  body_type: XmElem<string>;
  notification_template_id: XmElem<number>;
  sender_selector: XmElem<number>;
  sender_email: XmElem<string>;
  recipients: XmMultiElem <DialogNotificationTemplateRecipient>;
  attachments: XmMultiElem <DialogNotificationTemplateAttachment>;
  notification_system_id: XmElem<number>;
};

type DialogNotificationTemplate = XmlDocument & {
  TopElem: DialogNotificationTemplateTopElem;
};
