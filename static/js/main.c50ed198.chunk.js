(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{110:function(e,c,s){},112:function(e,c,s){},158:function(e,c,s){},159:function(e,c,s){},160:function(e,c,s){},161:function(e,c,s){},162:function(e,c,s){},163:function(e,c,s){},164:function(e,c,s){},165:function(e,c,s){},166:function(e,c,s){},168:function(e,c,s){"use strict";s.r(c);var i=s(1),t=s.n(i),a=s(23),r=s.n(a),n=(s(110),s(11)),l=s(201),o=s(193),d=s(194),j=s(195),x=s(196),p=s(197),h=s(202),b=s(198),m=(s(111),s(192)),O=(s(112),s(18)),g=s(39),u=s.n(g),A=(s(68),s(69),s(16)),v=(s(70),s(60)),f=s.n(v),y=s(52),N=s(72),k=s.n(N),w=s(89),S="GetcategorySuccess",C="Getcategoryrequest",B="Getcategoryfailure",L=s(133),T=s(2),I=function(){var e=Object(y.b)();Object(i.useEffect)((function(){e(function(){var e=Object(w.a)(k.a.mark((function e(c){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:C}),e.next=3,L.get("http://localhost:5000/category/getcategory").then((function(e){if(201===e.status){var s=e.data.category;c({type:S,payload:{category:s}})}else if(200===e.status){var i=e.data.message;c({type:B,payload:{message:i}})}}));case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}())}),[]);var c=Object(y.c)((function(e){return e.getcategory}));return Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:"highProduct",children:[Object(T.jsxs)("div",{className:"highProduct__top",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQCSURBVHgBzVjtWdswEL4Y/8dMEAUGaLpB2AAmIJmgdIK2E9ANSCconYB0AxaAiAmw//PR94zOPgs5lhvAvM+T2NKddK+k053kEQEHBwdzcnh4eFhZgAaEAXZ2dmaumF9fX1+kIHn09PR0Lkqj0WiFxyENiCRJfoPTVMrguEgwg5kr5/wHooYGBkg2ODESJf/lnhkNDEyWcBBONVEIdzESSx+AKD1zsDKzWPW7JE1T62vBlwcj22K70EvPsyo+MeSslrbd6lZoIzokqknC7h/Le3p/f5+jgh4fHw3KtyDL9fxuOZ5BNqd3AOwvOX7DFTO8c1WB325FlFQIUCgVQPIUjy/0DoAtnslTVb6jmqhNtbIsPbLCHj951/EMO3+x9DZgG1OOOlzACvMqss3CrW6JVJHkEQV9FA1/II0t6Q0A75rD9nlA1OCiN1NFFKMxNBAwKca95m7flEjZgff398sCBOXGasNkMlm/Yoq1Nzc3kzYhuyEm7FkRSFqUxn4dR4BXPgdwl8avlNXkbKTrG5uJs5QLDZvAS3JMW4B9MmLQhcr5DaLGi6ltyLESK9oCcKFWGQd5WXLSwZ//VLr6CJlJYPWzzUcNDYTQWZTRIDr0FYQhREGlQbSxmdQuNAhZawqfokTmY4Vws9AVuEJctsRkEyB4hH5nIvMjQklUn5rYX93SG2pHSDbHb+EZn1E8Mqon5krzIU1Udhqeh2IA9Sf4zbwOOTx91RXYqWfUfoaN0ofNv/gtfaKC1K9wflo2QBiZUcAwVJa6AnrfdMz7H32QX+vzRHDpFTLIpzg9TbmAmXiRoVjH/w5AHeDrBfo8krLa2RU4dku/3CeSj9HJJ3VKcmDOeFnkTq2PWZqo/g4AAsuubIZ+fqLNSYfOTFwOHCzV/l6UdYE2JUnnxMEEwDJx8o4sRs7w2G8XQK5kRrW9CxGVJbHr9XqChn8CHYqs/JoSkxxkqfH87NpaXwf9XGiZ7x4NomCvZ3MjeiYH49p0pmgJleDQ2B+JFoaOdx3IaXO8FbTeHnyoSZq4csNHm3n12ZljOpUBZh0kGZbiULi+x5pbY+mxMWQUtxQBNaBOojKoLqgsudew5Sl9oh7gq0sP9SJSzzouL32U6qXPnJKlOMQar8JMF9TgTaO9JyyBzGApAj0GFO1OSCB5yEZC26HP0kfptk1SG1FLEejjoz0+wIU/gvRR9uEv0ybEupNvW67NJVH/Y25MBulpPBoB2+WGTUO6fgU2whl2bYh8Hx+1fgX6vKRADFa3jFqX//g+HzLufYE2vpy6iVZy72wg74bqhFAE5BVS18kVDrfHrtFKhNgs3+nltWCljOdod+gMWr9ztGfZ1JeB1CJwn7oIyKuPHf8AMNUx5m4EnAcAAAAASUVORK5CYII=",alt:""}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Creamos"}),Object(T.jsx)("p",{children:"Disenamos nuestros muebles"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASSSURBVHgBxVg7dtpAFH1gemNvIODPOSmdFdiUqWy6dBZdOvAKgBUYVoBYAfYKwGUqO7WPjdwlldmA7dwr3nAGIqQRSMk9ZxgxGj1dvXm/mYKsQQWQDRAAkgMKUYOHh4cXHx8fI9kAeO52Op1eSMYoRQ2+vb2Vi8UiL/339/c7cQSeuUa3KzmgFHezUCjcYSV9cUS1Wm3jmcrx8fHJ4+Pjg2SIkmSPClbk/uDgIMB1Dytym4XdFiVjwEYfQK6BPsDfHsxhCpsfo11u6qBE5kSBGc0FDlUD4Sr+t9BXQNxX0iOSlpSI9Hp8uAehA75UmytIaEKSETJPYL8tXJ7SjlXuDT6ijw9LtOdYG+UyQmgg7lgblpSMJ3PSZ5DbRPOUdE22IQqtDp+ennxxBLz+zGUeSE9oryB5gXf4Ls9kbqN4+Qk8vpfkOJjXZo8I4RSn83AmoknHAeH7KG+nDxg7xbx7/E/MZHmFp6qGKLG83YSosmozwJwvuE+yI3xUO05u7l5PbUJWC+PnqkWD7vPzc0dtdUSTwVgHY11JS5QvTev11GhUeFK59PYBCVPrdsaiXaNr4vkbtAZuLSnon3p9qVQSBn9c+qtpFZpsgeyMZkHt4qNq9pw8vL687h483GMPspHLS1NAd4VGcxnbTpiH1zM8vaINjo6Ozsyg2iJTpx9XpIBsT51M7IiQefVEG0X3k8EcL/S0ippgPNT0Om3aYBYDwQZkjBkRcL2XlEKbaQoIzDde7/G/xstzTZW8P3Ep+VT7A/17RccqJry4DA2Ia5OVUKZVVB1yhiovUZtavIxp65BZpylwPMnruym9fhrx4gq60znvYBL3PG0a5MK9GvqaXVXllUJtMHZyKTtxk2hiIDfG5YzOtFr65VKU2PndpEuszHDdM0yfTLUyT6u1KDvOY89k8jsJUCvUpicxJNF1GC3QaqsZyYnopl7PFMj8jqGmxGgTJLm9Zh0wRGutI+lCtMzqRhwBzYVzuXRY+Qc9G/iLJCsoPQPw0PqIDK0k2aUIASwMwmywjddTDnvYnL/6DoYfXLJa6mraTMSCKJcYBBmzmEEC2QIaZkhkKV1qIB9ruedMkigawep1DA01l8AcBxQfRpvdKJJojTQkF0Qh8Fr7WlJQToISoekstMlswwJDs82XNOZkUKLNoD/hKdxq/ILQS5jEqaswLTyWig/LpGbrYqQTUXOBL361xhn/WMTSJGwiQZwwFh46Lyw+EH6aSjLYhmQomz/0Vl2WqollK4ZvEKBNdnZ2+lGndZDjs+YkKXw4V8IE8vo2JIkd/uzv75Mw7epzuVz+MVPg+pbjWrUHenLyDf33vb09D012d3d/c65+GLcRM42nHQ3+X8Hxl2yJxeYOy9RBF+ZltAnaC174SWOq2V6w+u7LvNC4pGmEQgqFCcZftIInSSaKoalLs8DSLtQ6EzpTcuYga4il5FjbXkrdCp8z/UVthSVDFNJMtrVuO4cSZrapSA4kiVREZU7qwhxOsAKXeXRYBPJNYqQLUhMlViJCGCV4hAMF30hO2IgoYZElybrLYex/hWa23PEH/EgkqptPU3kAAAAASUVORK5CYII=",alt:""}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Fabricamos"}),Object(T.jsx)("p",{children:"Directo desde la fabrica"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB7VhLUiNHEK0WIsK7aU5Ai2BvzQloTgBzAuAEg0+g1gkQJ5A4geSdd2h23qHZA+o5gds7L/j4PZGpSaqrWw0o8DhiMqKk6qrKrFevfpkVuVdIkiRxu93uPjw8HEZRtP34+NhFcSyJUiDlqCtQ96XVak2vr6+n7hUSvaTx7u5uSlDIHhkwTYWgJ9Dv55CmSo0AgrFkY2NjCDZSv1OUTcHUN3Q800Iw9gF/W6j7FXXU8Qczagp0JcCdnZ3P+BtYUEgX6GAC+1PXQDC+FECPkd3Df2Kqstvb2757DUCuM7A2NqwR2DmADQCs8Ntubm4maLtk6u7ubhZol4DdY2R7WsYZQDqpYjOqAJdgpJc6WhiYIX2yRsx6PKCKCwvbTwHqwm4S3z7bwdZ+CGQUABdD8cqAu0A6VTYIDN+9wHpcJQTBQS7XaqfTGaGfI+mHJOz7rLdKiKNoYMHN5/NjVcJ6PEMnl4Fp/4TUkbSF9JFlMrhcxw4mr2hD+6JttpF+u6g/K+GxH2DvGI2GOmIs4I6UxzIlXQ9YaT2GhHah2/OWzJItMHmltoXliQsxSCOa55ow5UM1QONkCOCz0GYJ4HNoNyIg6oq9LtJY67m+ZdA8os6snZY3ykQ+l2cUpoQjP/RGnrsAS5xCbgAXBpl7IFPYPtU6/J2rKdnpzwGi8LPmwdBIOk3wl2kfspOLALhE2Of/uIbJQkDmUtTTtlwuTlhE/cEzgAJE19dIGUJnmTZkvoI5rs+xsi/Td1nDJEGeyGcMYk5N+e9iI1X9BUAcyAqOI5kYe3tq9+bm5sIDlnD60cHc2zy6Iy9RP+Sx5DMqN5DOxHLmeGhrHpjShS3+wFDmvp/uhVFOAmWLkbvy/XqOjXMKWwPbqZE6G7kpT6y9tiDn2gkp1pU50eVV1dd7mUbBGM/SDOnA6FXacIGbCLofFv8wdihnnyqPkL6JJ6K7d4L8V1XGMsjdExvTVecg7HcFANdbYgZWsi9EHUmTAv2cRJiSR2PvNzAwEMPLQxtKJ1iDI7dGqbLvLbfvxwx3kIL7L4UXgF5/FHsO/uV+QGm5H1x+Anyr/H8A0gmtuj/fUwSDXrGONwndHF5NdHN4yfMizyV0fBdhsEVgeAxI7u/vh9ajb/Nqgke7Laf6AqR7fzmjo4qbw5krt4+QIGvLx9912jacXJfYay8gyxut7ddYVx9G6JbH4kCu9ZYBU3uwW+oTUtjIrwTQvhZg6md0HtWBfMmbSp3QlkaGvGLrXihqjxm6UZpn4OTWJNZTRx+1M1MLkCNTL1eCnJ57o0gQpi7VaNX7Tgmg754zfjBBTvYWkKKbySdfGvqrdNTlZ+CiUX2fLo97Drorx0/Vbp7Jc9okVCmB1VAdVPfkjO7bzVAlCwYZZtpQMMASI646z5kDYLh5aAsZMDFGkcBK68jcxybgKMtTMcBSAaMLI3TFnQlm0MHUmcBK3lSox2ffXM7NxAUCK+hmTZ5LSgAFpP8sVhJMf+lFDMfR2DDkiz54Dl5zTFW9D6ZgJUV2m98SzKRSzSezL9oWdWyTyWeONHVPN9McoL7mDV9hXwQwAPjZm2GV+C9T65CNJo2KovgnjmM+S2wJyF9sNVj8U55x/3Brln8BIksGYnsGAR8AAAAASUVORK5CYII=",alt:""}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Te ayudamos"}),Object(T.jsx)("p",{children:"Consultenos"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOpSURBVHgB7VjRUdtAEF0J/6NUgAz8BypAVBBTAVBBTAWYCsAVoFQAqcCmA/PNYCsVxCnAdt6z94xwdL6zpcTxDG/mRrrT+u7d7t7ungPJIQaCIOigxbJBjMfj0yzLuqYfLnxPNk2QCMMwyfdrS2RvxIHJZPIZm2oskf+KFkHuEXLP4p7vvEhJVpL9fr8lDsA7LgzJIvl6vc5FI2jm++vra+qa7+Dg4ARE48XxULYAHySrgtUnGY7EAfjaro88/Czymc+G2hICA1kBDvlbfL8VB7CZ4rllC2DVJKL+pTiA8MLgf26TV+1FaCm+P3nMd71SnERaSsUBupkhWSSPOMlFI7Qnn/kQJ8+3Nk7WpCIcHh4mi2MwcSQVoDKSINSRv4Sy5s58hEaj0U8pgVKaZM2Hw1PHa7xEbAi5npRAaXODQCaeGl0XHwVGVfhvSMK3WcGbkLWX/1ZZCLItvLOz08hnEWSfHk57F648NGP7+/vXeLRyP73AWIKwdgW5x8CMMhhjsmu0hH1cBwJZEyzLkLebeGXKtAV05nPeixLI3ltkhpA5Diw7YdnUHQwGpwUEqJ3EtjgmnRcdHsh0HraMmiMxLpMrTm4CLooBE2yNCQyBO2j0KkdwpXs5N4pGbfVoXq4ls2tzo2AjN/nLHIqNDq0KuTRUrUxB1ULwE6+gOtRULU/hS5DkeMGnJRjwjf/xSR/D+AW/Qy4TD9TgxNSk6Q91EdaG1NoRni3sKsP7D0wcm13jPS2YL5pxeTsUNug/FKjm6gPXxnm6qbWp40L4AY9TNc0Z3qeaA+kUrWl+RIKaaf4JQt11W0kmxrwkAWI8OEYrd7IhTOMk/LAJtfMvkwTdFrT4pL6UUaNwh3dlGPvYjOcS0sb8pTY4d0b6oXFkkHgwV1CShXnPFpw8XqH5hiMr5hlHtXbJE4xupP55rN8e8a3HkIAN8DDt+i6ADbalJN6lRWoNZmRc4wXqCO+3Jk7qQUllA/ijwGBAZZzTbpM3ONkwCqsgkJz7IJ53MPWRbBCFJBmWSFRm4YfBvgOiDakYmmadN8plfw70MMeVVigk+gAfTZFG2y8vL2vdWbQ6+kJ/hxK46TzBvZxcxOwGOVryl7Mco6l50hdSF9NkxicnkbeAnwcjBKNApPVkLPayzWCozVRGjA4Nr5pRzdJaoQRzge7UxXyMwc943lvyNxNBc6XCVgN8opmJ5okdxQHJUDM9yE2f/ONq8YqrJVwDrnBixrgB/M/+je+/Aam64DPE6kDzAAAAAElFTkSuQmCC",alt:""}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Enviamos"}),Object(T.jsx)("p",{children:"2/5 Dias de entrega"})]})]})]}),Object(T.jsxs)("div",{className:"highProduct__slider",children:[Object(T.jsx)("div",{children:Object(T.jsx)("h2",{children:"Productos de alta"})}),Object(T.jsx)("div",{className:"swiper__box",children:Object(T.jsx)(u.a,Object(O.a)(Object(O.a)({},{dots:!1,focusOnSelect:!0,infinite:!0,autoplay:!0,centerMode:!0,centerPadding:10,swipe:!1,autoplaySpeed:3e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{centerMode:!0,slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:780,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}}]}),{},{onChange:function(){return alert()},children:c.category.map((function(e){return Object(T.jsx)(A.c,{to:"/shop",children:Object(T.jsxs)("div",{style:{padding:"0px"},children:[Object(T.jsx)("img",{src:e.image,style:{width:"372px",height:"478px"}}),Object(T.jsx)("div",{style:{marginTop:"-160px",marginLeft:"20px",zIndex:10,position:"fixed",backgroundColor:"white",opacity:.9,width:"250px",height:"140px"},className:"d-flex"}),Object(T.jsxs)("div",{className:"d-flex xor",children:[Object(T.jsxs)("div",{className:"ninos",children:[Object(T.jsx)("p",{style:{fontSize:"21px",opacity:.7,marginTop:"-130px",position:"absolute",zIndex:12,marginLeft:"55px",color:"black"},children:"Categoria"}),Object(T.jsx)("p",{style:{fontSize:"35px",opacity:1,marginTop:"-110px",position:"absolute",zIndex:12,marginLeft:"55px",color:"black"},children:e.name})]}),Object(T.jsx)(A.b,{style:{marginTop:"-66px",marginLeft:"270px",padding:"10px",position:"absolute",backgroundColor:"#ff6606",paddingRight:"12px",color:"white"},children:Object(T.jsx)(f.a,{})})]})]})})}))}))}),Object(T.jsx)("div",{children:Object(T.jsx)(A.b,{className:"btn",children:"IR A LA TIENDA"})})]})]})})},E=s(63),M=s.n(E),U=s.p+"static/media/children.ec4f6dcd.png";var P=function(){return Object(T.jsxs)("div",{className:"container-fluid ml-0 mr-0 p-0",style:{marginTop:"70px"},children:[Object(T.jsx)("div",{className:"d-flex justify-content-lg-center",children:Object(T.jsxs)("h1",{className:"new",children:["Productos"," ",Object(T.jsx)("p",{className:"d-inline-block",style:{color:"#ff6606"},children:"nuevos"})]})}),Object(T.jsxs)("div",{className:"d-flex",style:{marginTop:"20px"},children:[Object(T.jsxs)("div",{className:"pro",children:[Object(T.jsxs)("h1",{className:"pro__title",children:["Escritorio ",Object(T.jsx)("br",{}),"Montessori"]}),Object(T.jsx)("p",{className:"pro__desc",children:"Simple y real. Todo tiene su raz\xf3n de ser."}),Object(T.jsx)(M.a,{rating:5,starDimension:"22px",starSpacing:"6px",starRatedColor:"#ff6606"}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)(A.c,{to:"#",className:"pro__but1",children:"COMPRAR"}),Object(T.jsx)(A.c,{to:"#",className:"pro__but2",children:"ANADIR"})]})]}),Object(T.jsx)("div",{className:"sli",children:Object(T.jsxs)(u.a,Object(O.a)(Object(O.a)({},{dots:!0,focusOnSelect:!0,infinite:!0,autoplay:!0,centerMode:!1,centerPadding:10,swipe:!1,autoplaySpeed:3e3,slidesToShow:2,slidesToScroll:1}),{},{children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:U,style:{width:"410px",height:"528px"}})}),Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:U,style:{width:"410px",height:"528px"}})}),Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:U,style:{width:"410px",height:"528px"}})})]}))})]})]})},D=(s(158),s(53)),q=s(54);var G=function(){return Object(T.jsxs)("div",{className:"container-fluid m-0 p-0",children:[Object(T.jsx)("div",{style:{marginTop:"80px"},children:Object(T.jsx)("div",{className:"d-flex justify-content-center",children:Object(T.jsxs)("h1",{className:"new",children:["Nuestro"," ",Object(T.jsx)("p",{className:"d-inline-block",style:{color:"#ff6606"},children:"blog"})]})})}),Object(T.jsx)("div",{style:{width:"95%",marginLeft:"50px",marginTop:"10px"},className:"topa",children:Object(T.jsxs)(u.a,Object(O.a)(Object(O.a)({},{dots:!1,focusOnSelect:!0,infinite:!0,autoplay:!1,centerMode:!1,swipe:!1,autoplaySpeed:3e3,slidesToShow:3,slidesToScroll:1}),{},{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938010/img1_uggyig.png"}),Object(T.jsx)("h4",{children:"Muebles pata tu felicidad"}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(D.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px"},children:"12-10-2021"}),Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(q.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px",marginLeft:"5px"},children:"John Doe"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938025/img2_w2w27a.png"}),Object(T.jsx)("h4",{children:"Muebles pata tu felicidad"}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(D.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px"},children:"12-10-2021"}),Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(q.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px",marginLeft:"5px"},children:"John Doe"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938033/img3_jiessv.png"}),Object(T.jsx)("h4",{children:"Muebles pata tu felicidad"}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(D.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px"},children:"12-10-2021"}),Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(q.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px",marginLeft:"5px"},children:"John Doe"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938033/img3_jiessv.png"}),Object(T.jsx)("h4",{children:"Muebles pata tu felicidad"}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(D.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px"},children:"12-10-2021"}),Object(T.jsx)("p",{style:{fontSize:"25px",color:"gray",marginLeft:"25px"},children:Object(T.jsx)(q.a,{})}),Object(T.jsx)("p",{style:{marginTop:"10px",fontSize:"17px",marginLeft:"5px"},children:"John Doe"})]})]})]}))})]})},J=s(30);var Q=function(){return Object(T.jsx)("div",{className:"container-fluid m-0 p-0",children:Object(T.jsxs)("div",{style:{marginTop:"50px"},children:[Object(T.jsx)("div",{className:"d-flex justify-content-center",children:Object(T.jsx)("h1",{className:"new",style:{fontSize:"60px",fontWeight:"800"},children:"#Mueblesquehacenclick"})}),Object(T.jsxs)("div",{style:{width:"99%",height:"600px",marginTop:"70px"},className:"d-flex",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944769/fur-1_xdxcjj.png",style:{marginLeft:"20px",width:"453px",height:"313px"}}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-2_x4zhyu.png",style:{marginLeft:"0px",width:"153px",height:"332px",marginTop:"10px"},className:"d-block"}),Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-3_fxjbyf.png",style:Object(J.a)({marginLeft:"0px",width:"304px",height:"242px",marginTop:"10px"},"marginLeft","16px"),className:"d-inline-block"})]})]}),Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-4_k333j4.png",style:{width:"297px",height:"394px",marginLeft:"15px",marginTop:"95px"}})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-5_o6qx2y.png",style:{width:"296px",height:"348px",marginLeft:"15px",marginTop:"20px"}}),Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-6_yb2nvi.png",style:{width:"235px",height:"435px",marginLeft:"15px",marginTop:"-65px"}})]}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-7_ijzviq.png",style:{width:"178px",height:"243px",marginLeft:"15px",marginTop:"15px"}}),Object(T.jsx)("img",{src:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-8_cjbek3.png",style:{width:"258px",height:"196px",marginLeft:"15px",marginTop:"15px"}})]})]})]})]})})},V=s(38),Y=s(35),z=s(206),H=s(66),R=s(95),X=s.n(R),K=s(96),Z=s.n(K),F=s(94),_=s.n(F),W=(s(159),function(){var e=Object(i.useState)(!1),c=Object(Y.a)(e,2),s=c[0],t=c[1],a=Object(i.useState)([]),r=Object(Y.a)(a,2),n=r[0],l=r[1],o=Object(i.useState)(""),d=Object(Y.a)(o,2),j=d[0],x=d[1],p=Object(H.b)({opacity:1,right:210,from:{opacity:0,right:-0}});Object(H.b)({opacity:0,from:{opacity:1},config:{delay:1e4}});return Object(T.jsxs)("div",{children:[!s&&Object(T.jsx)(H.a.div,{className:"chat__Box",style:p,onClick:function(){return t(!s)},children:Object(T.jsx)("div",{children:Object(T.jsx)(m.a,{children:Object(T.jsx)(_.a,{})})})}),s&&Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"messenger","data-aos":"fade-left","data-aos-duration":"500",children:[Object(T.jsxs)("div",{className:"messenger__top",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(z.a,{src:"https://image.shutterstock.com/image-photo/folded-hands-business-portrait-smiling-260nw-230293954.jpg"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Lorem Ipsum"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{}),Object(T.jsx)("p",{children:"En Linea"})]})]})]}),Object(T.jsx)(m.a,{onClick:function(){return t(!s)},children:Object(T.jsx)(X.a,{})})]}),Object(T.jsxs)("div",{className:"messenger__body",children:[Object(T.jsx)("span",{className:"message__ai",children:"lorem ipsum lorem ipsum"}),n.map((function(e){return Object(T.jsx)("span",{className:"message__user",children:e})})),Object(T.jsx)("p",{})]}),Object(T.jsx)("div",{className:"messenger__input",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("input",{value:j,type:"text",placeholder:"Escribe tu mensaje",onChange:function(e){return x(e.target.value)}}),Object(T.jsx)(m.a,{onClick:function(){var e=[].concat(Object(V.a)(n),[j]);l(e),x("")},children:Object(T.jsx)(Z.a,{})})]})})]})})]})});l.a.use([o.a,d.a,j.a,x.a,p.a]);var $=function(){return Object(T.jsxs)("div",{className:"container-fluid ml-0 mr-0 p-0",style:{marginTop:"100px",overflow:"hidden"},children:[Object(T.jsx)("div",{className:"landing",children:Object(T.jsx)("div",{className:"landing__slider",children:Object(T.jsx)(h.a,{spaceBetween:100,slidesPerView:1,navigation:!0,pagination:!0,autoplay:!0,delay:5e3,children:[{image1:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615743996/bg_1_n1oidj.png",image2:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615744015/bg_3_lnmdll.png"},{image1:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1613521847/black-clothing-girl-k7-1920x1080_lyau3n.jpg",image2:"https://res.cloudinary.com/dd77cqt5fs/image/upload/v1613603809/download_1_brxzrr.jpg"}].map((function(e,c){return Object(T.jsx)(b.a,{className:"slide",children:Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("img",{src:e.image1,style:{width:"350px",height:"557px"}}),Object(T.jsx)("img",{src:e.image2,style:{width:"1000px",height:"557px",marginLeft:"50px"}})]})})}))})})}),Object(T.jsx)("div",{className:"blurred-box",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:"Muebles que hacen"}),Object(T.jsx)("h2",{children:"click"}),Object(T.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt cumque temporibus fugit"}),Object(T.jsx)(m.a,{children:"Comprar ahora"})]})}),Object(T.jsx)("div",{className:"blurred-container",children:Object(T.jsx)("div",{className:"blurred-box-2",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Escritorio Montessori"}),Object(T.jsx)("p",{children:"Para tus ninos"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"$ 1990"}),Object(T.jsx)(A.b,{children:Object(T.jsx)(f.a,{})})]})]})})}),Object(T.jsx)(I,{}),Object(T.jsx)(P,{}),Object(T.jsx)(G,{}),Object(T.jsx)(Q,{}),Object(T.jsx)(W,{})]})},ee=(s(160),s(64)),ce=s.n(ee),se=s(97),ie=s.n(se);var te=function(){return Object(T.jsx)("div",{className:"container-fluid m-0 p-0 lll",children:Object(T.jsx)("div",{style:{width:"100%",height:"100px",backgroundColor:"#ff6606"},children:Object(T.jsxs)("div",{className:"d-flex",style:{width:"85%",marginLeft:"100.5px"},children:[Object(T.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"logo"}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"30px",marginTop:"37px"},children:"Inicio"}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"50px",marginTop:"37px"},children:"Tienda"}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"50px",marginTop:"37px"},children:"Nostoros"}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"50px",marginTop:"37px"},children:"Contacto"}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"50px",marginTop:"37px"},children:"Blog"}),Object(T.jsxs)("div",{className:"d-flex justify-content-center",style:{marginLeft:"200px"},children:[Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginTop:"37px"},children:"Ingresar"}),Object(T.jsx)(A.c,{className:"nav-links",style:{color:"white",marginLeft:"40px",marginTop:"37px"},to:"/login",children:"Registrarse"})]}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"auto",marginTop:"37px"},children:Object(T.jsx)(ce.a,{})}),Object(T.jsx)("h5",{className:"nav-links",style:{color:"white",marginLeft:"20px",marginTop:"37px"},children:Object(T.jsx)(ie.a,{})})]})})})};s(161);var ae=function(){return Object(T.jsx)("div",{className:"register",children:Object(T.jsxs)("div",{className:"form-box",children:[Object(T.jsx)("h1",{className:"form-title",children:"Para seguir, ingresa tu e-mail y contrase\xf1a"}),Object(T.jsxs)("div",{className:"form-container",children:[Object(T.jsxs)("form",{children:[Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputEmail1",className:"email-label",children:"Email"}),Object(T.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ingrese su email"})]}),Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputPassword1",className:"pass-label",children:"Contrase\xf1a"}),Object(T.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Ingrese su contrase\xf1a"})]}),Object(T.jsx)("button",{type:"submit",className:"form-button",children:"Ingresar"})]}),Object(T.jsx)(A.c,{to:"/register",className:"register-link",children:"CREAR CUENTA"})]})]})})},re=s(204),ne=s.p+"static/media/desk.66112a8c.png",le=[{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999},{productName:"Escritorio Montessori",review:5,img:ne,price:999}],oe=(s(162),function(e){var c=e.x;return Object(T.jsxs)("div",{className:"productCard",children:[Object(T.jsx)("img",{src:c.img,alt:""}),Object(T.jsx)(M.a,{rating:5,starRatedColor:"#ff6606",numberOfStars:5,name:"rating",starSpacing:"5px",starDimension:"20px"}),Object(T.jsx)("p",{children:c.productName}),Object(T.jsxs)("p",{children:["$",c.price]}),Object(T.jsx)("div",{children:Object(T.jsx)(A.b,{className:"btn__details",children:"DETALLES"})})]})}),de=(s(163),function(){return Object(T.jsxs)("div",{className:"allProduct",children:[Object(T.jsx)("div",{className:"allProduct__container",children:le.slice(0,6).map((function(e){return Object(T.jsx)(oe,{x:e})}))}),Object(T.jsx)("div",{className:"allProduct__pagination",children:Object(T.jsx)(re.a,{count:4})})]})}),je=[{img:s.p+"static/media/animation_bg_1.8b7f1fb5.png",text:"CREA"},{img:s.p+"static/media/animation_bg_2.a98374ee.png",text:"SUE\xd1A"},{img:s.p+"static/media/animation_bg_3.a98374ee.png",text:"VIVE"}],xe=s(199),pe=s(200),he=s(100),be=s.n(he),me=s(99),Oe=s.n(me),ge=s(205),ue=s(203),Ae=(s(164),Object(xe.a)({root:{Height:240,flexGrow:1,maxWidth:100,flexDirection:"row-reverse"}})),ve=function(){var e=Ae(),c=t.a.useState(!1),s=Object(Y.a)(c,2),i=s[0],a=s[1],r=function(e){a(e.target.checked)};return Object(T.jsxs)("div",{className:"sideBox",children:[Object(T.jsxs)("div",{className:"sideBox__top",children:[Object(T.jsx)("h2",{children:"Buscar"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("input",{type:"text",placeholder:"\xbfQu\xe9 buscas?"}),Object(T.jsx)(ce.a,{})]})]}),Object(T.jsxs)("div",{className:"sideBox__range",children:[Object(T.jsx)("h2",{children:"Rango de Precio"}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"M\xednimo"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"$"}),Object(T.jsx)("input",{type:"text",placeholder:"549"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"M\xe1ximo"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"$"}),Object(T.jsx)("input",{type:"text",placeholder:"549"})]})]})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{className:"h2",children:"Categor\xeda"}),Object(T.jsxs)(pe.a,{className:e.root,defaultCollapseIcon:Object(T.jsx)(Oe.a,{}),defaultExpandIcon:Object(T.jsx)(be.a,{}),children:[Object(T.jsxs)(ge.a,{nodeId:"1",label:"Muebles",children:[Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Escritorio"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Sofa"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Silla"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Biblioteca"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]})]}),Object(T.jsxs)(ge.a,{nodeId:"2",label:"Ni\xf1os",children:[Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Escritorio"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Sofa"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Silla"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Biblioteca"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]})]}),Object(T.jsxs)(ge.a,{nodeId:"3",label:"Mascotas",children:[Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Escritorio"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Sofa"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Silla"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Biblioteca"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]})]}),Object(T.jsxs)(ge.a,{nodeId:"4",label:"Decoracion",children:[Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Escritorio"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Sofa"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Silla"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Biblioteca"})]}),Object(T.jsxs)("div",{className:"checkBox__container",children:[Object(T.jsx)(ue.a,{checked:i,onChange:r,inputProps:{"aria-label":"primary checkbox"}}),Object(T.jsx)("p",{children:"Comoda"})]})]})]})]}),Object(T.jsxs)("div",{className:"sideBox__colorCheck",children:[Object(T.jsx)("h2",{className:"h2",children:"Color"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("input",{type:"checkbox",name:"",id:""})}),Object(T.jsx)("div",{children:Object(T.jsx)("input",{type:"checkbox",name:"",id:""})}),Object(T.jsx)("div",{children:Object(T.jsx)("input",{type:"checkbox",name:"",id:""})}),Object(T.jsx)("div",{children:Object(T.jsx)("input",{type:"checkbox",name:"",id:""})}),Object(T.jsx)("p",{children:"Todos"})]})]})]})},fe=(s(165),function(){var e=Object(i.useState)(0),c=Object(Y.a)(e,2),s=c[0],t=c[1];return setTimeout((function(){t(2===s?0:s+1)}),5e3),Object(T.jsxs)("div",{className:"shop",children:[Object(T.jsx)("div",{className:"shop__banner",style:{backgroundImage:"url(".concat(je[s].img,")")},children:Object(T.jsx)("div",{children:Object(T.jsx)("h2",{children:je[s].text})})}),Object(T.jsx)("div",{className:"shop__head",children:Object(T.jsx)("h2",{children:"Tienda de"})}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)("div",{style:{marginLeft:"50px"},children:Object(T.jsx)(ve,{})}),Object(T.jsx)("div",{children:Object(T.jsx)(de,{})})]})]})});s(166);var ye=function(){return Object(T.jsx)("div",{className:"register-container",children:Object(T.jsxs)("div",{className:"inner-box",children:[Object(T.jsx)("h1",{className:"register-login",children:"Completa tus datos"}),Object(T.jsxs)("form",{children:[Object(T.jsxs)("div",{className:"box",children:[Object(T.jsxs)("div",{className:"box1",children:[Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputEmail1",className:"email-label",children:"Nombre"}),Object(T.jsx)("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ingrese su nombre"})]}),Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputPassword1",className:"email-label",children:"Direcci\xf3n"}),Object(T.jsx)("input",{type:"text",class:"form-control",id:"exampleInputPassword1",placeholder:"Seleccione su pa\xeds"})]}),Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputEmail1",className:"email-label",children:"Email"}),Object(T.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ingrese su email"})]})]}),Object(T.jsxs)("div",{className:"box2",children:[Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputEmail1",className:"pass-label",children:"Apellido"}),Object(T.jsx)("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ingrese su apellido"})]}),Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputEmail1",className:"pass-label",children:"Regi\xf3n"}),Object(T.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Seleccione su regi\xf3n"})]}),Object(T.jsxs)("div",{class:"form-group",children:[Object(T.jsx)("label",{for:"exampleInputPassword1",className:"pass-label",children:"Direcci\xf3n"}),Object(T.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Ingrese su contrase\xf1a"})]})]})]}),Object(T.jsxs)("div",{className:"d-flex mainbox",children:[Object(T.jsx)("input",{type:"checkbox",className:"check"}),Object(T.jsx)("label",{className:"lable",children:"Acepto los t\xe9rminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaraci\xf3n de Privacidad"})]}),Object(T.jsx)("div",{children:Object(T.jsx)(A.c,{to:"#",className:"form-link",children:"CONTINUAR"})})]})]})})};var Ne=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(te,{}),Object(T.jsxs)(n.c,{children:[Object(T.jsx)(n.a,{exact:!0,path:"/",component:$}),Object(T.jsx)(n.a,{exact:!0,path:"/shop",component:fe}),Object(T.jsx)(n.a,{exact:!0,path:"/login",component:ae}),Object(T.jsx)(n.a,{exact:!0,path:"/register",component:ye})]})]})},ke=(s(167),s(34)),we=s(101),Se=s(102),Ce={message:"",error:null,loading:!1,category:[]},Be=Object(ke.combineReducers)({getcategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case C:e=Object(O.a)(Object(O.a)({},e),{},{loading:!0});break;case S:e=Object(O.a)(Object(O.a)({},e),{},{loading:!1,category:c.payload.category});break;case B:e=Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:c.payload.message})}return e}}),Le=Object(ke.createStore)(Be,Object(we.composeWithDevTools)(Object(ke.applyMiddleware)(Se.a)));r.a.render(Object(T.jsx)(y.a,{store:Le,children:Object(T.jsx)(A.a,{children:Object(T.jsx)(Ne,{})})}),document.getElementById("root"))},70:function(e,c,s){}},[[168,1,2]]]);
//# sourceMappingURL=main.c50ed198.chunk.js.map