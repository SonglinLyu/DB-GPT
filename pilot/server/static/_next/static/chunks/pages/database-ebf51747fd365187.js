(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{55286:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/database",function(){return s(92572)}])},45247:function(e,a,s){"use strict";var l=s(85893),t=s(48699);a.Z=function(e){let{visible:a}=e;return a?(0,l.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50",children:(0,l.jsx)(t.Z,{variant:"plain"})}):null}},92572:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return q},isFileDb:function(){return F}});var l=s(85893),t=s(67294),n=s(2093),r=s(12678),i=s(2453),c=s(71577),o=s(40411),d=s(85265),b=s(85813),m=s(32983),u=s(27494),p=s(50965),h=s(59566),x=s(48928),f=s(50489),y=s(67421),g=function(e){let{open:a,choiceDBType:s,dbTypeList:n,editValue:o,dbNames:d,onClose:b,onSuccess:m}=e,[g,j]=(0,t.useState)(!1),{t:w}=(0,y.$G)(),[Z]=u.Z.useForm(),N=u.Z.useWatch("db_type",Z),_=(0,t.useMemo)(()=>F(n,N),[n,N]);(0,t.useEffect)(()=>{s&&Z.setFieldValue("db_type",s)},[s]),(0,t.useEffect)(()=>{o&&Z.setFieldsValue({...o})},[o]),(0,t.useEffect)(()=>{a||Z.resetFields()},[a]);let k=async e=>{let{db_host:a,db_path:s,db_port:l,...t}=e;if(!o&&d.some(e=>e===t.db_name)){i.ZP.error("The database already exists!");return}let n={db_host:_?void 0:a,db_port:_?void 0:l,file_path:_?s:void 0,...t};j(!0);try{let[e]=await (0,f.Vx)((o?f.mR:f.b_)(n));if(e){i.ZP.error(e.message);return}i.ZP.success("success"),null==m||m()}catch(e){i.ZP.error(e.message)}finally{j(!1)}},v=(0,t.useMemo)(()=>!!o||!!s,[o,s]);return(0,l.jsx)(r.Z,{open:a,width:400,title:w(o?"Edit":"create_database"),maskClosable:!1,footer:null,onCancel:b,children:(0,l.jsxs)(u.Z,{form:Z,className:"pt-2",labelCol:{span:6},labelAlign:"left",onFinish:k,children:[(0,l.jsx)(u.Z.Item,{name:"db_type",label:"DB Type",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(p.default,{"aria-readonly":v,disabled:v,options:n})}),(0,l.jsx)(u.Z.Item,{name:"db_name",label:"DB Name",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{readOnly:!!o,disabled:!!o})}),!0===_&&(0,l.jsx)(u.Z.Item,{name:"db_path",label:"Path",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),!1===_&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z.Item,{name:"db_user",label:"Username",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),(0,l.jsx)(u.Z.Item,{name:"db_pwd",label:"Password",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{type:"password"})}),(0,l.jsx)(u.Z.Item,{name:"db_host",label:"Host",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),(0,l.jsx)(u.Z.Item,{name:"db_port",label:"Port",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(x.Z,{min:1,step:1,max:65535})})]}),(0,l.jsx)(u.Z.Item,{name:"comment",label:"Remark",className:"mb-3",children:(0,l.jsx)(h.default,{})}),(0,l.jsxs)(u.Z.Item,{className:"flex flex-row-reverse pt-1 mb-0",children:[(0,l.jsx)(c.ZP,{htmlType:"submit",type:"primary",size:"middle",className:"mr-1",loading:g,children:"Save"}),(0,l.jsx)(c.ZP,{size:"middle",onClick:b,children:"Cancel"})]})]})})},j=s(39778),w=s(25675),Z=s.n(w),N=function(e){let{src:a,label:s}=e;return(0,l.jsx)(Z(),{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white",width:44,height:44,src:a,alt:s||"db-icon"})},_=function(e){let{info:a,onClick:s}=e,n=(0,t.useCallback)(()=>{a.disabled||null==s||s()},[a.disabled,s]);return(0,l.jsxs)("div",{className:"relative flex flex-col py-4 px-4 w-72 h-32 cursor-pointer rounded-lg justify-between text-black bg-white border-gray-200 border hover:shadow-md dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-white transition-all ".concat(a.disabled?"grayscale":""),onClick:n,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(N,{src:a.icon,label:a.label}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h2",{className:"text-sm font-semibold",children:a.label}),a.disabled&&(0,l.jsx)("div",{className:"mt-[2px] rounded-full font-normal bg-gray-100 text-xs h-5 flex items-center px-2 dark:bg-gray-800",children:"Comming soon"})]})]}),(0,l.jsx)(j.Z,{title:a.desc,children:(0,l.jsx)("p",{className:"text-sm text-gray-500 font-normal line-clamp-2",children:a.desc})})]})},k=s(24969),v=s(36531),C=s(27704),P=s(45247);let S={mysql:{label:"MySQL",icon:"/icons/mysql.png",desc:"Fast, reliable, scalable open-source relational database management system."},mssql:{label:"MSSQL",icon:"/icons/mssql.png",desc:"Powerful, scalable, secure relational database system by Microsoft."},duckdb:{label:"DuckDB",icon:"/icons/duckdb.png",desc:"In-memory analytical database with efficient query processing."},sqlite:{label:"Sqlite",icon:"/icons/sqlite.png",desc:"Lightweight embedded relational database with simplicity and portability."},clickhouse:{label:"ClickHouse",icon:"/icons/clickhouse.png",desc:"Columnar database for high-performance analytics and real-time queries."},oracle:{label:"Oracle",icon:"/icons/oracle.png",desc:"Robust, scalable, secure relational database widely used in enterprises."},access:{label:"Access",icon:"/icons/access.png",desc:"Easy-to-use relational database for small-scale applications by Microsoft."},mongodb:{label:"MongoDB",icon:"/icons/mongodb.png",desc:"Flexible, scalable NoSQL document database for web and mobile apps."},db2:{label:"DB2",icon:"/icons/db2.png",desc:"Scalable, secure relational database system developed by IBM."},hbase:{label:"HBase",icon:"/icons/hbase.png",desc:"Distributed, scalable NoSQL database for large structured/semi-structured data."},redis:{label:"Redis",icon:"/icons/redis.png",desc:"Fast, versatile in-memory data structure store as cache, DB, or broker."},cassandra:{label:"Cassandra",icon:"/icons/cassandra.png",desc:"Scalable, fault-tolerant distributed NoSQL database for large data."},couchbase:{label:"Couchbase",icon:"/icons/couchbase.png",desc:"High-performance NoSQL document database with distributed architecture."},postgresql:{label:"PostgreSQL",icon:"/icons/postgresql.png",desc:"Powerful open-source relational database with extensibility and SQL standards."},spark:{label:"Spark",icon:"/icons/spark.png",desc:"Unified engine for large-scale data analytics."}};function F(e,a){var s;return null===(s=e.find(e=>e.value===a))||void 0===s?void 0:s.isFileDb}var q=function(){let[e,a]=(0,t.useState)([]),[s,u]=(0,t.useState)([]),[p,h]=(0,t.useState)(!1),[x,y]=(0,t.useState)({open:!1}),[j,w]=(0,t.useState)({open:!1}),Z=async()=>{let[e,a]=await (0,f.Vx)((0,f.Jm)());u(null!=a?a:[])},N=async()=>{h(!0);let[e,s]=await (0,f.Vx)((0,f.Bw)());a(null!=s?s:[]),h(!1)},F=(0,t.useMemo)(()=>{let e=s.map(e=>{let{db_type:a,is_file_db:s}=e;return{...S[a],value:a,isFileDb:s}}),a=Object.keys(S).filter(a=>!e.some(e=>e.value===a)).map(e=>({...S[e],value:S[e].label,disabled:!0}));return[...e,...a]},[s]),q=e=>{y({open:!0,info:e})},D=e=>{r.Z.confirm({title:"Tips",content:"Do you Want to delete the ".concat(e.db_name,"?"),onOk:()=>new Promise(async(a,s)=>{try{let[l]=await (0,f.Vx)((0,f.J5)(e.db_name));if(l){i.ZP.error(l.message),s();return}i.ZP.success("success"),N(),a()}catch(e){i.ZP.error(e.message),s()}})})},E=(0,t.useMemo)(()=>{let a=F.reduce((a,s)=>(a[s.value]=e.filter(e=>e.db_type===s.value),a),{});return a},[e,F]);(0,n.Z)(async()=>{await N(),await Z()},[]);let T=a=>{let s=e.filter(e=>e.db_type===a.value);w({open:!0,dbList:s,name:a.label,type:a.value})};return(0,l.jsxs)("div",{className:"relative p-6 px-12 bg-[#FAFAFA] dark:bg-transparent min-h-full overflow-y-auto",children:[(0,l.jsx)(P.Z,{visible:p}),(0,l.jsx)("div",{className:"px-1 mb-4",children:(0,l.jsx)(c.ZP,{type:"primary",className:"flex items-center",icon:(0,l.jsx)(k.Z,{}),onClick:()=>{y({open:!0})},children:"Create"})}),(0,l.jsx)("div",{className:"flex flex-wrap",children:F.map(e=>(0,l.jsx)(o.Z,{className:"mr-4 mb-4",count:E[e.value].length,children:(0,l.jsx)(_,{info:e,onClick:()=>{T(e)}})},e.value))}),(0,l.jsx)(g,{open:x.open,dbTypeList:F,choiceDBType:x.dbType,editValue:x.info,dbNames:e.map(e=>e.db_name),onSuccess:()=>{y({open:!1}),N()},onClose:()=>{y({open:!1})}}),(0,l.jsx)(d.Z,{title:j.name,placement:"right",onClose:()=>{w({open:!1})},open:j.open,children:j.type&&E[j.type]&&E[j.type].length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.ZP,{type:"primary",className:"mb-4 flex items-center",icon:(0,l.jsx)(k.Z,{}),onClick:()=>{y({open:!0,dbType:j.type})},children:"Create"}),E[j.type].map(e=>(0,l.jsxs)(b.Z,{title:e.db_name,extra:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.Z,{className:"mr-2",style:{color:"#1b7eff"},onClick:()=>{q(e)}}),(0,l.jsx)(C.Z,{style:{color:"#ff1b2e"},onClick:()=>{D(e)}})]}),className:"mb-4",children:[e.db_path?(0,l.jsxs)("p",{children:["path: ",e.db_path]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["host: ",e.db_host]}),(0,l.jsxs)("p",{children:["username: ",e.db_user]}),(0,l.jsxs)("p",{children:["port: ",e.db_port]})]}),(0,l.jsxs)("p",{children:["remark: ",e.comment]})]},e.db_name))]}):(0,l.jsx)(m.Z,{image:m.Z.PRESENTED_IMAGE_DEFAULT,children:(0,l.jsx)(c.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,l.jsx)(k.Z,{}),onClick:()=>{y({open:!0,dbType:j.type})},children:"Create Now"})})})]})}}},function(e){e.O(0,[566,902,455,625,46,631,184,774,888,179],function(){return e(e.s=55286)}),_N_E=e.O()}]);