
Feature: To validate Login functionality

  @sanity
  Scenario Outline: To validate Login functionality using valid credentials
    Given User is in Adactin Login page
    When User enter valid "<username>" and "<password>"
    And User click Login button
    Then User should be able to enter search hotel page
    
    Examples:
    |username|password|
    |Aadhvik3|karthik-5|
    
    
    
 