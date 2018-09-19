# arcus

Arcus is a visual media of understanding what how issues moved through different phases across sprints for a project.

Managing a software project is a subjective task. There are many tools available to manage development of a software
product. However, the underlaying concept of managing a project more or less remains same. Generally, every project
defines few swimlanes. Like

1. To Do
2. In Progress
3. In Review
4. Done

These are the different state an issue can take based on its progress.

In agile, development of a whole project is broken down into sprints. Each sprints takes subset of issues which needs to 
be completed. Its highly likely that there would be some issues which won't be completed in a given sprint. All those
issues are move to future sprints. 

## How the visualization is formed
Arcus records every sprints and how issues move from one sprint to next sprint.

- Each state (swimlane) is represented as a bubble (Gray bubble for To Do, Blue bubble for In Progress, etc...).

- All these states are repeated for each and every sprints.

- Issue moving from one state to another state is represented as a link. Link is nothing but a curved path. Like,
  Issue moved from To Do to In Progress is showed as link starting from To Do to In Progress.

- The links are colored based on destination bubble's color.

- When a link is clicked, a series of link gets selected which shows jump of one complete issue through out its lifetime.

## Screens

![full-screen](https://raw.githubusercontent.com/adotg/arcus/master/docs/arcus-full.png)

## Data

Data extracted from Atlassian JIRA.

## Disclaimer

This project was an experiment or rather a quick dirty work of a solution for some problem I was facing for sometime. I
created it for my own use, but later I found out few interesting engineers who were interested in the soultion. However,
at this point of time I have no plan to continue it until its too important for me / someone else.

You would easily see disruption in workflow like
- Direct commit in master
- Api for creating future stuff with incomplete implementation
- No data extraction / transformation proceudre mentioned
- No documentation
- No npm release
- No package.json sanitization

etc.