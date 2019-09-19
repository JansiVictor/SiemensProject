import { browser } from "protractor";

export class Utility{

    public high = 80000;
    public medium = 10000;
    public medium_low = 5000;
    public low = 3000;
    public Avg_low = 2000;
    public very_low = 1000;

    public async wait(time: number){
        await browser.sleep(time);
    }
}