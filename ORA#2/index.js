document.getElementById("editButton").onclick = function () { editClick()};
document.getElementById("saveButton").onclick = function () { saveClick() };
document.getElementById("cancelButton").onclick = function () { cancelClick() };
document.getElementById("resetButton").onclick = function () { resetClick() };
document.getElementById("imageChangeButton").onclick = function () { editImage() };

var imageBackup;

var myInfo = {};

function getInfoFromLabel(info) {
    info["fullname"] = document.getElementById("fullname").innerHTML;
    info["yearEnter"] = document.getElementById("yearEnter").innerHTML;
    info["trainType"] = document.getElementById("trainType").innerHTML;
    info["program"] = document.getElementById("program").innerHTML;
    info["manageschool"] = document.getElementById("manageschool").innerHTML;
    info["studystate"] = document.getElementById("studystate").innerHTML;
    info["gender"] = document.getElementById("gender").innerHTML;
    info["classes"] = document.getElementById("classes").innerHTML;
    info["course"] = document.getElementById("course").innerHTML;
    info["email"] = document.getElementById("email").innerHTML;
    info["studentImage"] = document.getElementById("studentImage").src;
    info["mssv"] = document.getElementById("mssv").innerHTML;
}

getInfoFromLabel(myInfo);

function saveInfoToLabel(info) {
    document.getElementById("mssv").innerHTML = info["mssv"];
    document.getElementById("fullname").innerHTML = info["fullname"];
    document.getElementById("yearEnter").innerHTML = info["yearEnter"];
    document.getElementById("trainType").innerHTML = info["trainType"];
    document.getElementById("program").innerHTML = info["program"];
    document.getElementById("manageschool").innerHTML = info["manageschool"];
    document.getElementById("studystate").innerHTML = info["studystate"];
    document.getElementById("gender").innerHTML = info["gender"];
    document.getElementById("classes").innerHTML = info["classes"];
    document.getElementById("course").innerHTML = info["course"];
    document.getElementById("email").innerHTML = info["email"];
    document.getElementById("studentImage").src = info["studentImage"];
}

function editImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        let files = input.files;
        document.getElementById("studentImage");
        if (files && files[0]) {
            let reader = new FileReader();
            reader.onload = function (event) {
                document.getElementById("studentImage").src = event.target.result;
            };
            reader.readAsDataURL(files[0]);
        }
    };
    input.click();
}

function editClick() {
    document.getElementById("editButtonDiv").style.display = "";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("imageChangeButton").style.display = "";
    imageBackup = document.getElementById("studentImage").src;

    // Data editer
    ChangeEditorDisplay(false);

    // Data holder
    ChangeHolderDisplay(true);

    // Insert Information to Editor
    document.getElementById("mssvEdit").value = document.getElementById("mssv").innerHTML;
    document.getElementById("fullnameEdit").value = document.getElementById("fullname").innerHTML;
    document.getElementById("yearEnterEdit").value = document.getElementById("yearEnter").innerHTML;
    document.getElementById("trainTypeEdit").selectedIndex = FindOption(document.getElementById("trainTypeEdit"), document.getElementById("trainType").innerHTML);
    document.getElementById("programEdit").value = document.getElementById("program").innerHTML;
    document.getElementById("manageschoolEdit").selectedIndex = FindOption(document.getElementById("manageschoolEdit"), document.getElementById("manageschool").innerHTML);
    document.getElementById("studystateEdit").selectedIndex = FindOption(document.getElementById("studystateEdit"), document.getElementById("studystate").innerHTML);
    document.getElementById("genderEdit").selectedIndex = FindOption(document.getElementById("genderEdit"), document.getElementById("gender").innerHTML);
    document.getElementById("classesEdit").value = document.getElementById("classes").innerHTML;
    document.getElementById("courseEdit").value = document.getElementById("course").innerHTML;
    document.getElementById("emailEdit").value = document.getElementById("email").innerHTML;
}

