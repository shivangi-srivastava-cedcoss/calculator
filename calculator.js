var var1="";
        var var0=0;
        var operator1='+';
        var result1;
		function calc(result)
        {
            frm.valuetocalc.value+=result;
            var1+=result;
            console.log(var1);
        }
        function resultCalc(operator2)
        {	
            document.getElementById('num').value='';
            switch(operator1)
            {
                
                case '+':
                    result1= Number(var0)+Number(var1);
                    document.getElementById('result').value=result1;
                    break;
                case '-':
                    result1= Number(var0)-Number(var1);
                    document.getElementById('result').value=result1;
                    break;
                case '*':
                    result1= Number(var0)*Number(var1);
                    document.getElementById('result').value=result1;
                    break;
                case '/':
					result1= Number(var0)/Number(var1);
					document.getElementById('result').value=result1;
					break;
				case '=':
					result1= Number(var0)+0;
					document.getElementById('result').value=result1;
					break;
            }
            operator1=operator2;
            var0=result1;
			var1="";
        }
		function back1() 
		{
			var value = frm.valuetocalc.value;
			frm.valuetocalc.value = value.substr(0, value.length - 1);
            var1=var1.substr(0,var1.length - 1);
            console.log(var1);
		}
		function Clear()
		{
			var0=0;
			var1='';
			result1='';
			operator1="+";
			document.getElementById('num').value=result1;
			document.getElementById('result').value=result1;
		}