$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "To validate Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate Login functionality using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is in Adactin Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to enter search hotel page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Aadhvik3",
        "karthik-5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate Login functionality using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is in Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid \"Aadhvik3\" and \"karthik-5\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to enter search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_enter_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Search.feature");
formatter.feature({
  "name": "To validate Search Hotel page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate Search Hotel page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is in Adactin Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to enter search hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to enter \"\u003clocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoom\u003e\",\"\u003cNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to enter \"\u003ccheckin\u003e\",\"\u003ccheckout\u003e\" dates",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to enter \"\u003cadults\u003e\",\"\u003cchildren\u003e\" number",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to click Search",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "Hotels",
        "Room",
        "Number",
        "checkin",
        "checkout",
        "adults",
        "children"
      ]
    },
    {
      "cells": [
        "Aadhvik3",
        "karthik-5",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1",
        "19/03/2021",
        "20/03/2021",
        "2",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate Search Hotel page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is in Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_in_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid \"Aadhvik3\" and \"karthik-5\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-47PN41M\u0027, ip: \u0027192.168.43.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\SUREND~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 17dd7b4f13586056dcb040a7b9ede8a6\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.stepdefinition.BaseClass.fillTextbox(BaseClass.java:27)\r\n\tat org.stepdefinition.LoginSteps.user_enter_valid_and(LoginSteps.java:28)\r\n\tat ✽.User enter valid \"Aadhvik3\" and \"karthik-5\"(file:src/test/resources/Features/Search.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_enter_search_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter \"Sydney\",\"Hotel Creek\",\"Double\",\"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_should_be_able_to_enter(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter \"19/03/2021\",\"20/03/2021\" dates",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_should_be_able_to_enter_dates(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to enter \"2\",\"1\" number",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_should_be_able_to_enter_number(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to click Search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_should_be_able_to_click_Search()"
});
formatter.result({
  "status": "skipped"
});
});