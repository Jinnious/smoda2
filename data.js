



export var data = {
    quizselection:"gotoquiz",
    lastaction:"smoda",
    numClicks:0,
    numAnswer:0
}

// if(process.browser){
//     var sessiondata = sessionStorage.getItem("data");
//     ChangeData(JSON.parse(sessiondata));
// }

export function ChangeData(d){
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}
