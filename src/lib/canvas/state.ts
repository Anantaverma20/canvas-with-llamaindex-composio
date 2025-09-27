import { AgentState, CardType, ChartData, EntityData, ItemData, NoteData, ProjectData } from "@/lib/canvas/types";

export const FOLLOW_UP_OWNER_OPTIONS = ["Product", "Design", "Research", "Customer Success"];
export const PARTICIPANT_STATUS_OPTIONS = ["Scheduled", "Interviewed", "Follow-up Needed", "Deprioritized"];
export const PARTICIPANT_TAG_OPTIONS = [
  "Pain point: Reporting overhead",
  "Workflow automation",
  "Stakeholder alignment",
  "Adoption risk",
  "Feature request",
];

export const initialState: AgentState = {
  globalTitle: "Customer Interview HQ",
  globalDescription:
    "Track every participant, capture raw transcripts, and turn interviews into actionable follow-ups without leaving this canvas.",
  lastAction: "",
  syncSheetId: "",
  syncSheetName: "",
  itemsCreated: 6,
  items: [
    {
      id: "0001",
      type: "entity",
      name: "Jordan Lee — Flowrite",
      subtitle: "Ops director assessing onboarding automation",
      data: {
        field1: "Flowrite · Director of Operations",
        field2: "Interviewed",
        field3: ["Pain point: Reporting overhead", "Workflow automation"],
        field3_options: PARTICIPANT_TAG_OPTIONS,
      } satisfies EntityData,
    },
    {
      id: "0002",
      type: "entity",
      name: "Priya Desai — LedgerLoop",
      subtitle: "Finance lead focused on audit readiness",
      data: {
        field1: "LedgerLoop · VP Finance",
        field2: "Scheduled",
        field3: ["Stakeholder alignment"],
        field3_options: PARTICIPANT_TAG_OPTIONS,
      } satisfies EntityData,
    },
    {
      id: "0003",
      type: "note",
      name: "Interview — Jordan Lee (5/12)",
      subtitle: "Raw transcript snippets captured live",
      data: {
        field1:
          "Jordan struggles to prove ROI on automation rollouts without manual spreadsheet audits. Asked for dashboard widgets that let Ops share adoption snapshots with leadership in under 5 minutes. Noted excitement around letting ICs trigger workflows directly from Slack.",
      } satisfies NoteData,
    },
    {
      id: "0004",
      type: "note",
      name: "Insights to validate",
      subtitle: "Themes emerging across this week's calls",
      data: {
        field1:
          "• Adoption reporting must export cleanly into quarterly business reviews.\n• Decision makers need proof that automations won't break compliance controls.\n• Self-serve onboarding could reduce the hand-holding Ops does today.",
      } satisfies NoteData,
    },
    {
      id: "0005",
      type: "project",
      name: "Follow-up action queue",
      subtitle: "Assign owners before tomorrow's GTM sync",
      data: {
        field1: "Theme: Remove reporting bottlenecks",
        field2: "Product",
        field3: "2024-05-17",
        field4_id: 3,
        field4: [
          { id: "001", text: "Draft dashboard concept addressing Ops reporting needs", done: false, proposed: false },
          { id: "002", text: "Schedule compliance deep-dive with LedgerLoop", done: false, proposed: false },
          { id: "003", text: "Summarize Slack-trigger workflow request for engineering", done: true, proposed: false },
        ],
      } satisfies ProjectData,
    },
    {
      id: "0006",
      type: "chart",
      name: "Interview pipeline snapshot",
      subtitle: "Quick pulse on this sprint's coverage",
      data: {
        field1_id: 3,
        field1: [
          { id: "001", label: "Completed this week", value: 3 },
          { id: "002", label: "Scheduled next", value: 2 },
          { id: "003", label: "Follow-ups due", value: 1 },
        ],
      } satisfies ChartData,
    },
  ],
};

export function isNonEmptyAgentState(value: unknown): value is AgentState {
  if (value == null || typeof value !== "object") return false;
  const keys = Object.keys(value as Record<string, unknown>);
  return keys.length > 0;
}

export function defaultDataFor(type: CardType): ItemData {
  switch (type) {
    case "project":
      return {
        field1: "",
        field2: "",
        field3: "",
        field4: [],
        field4_id: 0,
      } as ProjectData;
    case "entity":
      return {
        field1: "",
        field2: "",
        field3: [],
        field3_options: PARTICIPANT_TAG_OPTIONS,
      } as EntityData;
    case "note":
      return { field1: "" } as NoteData;
    case "chart":
      return { field1: [], field1_id: 0 } as ChartData;
    default:
      return { field1: "" } as NoteData;
  }
}




