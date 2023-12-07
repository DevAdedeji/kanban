import { useStorage } from "@vueuse/core";
import { type BoardType } from "./type";

export const dummyData: Ref<BoardType> = useStorage("DemoKanbanBoard", {
  id: "1",
  name: "Demo Project",
  todo: [
    {
      id: "1",
      title: "Build UI for onboarding flow",
      description: "",
      status: "Todo",
      subtasks: [
        {
          title: "Sign up page",
          isCompleted: true,
        },
        {
          title: "Sign in page",
          isCompleted: false,
        },
        {
          title: "Welcome page",
          isCompleted: false,
        },
      ],
    },
    {
      id: "2",
      title: "Build UI for search",
      description: "",
      status: "Todo",
      subtasks: [
        {
          title: "Search page",
          isCompleted: false,
        },
      ],
    },
    {
      id: "3",
      title: "Build settings UI",
      description: "",
      status: "Todo",
      subtasks: [
        {
          title: "Account page",
          isCompleted: false,
        },
        {
          title: "Billing page",
          isCompleted: false,
        },
      ],
    },
    {
      id: "4",
      title: "QA and test all major user journeys",
      description:
        "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
      status: "Todo",
      subtasks: [
        {
          title: "Internal testing",
          isCompleted: false,
        },
        {
          title: "External testing",
          isCompleted: false,
        },
      ],
    },
  ],
  inprogress: [],
  done: [
    {
      id: "5",
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "Done",
      subtasks: [
        {
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      id: "6",
      title: "Create wireframe prototype",
      description:
        "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
      status: "Done",
      subtasks: [
        {
          title: "Create clickable wireframe prototype in Balsamiq",
          isCompleted: true,
        },
      ],
    },
    {
      id: "7",
      title: "Review results of usability tests and iterate",
      description:
        "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
      status: "Done",
      subtasks: [
        {
          title: "Meet to review notes from previous tests and plan changes",
          isCompleted: true,
        },
        {
          title: "Make changes to paper prototypes",
          isCompleted: true,
        },
        {
          title: "Conduct 5 usability tests",
          isCompleted: true,
        },
      ],
    },
    {
      id: "8",
      title:
        "Create paper prototypes and conduct 10 usability tests with potential customers",
      description: "",
      status: "Done",
      subtasks: [
        {
          title: "Create paper prototypes for version one",
          isCompleted: true,
        },
        {
          title: "Complete 10 usability tests",
          isCompleted: true,
        },
      ],
    },
    {
      id: "9",
      title: "Market discovery",
      description:
        "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
      status: "Done",
      subtasks: [
        {
          title: "Interview 10 prospective customers",
          isCompleted: true,
        },
      ],
    },
    {
      id: "10",
      title: "Competitor analysis",
      description: "",
      status: "Done",
      subtasks: [
        {
          title: "Find direct and indirect competitors",
          isCompleted: true,
        },
        {
          title: "SWOT analysis for each competitor",
          isCompleted: true,
        },
      ],
    },
    {
      id: "11",
      title: "Research the market",
      description:
        "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
      status: "Done",
      subtasks: [
        {
          title: "Write up research analysis",
          isCompleted: true,
        },
        {
          title: "Calculate TAM",
          isCompleted: true,
        },
      ],
    },
  ],
  dump: [],
});

export const columns = [
  { title: "To do", id: "todo" },
  { title: "In progress", id: "inprogress" },
  { title: "Done", id: "done" },
  { title: "Dump", id: "dump" },
];