function saveClick() {
    document.getElementById("editButtonDiv").style.display = "none";
    document.getElementById("editButton").style.display = "";
    document.getElementById("imageChangeButton").style.display = "none";

    // Data editer
    ChangeEditorDisplay(true);

    // Data holder
    ChangeHolderDisplay(false);

    var info = {};

    // Get info from editor
    info["mssv"] = document.getElementById("mssvEdit").value;
    info["fullname"] = document.getElementById("fullnameEdit").value;
    info["yearEnter"] = document.getElementById("yearEnterEdit").value;
    info["trainType"] = document.getElementById("trainTypeEdit").options[document.getElementById("trainTypeEdit").selectedIndex].innerHTML;
    info["program"] = document.getElementById("programEdit").value;
    info["manageschool"] = document.getElementById("manageschoolEdit").options[document.getElementById("manageschoolEdit").selectedIndex].innerHTML;
    info["studystate"] = document.getElementById("studystateEdit").options[document.getElementById("studystateEdit").selectedIndex].innerHTML;
    info["gender"] = document.getElementById("genderEdit").options[document.getElementById("genderEdit").selectedIndex].innerHTML;
    info["classes"] = document.getElementById("classesEdit").value;
    info["course"] = document.getElementById("courseEdit").value;
    info["email"] = document.getElementById("emailEdit").value;
    info["studentImage"] = document.getElementById("studentImage").src;

    // Save info to label
    saveInfoToLabel(info);

    console.log(info);
}

function cancelClick() {
    var info = {};

    getInfoFromLabel(info);

    console.log(info);

    document.getElementById("editButtonDiv").style.display = "none";
    document.getElementById("editButton").style.display = "";
    document.getElementById("imageChangeButton").style.display = "none";
    document.getElementById("studentImage").src = imageBackup;

    // Data editer
    ChangeEditorDisplay(true);

    // Data holder
    ChangeHolderDisplay(false);
}

function resetClick() {
    saveInfoToLabel(myInfo);

    document.getElementById("editButtonDiv").style.display = "none";
    document.getElementById("editButton").style.display = "";
    document.getElementById("imageChangeButton").style.display = "none";

    ChangeEditorDisplay(true);
    ChangeHolderDisplay(false);

    console.log(myInfo);
}

function ChangeEditorDisplay(none) {
    document.getElementById("mssvEdit").style.display = none ? "none" : "";
    document.getElementById("fullnameEdit").style.display = none ? "none" : "";
    document.getElementById("yearEnterEdit").style.display = none ? "none" : "";
    document.getElementById("trainTypeEdit").style.display = none ? "none" : "";
    document.getElementById("programEdit").style.display = none ? "none" : "";
    document.getElementById("manageschoolEdit").style.display = none ? "none" : "";
    document.getElementById("studystateEdit").style.display = none ? "none" : "";
    document.getElementById("genderEdit").style.display = none ? "none" : "";
    document.getElementById("classesEdit").style.display = none ? "none" : "";
    document.getElementById("courseEdit").style.display = none ? "none" : "";
    document.getElementById("emailEdit").style.display = none ? "none" : "";
}

function ChangeHolderDisplay(none) {
    document.getElementById("mssv").style.display = none ? "none" : "";
    document.getElementById("fullname").style.display = none ? "none" : "";
    document.getElementById("yearEnter").style.display = none ? "none" : "";
    document.getElementById("trainType").style.display = none ? "none" : "";
    document.getElementById("program").style.display = none ? "none" : "";
    document.getElementById("manageschool").style.display = none ? "none" : "";
    document.getElementById("studystate").style.display = none ? "none" : "";
    document.getElementById("gender").style.display = none ? "none" : "";
    document.getElementById("classes").style.display = none ? "none" : "";
    document.getElementById("course").style.display = none ? "none" : "";
    document.getElementById("email").style.display = none ? "none" : "";
}

function FindOption(element, text) {
    var index = 0;
    for (; index < element.length; index++) {
        if (element.options[index].innerHTML === text) {
            break;
        }
    }
    return index;
}