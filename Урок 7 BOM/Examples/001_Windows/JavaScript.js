
        window.onload = function () {

            document.getElementById("openButton").onclick = openButtonHandler;
            document.getElementById("closeButton").onclick = closeButtonHandler;

            var w;

            function openButtonHandler() {
                // первый параметр - html страница, которая будет загружена в новом окне.
                // второй параметр - имя окна
                // третий параметр - список дополнительных параметров (необязательный)
                w = window.open("window.html", 'Alex', "width=400,height=400,status=yes,resizable=no, toolbar=no");
                             
                w.window.onload = function ()
                {
                    w.document.getElementById("Enter").innerHTML = "!!!!!!";
                }

            }

            function closeButtonHandler() {
                w.close();
            }
            
        }
    