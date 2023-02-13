/**
 * prdNoCheck.js
 */
 
  $(document).ready(function() {
  	$('#prdNoCheckBtn').on('click', function() {
  		event.preventDefault();
  		
  		var prdNo = $('#prdNo').val();
  		
  		$.ajax({
  		 	type:"post",
 			url:"prdNoCheck",
 			data:{"prdNo":prdNo},
 			dataType:"text",
 			success:function(result){
 				if(result == "NO")
 					alert("중복 된 상품 번호입니다");
 				else
 					alert("중복 되지 않은 상품 번호입니다");
 			},
 			error:function(){
 				alert("실패");
 			},
 			complete:function(){
 				alert("작업 완료");
 			}
  		});
  	});
  });