Feature: Login Functionality of leaf taps application
#Background:
#Given Launch the browser
#And load URL
@Smoke
Scenario Outline: TC001 Login with valid credentials


Given Enters Username as <Username>
And Enters Password as <Password>
When click login button
Then Homepage should be displayed
#And Close Browser

Examples:
|Username|Password|
|Demosalesmanager|crmsfa|

@Sanity
Scenario: TC002 Login with invalid credentials

Given Enters Username as DemoCSR
And Enters Password as test
When click login button
But Homepage should not be displayed
#And Close Browser