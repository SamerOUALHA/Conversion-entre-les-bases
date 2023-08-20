let ref = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let btn = document.getElementById("btn");
let reset = document.getElementById("reset");
btn.addEventListener("click", function(){
    let ba1 = document.getElementById("ba1").value;
    let ba2 = document.getElementById("ba2").value;
    let ent = document.getElementById("ent").value;
    let sor = document.getElementById("sor");
    if (ba1 == "10"){
        let res = "";
        while(Math.floor(ent/ba2) != 0){
            res += ref[ent%ba2];
            ent = Math.floor(ent/ba2);
        }
        res += ref[ent%ba2];
        sor.setAttribute("value", res.split("").reverse().join(""));
    }
    else if (ba2 == "10"){
        res = 0;
        ch = ent.split("").reverse().join("");
        for (let i=0; i<ch.length; i++){
            res += ref.indexOf(ch[i])*(ba1**i);
        }
        sor.setAttribute("value", res);
    }
    else{
        res1 = 0;
        ch = ent.split("").reverse().join("");
        for (let i=0; i<ch.length; i++){
            res1 += ref.indexOf(ch[i])*(ba1**i);
        }
        let res2 = "";
        while(Math.floor(res1/ba2) != 0){
            res2 += ref[res1%ba2];
            res1 = Math.floor(res1/ba2);
        }
        res2 += ref[res1%ba2];
        sor.setAttribute("value", res2.split("").reverse().join(""));
    }
})
reset.addEventListener("click", function(){
    document.getElementById("ent").value = "";
    document.getElementById("ba1").value = "";
    document.getElementById("ba2").value = "";
    document.getElementById("sor").setAttribute("value", "");
})