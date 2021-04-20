(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{364:function(t,e,a){},365:function(t,e,a){},450:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(15),r=a.n(i),s=(a(364),a(365),a(292)),o=a(81),l=a(14),d=Object(s.a)((function(t){return{title:{flexGrow:1,marginTop:t.spacing(2)}}}));function j(){var t=d();return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{style:{textAlign:"left"},children:Object(l.jsx)("a",{href:"https://abdul-khalik.github.io/",children:"Kembali"})}),Object(l.jsx)(o.a,{variant:"h4",className:t.title,children:"Statistik Covid-19"})]})}var h=a(228),u=a.n(h),b=a(231),f=a(337),x=a(344),m=a(338),v=a.n(m),O=(a(387),function(){var t=Object(n.useState)({data:{},isLoading:!0}),e=Object(x.a)(t,2),a=e[0],c=e[1],i=function(){var t=Object(f.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(Object(b.a)(Object(b.a)({},a),{},{isLoading:!0})),t.next=4,v.a.get("https://covid19.mathdro.id/api");case 4:e=t.sent,c({data:e.data,isLoading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response.data);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var r=new Intl.NumberFormat("en");return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-4 my-2",children:Object(l.jsx)("div",{className:"card-body mx-auto",children:!a.isLoading&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h5",{className:"card-title text-dark text-center",children:"KASUS POSITIF"}),Object(l.jsx)("h2",{className:"card-title text-dark text-center",children:r.format(a.data.confirmed.value)})]})})}),Object(l.jsx)("div",{className:"col-sm-4 my-2",children:Object(l.jsx)("div",{className:"card-body mx-auto",children:!a.isLoading&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h5",{className:"card-title text-light text-center",children:"KASUS SEMBUH"}),Object(l.jsxs)("h2",{className:"card-title text-light text-center",children:[r.format(a.data.recovered.value)," "]})]})})}),Object(l.jsx)("div",{className:"col-sm-4 my-2",children:Object(l.jsx)("div",{className:"card-body mx-auto",children:!a.isLoading&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h5",{className:"card-title text-light text-center",children:"KASUS MENINGGAL"}),Object(l.jsxs)("h2",{className:"card-title text-light text-center",children:[r.format(a.data.deaths.value)," "]})]})})})]})})}),g=a(339),p=a(340),N=a(346),S=a(345),y=a(222),k=a.n(y),F=function(t){Object(N.a)(a,t);var e=Object(S.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).state={loading:!1,stats:[]},n.tableRef=c.a.createRef(),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://covid19.mathdro.id/api/confirmed").then((function(t){return t.json()})).then((function(e){t.setState({stats:e,loading:!1},(function(){return console.log(e)}))})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(l.jsx)(c.a.Fragment,{children:Object(l.jsx)(k.a,{style:{marginLeft:"10px",marginRight:"10px"},title:"Data Kasus Covid-19",columns:[{title:"Negara",field:"countryRegion"},{title:"Provinsi",field:"provinceState"},{title:"Total Kasus",field:"confirmed"},{title:"Total Meninggal",field:"deaths"},{title:"Total Sembuh",field:"recovered"}],data:this.state.stats,actions:[{icon:"refresh",tooltip:"Refresh",isFreeAction:"true",onClick:function(){return t.tableRef.current&&t.tableRef.current.onQueryChange()}}],options:{headerStyle:{backgroundColor:"#3f51b5",color:"#fff"}}})})}}]),a}(c.a.Component);var L=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(O,{}),Object(l.jsx)(F,{})]})},C=function(t){t&&t instanceof Function&&a.e(6).then(a.bind(null,854)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),C()}},[[450,1,2]]]);
//# sourceMappingURL=main.3f53aaa5.chunk.js.map