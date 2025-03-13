const element = CreateDynamicElem("name", "type") as XmlElem<number>;
const clonedElement = element.CloneWithoutForm();
alert(clonedElement.Name);

const foundElement = clonedElement.GetChildIndexByValue(true);

if (foundElement !== -1) {
  alert(foundElement.Name);
}

const doc = tools.open_doc<CollaboratorDocument>(1);

if (doc != undefined) {
  doc.TopElem.firstname.Value = null;
}

if (doc !== undefined) {
  alert(doc.TopElem.custom_elems.ObtainChildByKey("custom_elem_field_name").value.Value);
  alert(doc.TopElem.custom_elems.GetChildByKey("custom_elem_field_name").value.Value);
  doc.TopElem.firstname.ObtainChildByKey("custom_elem_field_name");
}
