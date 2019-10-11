Feature: SF_G_INST14 WorkFlow

        Scenario: Post SFGINST14 SOAP Request
                Given I post workorder using "xmlrequest/SFGINST14.XML"

        @LoginScenario
        Scenario: Select the Latest INSTFrtn workOrder
                Given the INSTFrtn Appointment List window
                When I click on INSTFrtn select button
                Then I should see INSTFrtn Work Order window

        Scenario: Going through INSTFrtn Call Forward
                Given the INSTFrtn "Work Order" window
                When i see INSTFrtn Call Forward or Arrive Button
                Then I click on INSTFrtn CALL FORWARD button
                Then I should see INSTFrtn page contect display
                And I should see INSTFrtn Contact made field

        Scenario: Selecting INSTFrtn job and setting to depart
                Given the INSTFrtn "Work Order" page
                When I fill the INSTFrtn fields with the value
                And I click on INSTFrtn DEPART button
                Then I should see INSTFrtn  for Appointment window
                And I should see the INSTFrtn correct MPAN details
                And I should see the INSTFrtn correct Customer Name details
                And I should see the INSTFrtn correct PostCode details

        #######Aparna Das - Change 'And' to 'Given' on 25/09
        Scenario: Approving INSTFrtn "Depart for Appointment" job
                Given "Appointment" INSTFrtn details
                When I click on INSTFrtn OK button
                And I should see INSTFrtn ARRIVE button
                And I should see INSTFrtn DOORSTEP PROTOCOL tab activated

        Scenario: Set INSTFrtn job to Arrived status
                When I click on INSTFrtn ARRIVE button
                Then I should see INSTFrtn Arrival Time details
                And I should seeINSTFrtn  BE AWARE OF ANY DANGER! section

        Scenario: Going through INSTFrtn "BE AWARE OF ANY DANGER!" section
                Given the INSTFrtn BE AWARE OF ANY DANGER! section
                When I fill the INSTFrtn DoorStep Protocol fields with the value
                And I click on INSTFrtn ON SITE button
                And I should see INSTFrtn Initial Risk Assessment for GAS section

        Scenario: Going through INSTFrtn "INITIAL RISK ASSESSMENT"
                Given the INSTFrtn INITIAL RISK ASSESSMENT section
                When I fill the INSTFrtn initialRisk field with the values
                Then I should see the INSTFrtn RISK ASSESSMENT - GAS section

        Scenario: Going through INSTFrtn "RISK ASSESSMENT - GAS" section
                Given the INSTFrtn RISK ASSESSMENT - GAS section
                When I fill the INSTFrtn RISK ASSESSMENT - GAS fields with the values
                Then I should see INSTFrtn Suitability for Smart Meter Installation section

        Scenario: Going through INSTFrtn Suitability for Smart Meter Installation section
                Given the INSTFrtn Suitability for Smart Meter Installation section
                When I fill the INSTFrtn Suitability for Smart Meter Installation fields with the values
                Then I should see the INSTFrtn CommsHub details section

        Scenario: Going through INSTFrtn "Check the current CommsHub details" GAS section
                Given the Check the INSTFrtn current CommsHub detailssection
                When I fill the INSTFrtn current CommsHub details fields with the values
                Then I should see the INSTFrtn REMOVE tab activated

        Scenario: Input the INSTFrtn new Regulator S/N which transferres the Regulator from the Van List GAS section
                Given the INSTFrtn New Regulator section
                When I fill the INSTFrtn New Regulator fields with values
                Then I should see INSTFrtn install CommsHub section

        Scenario: Input the INSTFrtn new Regulator S/N which transferres the Regulator from the Van List GAS section
                Given the INSTFrtn install CommsHub section
                When I fill the INSTFrtn install CommsHub fields with values
                Then I should see INSTFrtn NEW METER section

        Scenario: Going through INSTFrtn " SMETS2 New Meter details " GAS section
                Given the  INSTFrtn New Meter details section
                When I fill the INSTFrtn New Meter details fields with values Gas
                Then I should see INSTFrtn Gas Initial Meter Reading section

        Scenario: Going through INSTFrtn " SMETS2 Initial New Meter details " GAS section
                Given the INSTFrtn Gas Initial Meter Reading section
                When I fill the INSTFrtn Gas Initial Meter Reading details fields with values
                Then I should see INSTFrtn Gas Install Kit section

        Scenario: Going through INSTFrtn "Install Kit " GAS section
                Given the INSTFrtn Gas Install Kit section
                When I fill the INSTFrtn Gas Install Kit section fields with values
                Then I should see INSTFrtn Perform Post Installation GAS Checks section

        Scenario: Going through INSTFrtn "Post Installation GAS" GAS section
                Given the INSTFrtn Post Installation GAS section
                When I fill the INSTFrtn Post Installation GAS section fields with values
                Then I should see INSTFrtn GICOM Message section
        Scenario: Going through INSTFrtn "GICOM Message" GAS section
                Given the INSTFrtn GICOM Message section
                When I fill the INSTFrtn GICOM Message section fields with values
                Then I should see INSTFrtn Gas Appliance Safety Checks section

        Scenario: Going through INSTFrtn "Gas Appliance Safety Checks" GAS section
                Given the INSTFrtn Gas Appliance Safety Checks section
                When I fill the INSTFrtn Gas Appliance Safety Checks section fields with values and Submit
        Scenario: Going through INSTFrtn "SMETS PPMID" GAS section
                Given the INSTFrtn SMETS PPMID section
                When I fill the INSTFrtn SMETS PPMID section fields with values
                Then I should see INSTFrtn SMETS XIPMD section

        Scenario: Going through INSTFrtn "SMETS XIPMD" GAS section
                Given the INSTFrtn SMETS XIPMD section
                When I fill the INSTFrtn SMETS XIPMD section fields with values
                Then I should see INSTFrtn Check Binding and commissioning of PPMID section

        Scenario: Going through INSTFrtn "Check Binding and commissioning of PPMID" GAS section
                Given the INSTFrtn Binding and commissioning of PPMID section
                When I fill the INSTFrtn Binding and commissioning of PPMID fields with values
                Then I should see INSTFrtn configuration of all meters installed section

        Scenario: Going through INSTFrtn "configuration of all meters installed " GAS section
                Given the INSTFrtn configuration of all meters installed  section
                When I fill the INSTFrtn configuration of all meters installed  fields with values
                Then I should see INSTFrtn Energy Efficiency information section

        Scenario: Going through INSTFrtn "Energy Efficiency information" GAS section
                Given the INSTFrtn Energy Efficiency information  section
                When I fill the INSTFrtn Energy Efficiency information fields with values
                Then I should see INSTFrtn Perform Smart Meter Education and Demonstration section

        Scenario: Going through INSTFrtn "Perform Smart Meter Education and Demonstration " GAS section
                Given the INSTFrtn Perform Smart Meter Education and Demonstration section
                When I fill the INSTFrtn Perform Smart Meter Education and Demonstration  fields with values
                Then I should see INSTFrtn Summary of Job and receive Customer Signature section

        Scenario: Going through INSTFrtn "Summary of Job and receive Customer Signature" GAS section
                Given the INSTFrtn Summary of Job and receive Customer Signature section
                When I fill the INSTFrtn Summary of Job and receive Customer Signaturefields with values
                Then I should see INSTFrtn Submit button to complete the job section

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist