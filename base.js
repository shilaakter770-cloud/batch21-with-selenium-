import {Builder , By} from "selenium-webdriver";
class base{ 
    constructor(){ 
        this .driver = new Builder().forBrowser("chrome").build();
    }
    async openBrowser (url){
        await this.driver.get("https://www.npmjs.com/")
    }
    async closeBrowser() {
        await this.driver.quit();
    
    
}

}
const result=new base();
result.openBrowser()
result.closeBrowser()