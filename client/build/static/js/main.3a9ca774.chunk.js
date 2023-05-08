(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(53),i=n.n(a),s=(n(91),n(7)),o=n(19),l=n(6),j=n(83),d=n(113),u=n(115),b=n(112),O=n(81),h=n(18),p=n(79),m=n(16),f="UPDATE_PRODUCTS",x="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",v="REMOVE_FROM_CART",y="UPDATE_CART_QUANTITY",w="TOGGLE_CART",_="UPDATE_CATEGORIES",k="UPDATE_CURRENT_CATEGORY",N={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""};var C=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(s.a)(Object(s.a)({},e),{},{products:Object(m.a)(t.products)});case x:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(m.a)(e.cart),[t.product])});case g:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),Object(m.a)(t.products))});case y:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case v:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(m.a)(t.categories)});case k:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}})),S=C;function T(e,t){return 1===t?e:e+"s"}function E(e,t,n){return new Promise((function(c,r){var a,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,i=a.transaction(e,"readwrite"),s=i.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){a.close()}}}))}var A=n(2);var I,$,D,Q,P,R=function(e){var t=Object(h.b)(),n=Object(h.c)((function(e){return e})),c=e.image,r=e.name,a=e._id,i=e.price,l=e.quantity,j=n.cart;return Object(A.jsxs)("div",{className:"card px-1 py-1",children:[Object(A.jsxs)(o.b,{to:"/products/".concat(a),children:[Object(A.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(A.jsx)("p",{children:r})]}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{children:[l," ",T("item",l)," in stock"]}),Object(A.jsxs)("span",{children:["$",i]})]}),Object(A.jsx)("button",{onClick:function(){var n=j.find((function(e){return e._id===a}));n?(t({type:y,_id:a,purchaseQuantity:parseInt(n.purchaseQuantity)+1}),E("cart","put",Object(s.a)(Object(s.a)({},n),{},{purchaseQuantity:parseInt(n.purchaseQuantity)+1}))):(t({type:x,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),E("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},F=n(84),U=n(32),L=n(114),q=Object(L.a)(I||(I=Object(U.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),W=Object(L.a)($||($=Object(U.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),B=(Object(L.a)(D||(D=Object(U.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(L.a)(Q||(Q=Object(U.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),G=Object(L.a)(P||(P=Object(U.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),Y=n.p+"static/media/spinner.7e729fec.gif";var H=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=t.currentCategory,r=Object(F.b)(q),a=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(e({type:f,products:i.products}),i.products.forEach((function(e){E("products","put",e)}))):a||E("products","get").then((function(t){e({type:f,products:t})}))}),[i,a,e]),Object(A.jsxs)("div",{className:"my-2",children:[Object(A.jsx)("h2",{children:"Our Products:"}),t.products.length?Object(A.jsx)("div",{className:"flex-row",children:(n?t.products.filter((function(e){return e.category._id===n})):t.products).map((function(e){return Object(A.jsx)(R,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(A.jsx)("h3",{children:"You haven't added any products yet!"}),a?Object(A.jsx)("img",{src:Y,alt:"loading"}):null]})};var M=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})).categories,n=Object(F.b)(B),r=n.loading,a=n.data;return Object(c.useEffect)((function(){a?(e({type:_,categories:a.categories}),a.categories.forEach((function(e){E("categories","put",e)}))):r||E("categories","get").then((function(t){e({type:_,categories:t})}))}),[a,r,e]),Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Choose a Category:"}),t.map((function(t){return Object(A.jsx)("button",{onClick:function(){var n;n=t._id,e({type:k,currentCategory:n})},children:t.name},t._id)}))]})},J=n(8),z=n(15),V=n(10),K=n(80),X=n(108),Z=function(e){var t=e.item,n=Object(h.b)();return Object(A.jsxs)("div",{className:"flex-row",children:[Object(A.jsx)("div",{children:Object(A.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{children:[t.name,", $",t.price]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:"Qty:"}),Object(A.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:v,_id:t._id}),E("cart","delete",Object(s.a)({},t))):(n({type:y,_id:t._id,purchaseQuantity:parseInt(c)}),E("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(A.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:v,_id:e._id}),E("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ee=n(28),te=n(27),ne=n(68),ce=n.n(ne),re=new(function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,[{key:"getProfile",value:function(){return ce()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ce()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ae=(n(101),Object(K.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ie=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=Object(X.a)(W),r=Object(V.a)(n,2),a=r[0],i=r[1].data;function s(){e({type:w})}return Object(c.useEffect)((function(){i&&ae.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(c.useEffect)((function(){function n(){return(n=Object(z.a)(Object(J.a)().mark((function t(){var n;return Object(J.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("cart","get");case 2:n=t.sent,e({type:g,products:Object(m.a)(n)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){n.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?Object(A.jsxs)("div",{className:"cart",children:[Object(A.jsx)("div",{className:"close",onClick:s,children:"[close]"}),Object(A.jsx)("h2",{children:"Shopping Cart"}),t.cart.length?Object(A.jsxs)("div",{children:[t.cart.map((function(e){return Object(A.jsx)(Z,{item:e},e._id)})),Object(A.jsxs)("div",{className:"flex-row space-between",children:[Object(A.jsxs)("strong",{children:["Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),re.loggedIn()?Object(A.jsx)("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),a({variables:{products:e}})},children:"Checkout"}):Object(A.jsx)("span",{children:"(log in to check out)"})]})]}):Object(A.jsxs)("h3",{children:[Object(A.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(A.jsx)("div",{className:"cart-closed",onClick:s,children:Object(A.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},se=function(){return Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(M,{}),Object(A.jsx)(H,{}),Object(A.jsx)(ie,{})]})};var oe=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e})),n=Object(l.p)().id,r=Object(c.useState)({}),a=Object(V.a)(r,2),i=a[0],j=a[1],d=Object(F.b)(q),u=d.loading,b=d.data,O=t.products,p=t.cart;return Object(c.useEffect)((function(){O.length?j(O.find((function(e){return e._id===n}))):b?(e({type:f,products:b.products}),b.products.forEach((function(e){E("products","put",e)}))):u||E("products","get").then((function(t){e({type:f,products:t})}))}),[O,b,u,e,n]),Object(A.jsxs)(A.Fragment,{children:[i&&p?Object(A.jsxs)("div",{className:"container my-1",children:[Object(A.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(A.jsx)("h2",{children:i.name}),Object(A.jsx)("p",{children:i.description}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Price:"}),"$",i.price," ",Object(A.jsx)("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(e({type:y,_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),E("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:x,product:Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})}),E("cart","put",Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(A.jsx)("button",{disabled:!p.find((function(e){return e._id===i._id})),onClick:function(){e({type:v,_id:i._id}),E("cart","delete",Object(s.a)({},i))},children:"Remove from Cart"})]}),Object(A.jsx)("img",{src:"/images/".concat(i.image),alt:i.name})]}):null,u?Object(A.jsx)("img",{src:Y,alt:"loading"}):null,Object(A.jsx)(ie,{})]})};var le,je,de,ue=function(e){var t=e.children;return Object(A.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},be=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(ue,{children:[Object(A.jsx)("h1",{children:"404 Page Not Found"}),Object(A.jsx)("h1",{children:Object(A.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},Oe=n(13),he=n(109),pe=Object(L.a)(le||(le=Object(U.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),me=Object(L.a)(je||(je=Object(U.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),fe=Object(L.a)(de||(de=Object(U.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var xe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(V.a)(t,2),r=n[0],a=n[1],i=Object(he.a)(pe),l=Object(V.a)(i,2),j=l[0],d=l[1].error,u=function(){var e=Object(z.a)(Object(J.a)().mark((function e(t){var n,c;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,re.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(Oe.a)({},n,c)))};return Object(A.jsxs)("div",{className:"container my-1",children:[Object(A.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(A.jsx)("h2",{children:"Login"}),Object(A.jsxs)("form",{onSubmit:u,children:[Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(A.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(A.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),d?Object(A.jsx)("div",{children:Object(A.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(A.jsx)("div",{className:"flex-row flex-end",children:Object(A.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ge=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(V.a)(t,2),r=n[0],a=n[1],i=Object(he.a)(fe),l=Object(V.a)(i,1)[0],j=function(){var e=Object(z.a)(Object(J.a)().mark((function e(t){var n,c;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,re.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(Oe.a)({},n,c)))};return Object(A.jsxs)("div",{className:"container my-1",children:[Object(A.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(A.jsx)("h2",{children:"Signup"}),Object(A.jsxs)("form",{onSubmit:j,children:[Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(A.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(A.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(A.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(A.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(A.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(A.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(A.jsx)("div",{className:"flex-row flex-end",children:Object(A.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ve=function(){return Object(A.jsxs)("header",{className:"flex-row px-1",children:[Object(A.jsx)("h1",{children:Object(A.jsxs)(o.b,{to:"/",children:[Object(A.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(A.jsx)("nav",{children:re.loggedIn()?Object(A.jsxs)("ul",{className:"flex-row",children:[Object(A.jsx)("li",{className:"mx-1",children:Object(A.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(A.jsx)("li",{className:"mx-1",children:Object(A.jsx)("a",{href:"/",onClick:function(){return re.logout()},children:"Logout"})})]}):Object(A.jsxs)("ul",{className:"flex-row",children:[Object(A.jsx)("li",{className:"mx-1",children:Object(A.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(A.jsx)("li",{className:"mx-1",children:Object(A.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var ye=function(){var e=Object(he.a)(me),t=Object(V.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(z.a)(Object(J.a)().mark((function e(){var n,c,r,a;return Object(J.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){E("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(A.jsx)("div",{children:Object(A.jsxs)(ue,{children:[Object(A.jsx)("h1",{children:"Success!"}),Object(A.jsx)("h2",{children:"Thank you for your purchase!"}),Object(A.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var we=function(){var e,t=Object(F.b)(G).data;return t&&(e=t.user),Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"container my-1",children:[Object(A.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(A.jsxs)("div",{className:"my-2",children:[Object(A.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(A.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,r=e.name,a=e.price;return Object(A.jsxs)("div",{className:"card px-1 py-1",children:[Object(A.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(A.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(A.jsx)("p",{children:r})]}),Object(A.jsx)("div",{children:Object(A.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})};var _e=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("h1",{children:"THIS IS A TEST"})})},ke=Object(j.a)({uri:"/graphql"}),Ne=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Ce=new d.a({link:Ne.concat(ke),cache:new u.a});var Se=function(){return Object(A.jsx)(b.a,{client:Ce,children:Object(A.jsx)(o.a,{children:Object(A.jsx)("div",{children:Object(A.jsxs)(h.a,{store:S,children:[Object(A.jsx)(ve,{}),Object(A.jsxs)(l.c,{children:[Object(A.jsx)(l.a,{path:"/",element:Object(A.jsx)(se,{})}),Object(A.jsx)(l.a,{path:"/login",element:Object(A.jsx)(xe,{})}),Object(A.jsx)(l.a,{path:"/signup",element:Object(A.jsx)(ge,{})}),Object(A.jsx)(l.a,{path:"/success",element:Object(A.jsx)(ye,{})}),Object(A.jsx)(l.a,{path:"/test",element:Object(A.jsx)(_e,{})}),Object(A.jsx)(l.a,{path:"/orderHistory",element:Object(A.jsx)(we,{})}),Object(A.jsx)(l.a,{path:"/products/:id",element:Object(A.jsx)(oe,{})}),Object(A.jsx)(l.a,{path:"*",element:Object(A.jsx)(be,{})})]})]})})})})},Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(Se,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()},91:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.3a9ca774.chunk.js.map