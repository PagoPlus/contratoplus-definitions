export type WorkflowSchemaAction = WorkflowSchemaActionFetch | WorkflowSchemaActionLog | WorkflowSchemaActionSleep;
/**
 * Method to use. Might be GET or POST.
 */
export declare enum WorkflowSchemaActionFetchMethod {
    Get = "GET",
    Post = "POST"
}
/**
 * What kind of response to get. Can be JSON or TEXT. Defaults to TEXT.
 */
export declare enum WorkflowSchemaActionFetchResult {
    Json = "JSON",
    Text = "TEXT"
}
/**
 * Fetch data from a URL
 */
export interface WorkflowSchemaActionFetch {
    kind: "fetch";
    url: SmartString;
    error?: ActionLink;
    /**
     * Method to use. Might be GET or POST.
     */
    method?: WorkflowSchemaActionFetchMethod;
    /**
     * What kind of response to get. Can be JSON or TEXT. Defaults to TEXT.
     */
    result?: WorkflowSchemaActionFetchResult;
    success?: ActionLink;
}
/**
 * Log a message
 */
export interface WorkflowSchemaActionLog {
    kind: "log";
    message: SmartString;
    error?: ActionLink;
    success?: ActionLink;
}
/**
 * Sleep for ms
 */
export interface WorkflowSchemaActionSleep {
    kind: "sleep";
    ms: SmartNumber;
    error?: ActionLink;
    success?: ActionLink;
}
export declare enum WorkflowSchemaTrigger {
    /**
     * Executed after all other triggers run. Useful for clean-up routines.
     */
    OnEnd = "ON_END",
    /**
     * Executed when the Workflow is created. Only once, ever, for the life of the
     * workflow. Re-executed if the definition of the workflow is updated.
     */
    OnInit = "ON_INIT",
    /**
     * Executed on start of execution, before any other trigger runs.
     */
    OnStart = "ON_START"
}
export interface WorkflowSchema {
    /**
     * Action definition.. The key is the Action ID, to reference it later from
     * other actions.
     */
    actions: {
        [key: string]: WorkflowSchemaAction;
    };
    /**
     * Initial step for the workflow. Must map to a valid Action defined inside
     * actions.
     */
    start: ActionLink;
    trigger: WorkflowSchemaTrigger;
}
/**
 * Action ID. Must map to a valid Action defined inside actions.
 */
export type ActionLink = string;
export type SmartNumber = SmartNumberJq | SmartNumberStatic;
export interface SmartNumberJq {
    kind: "jq";
    rule: string;
}
export interface SmartNumberStatic {
    kind: "static";
    value: number;
}
export type SmartString = SmartStringJq | SmartStringStatic;
export interface SmartStringJq {
    kind: "jq";
    rule: string;
}
export interface SmartStringStatic {
    kind: "static";
    value: string;
}
//# sourceMappingURL=index.d.ts.map