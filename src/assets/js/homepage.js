function validate() {
    let user = document.querySelector('#username');
    let pass = document.querySelector('#password');

    if (user.value.trim() == "" || pass.value.trim() == "") {
        alert("No blank allowed");
        return false;
    }
    else if (pass.value.trim().length < 8) {
        user.value = "";
        pass.value = "";
        pass.style.border = "2px solid red";
        alert("Invalid password");
        return false;
    }
    else {
        user.value = "";
        pass.value = "";
        return true;
    }

}

//document.querySelector('#button').addEventListener('onmouseover', over());
//document.querySelector('#button').addEventListener('onmouseout', out);

function over() {
    document.querySelector('#button').style.background = "#2d18a1";
}

function out() {
    document.querySelector('#button').style.background = "#3010e6";
}

function hower1() {
    document.querySelector('#joinNow').style.background = "#e6dddd";
}

function hower2() {
    document.querySelector('#joinNow').style.background = "white";
}
