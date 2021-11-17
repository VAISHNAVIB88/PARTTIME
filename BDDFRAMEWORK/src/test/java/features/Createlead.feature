Feature: CreateLead Functionality
#Background:
#
#And load URL

@reg
Scenario Outline: TC003 Positive test to create lead

And Enters Username as Demosalesmanager
And Enters Password as crmsfa
When click login button
And Enter CRMSFA link and go to Leads enter create lead
And Enter company name as <Company name>
And Enter First name as <First name>
And Enter Last name as <Last name>
When Click the create lead button
Then Verify the lead creation
#And Close Browser
Examples:
|Company name|First name|Last name|
|ABC|Vaishnavi|B|
|DEF|Vani|C|