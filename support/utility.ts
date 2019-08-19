import { browser } from "protractor";

export class Utility{

    public async wait(time: number){
        await browser.sleep(time);
    }
}