$("form").submit(function (e){
    e.preventDefault()
    console.log("Submit")
    InsertArray()
    Blank()
})

let Billetter = [];
function InsertArray() {
    const Billett = {
        Film : $("#film").val(),
        Antall : $("#antall").val(),
        Fornavn : $("#fornavn").val(),
        Etternavn : $("#etternavn").val(),
        TelefonNr : $("#telefonnr").val(),
        Epost : $("#epost").val(),
    };
    for (const Key in Billett) {
        console.log(Billett[Key])
        if (Billett[Key] === 'undefined' || Billett[Key] === '') {
            alert("One of the inputs are undefined (Empty)");
            return;
        }
    }
    Billetter.push(Billett)
    InsertTable()
}

function InsertTable() {
    ClearTable();
    for (const Obj in Billetter) {
        let HTMLBuild = "";
        console.log("Run")
        if (Billetter.hasOwnProperty(Obj)) {
            let Keys = Object.keys(Billetter[Obj]);
            for (let i = 0; i < Keys.length; i++) {
                console.log(Billetter[Obj][Keys[i]]);
                HTMLBuild += "<td>" + Billetter[Obj][Keys[i]] + "</td>";
            }
        }
        HTMLBuild = "<tr>" + HTMLBuild + "</tr>";
        $("#allebilletter").append(HTMLBuild);
        $("#allebilletter tr:last").addClass("tableinsert");
    }






}

function ClearTable() {
    $(".tableinsert").remove();
}
function ClearArray() {
    Billetter = [];
}
function Blank() {
    $("form").find("Input").not('[type="submit"]').val("");
    $("form").children("Select").val("");
}