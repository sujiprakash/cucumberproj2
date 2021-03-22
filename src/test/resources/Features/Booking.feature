Feature: To validate Booking Hotel page

  Scenario Outline: To validate Booking Hotel page
    Given User is in Adactin Login page
    When User enter valid "<username>" and "<password>"
    And User click Login button
    Then User should be able to enter search hotel page
    And User should be able to enter "<location>","<Hotels>","<Room>","<Number>"
    And User should be able to enter "<checkin>","<checkout>" dates
    And User should be able to enter "<adults>","<children>" number
    And User should be able to click Search
    And User should be able to select hotel
    Then User click continue button
    And User enter "<Firstname>","<Lastname>","<BillingAddress>"
    And User enter "<CreditcardNo>","<CardType>","<ExpMonth>","<ExpYr>","<CVV>"
    And User click BookNow button
    Then User should get OrderNumber

    Examples: 
      | username | password  | location | Hotels      | Room   | Number | checkin    | checkout   | adults | children | Firstname | Lastname | BillingAddress | CreditcardNo     | CardType | ExpMonth | ExpYr | CVV |
      | Aadhvik3 | karthik-5 | Sydney   | Hotel Creek | Double |      1 | 19/03/2021 | 20/03/2021 |      2 |        1 | Suji      | Karthik  | Perambur       | 1234567890123456 | VISA     |       11 |  2022 | 456 |
