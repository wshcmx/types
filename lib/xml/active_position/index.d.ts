interface ActivePositionDocumentSubdivisionData {
  disp_name: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ActivePositionDocumentPersonData {
  fullname: XmlElem<string | null>;
}

interface ActivePositionDocumentUserData {
  disp_name: XmlElem<string | null>;
}

interface ActivePositionDocumentWorkCandidate {
  candidate_eid: XmlElem<number | null>;
  fullname: XmlElem<string | null>;
  state_id: XmlElem<string | null>;
  state_desc: XmlElem<string | null>;
  state_date: XmlElem<Date | null>;
  state_end_date: XmlElem<Date | null>;
}

type ActivePositionDocumentTopElem = XmlTopElem & {
  Doc: ActivePositionDocument;
  eid: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  subdivision_eid: XmlElem<string | null>;
  subdivision_data: XmlElem<ActivePositionDocumentSubdivisionData | null>;
  person_eid: XmlElem<string | null>;
  person_data: XmlElem<ActivePositionDocumentPersonData | null>;
  state_name: XmlElem<string | null>;
  user_data: XmlElem<ActivePositionDocumentUserData | null>;
  comment: XmlElem<string | null>;
  work_candidates: XmlMultiElem<ActivePositionDocumentWorkCandidate | null>;
};

type ActivePositionDocument = XmlDocument & {
  TopElem: ActivePositionDocumentTopElem;
  active_position: ActivePositionDocumentTopElem;
};
