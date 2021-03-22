Feature: To validate Search Hotel page

@sanity
  Scenario Outline: To validate Search Hotel page
    Given User is in Adactin Login page
    When User enter valid "<username>" and "<password>"
    And User click Login button
    Then User should be able to enter search hotel page
    And User should be able to enter "<location>","<Hotels>","<Room>","<Number>"
    And User should be able to enter "<checkin>","<checkout>" dates
    And User should be able to enter "<adults>","<children>" number
    And User should be able to click Search

    Examples: 
      | username | password  | location | Hotels      | Room   | Number | checkin    | checkout   | adults | children |
      | Aadhvik3 | karthik-5 | Sydney   | Hotel Creek | Double |      1 | 19/03/2021 | 20/03/2021 |      2 |        1 |
