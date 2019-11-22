//load function
function onload() {

    //HEADER CLOCK (update function to refresh found from https://codepen.io/gab/pen/KLhgr)

    function update() {
        document.getElementById("currentDay").innerHTML = (moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    } setInterval(update, 1000);


    //INPUT BOX TIME-DEPENDANT COLOR CHANGE


    //to test background change function: uncomment line 15 and comment lines 18
    //let hourNum = 11;

    //hourNum generated off of moment.js 24 hour time
    let hourNum = (moment().format('HH'));
    console.log(hourNum);

    //red (PAST HOURS)
    if (hourNum > 9) { document.getElementById("9AM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 10) { document.getElementById("10AM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 11) { document.getElementById("11AM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 12) { document.getElementById("12PM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 13) { document.getElementById("1PM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 14) { document.getElementById("2PM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 15) { document.getElementById("3PM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 16) { document.getElementById("4PM").setAttribute("class", "form-control userInput bg-danger") };
    if (hourNum > 17) { document.getElementById("5PM").setAttribute("class", "form-control userInput bg-danger") };

    //yellow (CURRENT HOUR)
    if (hourNum === 9) { document.getElementById("9AM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 10) { document.getElementById("10AM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 11) { document.getElementById("11AM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 12) { document.getElementById("12PM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 13) { document.getElementById("1PM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 14) { document.getElementById("2PM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 15) { document.getElementById("3PM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 16) { document.getElementById("4PM").setAttribute("class", "form-control userInput bg-warning") };
    if (hourNum === 17) { document.getElementById("5PM").setAttribute("class", "form-control userInput bg-warning") };

    //GREEN (FUTURE HOURS)
    if (hourNum < 9) { document.getElementById("9AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 10) { document.getElementById("10AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 11) { document.getElementById("11AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 12) { document.getElementById("12PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 13) { document.getElementById("1PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 14) { document.getElementById("2PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 15) { document.getElementById("3PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 16) { document.getElementById("4PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum < 17) { document.getElementById("5PM").setAttribute("class", "form-control userInput bg-success") };

    //AFTER 5PM (COUNT ALL AS GREEN)
    if (hourNum > 18) { document.getElementById("9AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("10AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("11AM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("12PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("1PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("2PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("3PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("4PM").setAttribute("class", "form-control userInput bg-success") };
    if (hourNum > 18) { document.getElementById("5PM").setAttribute("class", "form-control userInput bg-success") };




    //INPUT BOX LOCAL STORAGES ON SAVE BUTTON CLICK AND ON LOAD

    //9 AM
    function A() {
        const outputStr = localStorage.getItem("input1") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("9AM").innerHTML = outputdata;
        console.log(outputdata);

        function AInput() {
            $("#saveBtn1").on("click", function () {
                console.log("button clicked");
                localStorage.setItem("input1", "") || "[]";
                let input = document.getElementById('9AM').value;
                const dataStr = localStorage.getItem("input1") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input1", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input1") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("9AM").innerHTML = outputdata;
                console.log(outputdata);
            });
        }
        AInput();

    } A();

    //10 AM

    function B() {
        const outputStr = localStorage.getItem("input2") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("10AM").innerHTML = outputdata;
        console.log(outputdata);

        function BInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input2", "") || "[]";
                let input = document.getElementById('10AM').value;
                const dataStr = localStorage.getItem("input2") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input2", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input2") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("10AM").innerHTML = outputdata;
                console.log(data);
            });
        }
        BInput();



    } B();

    //11AM

    function C() {
        const outputStr = localStorage.getItem("input3") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("11AM").innerHTML = outputdata;
        console.log(outputdata);

        function CInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input3", "") || "[]";
                let input = document.getElementById('11AM').value;
                const dataStr = localStorage.getItem("input3") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input3", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input3") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("11AM").innerHTML = outputdata;
                console.log(data);
            });
        }
        CInput();



    } C();

    //12PM

    function D() {
        const outputStr = localStorage.getItem("input4") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("12PM").innerHTML = outputdata;
        console.log(outputdata);

        function DInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input4", "") || "[]";
                let input = document.getElementById('12PM').value;
                const dataStr = localStorage.getItem("input4") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input4", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input4") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("12PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        DInput();



    } D();

    //1PM

    function E() {
        const outputStr = localStorage.getItem("input5") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("1PM").innerHTML = outputdata;
        console.log(outputdata);

        function EInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input5", "") || "[]";
                let input = document.getElementById('1PM').value;
                const dataStr = localStorage.getItem("input5") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input5", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input5") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("1PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        EInput();



    } E();

    //2PM

    function F() {
        const outputStr = localStorage.getItem("input6") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("2PM").innerHTML = outputdata;
        console.log(outputdata);

        function FInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input6", "") || "[]";
                let input = document.getElementById('2PM').value;
                const dataStr = localStorage.getItem("input6") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input6", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input6") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("2PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        FInput();



    } F();

    //3PM

    function G() {
        const outputStr = localStorage.getItem("input7") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("3PM").innerHTML = outputdata;
        console.log(outputdata);

        function GInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input7", "") || "[]";
                let input = document.getElementById('3PM').value;
                const dataStr = localStorage.getItem("input7") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input7", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input7") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("3PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        GInput();



    } G();

    //4PM

    function H() {
        const outputStr = localStorage.getItem("input8") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("4PM").innerHTML = outputdata;
        console.log(outputdata);

        function HInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input8", "") || "[]";
                let input = document.getElementById('4PM').value;
                const dataStr = localStorage.getItem("input8") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input8", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input8") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("4PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        HInput();



    } H();

    //5PM


    function I() {
        const outputStr = localStorage.getItem("input9") || "[]";
        const outputdata = JSON.parse(outputStr);
        document.getElementById("5PM").innerHTML = outputdata;
        console.log(outputdata);

        function IInput() {
            $("#saveBtn2").on("click", function () {
                console.log("button clicked")
                localStorage.setItem("input9", "") || "[]";
                let input = document.getElementById('5PM').value;
                const dataStr = localStorage.getItem("input9") || "[]";
                const data = JSON.parse(dataStr);
                data.push(input);
                localStorage.setItem("input9", JSON.stringify(data));

                //OUTPUT
                const outputStr = localStorage.getItem("input9") || "[]";
                const outputdata = JSON.parse(outputStr);
                document.getElementById("5PM").innerHTML = outputdata;
                console.log(data);
            });
        }
        IInput();
    } I();
}
onload();
