package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks  extends Driver{
	
	@Before
	public void preCondition(Scenario sc) {
        System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);
		driver.manage().window().maximize();
		System.out.println(sc.getId());
		System.out.println(sc.getName());
		System.out.println(sc.getSourceTagNames());
		
	}
    @After
    public void postCondition(Scenario sc) {
    	driver.close();
    	System.out.println(sc.getStatus());
    }
}
