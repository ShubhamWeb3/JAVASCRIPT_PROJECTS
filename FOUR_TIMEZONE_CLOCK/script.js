const getIndiaTime = function(){
    document.getElementById("indiaTime").innerHTML = new Date().toLocaleString("en-US",
        {
        timeZone:"Asia/kolkata",
        timeStyle:"medium",
        hourCycle:"h12"
        }
    );
}
getIndiaTime();
setInterval(getIndiaTime,1000);


const getLondonTime = function(){
    document.getElementById("londonTime").innerHTML = new Date().toLocaleString("en-US",
        {
        timeZone:"Europe/London",
        timeStyle:"medium",
        hourCycle:"h12"
        }
    );
}
getLondonTime();
setInterval(getLondonTime,1000);


const getNewYorkTime = function(){
    document.getElementById("newYorkTime").innerHTML = new Date().toLocaleString("en-US",
        {
        timeZone:"America/New_York",
        timeStyle:"medium",
        hourCycle:"h12"
        }
    );
}
getNewYorkTime();
setInterval(getNewYorkTime,1000);


const getnewYorkTime = function(){
    document.getElementById("newYorkTime").innerHTML = new Date().toLocaleString("en-US",
        {
        timeZone:"America/New_York",
        timeStyle:"medium",
        hourCycle:"h12"
        }
    );
}
getnewYorkTime();
setInterval(getnewYorkTime,1000);


const getSydneyTime = function(){
    document.getElementById("sydneyTime").innerHTML = new Date().toLocaleString("en-US",
        {
        timeZone:"Australia/Sydney",
        timeStyle:"medium",
        hourCycle:"h12"
        }
    );
}
getSydneyTime();
setInterval(getSydneyTime,1000);