    var span1 = document.getElementsByClassName("spanway")[0];
    var span2 = document.getElementsByClassName("spanway")[1];
    var span3 = document.getElementsByClassName("spanway")[2];



    function namee() {
        const name = document.getElementById("name");


        if (isFinite(name.value)) {
            span1.setAttribute("style", "display: inline;")
            name.value = "";

        } else {
            span1.setAttribute("style", "display: none;")
            console.log(name.value);
            window.name = name.value;
        }

    }

    function agge() {
        const age = document.getElementById("age");


        if (!isFinite(age.value)) {
            span2.setAttribute("style", "display: inline;")
            age.value = "";

        } else {
            span2.setAttribute("style", "display: none;")
            console.log(age.value);
            window.age = age.value;
        }

    }



    function emaiil() {
        const email = document.getElementById("email");
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var flage = re.test(email.value);
        if (flage != false) {

            span3.setAttribute("style", "display: none;")
            console.log(email.value);
            window.email = email.value;
        } else {
            span3.setAttribute("style", "display: inline;")
            email.value = "";
        }
    }

    function ok() {
        if (window.name == "" || window.age == "" || window.email == "") {
            alert("please fill info!")
        } else {
            var table = document.getElementById("table");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = window.name;
            cell2.innerHTML = window.age;
            cell3.innerHTML = window.email;
            window.name == "";
            window.age == "";
            window.email == "";
        }


    }