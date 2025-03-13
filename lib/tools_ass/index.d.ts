declare namespace tools_ass {
  function assessment_person_filling<T>(source: T, personId: number, personDoc?: CollaboratorDocumentTopElem | SubdivisionDocumentTopElem | OrgCatalogDocumentTopElem): void;

  function is_dismissed_by_id(personId: CollaboratorDocumentTopElem): boolean | null;

  function pick_experts(assessmentId: number, personId: number, participant: AssessmentAppraiseDocumentParticipant, isHuman: boolean, log: string | null, isClean: boolean, notDismissed: boolean): number[];

  function strip_workflow_from_assessment(curStatus: unknown, curType: unknown): number | null;

  function generate_participant_by_plan(assessmentId: number, participantCode: unknown, assessmentPlanId: number, expertId: number, newPa: boolean): boolean;

  function generate_participant(assessmentId: number, participant: AssessmentAppraiseDocumentParticipant, auditory: AssessmentPlanDocumentTopElem, auditoryPersonDoc: AssessmentPlanDocumentTopElem | null, assessmentPlan: AssessmentPlanDocumentTopElem, expertId: number, isHuman: boolean, log: string | null, newPa: boolean): void;

  function get_assessment_parameter(assessmentDoc: AssessmentAppraiseDocumentTopElem, status: string, parameter: string): boolean;

  function log_log(log: string, t: string): string;

  function steal_competence_mark_from_tests(personId: number, competence: CompetenceDocumentTopElem): null | number;

  function development_2_education(developmentPlanId: string, budgetPeriodId: string): boolean;

  function check_access_matrix(accessMatrixId: number, personId: number): undefined | AssessmentAppraiseMatrixDocumentTimeTableScheduleTarget;

  function change_pa_values(assessmentPlan: AssessmentPlanDocumentTopElem, status: unknown, fields: string, fVals: string): boolean;

  function place_pa_comment(paId: number, userId: number, phase: undefined | string, comment: string): boolean;

  function custom_expert_approval(expertPersonId: number, curAssessmentPlan: AssessmentPlanDocumentTopElem, status: string, flagApprove: boolean | "flush", paId?: number | undefined): boolean;

  function lock_period(assessmentPlan: AssessmentPlanDocument, periodPersonId: number, isDone: 1 | 0): boolean;

  function spawn_new_version(assessmentPlan: AssessmentPlanDocument, fields: string, fVals: string, status: string | undefined): void;

  function generate_bonuses(assessmentId: number, bonusProfileId: number): void;

  function get_workflow_state_parameter(curState: WorkflowFieldsStatesBaseState, paramName: string): string | undefined;

  function readParametersV2(paramStr: string, curPa?: unknown): object;

  function generate_position_assessment_form(assessmentId: number): void;

  function generate_assessment_plan(assessmentId: number, planOnly: boolean, isClean: boolean, kill: boolean, floorBound: number | undefined, account: number | undefined, groupId: number | null, auditoriesIds: undefined | null | string | number): void;

  function link_plans_and_pas(assessmentId: number): void;

  function create_event_assessment_plans(eventId: number): void;

  function generate_poll_procedure_result_card(pollProcedureId: number, pollProcedureDoc: PollProcedureDocument, personId: number, pollId: number, poll: PollDocumentTopElem, doNotify: boolean): number;

  function generate_procedure_plan(assessmentAppraiseId: number, docAssessmentAppraise: AssessmentAppraiseDocument, addOnlyNew: boolean): boolean;

  function generate_kpi_values(budgetPeriodId: number, budgetPeriodTopElem: BudgetPeriodDocumentTopElem, kpiId: number, kpiTopElem: KpiDocumentTopElem): null | number;

  function manual_run_bonus_calc(): void;

  function run_bonus_calc(assessmentId: number, budgetPeriodId: number): null | number;

  function ui_set_competence_plan<T>(selRows: T[], flagMark: boolean): boolean;

  function ass_create_notification(typeParam: number | string, objectIdParam: number | string): void;
}