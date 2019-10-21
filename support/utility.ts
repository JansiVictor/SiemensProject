import { browser } from "protractor";
export class Utility{

    //**IE utility run
    //**Uncomment for IE run

    public high = 80000;
    public medium = 5000;
    public medium_low = 4000;
    public low = 3000;
    public Avg_low = 2000;
    public very_low = 1000;

    //**Chrome utility run
    //**Uncomment for Chrome run

    // public high = 80000;
    // public medium = 5000;
    // public medium_low = 4000;
    // public low = 3000;
    // public Avg_low = 2000;
    // public very_low = 1000;

    public async wait(time: number){
        await browser.sleep(time);
    }

public async deletesoaprequest(appointmentid){
    var url = "https://siemens-og-3x7kj3qxtczc6n4yxssaapdr-sdg1-test.mbaas1.sdg.feedhenry.com/remoteServices/appointments/"+appointmentid;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    console.log('delete url' + url)
    //xhr.open("DELETE", url, false);
    xhr.open("DELETE", url, true);
    
    xhr.send();

    
}

public async checkusingGET(appointmentid){
    var url = "https://siemens-og-3x7kj3qxtczc6n4yxssaapdr-sdg1-test.mbaas1.sdg.feedhenry.com/remoteServices/appointments/"+appointmentid;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    
    console.log('get url' + url)
    //xhr.open("DELETE", url, false);
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function () {
        var deleteres = JSON.parse(xhr.responseText);
        console.log(deleteres.status);
        if (deleteres.status == "appointment doesnt exist") {
            console.table(deleteres);
        } else {
            console.error(deleteres);
        }
    };
};


public async checkworkorderexistsafterdeletion(appointmentid){
    var url = "https://siemens-og-3x7kj3qxtczc6n4yxssaapdr-sdg1-test.mbaas1.sdg.feedhenry.com/remoteServices/appointments/"+appointmentid;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    
    console.log('delete url' + url)
    //xhr.open("DELETE", url, false);
    xhr.open("DELETE", url, true);
    xhr.send();

    xhr.onload = function () {
        var deleteres = JSON.parse(xhr.responseText);
        if (deleteres.status == "appointment doesnt exist") {
            console.table(deleteres);
        } else {
            console.error(deleteres);
        }
    };
};


    


// usage of module
public async sendsoaprequest(filename, user) {
    const soapRequest = require('easy-soap-request');
    const fs = require('fs');
    const url = 'https://siemens-og-3x7kj3qxtczc6n4yxssaapdr-sdg1-test.mbaas1.sdg.feedhenry.com/ws/DataManager';
    const sampleHeaders = {
            'user-agent': 'sampleTest',
            'Content-Type': 'application/xml',
  };
    var xml = fs.readFileSync(filename, 'utf-8');
    var randomnumber = Math.floor(Math.random() * 100000);
    xml=xml.replace('<APPOINTMENT_ID></APPOINTMENT_ID>', '<APPOINTMENT_ID>'+randomnumber+'</APPOINTMENT_ID>');
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
 
    xml=xml.replace('<APPNT_END></APPNT_END>', '<APPNT_END>'+yyyy+'-'+mm+'-'+dd+' 18:00:00'+'</APPNT_END>');
    xml=xml.replace('<APPNT_START></APPNT_START>', '<APPNT_START>'+yyyy+'-'+mm+'-'+dd+' 07:00:00'+'</APPNT_START>');
    xml=xml.replace('<ORIGINAL_ETA></ORIGINAL_ETA>', '<ORIGINAL_ETA>'+yyyy+'-'+mm+'-'+dd+' 14:00:00'+'</ORIGINAL_ETA>');
    xml=xml.replace('<STAFF_NUMBER></STAFF_NUMBER>', '<STAFF_NUMBER>'+user+'</STAFF_NUMBER>');
    var returnstatus;
    console.log(xml);
    returnstatus = (async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 10000 }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response;
    console.log(headers);
    console.log(body);
    console.log(statusCode);
    returnstatus = statusCode
    if(statusCode == "200")
        console.log('workorder posted successfully');
    else
        return 0;
    })();
    if(returnstatus == 0)
        return 0;
    else
        return randomnumber;
}
}