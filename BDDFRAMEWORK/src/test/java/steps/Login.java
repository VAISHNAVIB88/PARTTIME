
package steps;

import org.openqa.selenium.By;

import cucumber.api.java.en.*;

public class Login extends Driver {

	@Given("Enters Username as (.*)")
	public void username(String uname) {
		driver.findElement(By.id("username")).sendKeys(uname);
	}

	@And("Enters Password as (.*)")
	public void pswd(String pwd) {
		driver.findElement(By.id("password")).sendKeys(pwd);
	}

	@When("click login button")
	public void login() {

		driver.findElement(By.className("decorativeSubmit")).click();

	}

	@Then("Homepage should be displayed")
	public void homePage() {
		String title = driver.getTitle();
		if (title.equalsIgnoreCase("Leaftaps - TestLeaf Automation Platform")) {
			System.out.println("Successful login");
		}

	}

	@But("Homepage should not be displayed")
	public void errorhomePage() {
		String text = driver.findElement(By.xpath("((//div[@id='errorDiv'])/p)[2]")).getText();
		if (text.equalsIgnoreCase("following error occurred during login: Password incorrect.")) {
			System.out.println("UnSuccessful login");
		}

	}

	@And("Close Browser")
	public void closeBrowser() {
		driver.close();
	}

}
