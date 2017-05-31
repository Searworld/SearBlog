
$(document).ready(function(){
          // 轮播图开始
   
         $('body').on('click','.dot a.dianji',function(){
              var index=$(this).index();
            $('.flexside ul li').eq(index).fadeIn().siblings().hide();
            $(this).addClass('current').siblings().removeClass('current');

         });

         $('body').on('click','.move_left',function(){
        	$('.dot .current').prev().click();

        });
         $('body').on('click','.move_right',function(){
        	$('.dot .current').next().click();
         });
          // 设置定时器
        var timer=null;
        function loop(){
            timer=setInterval(function(){
               if($('.dianji').index($('.dianji.current'))+1==$('.dianji').length)
               {
                $('.dianji').eq(0).click()
               }
                else{$('.dot .current').next().click() 
               }
            },3000)
         };

          $('.flexside').mouseover(function(){
            clearInterval(timer)
          }).mouseout(function(){
            loop()
          });
          // 轮播图结束



          $('body').on('click','.btn_left',function(){
            var i=$(this).index();
            $('.content_list_bottom ul li').eq(i).fadeIn().siblings().hide();
            $(this).addClass('btn_current').siblings().removeClass('btn_current')
        });
        var time="";
        function reserve(){
           time=setInterval(function(){
              if($('.btn_left').index($('.btn_current'))+1==$('.btn_left').length)
              {
                $('.btn_left').eq(0).click()
              }else{
                $('.btn_current').next().click()
              }
           },3000)
        };
        $('.content_list_bottom').mouseover(function(){
            clearInterval(time)
        }).mouseout(function(){
               reserve()
            
        });



         $('body').on('mouseover','.container_dian',function(){
          var x=$(this).index();
          $('.container1_r li').eq(x).fadeIn().siblings().hide();
          $(this).addClass('container1_current').siblings().removeClass('container1_current')

        });



          $('body').on('mouseover','.container_dian2',function(){
          var y=$(this).index();
          $('.container2_r li').eq(y).fadeIn().siblings().hide();
          $(this).addClass('container1_current').siblings().removeClass('container1_current')

        });


          $('body').on('mouseover','.container_dian3',function(){
          var z=$(this).index();
          $('.container3_r li').eq(z).fadeIn().siblings().hide();
          $(this).addClass('container1_current').siblings().removeClass('container1_current')

        });


             $('body').on('mouseover','.container_dian4',function(){
          var v=$(this).index();
          $('.container4_r li').eq(v).fadeIn().siblings().hide();
          $(this).addClass('container1_current').siblings().removeClass('container1_current')

        });

              $('body').on('mouseover','.container_dian5',function(){
              var w=$(this).index();
                $('.container5_r li').eq(w).fadeIn().siblings().hide();
               $(this).addClass('container1_current').siblings().removeClass('container1_current')

        });





          $('body').on('click','.btn2_left',function(){
            var i=$(this).index();
            $('.content2_list_bottom ul li').eq(i).fadeIn().siblings().hide();
            $(this).addClass('btn_current').siblings().removeClass('btn_current')
        });
        var time="";
        function reserve(){
           time=setInterval(function(){
              if($('.btn2_left').index($('.btn_current'))+1==$('.btn2_left').length)
              {
                $('.btn2_left').eq(0).click()
              }else{
                $('.btn_current').next().click()
              }
           },3000)
        };
        $('.content2_list_bottom').mouseover(function(){
            clearInterval(time)
        }).mouseout(function(){
               reserve()
          
        });
    

        $('body').on('click','.dian1',function(){
        var k=$(this).index();
        $('.seven1 li').eq(k).fadeIn().siblings().hide();
        $(this).addClass('seven_dot_current').siblings().removeClass('seven_dot_current');
        });
       $('body').on('click','.left1',function(){
         $('.dot1 a.seven_dot_current').prev().click()
       });
        $('body').on('click','.right1',function(){
         $('.dot1 a.seven_dot_current').next().click()
       });

         $('body').on('click','.dian2',function(){
        var b=$(this).index();
        $('.seven2 li').eq(b).fadeIn().siblings().hide();
        $(this).addClass('seven_dot_current').siblings().removeClass('seven_dot_current');
        });
       $('body').on('click','.left2',function(){
         $('.dot2 a.seven_dot_current').prev().click()
       });
        $('body').on('click','.right2',function(){
         $('.dot2 a.seven_dot_current').next().click()
       });

         $('body').on('click','.dian3',function(){
        var b=$(this).index();
        $('.seven3 li').eq(b).fadeIn().siblings().hide();
        $(this).addClass('seven_dot_current').siblings().removeClass('seven_dot_current');
        });
       $('body').on('click','.left3',function(){
         $('.dot3 a.seven_dot_current').prev().click()
       });
        $('body').on('click','.right3',function(){
         $('.dot3 a.seven_dot_current').next().click()
       });

         $('body').on('click','.dian4',function(){
        var b=$(this).index();
        $('.seven4 li').eq(b).fadeIn().siblings().hide();
        $(this).addClass('seven_dot_current').siblings().removeClass('seven_dot_current');
        });
       $('body').on('click','.left4',function(){
         $('.dot4 a.seven_dot_current').prev().click()
       });
        $('body').on('click','.right4',function(){
         $('.dot4 a.seven_dot_current').next().click()
       });
       

       $('body').on('mouseover','.shop',function(){
          $('.shop_list').show()
       });

       $('body').on('mouseout','.shop',function(){
          $('.shop_list').hide()
       });



       $('body').on('mouseover','.flexside_hover ul li',function(){
            var a=$(this).index();
              $('.flexside_hover_list ul li').eq(a).show().siblings().hide()
       })
   

        

       $('body').on('mouseover','.bar_list li',function(){
                var p=$(this).index();
               $('.bar_bottom li').eq(p).slideDown().siblings().hide()
      });

   




});
