



export var data = {
    quizselection:"gotoquiz",
    lastaction:"smoda",
    numClicks:0
}

if(process.browser) {
    var sessiondata = sessionStorage.getItem("data");
    if(sessiondata !== null){
        ChangeData(JSON.parse(sessiondata));
    }
}

export function ChangeData(d){
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}
