import { useStorage } from "@vueuse/core";
import { BoardType } from "./type";

export const dummyData: Ref<BoardType> = useStorage("DemoKanbanBoard", {
  id: "1",
  name: "Demo",
  todo: [
    {
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
