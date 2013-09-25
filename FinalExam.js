



//testing links yes or no 

// assign variable to links i am looking to check

		var link1clicked = false;
		var	link2clicked = false;
		var link1 = document.getElementById("agreeLink1");
		var link2 = document.getElementById("agreeLink2");
		
		function documentCheck1 ()
		{	
			link1clicked = true;
			console.log("test");
		}
		function documentCheck2 ()
		{	
			link2clicked = true;
		}
		link1.addEventListener("click", documentCheck1);
		link2.addEventListener("click", documentCheck2);
		
		
		// enables the radio buttons once page is scrolled to the bottom 
	function checkScrollHeight()
		{
			var agreement = document.getElementById("agreeScroll");
			if (agreement.scrollTop == (agreement.scrollHeight-agreement.offsetHeight))
			{
				document.getElementById("agree").disabled = false;
				document.getElementById("notagree").disabled = false;
				
			}
		}
		
		document.getElementById("agreeScroll").addEventListener("scroll", checkScrollHeight, false);
		
		//provides an alert everytime continue is clicked with either your cleared to continue or agreement was not accepted
		
		function continueBox () 
		{// if agree button is checked alert once continue is clicked
			if( document.getElementById("agree").checked )
			{
				alert("You are Clear to continue");
			}
			// if not agree button is checked alert once continue is clicked
			if( document.getElementById("notagree").checked )
			{
				alert("Agreement Not Accepted");
			}
			
		}
	document.getElementById("submitAgreement").addEventListener("click", continueBox );
