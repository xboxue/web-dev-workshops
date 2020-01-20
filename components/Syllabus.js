import React from "react";
import { Box, Flex, Text } from "rebass";

const rows = [
  { date: "Date", topics: ["Topics"], concepts: ["Concepts"] },
  {
    date: "1/20",
    topics: ["Overview", "Git", "HTML and CSS"],
    concepts: [
      "Roadmap",
      "Basic concepts",
      "Building layouts",
      "Create basic project home page"
    ]
  },
  {
    date: "1/27",
    topics: ["Advanced HTML and CSS"],
    concepts: [
      "Flexbox",
      "Media queries",
      "Bootstrap",
      "Build and style project home page"
    ]
  },
  {
    date: "2/3",
    topics: ["Introduction to React"],
    concepts: [
      "Basic concepts",
      "JSX",
      "Components",
      "State",
      "Lifecycle methods",
      "Build assignment 1 with React in CodeSandbox"
    ]
  },
  {
    date: "2/10",
    topics: ["Project Setup", "TypeScript", "Build Tools"],
    concepts: [
      "Create React App",
      "Module bundlers (Webpack)",
      "Linters (ESLint)",
      "Formatters (Prettier)",
      "Compilers (Babel)",
      "Set up project"
    ]
  },
  {
    date: "2/24",
    topics: ["Advanced React"],
    concepts: [
      "Hooks",
      "Styling (CSS in JS)",
      "Redux",
      "React Router",
      "Create routes and pages for project"
    ]
  },
  {
    date: "3/2",
    topics: ["Introduction to GraphQL"],
    concepts: [
      "Basic concepts",
      "Queries and mutations",
      "Schemas and types",
      "GraphQL server",
      "Build GraphQL backend for project with Apollo Server"
    ]
  },
  {
    date: "3/9",
    topics: ["Advanced GraphQL"],
    concepts: [
      "Data fetching",
      "GraphQL client",
      "Add data fetching to project with Apollo Client"
    ]
  },
  {
    date: "3/16",
    topics: ["Docker", "Databases"],
    concepts: [
      "Containers",
      "SQL vs NoSQL",
      "MongoDB",
      "Add database to project"
    ]
  },
  {
    date: "3/23",
    topics: ["Authentication in GraphQL"],
    concepts: [
      "JWT",
      "Sessions",
      "Cookies",
      "OAuth (Google/Facebook)",
      "Implement authentication and sessions in project"
    ]
  },
  {
    date: "3/30",
    topics: ["Deployment", "Backend Architecture"],
    concepts: ["AWS", "Serverless and microservices", "Deploy project with AWS"]
  },
  {
    date: "4/6",
    topics: ["React Native"],
    concepts: ["Basic concepts", "Expo", "Mobile development"]
  }
];

export const Syllabus = () => (
  <>
    {rows.map((row, index) => (
      <Flex
        key={index}
        p={[2, 3]}
        sx={{
          borderStyle: "solid",
          borderColor: "#dedede",
          borderWidth: 1
        }}
      >
        <Box width={50}>{index ? index : ""}</Box>
        <Box width={100}>{row.date}</Box>
        <Box width={300}>
          {row.topics.map(topic => (
            <Text key={topic}>{topic}</Text>
          ))}
        </Box>
        <Box width={300}>
          {row.concepts.map(concept => (
            <Text key={concept}>{concept}</Text>
          ))}
        </Box>
      </Flex>
    ))}
  </>
);
