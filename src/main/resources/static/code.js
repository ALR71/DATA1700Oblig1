const form = $("form");
form.submit(function (e){
    e.preventDefault()
    console.log("Submit")
    InsertArray()
    Blank()
})
//Initialize array
let Billetter = [];
function InsertArray() {
    //Grabs all the necessary values from the HTML through the ID's and inserts them inside "Billett" with the corresponding key name.
    const Billett = {
        Film : $("#film").val(),
        Antall : $("#antall").val(),
        Fornavn : $("#fornavn").val(),
        Etternavn : $("#etternavn").val(),
        TelefonNr : $("#telefonnr").val(),
        Epost : $("#epost").val(),
    };
    //Iterates through the available keys and checks whether they are null or undefined
    for (const Key in Billett) {
        console.log(Billett[Key])
        if (Billett[Key] === 'undefined' || Billett[Key] === '') {
            alert("One of the inputs are undefined (Empty)");
            return;
        }
    }
    //Inserts the "Billett" Object inside the array "Billetter"
    Billetter.push(Billett)
    /*We don't pass it through the function below, because Billetter array is global,
    which we use frequently to update the table when new objects are inserted.*/
    InsertTable()
}

function InsertTable() {
    /*We insert all Billetter into the table and do a complete refresh,
    so we clear the entire HTML inserted table with the "ClearTable" function.*/
    ClearTable();

    /* We go through all objects within Billetter and then iterate through their keys and build the HTML string
    We then append it to the table in HTML with the id "#allebilletter" and since append inserts it at the end
    I give the class with the jquery selector tr:last, whilst being a child of "#allebilletter"*/

    for (const Obj in Billetter) {
        let HTMLBuild = "";
            let Keys = Object.keys(Billetter[Obj]);
            for (let i = 0; i < Keys.length; i++) {
                console.log(Billetter[Obj][Keys[i]]);
                HTMLBuild += "<td>" + Billetter[Obj][Keys[i]] + "</td>";
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
    form.find("Input").not('[type="submit"]').val("");
    form.children("Select").val("");
}