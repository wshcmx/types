interface ObjectivesBase {
  /** Инструкция */
  candidate: XmlElem<string | null>;
}

interface ImageBase {
  name: XmlElem<string | null>;
  data: XmlElem<Binary | null>;
  location: XmlElem<string | null, typeof common.material_locations>;
}

interface RubricBase {
  candidate: XmlElem<string | null>;
  image: XmlElem<ImageBase | null>;
}
