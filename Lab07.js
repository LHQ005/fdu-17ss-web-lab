let t1 = document.createElement("input");
let t2 = document.createElement("input");
let commit = document.createElement("button");
let section1 = document.getElementById("div1");
let section2 = document.getElementById("div2");
let section = document.getElementById("div");
let  optionArray = Array();
let  tabTh = Array();
let  tableTr = Array();
let  num =  Array();
let select2 = document.getElementById("select2");
let mateRow = Array();


function deleteTable() {
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    div3.innerHTML = "";
    div4.innerHTML = "";
    tabTh.splice(select2.selectedIndex - 1,1);
    tableTr.splice(select2.selectedIndex - 1,1);
    num.splice(select2.selectedIndex - 1 ,1);
    select2.options.remove(select2.selectedIndex);
    optionArray.splice(select2.selectedIndex-1,1);
    if(optionArray.length > 1){
        select2.options[1].selected = true;
    }
    else {
        select2.options[0].selected = true;
    }

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    for(let i = 0; i < num[select2.selectedIndex - 1]; i++){
        tr.appendChild(tabTh[select2.selectedIndex - 1][i]);
    }
    table.appendChild(tr);
    div3.appendChild(table);


    if(tableTr[select2.selectedIndex] !== undefined){
        let table1 = document.createElement("table");
        for(let i = 0; i<tableTr[select2.selectedIndex].length; i++){
            let tr1 = document.createElement("tr");
            let  x = tableTr[select2.selectedIndex][i];
            for(let j = 0; j <num[select2.selectedIndex - 1]; j ++){
                let td = document.createElement("td");
                if( x.childNodes[j].innerHTML !== undefined){
                    td.innerHTML =  x.childNodes[j].innerHTML;}
                tr1.appendChild(td);
            }table1.appendChild(tr1);
        }div4.appendChild(table1);
    }

}

function deleteRow() {
    let tr1 = document.createElement("tr");
    let kong = Array;
    for(let i = 0; i < num[select2.selectedIndex - 1] ; i++){
        let td = document.createElement("td");
        td.className =" thClass";
        kong[i] = section.children[i].value;

    }

    mateRow[select2.selectedIndex] = tr1;
    for(let j = 0; j<tableTr[select2.selectedIndex].length ;j++){ let  n = 0;
        for(let z = 0; z<num[select2.selectedIndex -1] ;z++){
        if( kong[z] === tableTr[select2.selectedIndex][j].children[z].innerHTML){
            n++;}
            } if(n === num[select2.selectedIndex - 1]){
                tableTr[select2.selectedIndex].splice(j,1);
                j--;
            }
         }

    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    div3.innerHTML = "";
    div4.innerHTML = "";

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    for(let i = 0; i < num[select2.selectedIndex - 1]; i++){
        tr.appendChild(tabTh[select2.selectedIndex - 1][i]);
    }
    table.appendChild(tr);
    div3.appendChild(table);


    if(tableTr[select2.selectedIndex] !== undefined){
        let table1 = document.createElement("table");
        for(let i = 0; i<tableTr[select2.selectedIndex].length; i++){
            let tr1 = document.createElement("tr");
            let  x = tableTr[select2.selectedIndex][i];
            for(let j = 0; j <num[select2.selectedIndex - 1]; j ++){
                let td = document.createElement("td");
                if( x.childNodes[j].innerHTML !== undefined){
                    td.innerHTML =  x.childNodes[j].innerHTML;}
                tr1.appendChild(td);
            }table1.appendChild(tr1);
        }div4.appendChild(table1);
    }


}



