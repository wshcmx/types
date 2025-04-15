interface Env extends Object {
  curWebDesignID: number;
  curWebDesignUrl: string;
  curLngID: string;
  curLng: unknown;
  curLngWeb: unknown;
  curSiteID: number;
  curSite: SiteDocumentTopElem;
  curHostID: number;
  curHostSettings: {
    default_web_design: string;
    default_portal_type: string;
    portal_auth_type: string;
  };
  curHostPath: string;
  curHostName: string;
  curDevice: {
    type: "desktop",
    disp_type: ""
  } | {
    type: "phone",
    disp_type: "mobile"
  };
  curVars: object;
  curWebModeExecFlag: boolean;
  curSessionID: number;
  curAnonymousAccess: boolean;
  curDoc: DocumentDocumentTopElem;
  curDocID: number | null;
  curDocSid: number | null;
  curObjectID: number | null;
  curObjectDoc: XmlDocument | null;
  curObject: Object;
  curObjectInitErrorText: string;
  curMode: string;
  curWebModeID: number;
  curContext: unknown[];
  curContextObjectID: number | null;
  curContextMode: string;
  curI18n: ReturnType<typeof tools_i18n.get_cur_i18n>;
  curUserID: number;
  curUser: CurUser;
}

type CurUser = CollaboratorDocumentTopElem;

declare const curUserID: number;
declare const curUser: CurUser;
