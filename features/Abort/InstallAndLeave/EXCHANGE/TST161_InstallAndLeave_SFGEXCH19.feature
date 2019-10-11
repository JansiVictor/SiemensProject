Feature: SFGEXCH19 - InstallAndLeave Workflow

    Scenario: Post SFGEXCH19 SOAP Request
        Given I post workorder using "xmlrequest/SFGEXCH19.XML"

    @LoginScenario
    Scenario: Select the Latest ExchngNineteen workOrder
        Given the ExchngNineteen Appointment List window
        When I click on ExchngNineteen select button
        Then I should see ExchngNineteen Work Order window

    Scenario: Going through ExchngNineteen Call Forward
        Given the ExchngNineteen "Work Order" window
        When i see ExchngNineteen Call Forward or Arrive Button
        Then I click on ExchngNineteen CALL FORWARD button
        Then I should see ExchngNineteen page contect display
        And I should see ExchngNineteen Contact made field

    Scenario: Selecting ExchngNineteen job and setting to depart
        Given the ExchngNineteen "Work Order" page
        When I fill the ExchngNineteen fields with the value
        And I click on ExchngNineteen DEPART button
        Then I should see ExchngNineteen  for Appointment window
        And I should see the ExchngNineteen correct MPAN details
        And I should see the ExchngNineteen correct Customer Name details
        And I should see the ExchngNineteen correct PostCode details

    Scenario: Approving ExchngNineteen "Depart for Appointment" job
        And "Appointment" ExchngNineteen details
        When I click on ExchngNineteen OK button
        And I should see ExchngNineteen ARRIVE button
        And I should see ExchngNineteen DOORSTEP PROTOCOL tab activated

    Scenario: Set ExchngNineteen job to Arrived status
        Given the ExchngNineteen "WorkOrder" page
        When I click on ExchngNineteen ARRIVE button
        Then I should see ExchngNineteen Arrival Time details
        And I should seeExchngNineteen  BE AWARE OF ANY DANGER! section

    Scenario: Going through ExchngNineteen "BE AWARE OF ANY DANGER!" section
        Given the ExchngNineteen BE AWARE OF ANY DANGER! section
        When I fill the ExchngNineteen DoorStep Protocol fields with the value
        And I click on ExchngNineteen ON SITE button
        And I should see ExchngNineteen Initial Risk Assessment for GAS section

    Scenario: Going through ExchngNineteen "INITIAL RISK ASSESSMENT"
        Given the ExchngNineteen INITIAL RISK ASSESSMENT section
        When I fill the ExchngNineteen initialRisk field with the values
        Then I should see the ExchngNineteen RISK ASSESSMENT - GAS section

    Scenario: Going through ExchngNineteen "RISK ASSESSMENT - GAS" section
        Given the ExchngNineteen RISK ASSESSMENT - GAS section
        When I fill the ExchngNineteen RISK ASSESSMENT - GAS fields with the values
        Then I should see ExchngNineteen Suitability for Smart Meter Installation section

    Scenario: Going through ExchngNineteen Suitability for Smart Meter Installation section
        Given the ExchngNineteen Suitability for Smart Meter Installation section
        When I fill the ExchngNineteen Suitability for Smart Meter Installation fields with the values
        Then I should see ExchngNineteen Capture Photo of GAS Installation section

    Scenario: Going through ExchngNineteen Pre Installation Gas Tightness section
        Given the ExchngNineteen Pre Installation Gas Tightness section
        When I fill the ExchngNineteen Pre Installation Gas Tightness fields with the values
        Then I should see ExchngNineteen Current Meter Details section

    Scenario: Going through ExchngNineteen "Check the current meter details" GAS section
        When I fill the ExchngNineteen current meter details fields with the values

    Scenario: Going through ExchngNineteen "Check the current CommsHub details" GAS section
        Given the Check the ExchngNineteen current CommsHub detailssection
        When I fill the ExchngNineteen current CommsHub details fields with the values
        Then I should see the ExchngNineteen REMOVE tab activated

    Scenario: Going through ExchngNineteen "REMOVE METER" GAS section
        Given the ExchngNineteenREMOVE METER section
        When I fill the ExchngNineteen REMOVE METER fields with the values
        Then I should see ExchngNineteen REMOVE ASSET section

    Scenario: Going through ExchngNineteen "REMOVE ASSET" GAS section
        Given the ExchngNineteen REMOVE ASSET section
        When I fill the ExchngNineteen REMOVE ASSET field with the values
        And I click on ExchngNineteen OK button in updated Popup notification
        Then I should see ExchngNineteen New Regulator section

    Scenario: Input the ExchngNineteen new Regulator S/N which transferres the Regulator from the Van List GAS section
        Given the ExchngNineteen New Regulator section
        When I fill the ExchngNineteen New Regulator fields with values
        Then I should see ExchngNineteen install CommsHub section

    Scenario: Input the ExchngNineteen new Regulator S/N which transferres the Regulator from the Van List GAS section
        Given the ExchngNineteen install CommsHub section
        When I fill the ExchngNineteen install CommsHub fields with values
        Then I should see ExchngNineteen NEW METER section

    Scenario: Going through ExchngNineteen " SMETS2 New Meter details " GAS section
        Given the  ExchngNineteen New Meter details section
        When I fill the ExchngNineteen New Meter details fields with values Gas
        Then I should see ExchngNineteen Gas Initial Meter Reading section

    Scenario: Going through ExchngNineteen " SMETS2 Initial New Meter details " GAS section
        Given the ExchngNineteen Gas Initial Meter Reading section
        When I fill the ExchngNineteen Gas Initial Meter Reading details fields with values
        Then I should see ExchngNineteen Gas Install Kit section

    Scenario: Going through ExchngNineteen "Install Kit " GAS section
        Given the ExchngNineteen Gas Install Kit section
        When I fill the ExchngNineteen Gas Install Kit section fields with values
        Then I should see ExchngNineteen Perform Post Installation GAS Checks section

    Scenario: Going through ExchngNineteen "Post Installation GAS" GAS section
        Given the ExchngNineteen Post Installation GAS section
        When I fill the InstallLeave Post Installation GAS section fields with values
        Then I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
        Given InstallLeave Replace CommsHubNoWan section
        When I fill the EXCH19 InstallLeave Replace CommshubNoWan details fields with values
        Then I should see ExchngNineteen Gas Appliance Safety Checks section

    Scenario: Going through ExchngNineteen "Gas Appliance Safety Checks" GAS section
        Given the ExchngNineteen Gas Appliance Safety Checks section
        When I fill the ExchngNineteen Gas Appliance Safety Checks section fields with values and Submit
        Then I should see ExchngNineteen SMETS PPMID section

    Scenario: Going through ExchngNineteen "SMETS PPMID" GAS section
        Given the ExchngNineteen SMETS PPMID section
        When I fill the InstallLeave PPMID section fields with values
        Then I should see ExchngNineteen Check Binding and commissioning of PPMID section

    Scenario: Going through ExchngNineteen "Check Binding and commissioning of PPMID" GAS section
        Given the ExchngNineteen Binding and commissioning of PPMID section
        When I fill the EXCH19 InstallLeave Binding and commissioning of PPMID fields with values
        Then I should see ExchngNineteen configuration of all meters installed section

    Scenario: Going through ExchngNineteen "configuration of all meters installed " GAS section
        Given the ExchngNineteen configuration of all meters installed  section
        When I fill the EXCH19 InstallLeave configuration of all meters installed  fields with values
        Then I should see ExchngNineteen Energy Efficiency information section

    Scenario: Going through ExchngNineteen "Energy Efficiency information" GAS section
        Given the ExchngNineteen Energy Efficiency information  section
        When I fill the ExchngNineteen Energy Efficiency information fields with values

    Scenario: Going through ExchngNineteen "Summary of Job and receive Customer Signature" GAS section
        Given the ExchngNineteen Summary of Job and receive Customer Signature section
        When I fill the ExchngNineteen Summary of Job and receive Customer Signaturefields with values
        Then I should see ExchngNineteen Submit button to complete the job section

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist