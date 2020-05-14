



export var data = {
    quizselection:"gotoquiz",
    lastaction:"smoda"
}

if(process.browser){
    var sessiondata = sessionStorage.getItem("data");
    ChangeData(JSON.parse(sessiondata));
}

export function ChangeData(d){
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}
