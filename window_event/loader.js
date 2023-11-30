/* loader java script when window in  onload events*/
    
        var my;
        function mainfunction()
        {
            my=setTimeout("test()",2000);
        }

        function test()
        {
            document.getElementById("mainfunction").style="display:block";
            document.getElementById("loader").style="display:none";
            
        }
    

        var my1;
        function mainfunction1()
        {
            my1=setTimeout("test1()",1000);
        }

        function test1()
        {
            document.getElementById("mainfunction1").style="display:block";
            document.getElementById("loader_page").style="display:none";
            
        }
    