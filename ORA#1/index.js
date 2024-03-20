document.getElementById("editButton").onclick = function () { editClick()};
document.getElementById("saveButton").onclick = function () { saveClick() };
document.getElementById("cancelButton").onclick = function () { cancelClick() };
document.getElementById("imageChangeButton").onclick = function () { editImage() };

var disabledElements = document.querySelectorAll('.disable');

var imageBackup;

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
    disabledElements.forEach(function(element) {
        element.style.display = 'none';
    });

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
    disabledElements.forEach(function(element) {
        element.style.display = "";
    });
    document.getElementById("editButtonDiv").style.display = "none";
    document.getElementById("editButton").style.display = "";
    document.getElementById("imageChangeButton").style.display = "none";

    // Data editer
    ChangeEditorDisplay(true);

    // Data holder
    ChangeHolderDisplay(false);

    // Save Information
    document.getElementById("mssv").innerHTML = document.getElementById("mssvEdit").value;
    document.getElementById("fullname").innerHTML = document.getElementById("fullnameEdit").value;
    document.getElementById("yearEnter").innerHTML = document.getElementById("yearEnterEdit").value;
    document.getElementById("trainType").innerHTML = document.getElementById("trainTypeEdit").options[document.getElementById("trainTypeEdit").selectedIndex].innerHTML;
    document.getElementById("program").innerHTML = document.getElementById("programEdit").value;
    document.getElementById("manageschool").innerHTML = document.getElementById("manageschoolEdit").options[document.getElementById("manageschoolEdit").selectedIndex].innerHTML;
    document.getElementById("studystate").innerHTML = document.getElementById("studystateEdit").options[document.getElementById("studystateEdit").selectedIndex].innerHTML;
    document.getElementById("gender").innerHTML = document.getElementById("genderEdit").options[document.getElementById("genderEdit").selectedIndex].innerHTML;
    document.getElementById("classes").innerHTML = document.getElementById("classesEdit").value;
    document.getElementById("course").innerHTML = document.getElementById("courseEdit").value;
    document.getElementById("email").innerHTML = document.getElementById("emailEdit").value;
}

function cancelClick() {
    disabledElements.forEach(function(element) {
        element.style.display = "";
    });
    document.getElementById("editButtonDiv").style.display = "none";
    document.getElementById("editButton").style.display = "";
    document.getElementById("imageChangeButton").style.display = "none";
    document.getElementById("studentImage").src = imageBackup;

    // Data editer
    ChangeEditorDisplay(true);

    // Data holder
    ChangeHolderDisplay(false);
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