function getKey() {
        let inputNum =Number(t2.value);
        num[num.length] = inputNum;
        section1.innerHTML = " ";
        section2.innerHTML = " ";
     if( inputNum  > 0){
            for(let i = 0; i < inputNum ; i++){
                let tn = document.createElement("input");
                tn.type = "text";
                tn.placeholder="Attribute";
                tn.id = "textN";
                tn.className = "create1";
                section1.appendChild(tn);
            }
        }
        commit.id ="commit";
        commit.className="input";
        commit.innerHTML="Commit";
        commit.onclick = createOption;
        section2.appendChild(commit);
}
function createOption() {
    let option = document.createElement("option");
    optionArray[optionArray.length] = option;
    select2.appendChild(option);
    let optionName = t1.value;
    option.innerHTML = optionName;
    select2.options[select2.options.length-1].selected = true;
    tableTr[select2.selectedIndex] = Array();
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let table = document.createElement("table");
    let tr = document.createElement("tr");
      div3.innerHTML = "";
      div4.innerHTML = "";
      let inputNum =Number(t2.value);
      let  tableTh = Array();
      for(let i = 0; i < inputNum ; i++){
        let th = document.createElement("th");
        tableTh[i] = th;
        th.className =" thClass";
        th.innerHTML =  section1.children[i].value;
        tr.appendChild(th);
        table.appendChild(tr);
        } tabTh[tabTh.length] = tableTh;
    div3.appendChild(table);


}

function add() {
    let tr = document.createElement("tr");
    for(let i = 0; i < num[select2.selectedIndex - 1] ; i++){
        let td = document.createElement("td");
        td.className =" thClass";
        td.innerHTML = section.children[i].value;
        tr.appendChild(td);
        }
        tableTr[select2.selectedIndex][tableTr[select2.selectedIndex].length] = tr;
donSelect2();
}

function donSelect2() {
    let myselect = document.getElementById("select");
    let index = myselect.selectedIndex;
    if(myselect.options[index].value == 1){
        section.innerHTML = "";
        section1.innerHTML = " ";
        section2.innerHTML = " ";
        t1.type = "text";
        t1.placeholder="Table Name";
        t1.id = "text1";
        t1.className = "create1";
        section.appendChild(t1);
        t2.type = "number";
        t2.id = "num";
        t2.className = "create1";
        t2.placeholder="Columns Numbers";
        section.appendChild(t2);
        t2.oninput = getKey;
    }
    if(myselect.options[index].value == 2){
        section.innerHTML = "";
        section1.innerHTML = " ";
        section2.innerHTML = " ";
        if( num[select2.selectedIndex - 1]  > 0){
            for(let i = 0; i < num[select2.selectedIndex - 1]; i++){
                let tn = document.createElement("input");
                tn.type = "text";
                tn.placeholder="Attribute";
                tn.className = "create1";
                section.appendChild(tn);
            }
        }
        commit.id ="commit";
        commit.className="input";
        commit.innerHTML="Commit";
        commit.onclick = add;
        section1.appendChild(commit);
    }
    if(myselect.options[index].value == 3){
        section.innerHTML = "";
        section1.innerHTML = " ";
        section2.innerHTML = " ";
        if( num[select2.selectedIndex - 1]  > 0){
            for(let i = 0; i < num[select2.selectedIndex - 1]; i++){
                let tn = document.createElement("input");
                tn.type = "text";
                tn.placeholder="Attribute";
                tn.className = "create1";
                section.appendChild(tn);
            }
        }
        commit.id ="commit";
        commit.className="input";
        commit.innerHTML="Commit";
        commit.onclick = deleteRow;;
        section1.appendChild(commit);
    }

    if(myselect.options[index].value == 4){
        section.innerHTML = "";
        section1.innerHTML = " ";
        section2.innerHTML = " ";
        commit.id ="commit";
        commit.className="input";
        commit.innerHTML="Commit";
        commit.onclick = deleteTable;
        section1.appendChild(commit);
    }
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    div3.innerHTML = "";
    div4.innerHTML = "";
    let table = document.createElement("table");
    let tr = document.createElement("tr");
        for(let i = 0; i < num[select2.selectedIndex - 1]; i++){
            tr.appendChild(tabTh[select2.selectedIndex - 1][i]);
            }
            table.appendChild(tr);
            div3.appendChild(table);
            if(tableTr[select2.selectedIndex] !== undefined){
            let table1 = document.createElement("table");
            for(let i = 0; i<tableTr[select2.selectedIndex].length; i++){
                let tr1 = document.createElement("tr");
               let  x = tableTr[select2.selectedIndex][i];
               for(let j = 0; j <num[select2.selectedIndex - 1]; j ++){
                   let td = document.createElement("td");
                   if( x.childNodes[j].innerHTML !== undefined){
                    td.innerHTML =  x.childNodes[j].innerHTML;}
                   tr1.appendChild(td);
               }table1.appendChild(tr1);
           }div4.appendChild(table1);
            }
}




