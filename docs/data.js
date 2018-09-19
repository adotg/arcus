const rData = [
    {
      "key": "BSE-1",
      "from": "BSE Sprint 1.To Do",
      "to": "BSE Sprint 1.Done",
      "inf": {
        "assignee": "SA",
        "sp": 13,
        "summary": "Development Environment Setup",
        "startTime": "20/03/2018",
        "endTime": "28/03/2018"
      }
    },
    {
      "key": "BSE-4",
      "from": "BSE Sprint 1.To Do",
      "to": "BSE Sprint 1.Done",
      "inf": {
        "assignee": "SA",
        "sp": 13,
        "summary": "AWS Web Infrastructure",
        "startTime": "20/03/2018",
        "endTime": "30/03/2018"
      }
    },
    {
      "key": "BSE-8",
      "from": "BSE Sprint 1.To Do",
      "to": "BSE Sprint 2.To Do",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "SQL backup and shift to AWS RDS",
        "startTime": "20/03/2018",
        "endTime": "11/04/2018"
      }
    },
    {
      "key": "BSE-8",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 3.To Do",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "SQL backup and shift to AWS RDS",
        "startTime": "02/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-8",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 4.To Do",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "SQL backup and shift to AWS RDS",
        "startTime": "11/04/2018",
        "endTime": "08/05/2018"
      }
    },
    {
      "key": "BSE-8",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 6.To Do",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "SQL backup and shift to AWS RDS",
        "startTime": "16/04/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-8",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "SQL backup and shift to AWS RDS",
        "startTime": "08/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-62",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 4,
        "summary": "Above Fold",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-62",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "UT",
        "sp": 4,
        "summary": "Above Fold",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-65",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Value Proposition - Video Demo",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-65",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Value Proposition - Video Demo",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-64",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 13,
        "summary": "Value Propositions - Preview Slider",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-64",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SP",
        "sp": 13,
        "summary": "Value Propositions - Preview Slider",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-69",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 4,
        "summary": "Blog updates and Twitter updates",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-69",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "AC",
        "sp": 4,
        "summary": "Blog updates and Twitter updates",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-67",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Value Proposition - Features",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-67",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Value Proposition - Features",
        "startTime": "09/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-66",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 10,
        "summary": "Value Proposition - Code Snippets",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-66",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "AC",
        "sp": 10,
        "summary": "Value Proposition - Code Snippets",
        "startTime": "10/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-68",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Testimonials",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-68",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Testimonials",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-81",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "getHeader and footer",
        "startTime": "02/04/2018",
        "endTime": "05/04/2018"
      }
    },
    {
      "key": "BSE-81",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "getHeader and footer",
        "startTime": "04/04/2018",
        "endTime": "05/04/2018"
      }
    },
    {
      "key": "BSE-81",
      "from": "BSE Sprint 2.In Review",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "getHeader and footer",
        "startTime": "05/04/2018",
        "endTime": "05/04/2018"
      }
    },
    {
      "key": "BSE-82",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "getHome",
        "startTime": "02/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-82",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "getHome",
        "startTime": "04/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-82",
      "from": "BSE Sprint 2.In Review",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "getHome",
        "startTime": "04/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-83",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "JD",
        "sp": 13,
        "summary": "getTour",
        "startTime": "02/04/2018",
        "endTime": "09/04/2018"
      }
    },
    {
      "key": "BSE-83",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "JD",
        "sp": 13,
        "summary": "getTour",
        "startTime": "04/04/2018",
        "endTime": "09/04/2018"
      }
    },
    {
      "key": "BSE-59",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Download Page with no NPM and Bower",
        "startTime": "02/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-5",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Database Setup (All environment) ",
        "startTime": "02/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-5",
      "from": "BSE Sprint 2.In Review",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Database Setup (All environment) ",
        "startTime": "04/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-80",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "[DC] Chart gallery Forward ( Right button + arrow click)  Issue",
        "startTime": "02/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-80",
      "from": "BSE Sprint 2.In Review",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "[DC] Chart gallery Forward ( Right button + arrow click)  Issue",
        "startTime": "04/04/2018",
        "endTime": "04/04/2018"
      }
    },
    {
      "key": "BSE-92",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Prod Vue.js Setup",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 2.To Do",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "02/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 2.Done",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "05/04/2018",
        "endTime": "10/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 2.Done",
      "to": "BSE Sprint 2.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "10/04/2018",
        "endTime": "12/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 2.In progress",
      "to": "BSE Sprint 3.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "10/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 3.In progress",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "12/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 4.Done",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "16/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-63",
      "from": "BSE Sprint 4.Done",
      "to": "BSE Sprint 3.Done",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Value Propositions - Customers",
        "startTime": "16/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 4.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "11/04/2018",
        "endTime": "20/04/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "16/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "20/04/2018",
        "endTime": "30/04/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 5.Done",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "30/04/2018",
        "endTime": "08/05/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "04/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-21",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Why Prod? - CSS Improvements",
        "startTime": "08/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 4.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "11/04/2018",
        "endTime": "20/04/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "16/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "20/04/2018",
        "endTime": "30/04/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 5.Done",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "30/04/2018",
        "endTime": "08/05/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "04/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-20",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Tour - Features - CSS Improvements",
        "startTime": "08/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-98",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 3.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Refinement and Improvement",
        "startTime": "11/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-98",
      "from": "BSE Sprint 3.In progress",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Refinement and Improvement",
        "startTime": "11/04/2018",
        "endTime": "20/04/2018"
      }
    },
    {
      "key": "BSE-98",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 4.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Refinement and Improvement",
        "startTime": "16/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-98",
      "from": "BSE Sprint 4.In Review",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Refinement and Improvement",
        "startTime": "20/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-98",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Refinement and Improvement",
        "startTime": "23/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-19",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 3.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 11,
        "summary": "Tour - Chart Gallery",
        "startTime": "11/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-19",
      "from": "BSE Sprint 3.In progress",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 11,
        "summary": "Tour - Chart Gallery",
        "startTime": "12/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-19",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 11,
        "summary": "Tour - Chart Gallery",
        "startTime": "16/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-19",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SP",
        "sp": 11,
        "summary": "Tour - Chart Gallery",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-99",
      "from": "BSE Sprint 3.To Do",
      "to": "BSE Sprint 3.In progress",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Vue Data Binding",
        "startTime": "11/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-99",
      "from": "BSE Sprint 3.In progress",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Vue Data Binding",
        "startTime": "13/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-99",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 4.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Vue Data Binding",
        "startTime": "16/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-99",
      "from": "BSE Sprint 4.Done",
      "to": "BSE Sprint 3.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Vue Data Binding",
        "startTime": "16/04/2018",
        "endTime": "16/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "16/04/2018",
        "endTime": "18/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 4.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "17/04/2018",
        "endTime": "20/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 4.In Review",
      "to": "BSE Sprint 4.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "18/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 4.In progress",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "20/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "23/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-100",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": "NuclearSmart Dashboard Integration",
        "startTime": "24/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-103",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "NS",
        "sp": 3,
        "summary": "Contentul Model for Home",
        "startTime": "23/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-102",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 8,
        "summary": "Slider Implementation",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-102",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SP",
        "sp": 8,
        "summary": "Slider Implementation",
        "startTime": "03/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-104",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 5.To Do",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "Demo - Landing Page",
        "startTime": "16/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-104",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "Demo - Landing Page",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-104",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "Demo - Landing Page",
        "startTime": "24/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-104",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "Demo - Landing Page",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-107",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 5.To Do",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Chart Binding",
        "startTime": "16/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-107",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Chart Binding",
        "startTime": "23/04/2018",
        "endTime": "03/05/2018"
      }
    },
    {
      "key": "BSE-107",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Chart Binding",
        "startTime": "27/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-107",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Chart Binding",
        "startTime": "03/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-101",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 4.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 0,
        "summary": "Telephone number integration in download page",
        "startTime": "16/04/2018",
        "endTime": "23/04/2018"
      }
    },
    {
      "key": "BSE-101",
      "from": "BSE Sprint 4.In Review",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 0,
        "summary": "Telephone number integration in download page",
        "startTime": "20/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-101",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AC",
        "sp": 0,
        "summary": "Telephone number integration in download page",
        "startTime": "23/04/2018",
        "endTime": "27/04/2018"
      }
    },
    {
      "key": "BSE-108",
      "from": "BSE Sprint 4.To Do",
      "to": "BSE Sprint 4.Done",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "Prod tool and collabion site maintenance  ",
        "startTime": "16/04/2018",
        "endTime": "20/04/2018"
      }
    },
    {
      "key": "BSE-128",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 6.To Do",
      "inf": {
        "sp": 3,
        "summary": "Home - CSS Improvements",
        "startTime": "23/04/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-128",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "sp": 3,
        "summary": "Home - CSS Improvements",
        "startTime": "08/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-109",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Fixing legacy Web Build Server",
        "startTime": "23/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-109",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Fixing legacy Web Build Server",
        "startTime": "23/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-109",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Fixing legacy Web Build Server",
        "startTime": "24/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-114",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "AT",
        "sp": 3,
        "summary": "Content model - Tour page",
        "startTime": "23/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-114",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 3,
        "summary": "Content model - Tour page",
        "startTime": "24/04/2018",
        "endTime": "24/04/2018"
      }
    },
    {
      "key": "BSE-122",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model - Plugins landing",
        "startTime": "23/04/2018",
        "endTime": "02/05/2018"
      }
    },
    {
      "key": "BSE-122",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model - Plugins landing",
        "startTime": "02/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-122",
      "from": "BSE Sprint 5.Done",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model - Plugins landing",
        "startTime": "02/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-122",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model - Plugins landing",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-152",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 2,
        "summary": "Content Model - Plugins",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-152",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 2,
        "summary": "Content Model - Plugins",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-146",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Press",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-146",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Press",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-145",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Resources",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-145",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Resources",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-123",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Dashboards",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-123",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model Dashboards",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-121",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AT",
        "sp": 5,
        "summary": "Content Model - Demo",
        "startTime": "23/04/2018",
        "endTime": "30/04/2018"
      }
    },
    {
      "key": "BSE-31",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Press",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-31",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Press",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-31",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Press",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-25",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Dashboards",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-25",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Dashboards",
        "startTime": "03/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-25",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Dashboards",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-22",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Extensions / Integrations / Plugins",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-22",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Extensions / Integrations / Plugins",
        "startTime": "03/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-22",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "UT",
        "sp": 8,
        "summary": "Extensions / Integrations / Plugins",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-26",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Resources",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-26",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Resources",
        "startTime": "03/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-26",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Resources",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-26",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Resources",
        "startTime": "04/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-142",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getExtensions",
        "startTime": "23/04/2018",
        "endTime": "03/05/2018"
      }
    },
    {
      "key": "BSE-142",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getExtensions",
        "startTime": "03/05/2018",
        "endTime": "03/05/2018"
      }
    },
    {
      "key": "BSE-143",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getDashboards",
        "startTime": "23/04/2018",
        "endTime": "03/05/2018"
      }
    },
    {
      "key": "BSE-143",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getDashboards",
        "startTime": "03/05/2018",
        "endTime": "03/05/2018"
      }
    },
    {
      "key": "BSE-147",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getPress",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-147",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getPress",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-147",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getPress",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-147",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getPress",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-147",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "getPress",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-144",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "getResources",
        "startTime": "23/04/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-144",
      "from": "BSE Sprint 5.In progress",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "getResources",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-144",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "getResources",
        "startTime": "04/05/2018",
        "endTime": "04/05/2018"
      }
    },
    {
      "key": "BSE-126",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 5.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Icon Gallery for Design System",
        "startTime": "23/04/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-126",
      "from": "BSE Sprint 5.In Review",
      "to": "BSE Sprint 5.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Icon Gallery for Design System",
        "startTime": "03/05/2018",
        "endTime": "07/05/2018"
      }
    },
    {
      "key": "BSE-110",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "UT",
        "sp": 11,
        "summary": "Home - Design Feedback #1",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-106",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 8,
        "summary": "Slack Landing Page",
        "startTime": "07/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-106",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AC",
        "sp": 8,
        "summary": "Slack Landing Page",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-148",
      "from": "BSE Sprint 5.To Do",
      "to": "BSE Sprint 6.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collation Update on the Pricing Page",
        "startTime": "23/04/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-148",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collation Update on the Pricing Page",
        "startTime": "08/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-148",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collation Update on the Pricing Page",
        "startTime": "11/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-148",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collation Update on the Pricing Page",
        "startTime": "11/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-186",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Dashboard - CSS Improvements ",
        "startTime": "07/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-186",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Dashboard - CSS Improvements ",
        "startTime": "11/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-186",
      "from": "BSE Sprint 6.Done",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Dashboard - CSS Improvements ",
        "startTime": "11/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-186",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Dashboard - CSS Improvements ",
        "startTime": "11/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-185",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - CSS Improvements",
        "startTime": "07/05/2018",
        "endTime": "13/05/2018"
      }
    },
    {
      "key": "BSE-185",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - CSS Improvements",
        "startTime": "13/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-185",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - CSS Improvements",
        "startTime": "13/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-223",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Resources -  Detail  Page - Content Model",
        "startTime": "07/05/2018",
        "endTime": "08/05/2018"
      }
    },
    {
      "key": "BSE-223",
      "from": "BSE Sprint 6.Done",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Resources -  Detail  Page - Content Model",
        "startTime": "08/05/2018",
        "endTime": "08/05/2018"
      }
    },
    {
      "key": "BSE-223",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Resources -  Detail  Page - Content Model",
        "startTime": "08/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-223",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Resources -  Detail  Page - Content Model",
        "startTime": "08/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-220",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Resources - Detail Page - HTML Structure ",
        "startTime": "07/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-220",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Resources - Detail Page - HTML Structure ",
        "startTime": "09/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-220",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Resources - Detail Page - HTML Structure ",
        "startTime": "09/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "07/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "09/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "09/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.Done",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "09/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.To Do",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "09/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-222",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Page - Dynamic Routes",
        "startTime": "11/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-237",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Data Binding",
        "startTime": "07/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-237",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Detail Data Binding",
        "startTime": "09/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-221",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - Detail Page - CSS Improvements",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-221",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - Detail Page - CSS Improvements",
        "startTime": "13/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-221",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resources - Detail Page - CSS Improvements",
        "startTime": "14/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-188",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Plugins - CSS Improvements",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-188",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Plugins - CSS Improvements",
        "startTime": "13/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-188",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Plugins - CSS Improvements",
        "startTime": "14/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-9",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Move static and product build files to CDN",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-233",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SA",
        "sp": null,
        "summary": "Improve performance and Webpack Optimisation ",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-178",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Customers - Content Model",
        "startTime": "07/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-178",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Customers - Content Model",
        "startTime": "08/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-181",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Customers - HTML Structure ",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-181",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Customers - HTML Structure ",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-181",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Customers - HTML Structure ",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-179",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Customers - API Generation",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-179",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Customers - API Generation",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-179",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Customers - API Generation",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-180",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "Customers - Data Binding",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-180",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "Customers - Data Binding",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-180",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AC",
        "sp": 2,
        "summary": "Customers - Data Binding",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-182",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Customers - CSS Improvements",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-182",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Customers - CSS Improvements",
        "startTime": "13/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-182",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Customers - CSS Improvements",
        "startTime": "14/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-229",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Customers - Detail Page - HTML Structure ",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-229",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Customers - Detail Page - HTML Structure ",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-229",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Customers - Detail Page - HTML Structure ",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-228",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Customers - Detail Page - Content Model",
        "startTime": "07/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-228",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Customers - Detail Page - Content Model",
        "startTime": "08/05/2018",
        "endTime": "09/05/2018"
      }
    },
    {
      "key": "BSE-232",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page Data Binding",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-232",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page Data Binding",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-232",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page Data Binding",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-231",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page - Dynamic Routes",
        "startTime": "07/05/2018",
        "endTime": "10/05/2018"
      }
    },
    {
      "key": "BSE-231",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page - Dynamic Routes",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-231",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Detail Page - Dynamic Routes",
        "startTime": "10/05/2018",
        "endTime": "11/05/2018"
      }
    },
    {
      "key": "BSE-240",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 17,
        "summary": "Miscellaneous Issues",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-201",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 7.To Do",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Download - Content Model",
        "startTime": "07/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-201",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Download - Content Model",
        "startTime": "15/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-201",
      "from": "BSE Sprint 7.Done",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Download - Content Model",
        "startTime": "15/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "07/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "14/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 6.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "14/05/2018",
        "endTime": "14/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 6.In Review",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "14/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "14/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "15/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-227",
      "from": "BSE Sprint 7.Done",
      "to": "BSE Sprint 6.Done",
      "inf": {
        "assignee": "SP",
        "sp": 2,
        "summary": "Plugins - Detail Page - Dynamic Routes",
        "startTime": "15/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 7.To Do",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "07/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "15/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "17/05/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 13.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "27/06/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "10/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 13.Done",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "24/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "24/07/2018",
        "endTime": "28/07/2018"
      }
    },
    {
      "key": "BSE-204",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - HTML Structure ",
        "startTime": "24/07/2018",
        "endTime": "28/07/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 7.To Do",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "07/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "15/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "17/05/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "27/06/2018",
        "endTime": "28/07/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "24/07/2018",
        "endTime": "31/07/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "28/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "31/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-203",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Download - Data Binding",
        "startTime": "20/08/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-187",
      "from": "BSE Sprint 6.To Do",
      "to": "BSE Sprint 6.In progress",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Press - CSS Improvements ",
        "startTime": "07/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-187",
      "from": "BSE Sprint 6.In progress",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Press - CSS Improvements ",
        "startTime": "13/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-187",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Press - CSS Improvements ",
        "startTime": "15/05/2018",
        "endTime": "15/05/2018"
      }
    },
    {
      "key": "BSE-286",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "AT",
        "sp": 1,
        "summary": "Content Model for Header",
        "startTime": "14/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-276",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Update static URL's to CDN",
        "startTime": "14/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-276",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Update static URL's to CDN",
        "startTime": "15/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-276",
      "from": "BSE Sprint 7.In Review",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Update static URL's to CDN",
        "startTime": "17/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-10",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Setup a standalone proxy server with existing rules",
        "startTime": "14/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-10",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Setup a standalone proxy server with existing rules",
        "startTime": "16/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-280",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collabion - Pricing",
        "startTime": "14/05/2018",
        "endTime": "18/05/2018"
      }
    },
    {
      "key": "BSE-280",
      "from": "BSE Sprint 7.In Review",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "Collabion - Pricing",
        "startTime": "18/05/2018",
        "endTime": "18/05/2018"
      }
    },
    {
      "key": "BSE-281",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 8,
        "summary": "Slack Landing Page - Feedback",
        "startTime": "14/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-281",
      "from": "BSE Sprint 7.In progress",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "AC",
        "sp": 8,
        "summary": "Slack Landing Page - Feedback",
        "startTime": "18/05/2018",
        "endTime": "27/06/2018"
      }
    },
    {
      "key": "BSE-283",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "SFDC Form Implementation",
        "startTime": "14/05/2018",
        "endTime": "18/05/2018"
      }
    },
    {
      "key": "BSE-283",
      "from": "BSE Sprint 7.In Review",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "AC",
        "sp": 6,
        "summary": "SFDC Form Implementation",
        "startTime": "18/05/2018",
        "endTime": "18/05/2018"
      }
    },
    {
      "key": "BSE-285",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "sp": 4,
        "summary": "Fixing Maps JSON",
        "startTime": "14/05/2018",
        "endTime": "18/05/2018"
      }
    },
    {
      "key": "BSE-279",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "SA",
        "sp": null,
        "summary": "Stage Setup",
        "startTime": "14/05/2018",
        "endTime": "17/05/2018"
      }
    },
    {
      "key": "BSE-290",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Generation of dynamic Header Navigation ",
        "startTime": "14/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-290",
      "from": "BSE Sprint 7.In Review",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Generation of dynamic Header Navigation ",
        "startTime": "21/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-289",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 7.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Forum Register Issues",
        "startTime": "14/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-289",
      "from": "BSE Sprint 7.In Review",
      "to": "BSE Sprint 7.Done",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Forum Register Issues",
        "startTime": "21/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-293",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 8.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Remove Download From Dashboards",
        "startTime": "28/05/2018",
        "endTime": "29/05/2018"
      }
    },
    {
      "key": "BSE-293",
      "from": "BSE Sprint 8.Done",
      "to": "BSE Sprint 8.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Remove Download From Dashboards",
        "startTime": "29/05/2018",
        "endTime": "29/05/2018"
      }
    },
    {
      "key": "BSE-293",
      "from": "BSE Sprint 8.In progress",
      "to": "BSE Sprint 8.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Remove Download From Dashboards",
        "startTime": "29/05/2018",
        "endTime": "01/06/2018"
      }
    },
    {
      "key": "BSE-293",
      "from": "BSE Sprint 8.In Review",
      "to": "BSE Sprint 8.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Remove Download From Dashboards",
        "startTime": "29/05/2018",
        "endTime": "01/06/2018"
      }
    },
    {
      "key": "BSE-292",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 8.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": " Weather Dashboard Integration",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-292",
      "from": "BSE Sprint 8.In progress",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": " Weather Dashboard Integration",
        "startTime": "29/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-292",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 9.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": " Weather Dashboard Integration",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-292",
      "from": "BSE Sprint 9.In Review",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "SS",
        "sp": 0,
        "summary": " Weather Dashboard Integration",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 8.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "14/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In Review",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "04/06/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 9.In Review",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "04/06/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 8.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "04/06/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 8.In progress",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "04/06/2018",
        "endTime": "11/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 10.In progress",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "04/06/2018",
        "endTime": "15/06/2018"
      }
    },
    {
      "key": "BSE-284",
      "from": "BSE Sprint 10.In progress",
      "to": "BSE Sprint 10.Done",
      "inf": {
        "assignee": "AC",
        "sp": 5,
        "summary": "Alternatetobi.com Landing Page",
        "startTime": "11/06/2018",
        "endTime": "15/06/2018"
      }
    },
    {
      "key": "BSE-167",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 0,
        "summary": "Pricing - API Generation",
        "startTime": "28/05/2018",
        "endTime": "11/06/2018"
      }
    },
    {
      "key": "BSE-167",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 10.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 0,
        "summary": "Pricing - API Generation",
        "startTime": "04/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-167",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 11.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 0,
        "summary": "Pricing - API Generation",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-167",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 0,
        "summary": "Pricing - API Generation",
        "startTime": "18/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-167",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "UT",
        "sp": 0,
        "summary": "Pricing - API Generation",
        "startTime": "18/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "28/05/2018",
        "endTime": "11/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 10.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "04/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 11.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "18/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-168",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Pricing - Data Binding",
        "startTime": "21/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-170",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - CSS Improvements",
        "startTime": "28/05/2018",
        "endTime": "07/06/2018"
      }
    },
    {
      "key": "BSE-170",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - CSS Improvements",
        "startTime": "04/06/2018",
        "endTime": "11/06/2018"
      }
    },
    {
      "key": "BSE-170",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 10.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - CSS Improvements",
        "startTime": "07/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-170",
      "from": "BSE Sprint 10.In progress",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - CSS Improvements",
        "startTime": "11/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-170",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - CSS Improvements",
        "startTime": "18/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-166",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "AT",
        "sp": 5,
        "summary": "Pricing - Content Model",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-166",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In Review",
      "inf": {
        "assignee": "AT",
        "sp": 5,
        "summary": "Pricing - Content Model",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-166",
      "from": "BSE Sprint 9.In Review",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "AT",
        "sp": 5,
        "summary": "Pricing - Content Model",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-169",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - HTML Structure ",
        "startTime": "28/05/2018",
        "endTime": "07/06/2018"
      }
    },
    {
      "key": "BSE-169",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - HTML Structure ",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-169",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Pricing - HTML Structure ",
        "startTime": "07/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-282",
      "from": "BSE Sprint 7.To Do",
      "to": "BSE Sprint 8.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 21,
        "summary": "Prod - Pricing Page",
        "startTime": "14/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-282",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 9.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 21,
        "summary": "Prod - Pricing Page",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-282",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "AC",
        "sp": 21,
        "summary": "Prod - Pricing Page",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-282",
      "from": "BSE Sprint 9.Done",
      "to": "BSE Sprint 8.Done",
      "inf": {
        "assignee": "AC",
        "sp": 21,
        "summary": "Prod - Pricing Page",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-291",
      "from": "BSE Sprint 8.To Do",
      "to": "BSE Sprint 8.In progress",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Dev Center Content Audit - Getting started with frameworks",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-291",
      "from": "BSE Sprint 8.In progress",
      "to": "BSE Sprint 8.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Dev Center Content Audit - Getting started with frameworks",
        "startTime": "28/05/2018",
        "endTime": "04/06/2018"
      }
    },
    {
      "key": "BSE-307",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "DC Improvements ",
        "startTime": "04/06/2018",
        "endTime": "07/06/2018"
      }
    },
    {
      "key": "BSE-295",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Angular 1.3x  - Wrapper ",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-295",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 9.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Angular 1.3x  - Wrapper ",
        "startTime": "04/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-295",
      "from": "BSE Sprint 9.In Review",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Angular 1.3x  - Wrapper ",
        "startTime": "06/06/2018",
        "endTime": "06/06/2018"
      }
    },
    {
      "key": "BSE-298",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Skeleton",
        "startTime": "04/06/2018",
        "endTime": "11/06/2018"
      }
    },
    {
      "key": "BSE-298",
      "from": "BSE Sprint 9.In progress",
      "to": "BSE Sprint 10.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Skeleton",
        "startTime": "08/06/2018",
        "endTime": "15/06/2018"
      }
    },
    {
      "key": "BSE-298",
      "from": "BSE Sprint 10.In progress",
      "to": "BSE Sprint 10.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Skeleton",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-298",
      "from": "BSE Sprint 10.In Review",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Skeleton",
        "startTime": "15/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-298",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Skeleton",
        "startTime": "18/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-305",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "AC",
        "sp": 13,
        "summary": "Pardot Integration ",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-297",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "Playground - Navigation Model",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-323",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "AC",
        "sp": 1,
        "summary": "Freshchat for Web",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-321",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "Reseller Update",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-322",
      "from": "BSE Sprint 9.To Do",
      "to": "BSE Sprint 9.Done",
      "inf": {
        "assignee": "UT",
        "sp": 1,
        "summary": "FC Manage CSS Issue",
        "startTime": "04/06/2018",
        "endTime": "08/06/2018"
      }
    },
    {
      "key": "BSE-334",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Integrations - Details - CSS Improvements",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-334",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Integrations - Details - CSS Improvements",
        "startTime": "25/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-334",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Integrations - Details - CSS Improvements",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-329",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Skeleton",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-329",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Skeleton",
        "startTime": "20/06/2018",
        "endTime": "22/06/2018"
      }
    },
    {
      "key": "BSE-329",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Skeleton",
        "startTime": "21/06/2018",
        "endTime": "22/06/2018"
      }
    },
    {
      "key": "BSE-330",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Data Bindings",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-330",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Data Bindings",
        "startTime": "20/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-330",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Data Bindings",
        "startTime": "21/06/2018",
        "endTime": "25/06/2018"
      }
    },
    {
      "key": "BSE-330",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Data Bindings",
        "startTime": "21/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-330",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - Data Bindings",
        "startTime": "25/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-331",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - CSS Improvements",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-331",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - CSS Improvements",
        "startTime": "20/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-331",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 3,
        "summary": "Integrations - Overview - CSS Improvements",
        "startTime": "21/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-333",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "JD",
        "sp": 5,
        "summary": "Integrations - Details - Data Bindings",
        "startTime": "18/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-332",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "JD",
        "sp": 6,
        "summary": "Integrations - Details - Skeleton",
        "startTime": "18/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-324",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 10.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Overview - CSS Improvements",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-324",
      "from": "BSE Sprint 10.In Review",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Overview - CSS Improvements",
        "startTime": "15/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-324",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Overview - CSS Improvements",
        "startTime": "18/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-328",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 10.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Data Binding",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-328",
      "from": "BSE Sprint 10.In Review",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Data Binding",
        "startTime": "15/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-328",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Charts Gallery - Overview - Data Binding",
        "startTime": "18/06/2018",
        "endTime": "19/06/2018"
      }
    },
    {
      "key": "BSE-335",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "JD",
        "sp": 0,
        "summary": "Chart Gallery - Details - Skeleton #2",
        "startTime": "18/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-325",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 11.To Do",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Details - CSS Improvements",
        "startTime": "11/06/2018",
        "endTime": "21/06/2018"
      }
    },
    {
      "key": "BSE-325",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Details - CSS Improvements",
        "startTime": "18/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-325",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 0,
        "summary": "Chart Gallery - Details - CSS Improvements",
        "startTime": "21/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-327",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 10.In Review",
      "inf": {
        "sp": 8,
        "summary": "Charts Gallery - Details - Data Flow",
        "startTime": "11/06/2018",
        "endTime": "15/06/2018"
      }
    },
    {
      "key": "BSE-327",
      "from": "BSE Sprint 10.In Review",
      "to": "BSE Sprint 10.Done",
      "inf": {
        "sp": 8,
        "summary": "Charts Gallery - Details - Data Flow",
        "startTime": "15/06/2018",
        "endTime": "15/06/2018"
      }
    },
    {
      "key": "BSE-326",
      "from": "BSE Sprint 10.To Do",
      "to": "BSE Sprint 10.In progress",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "Chart Gallery - Details - Framework Parser",
        "startTime": "11/06/2018",
        "endTime": "18/06/2018"
      }
    },
    {
      "key": "BSE-326",
      "from": "BSE Sprint 10.In progress",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "Chart Gallery - Details - Framework Parser",
        "startTime": "15/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-326",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "Chart Gallery - Details - Framework Parser",
        "startTime": "18/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-326",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "Chart Gallery - Details - Framework Parser",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-342",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Sidebar - Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "25/06/2018"
      }
    },
    {
      "key": "BSE-342",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Sidebar - Design Feedback #1",
        "startTime": "20/06/2018",
        "endTime": "26/06/2018"
      }
    },
    {
      "key": "BSE-342",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.To Do",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Sidebar - Design Feedback #1",
        "startTime": "25/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-342",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Sidebar - Design Feedback #1",
        "startTime": "26/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-342",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Sidebar - Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-347",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Pricing - Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-347",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Pricing - Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-348",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Charts Gallery - Overview - Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-348",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Charts Gallery - Overview - Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-349",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "JD",
        "sp": 5,
        "summary": "Chart Gallery - Details -  Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-349",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "JD",
        "sp": 5,
        "summary": "Chart Gallery - Details -  Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-350",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Integrations - Overview - Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-350",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Integrations - Overview - Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-351",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "JD",
        "sp": 3,
        "summary": "Integrations - Details - Design Feedback #1",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-351",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.Done",
      "inf": {
        "assignee": "JD",
        "sp": 3,
        "summary": "Integrations - Details - Design Feedback #1",
        "startTime": "29/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-337",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "AC",
        "sp": 3,
        "summary": "Dashboards - Overview - Skeleton",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-336",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SP",
        "sp": 8,
        "summary": "Maps Gallery - All Maps - Skeleton",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-339",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "AC",
        "sp": 3,
        "summary": "Dashboards - Preview",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-338",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "AC",
        "sp": 3,
        "summary": "Dashboards - Landing Page - Skeleton",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-344",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Resources - Overview - HTML Skeleton ",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-344",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Resources - Overview - HTML Skeleton ",
        "startTime": "29/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-344",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 12.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Resources - Overview - HTML Skeleton ",
        "startTime": "29/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-344",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Resources - Overview - HTML Skeleton ",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-346",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Overview - Data Binding",
        "startTime": "18/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-346",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 12.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Overview - Data Binding",
        "startTime": "29/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-346",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Overview - Data Binding",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-346",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Resources - Overview - Data Binding",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-361",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Overview - HTML Skeleton",
        "startTime": "18/06/2018",
        "endTime": "29/06/2018"
      }
    },
    {
      "key": "BSE-361",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Overview - HTML Skeleton",
        "startTime": "29/06/2018",
        "endTime": "03/07/2018"
      }
    },
    {
      "key": "BSE-361",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Overview - HTML Skeleton",
        "startTime": "29/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-361",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 12.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Overview - HTML Skeleton",
        "startTime": "03/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-361",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 2,
        "summary": "Customers - Overview - HTML Skeleton",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-362",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 11.In progress",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Customers - Details - HTML Skeleton",
        "startTime": "18/06/2018",
        "endTime": "03/07/2018"
      }
    },
    {
      "key": "BSE-362",
      "from": "BSE Sprint 11.In progress",
      "to": "BSE Sprint 11.In Review",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Customers - Details - HTML Skeleton",
        "startTime": "29/06/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-362",
      "from": "BSE Sprint 11.In Review",
      "to": "BSE Sprint 12.In Review",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Customers - Details - HTML Skeleton",
        "startTime": "03/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-362",
      "from": "BSE Sprint 12.In Review",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Customers - Details - HTML Skeleton",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-341",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 13.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Dashboards - Overview and Detail Page - CSS improvements",
        "startTime": "02/07/2018",
        "endTime": "19/07/2018"
      }
    },
    {
      "key": "BSE-341",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Dashboards - Overview and Detail Page - CSS improvements",
        "startTime": "10/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-341",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Dashboards - Overview and Detail Page - CSS improvements",
        "startTime": "19/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-345",
      "from": "BSE Sprint 11.To Do",
      "to": "BSE Sprint 13.To Do",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Resources - Overview - CSS  Improvements ",
        "startTime": "18/06/2018",
        "endTime": "11/07/2018"
      }
    },
    {
      "key": "BSE-345",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Resources - Overview - CSS  Improvements ",
        "startTime": "10/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-345",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Resources - Overview - CSS  Improvements ",
        "startTime": "11/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-345",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SP",
        "sp": 5,
        "summary": "Resources - Overview - CSS  Improvements ",
        "startTime": "16/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-352",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 7,
        "summary": "Home - HTML Skeleton",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-352",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "UT",
        "sp": 7,
        "summary": "Home - HTML Skeleton",
        "startTime": "03/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-353",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Home - Data Binding",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-353",
      "from": "BSE Sprint 12.In progress",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "UT",
        "sp": 2,
        "summary": "Home - Data Binding",
        "startTime": "03/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-356",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "NS",
        "sp": 2,
        "summary": "Home - Content Model",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-172",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "Partners - Content Model",
        "startTime": "02/07/2018",
        "endTime": "25/07/2018"
      }
    },
    {
      "key": "BSE-172",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "Partners - Content Model",
        "startTime": "24/07/2018",
        "endTime": "25/07/2018"
      }
    },
    {
      "key": "BSE-172",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "Partners - Content Model",
        "startTime": "25/07/2018",
        "endTime": "25/07/2018"
      }
    },
    {
      "key": "BSE-172",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "Partners - Content Model",
        "startTime": "25/07/2018",
        "endTime": "25/07/2018"
      }
    },
    {
      "key": "BSE-174",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Resellers - Data Binding",
        "startTime": "02/07/2018",
        "endTime": "25/07/2018"
      }
    },
    {
      "key": "BSE-174",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Resellers - Data Binding",
        "startTime": "24/07/2018",
        "endTime": "30/07/2018"
      }
    },
    {
      "key": "BSE-174",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Resellers - Data Binding",
        "startTime": "25/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-174",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "SP",
        "sp": 1,
        "summary": "Resellers - Data Binding",
        "startTime": "30/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-364",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Test Cases",
        "startTime": "09/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-364",
      "from": "BSE Sprint 13.Done",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 5,
        "summary": "Test Cases",
        "startTime": "10/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-354",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 3,
        "summary": "Resources - Details - HTML Skeleton",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-355",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "assignee": "SS",
        "sp": 1,
        "summary": "Resources - Details - Data Binding",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-357",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 12.Done",
      "inf": {
        "sp": 3,
        "summary": "Resources - Details - Content Model",
        "startTime": "02/07/2018",
        "endTime": "10/07/2018"
      }
    },
    {
      "key": "BSE-365",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SA",
        "sp": 5,
        "summary": "Chart Gallery - Dynamic Canvas Dimension ",
        "startTime": "09/07/2018",
        "endTime": "11/07/2018"
      }
    },
    {
      "key": "BSE-363",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In progress",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Dashboard - Migration",
        "startTime": "09/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-363",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Dashboard - Migration",
        "startTime": "11/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-363",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SS",
        "sp": 8,
        "summary": "Dashboard - Migration",
        "startTime": "16/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-175",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 13.To Do",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resellers - HTML Structure ",
        "startTime": "02/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-175",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resellers - HTML Structure ",
        "startTime": "24/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-175",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "Resellers - HTML Structure ",
        "startTime": "24/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-214",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "About US - Content Model",
        "startTime": "02/07/2018",
        "endTime": "30/07/2018"
      }
    },
    {
      "key": "BSE-214",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "NS",
        "sp": 1,
        "summary": "About US - Content Model",
        "startTime": "25/07/2018",
        "endTime": "30/07/2018"
      }
    },
    {
      "key": "BSE-218",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "About US - HTML Structure",
        "startTime": "02/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-218",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "JD",
        "sp": 8,
        "summary": "About US - HTML Structure",
        "startTime": "25/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-217",
      "from": "BSE Sprint 12.To Do",
      "to": "BSE Sprint 14.To Do",
      "inf": {
        "assignee": "AC",
        "sp": 1,
        "summary": "About US - Data Binding",
        "startTime": "02/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-217",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "AC",
        "sp": 1,
        "summary": "About US - Data Binding",
        "startTime": "20/08/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-366",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Home - Design Feedback #1",
        "startTime": "09/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-366",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Home - Design Feedback #1",
        "startTime": "11/07/2018",
        "endTime": "16/07/2018"
      }
    },
    {
      "key": "BSE-366",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.In progress",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Home - Design Feedback #1",
        "startTime": "16/07/2018",
        "endTime": "19/07/2018"
      }
    },
    {
      "key": "BSE-366",
      "from": "BSE Sprint 13.In progress",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Home - Design Feedback #1",
        "startTime": "16/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-366",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Home - Design Feedback #1",
        "startTime": "19/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-384",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "SP",
        "sp": null,
        "summary": "Resources - Details - CSS Improvements",
        "startTime": "09/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-384",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "SP",
        "sp": null,
        "summary": "Resources - Details - CSS Improvements",
        "startTime": "16/07/2018",
        "endTime": "21/07/2018"
      }
    },
    {
      "key": "BSE-379",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Dashboards - Data Binding",
        "startTime": "09/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-387",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "NuclearExport - HTML Structure",
        "startTime": "09/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-387",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "UT",
        "sp": 5,
        "summary": "NuclearExport - HTML Structure",
        "startTime": "24/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-388",
      "from": "BSE Sprint 13.To Do",
      "to": "BSE Sprint 13.In Review",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Primary Navigation & Footer Navigation improvement as per new design",
        "startTime": "09/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-388",
      "from": "BSE Sprint 13.In Review",
      "to": "BSE Sprint 13.Done",
      "inf": {
        "assignee": "UT",
        "sp": 3,
        "summary": "Primary Navigation & Footer Navigation improvement as per new design",
        "startTime": "24/07/2018",
        "endTime": "24/07/2018"
      }
    },
    {
      "key": "BSE-438",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Resellers - Reseller - Structure",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-460",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Resellers - Overview - Structure",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-439",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Pardot Implementation",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-448",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "NuclearExport - Structure",
        "startTime": "23/07/2018",
        "endTime": "26/07/2018"
      }
    },
    {
      "key": "BSE-448",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "NuclearExport - Structure",
        "startTime": "25/07/2018",
        "endTime": "26/07/2018"
      }
    },
    {
      "key": "BSE-452",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "sp": null,
        "summary": "404 Page",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-456",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "AC",
        "sp": null,
        "summary": "Contact Us",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-453",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Topbar Navigation",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-453",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Topbar Navigation",
        "startTime": "25/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-466",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "NuclearExport - Feedback #1",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-470",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Footer",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-470",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Footer",
        "startTime": "30/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-469",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Intelligent Tabs",
        "startTime": "23/07/2018",
        "endTime": "31/07/2018"
      }
    },
    {
      "key": "BSE-469",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.In Review",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Intelligent Tabs",
        "startTime": "28/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-469",
      "from": "BSE Sprint 14.In Review",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "SS",
        "sp": null,
        "summary": "Intelligent Tabs",
        "startTime": "31/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-471",
      "from": "BSE Sprint 14.To Do",
      "to": "BSE Sprint 14.In progress",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Download Page  Style Fixed ",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-471",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "UT",
        "sp": null,
        "summary": "Download Page  Style Fixed ",
        "startTime": "31/07/2018",
        "endTime": "20/08/2018"
      }
    },
    {
      "key": "BSE-394",
      "from": "BSE Sprint 14.In progress",
      "to": "BSE Sprint 14.Done",
      "inf": {
        "assignee": "SP",
        "sp": null,
        "summary": "Home - Feedback #6",
        "startTime": "23/07/2018",
        "endTime": "20/08/2018"
      }
    }
  ]