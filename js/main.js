window.onload=function(){setTimeout(function(){$(".section__preloader").addClass("done")},600)},$(".btn").on("click",function(){$(".social__icon").toggleClass("active"),$(".social__title").toggleClass("active")}),$(".close-button").click(function(){$(".overlay").fadeOut(0),$(".message-block").fadeOut(0),$(".message-block .form-submit").fadeIn(),$(".agreement").fadeOut(),$(".form-message").fadeIn(),document.body.style.overflow="visible"}),$(".btn__click").click(function(){$(".overlay").css("display","block"),$(".message-block").fadeIn(),document.body.style.overflow="hidden"}),$(".btn__click").click(function(){$(".form-message input[name='type']").val("Обратный звонок"),$(".message-block .form-submit").fadeIn(),$(".message-block .submit-button").text("Отправить")}),$(".burger-menu").on("click",function(e){$(".burger-menu").toggleClass("burger-menu_active"),$(".nav__link ").toggleClass("nav__link-active")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwic2V0VGltZW91dCIsIiQiLCJhZGRDbGFzcyIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJjbGljayIsImZhZGVPdXQiLCJmYWRlSW4iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiY3NzIiwidmFsIiwidGV4dCIsImUiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxPQUFTLFdBQ1pDLFdBQVcsV0FDUEMsRUFBRSx1QkFBdUJDLFNBQVMsU0FDbkMsTUFNUEQsRUFBRSxRQUFRRSxHQUFHLFFBQVMsV0FDbEJGLEVBQUUsaUJBQWlCRyxZQUFZLFVBQy9CSCxFQUFFLGtCQUFrQkcsWUFBWSxZQU1wQ0gsRUFBRSxpQkFBaUJJLE1BQU0sV0FDckJKLEVBQUUsWUFBWUssUUFBUSxHQUN0QkwsRUFBRSxrQkFBa0JLLFFBQVEsR0FDNUJMLEVBQUUsK0JBQStCTSxTQUNqQ04sRUFBRSxjQUFjSyxVQUNoQkwsRUFBRSxpQkFBaUJNLFNBQ25CQyxTQUFTQyxLQUFLQyxNQUFNQyxTQUFXLFlBRW5DVixFQUFFLGVBQWVJLE1BQU0sV0FDbkJKLEVBQUUsWUFBWVcsSUFBSSxVQUFXLFNBQzdCWCxFQUFFLGtCQUFrQk0sU0FDcEJDLFNBQVNDLEtBQUtDLE1BQU1DLFNBQVcsV0FFbkNWLEVBQUUsZUFBZUksTUFBTSxXQUNuQkosRUFBRSxvQ0FBb0NZLElBQUksbUJBQzFDWixFQUFFLCtCQUErQk0sU0FDakNOLEVBQUUsaUNBQWlDYSxLQUFLLGVBSTVDYixFQUFFLGdCQUFnQkUsR0FBRyxRQUFTLFNBQVNZLEdBQ25DZCxFQUFFLGdCQUFnQkcsWUFBWSxzQkFDOUJILEVBQUUsZUFBZUcsWUFBWSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc2VjdGlvbl9fcHJlbG9hZGVyJykuYWRkQ2xhc3MoJ2RvbmUnKTtcclxuICAgIH0sIDYwMClcclxufTtcclxuXHJcblxyXG5cclxuLyogc29jaWFsKi9cclxuJCgnLmJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnNvY2lhbF9faWNvbicpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJCgnLnNvY2lhbF9fdGl0bGUnKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbn0pO1xyXG4vKiBzb2NpYWwgZW5kKi9cclxuXHJcbi8qIGZvcm1zYWJtaXQqL1xyXG4kKFwiLmNsb3NlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoXCIub3ZlcmxheVwiKS5mYWRlT3V0KDApO1xyXG4gICAgJChcIi5tZXNzYWdlLWJsb2NrXCIpLmZhZGVPdXQoMCk7XHJcbiAgICAkKFwiLm1lc3NhZ2UtYmxvY2sgLmZvcm0tc3VibWl0XCIpLmZhZGVJbigpO1xyXG4gICAgJChcIi5hZ3JlZW1lbnRcIikuZmFkZU91dCgpO1xyXG4gICAgJChcIi5mb3JtLW1lc3NhZ2VcIikuZmFkZUluKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbn0pO1xyXG4kKFwiLmJ0bl9fY2xpY2tcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLm92ZXJsYXlcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgJChcIi5tZXNzYWdlLWJsb2NrXCIpLmZhZGVJbigpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbn0pO1xyXG4kKFwiLmJ0bl9fY2xpY2tcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmZvcm0tbWVzc2FnZSBpbnB1dFtuYW1lPSd0eXBlJ11cIikudmFsKFwi0J7QsdGA0LDRgtC90YvQuSDQt9Cy0L7QvdC+0LpcIik7XHJcbiAgICAkKFwiLm1lc3NhZ2UtYmxvY2sgLmZvcm0tc3VibWl0XCIpLmZhZGVJbigpO1xyXG4gICAgJChcIi5tZXNzYWdlLWJsb2NrIC5zdWJtaXQtYnV0dG9uXCIpLnRleHQoXCLQntGC0L/RgNCw0LLQuNGC0YxcIik7XHJcbn0pO1xyXG5cclxuLyogbW9iaWxlIG5hdmlnYXRpb24qL1xyXG4kKFwiLmJ1cmdlci1tZW51XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoXCIuYnVyZ2VyLW1lbnVcIikudG9nZ2xlQ2xhc3MoXCJidXJnZXItbWVudV9hY3RpdmVcIik7XHJcbiAgICAkKFwiLm5hdl9fbGluayBcIikudG9nZ2xlQ2xhc3MoXCJuYXZfX2xpbmstYWN0aXZlXCIpO1xyXG59KTsiXX0=
