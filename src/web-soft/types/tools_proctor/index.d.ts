declare namespace tools_proctor {
  function alerd(text: string, debug: boolean): unknown;
  function get_proctoring_object_id(learningObjectId: number, learningObjectTopElem: XmlTopElem): unknown;
  function get_proctoring_object(learningObjectId: number, learningObjectTopElem: XmlTopElem): unknown;
  function get_proctoring_learning_object(learningObjectId: number, returnDoc: boolean): unknown;
  function get_proctoring_active_object_id(learningRecordTopElem: XmlTopElem, feLearning: unknown): unknown;
  function learning_record_finish(learningId: number, learningTopElem: XmlTopElem, proctoringObjectTopElem: XmlTopElem): unknown;
  function get_proctoring_learning_url(learningId: number, learningTopElem: XmlTopElem, curHostPath: string, launchUrl: string, urlParams: string, proctoringObjectTopElem: XmlTopElem): unknown;
  function download_proctoring_files(learningRecordId: number): unknown;
  function get_proctoring_active_learning_id(recordTopElem: XmlTopElem): unknown;
  function finish_learning_record_thread(activeLearningId: number, learningId: number, learningTopElem: XmlTopElem, proctorObjectTopElem: XmlTopElem): unknown;
  function finish_learning_record(activeLearningId: number, learningId: number, learningTopElem: XmlTopElem, proctorObjectTopElem: XmlTopElem): unknown;
  function check_foto(learningRecordId: number, learningRecord: LearningRecordDocument, arrDefaultFotoUrls: unknown[], rConfIdence: unknown, modelType: string): unknown;
}
