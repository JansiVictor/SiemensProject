import { element, by, ElementFinder, ElementArrayFinder} from "protractor";



export class FLTY19homePageObject {
    public appointmentListLabel: ElementFinder;
    public usrname: ElementFinder;
    public password: ElementFinder;
    public loginbtn: ElementFinder;
    public selectLink: ElementArrayFinder;
    public arriveBtn: ElementFinder;

    
    constructor() {
        this.selectLink = element.all(by.xpath('//span[text()="select >"]'));

        
        this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));
        this.usrname = element(by.id("input1"));
        this.password = element(by.id("input2"));
        this.loginbtn = element(by.id("submitbutton"));
        this.arriveBtn = element(by.id('btn_arrive'));
        
    }

    public verifyAppointmentListPage() {
        if (this.selectLink != null) {
            this.selectLink.getText().then(function(select) {
            console.log("find select link text  " + select);
            });
        }
    }

    public clickOnTheSelectLink() {
        var list = this.selectLink;
	  list.count().then(function(promiseResult) {
        console.log("size is: " + promiseResult);
        var size = promiseResult; //4
        //Remove when there is one
		//var actualSize = size -1;
		console.log("size is: " + size);
        var selectlatest = element(
	  by.xpath('(//span[text()="select >"])'+'['+[size]+']')
        );
        selectlatest.getText().then(function(selectText) {
          console.log("find select link text  " + selectText);
		});
		console.log("link " + ('(//span[text()="select >"])'+'['+[size]+']'));
		var selectMe = element(
            by.xpath('(//span[text()="select >"])'+'['+[size]+']')
          );
 		selectMe.getText().then(function(selectMeText) {
          console.log("find select Me link text  " + selectMeText);
		});
        if (
          selectMe.isDisplayed()
        ) {
          selectMe.click();
          };
            
        });
    };
    
};