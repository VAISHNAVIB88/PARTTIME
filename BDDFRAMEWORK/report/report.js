$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Createlead.feature");
formatter.feature({
  "name": "CreateLead Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC003 Positive test to create lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "Enters Username as Demosalesmanager",
  "keyword": "And "
});
formatter.step({
  "name": "Enters Password as crmsfa",
  "keyword": "And "
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.step({
  "name": "Enter CRMSFA link and go to Leads enter create lead",
  "keyword": "And "
});
formatter.step({
  "name": "Enter company name as \u003cCompany name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter First name as \u003cFirst name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Last name as \u003cLast name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click the create lead button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify the lead creation",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Company name",
        "First name",
        "Last name"
      ]
    },
    {
      "cells": [
        "ABC",
        "Vaishnavi",
        "B"
      ]
    },
    {
      "cells": [
        "DEF",
        "Vani",
        "C"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC003 Positive test to create lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters Username as Demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "Login.username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.pswd(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter CRMSFA link and go to Leads enter create lead",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter company name as ABC",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter First name as Vaishnavi",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Last name as B",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the create lead button",
  "keyword": "When "
});
formatter.match({
  "location": "Createlead.createLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the lead creation",
  "keyword": "Then "
});
formatter.match({
  "location": "Createlead.verifyCreation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003 Positive test to create lead",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters Username as Demosalesmanager",
  "keyword": "And "
});
formatter.match({
  "location": "Login.username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.pswd(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter CRMSFA link and go to Leads enter create lead",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter company name as DEF",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter First name as Vani",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Last name as C",
  "keyword": "And "
});
formatter.match({
  "location": "Createlead.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the create lead button",
  "keyword": "When "
});
formatter.match({
  "location": "Createlead.createLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the lead creation",
  "keyword": "Then "
});
formatter.match({
  "location": "Createlead.verifyCreation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Functionality of leaf taps application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001 Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Enters Username as \u003cUsername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Enters Password as \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Demosalesmanager",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001 Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters Username as Demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.pswd(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002 Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enters Username as DemoCSR",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters Password as test",
  "keyword": "And "
});
formatter.match({
  "location": "Login.pswd(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage should not be displayed",
  "keyword": "But "
});
formatter.match({
  "location": "Login.errorhomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});