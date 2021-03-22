package org.stepdefinition;

import org.pojo.LoginPojo;
import org.pojo.SearchPojo;
import org.pom.PageObjectManager;

import io.cucumber.java.en.Then;

public class SearchHotel extends BaseClass{
	
	public PageObjectManager pom;
	public SearchPojo sp;
	

	@Then("User should be able to enter {string},{string},{string},{string}")
	public void user_should_be_able_to_enter(String loc, String hotel, String roomType, String number) {
	    pom=PageObjectManager.getPom();
		sp=pom.getSearchPojo();
	    selectDropDownByValue(sp.getLocation(), loc);
	    selectDropDownByValue(sp.getHotel(), hotel);
	    selectDropDownByValue(sp.getRoomType(), roomType);
	    selectDropDownByValue(sp.getRoomNos(), number);
	    
	}

	@Then("User should be able to enter {string},{string} dates")
	public void user_should_be_able_to_enter_dates(String checkin, String checkout) {
	    fillTextbox(sp.getCheckIn(), checkin);
	    fillTextbox(sp.getCheckOut(), checkout);
	}

	@Then("User should be able to enter {string},{string} number")
	public void user_should_be_able_to_enter_number(String adults, String children) {
		selectDropDownByValue(sp.getAdultRoom(), adults);
		selectDropDownByValue(sp.getChildRoom(), children);
	}

	@Then("User should be able to click Search")
	public void user_should_be_able_to_click_Search() {
	    btnClick(sp.getBtnSearch());
	}

}
