package org.pom;

import org.pojo.BookingPojo;
import org.pojo.LoginPojo;
import org.pojo.SearchPojo;
import org.pojo.SelectPojo;

public class PageObjectManager {

	private PageObjectManager() {
		
	}
	
	 private static PageObjectManager pom;
	 private LoginPojo loginPojo;
	 private SearchPojo searchPojo;
	 private SelectPojo selectPojo;
	 private BookingPojo bookingPojo;
	 
	 
	public static PageObjectManager getPom() {
		return (pom==null)?pom=new PageObjectManager():pom;
	}
	public LoginPojo getLoginPojo() {
		return (loginPojo==null)?loginPojo=new LoginPojo():loginPojo;
	}
	public SearchPojo getSearchPojo() {
		return (searchPojo==null)?searchPojo=new SearchPojo():searchPojo;
	}
	public SelectPojo getSelectPojo() {
		return (selectPojo==null)?selectPojo=new SelectPojo():selectPojo;
	}
	public BookingPojo getBookingPojo() {
		return (bookingPojo==null)?bookingPojo=new BookingPojo():bookingPojo;
	}
	 
}
