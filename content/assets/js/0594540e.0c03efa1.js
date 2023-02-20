"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:a,defaultValue:i,values:u,groupId:m,className:d}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[v,y]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&k.some((t=>t.value===e))&&y(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==v&&(j(t),y(n),null!=m&&b(m,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:S},i,{className:(0,o.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},22043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),i=a(85162);const l={id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop"},s=void 0,c={unversionedId:"io-develop",id:"io-develop",title:"How to develop Pulsar connectors",description:"This guide describes how to develop Pulsar connectors to move data",source:"@site/docs/io-develop.md",sourceDirName:".",slug:"/io-develop",permalink:"/docs/next/io-develop",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/io-develop.md",tags:[],version:"current",frontMatter:{id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop"},sidebar:"docsSidebar",previous:{title:"CDC connector",permalink:"/docs/next/io-cdc"},next:{title:"Overview",permalink:"/docs/next/sql-overview"}},p={},u=[{value:"Develop",id:"develop",level:2},{value:"Source",id:"source",level:3},{value:"Handle schema information",id:"handle-schema-information",level:4},{value:"Sink",id:"sink",level:3},{value:"Handle schema information",id:"handle-schema-information-1",level:4},{value:"Test",id:"test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Package",id:"package",level:2},{value:"NAR",id:"nar",level:3},{value:"Uber JAR",id:"uber-jar",level:3},{value:"Monitor",id:"monitor",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide describes how to develop Pulsar connectors to move data\nbetween Pulsar and other systems. "),(0,r.kt)("p",null,"Pulsar connectors are special ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/functions-overview"},"Pulsar Functions"),", so creating\na Pulsar connector is similar to creating a Pulsar function. "),(0,r.kt)("p",null,"Pulsar connectors come in two types: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source")),(0,r.kt)("td",{parentName:"tr",align:null},"Import data from another system to Pulsar."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/io-rabbitmq-source"},"RabbitMQ source connector")," imports the messages of a RabbitMQ queue to a Pulsar topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")),(0,r.kt)("td",{parentName:"tr",align:null},"Export data from Pulsar to another system."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/io-kinesis-sink"},"Kinesis sink connector")," exports the messages of a Pulsar topic to a Kinesis stream.")))),(0,r.kt)("h2",{id:"develop"},"Develop"),(0,r.kt)("p",null,"You can develop Pulsar source connectors and sink connectors."),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"Developing a source connector is to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source"),"\ninterface, which means you need to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n* Open connector with configuration\n*\n* @param config initialization config\n* @param sourceContext\n* @throws Exception IO type exceptions when opening a connector\n*/\nvoid open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n")),(0,r.kt)("p",{parentName:"li"},"This method is called when the source connector is initialized. "),(0,r.kt)("p",{parentName:"li"},"In this method, you can retrieve all connector-specific settings through the passed-in ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," parameter and initialize all necessary resources. "),(0,r.kt)("p",{parentName:"li"},"For example, a Kafka connector can create a Kafka client in this ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," method."),(0,r.kt)("p",{parentName:"li"},"Besides, Pulsar runtime also provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceContext")," for the connector to access runtime resources for tasks like collecting metrics. The implementation can save the ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceContext")," for future use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Reads the next message from source.\n    * If source does not have any new messages, this call should block.\n    * @return next message from source.  The return result should never be null\n    * @throws Exception\n    */\n    Record<T> read() throws Exception;\n")),(0,r.kt)("p",{parentName:"li"},"If there is nothing to return, the implementation should be blocking rather than returning ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",{parentName:"li"},"The returned ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should encapsulate the following information, which is needed by the Pulsar IO runtime. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following variables:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TopicName")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar topic name from which the record is originated from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Key")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages can optionally be tagged with keys.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For more information, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/concepts-messaging#routing-modes"},"Routing modes"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Actual data of the record.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EventTime")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Event time of the record from the source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PartitionId")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"If the record is originated from a partitioned source, it returns its ",(0,r.kt)("inlineCode",{parentName:"td"},"PartitionId"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"PartitionId")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RecordSequence")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"If the record is originated from a sequential source, it returns its ",(0,r.kt)("inlineCode",{parentName:"td"},"RecordSequence"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"RecordSequence")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Properties")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"If the record carries user-defined properties, it returns those properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DestinationTopic")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic to which message should be written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Message")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A class which carries data sent by users.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/Message.java"},"Message.java"),"."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following methods:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ack")),(0,r.kt)("td",{parentName:"tr",align:null},"Acknowledge that the record is fully processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fail")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate that the record fails to be processed.")))))))),(0,r.kt)("h4",{id:"handle-schema-information"},"Handle schema information"),(0,r.kt)("p",null,"Pulsar IO automatically handles the schema and provides a strongly typed API based on Java generics.\nIf you know the schema type that you are producing, you can declare the Java class relative to that type in your source declaration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MySource implements Source<String> {\n    public Record<String> read() {}\n}\n\n")),(0,r.kt)("p",null,"If you want to implement a source that works with any schema, you can go with ",(0,r.kt)("inlineCode",{parentName:"p"},"byte[]")," (of ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteBuffer"),") and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.AUTO_PRODUCE_BYTES()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MySource implements Source<byte[]> {\n    public Record<byte[]> read() {\n        \n        Schema wantedSchema = ....\n        Record<byte[]> myRecord = new MyRecordImplementation(); \n        ....\n    }\n    class MyRecordImplementation implements Record<byte[]> {\n         public byte[] getValue() {\n            return ....encoded byte[]...that represents the value \n         }\n         public Schema<byte[]> getSchema() {\n             return Schema.AUTO_PRODUCE_BYTES(wantedSchema);\n         }\n    }\n}\n")),(0,r.kt)("p",null,"To handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValue")," type properly, follow the guidelines for your record implementation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It must implement ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/KVRecord.java"},"Record")," interface and implement ",(0,r.kt)("inlineCode",{parentName:"li"},"getKeySchema"),",",(0,r.kt)("inlineCode",{parentName:"li"},"getValueSchema"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"getKeyValueEncodingType")),(0,r.kt)("li",{parentName:"ul"},"It must return a ",(0,r.kt)("inlineCode",{parentName:"li"},"KeyValue")," object as ",(0,r.kt)("inlineCode",{parentName:"li"},"Record.getValue()")),(0,r.kt)("li",{parentName:"ul"},"It may return null in ",(0,r.kt)("inlineCode",{parentName:"li"},"Record.getSchema()"))),(0,r.kt)("p",null,"When Pulsar IO runtime encounters a ",(0,r.kt)("inlineCode",{parentName:"p"},"KVRecord"),", it does the following changes automatically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the proper ",(0,r.kt)("inlineCode",{parentName:"li"},"KeyValueSchema")),(0,r.kt)("li",{parentName:"ul"},"Encode the Message Key and the Message Value according to the ",(0,r.kt)("inlineCode",{parentName:"li"},"KeyValueEncoding")," (SEPARATED or INLINE)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("strong",{parentName:"p"},"how to create a source connector"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"KafkaSource"),".")),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("p",null,"Developing a sink connector ",(0,r.kt)("strong",{parentName:"p"},"is similar to")," developing a source connector, that is, you need to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")," interface, which means implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Open connector with configuration\n    *\n    * @param config initialization config\n    * @param sinkContext\n    * @throws Exception IO type exceptions when opening a connector\n    */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Write a message to Sink\n    * @param record record to write to sink\n    * @throws Exception\n    */\n    void write(Record<T> record) throws Exception;\n")),(0,r.kt)("p",{parentName:"li"},"During the implementation, you can decide how to write the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," to the actual sink, and leverage all the provided information such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"PartitionId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RecordSequence")," to achieve different processing guarantees. "),(0,r.kt)("p",{parentName:"li"},"You also need to ack records (if messages are sent successfully) or fail records (if messages fail to send). "))),(0,r.kt)("h4",{id:"handle-schema-information-1"},"Handle schema information"),(0,r.kt)("p",null,"Pulsar IO automatically handles the Schema and provides a strongly typed API based on Java generics.\nIf you know the Schema type that you are consuming from you can declare the Java class relative to that type in your Sink declaration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<String> {\n    public void write(Record<String> record) {}\n}\n")),(0,r.kt)("p",null,"If you want to implement a sink that works with any schema, you can you go with the special GenericObject interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        if (genericObject != null) {\n            SchemaType type = genericObject.getSchemaType();\n            Object nativeObject = genericObject.getNativeObject();\n            ...\n        }\n        ....\n    }\n}\n")),(0,r.kt)("p",null,"In the case of AVRO, JSON, and Protobuf records (schemaType=AVRO,JSON,PROTOBUF_NATIVE), you can cast the\n",(0,r.kt)("inlineCode",{parentName:"p"},"genericObject")," variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericRecord")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"getFields()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getField()")," API.\nYou can access the native AVRO record using ",(0,r.kt)("inlineCode",{parentName:"p"},"genericObject.getNativeObject()"),"."),(0,r.kt)("p",null,"In the case of KeyValue type, you can access both the schema for the key and the schema for the value using this code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        SchemaType type = genericObject.getSchemaType();\n        Object nativeObject = genericObject.getNativeObject();\n        if (type == SchemaType.KEY_VALUE) {\n            KeyValue keyValue = (KeyValue) nativeObject;\n            Object key = keyValue.getKey();\n            Object value = keyValue.getValue();\n        \n            KeyValueSchema keyValueSchema = (KeyValueSchema) schema;\n            Schema keySchema = keyValueSchema.getKeySchema();\n            Schema valueSchema = keyValueSchema.getValueSchema();\n        }\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"Testing connectors can be challenging because Pulsar IO connectors interact with two systems\nthat may be difficult to mock\u2014Pulsar and the system to which the connector is connecting. "),(0,r.kt)("p",null,"It is recommended to write special tests to test the connector functionalities as below\nwhile mocking the external service. "),(0,r.kt)("h3",{id:"unit-test"},"Unit test"),(0,r.kt)("p",null,"You can create unit tests for your connector."),(0,r.kt)("h3",{id:"integration-test"},"Integration test"),(0,r.kt)("p",null,"Once you have written sufficient unit tests, you can add\nseparate integration tests to verify end-to-end functionality. "),(0,r.kt)("p",null,"Pulsar uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"testcontainers")," ",(0,r.kt)("strong",{parentName:"p"},"for all integration tests"),". "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("strong",{parentName:"p"},"how to create integration tests for Pulsar connectors"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io"},"IntegrationTests"),".")),(0,r.kt)("h2",{id:"package"},"Package"),(0,r.kt)("p",null,"Once you've developed and tested your connector, you need to package it so that it can be submitted\nto a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/functions-overview"},"Pulsar Functions")," cluster. "),(0,r.kt)("p",null,"There are two methods to\nwork with Pulsar Functions' runtime, that is, ",(0,r.kt)("a",{parentName:"p",href:"#nar"},"NAR")," and ",(0,r.kt)("a",{parentName:"p",href:"#uber-jar"},"uber JAR"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to package and distribute your connector for others to use, you are obligated to\nlicense and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you use the ",(0,r.kt)("a",{parentName:"p",href:"#nar"},"NAR")," method, the NAR plugin\nautomatically creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your connector."),(0,r.kt)("p",{parentName:"blockquote"},"For the runtime Java version, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")),(0,r.kt)("h3",{id:"nar"},"NAR"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NAR")," stands for NiFi Archive, which is a custom packaging mechanism used by Apache NiFi, to provide\na bit of Java ClassLoader isolation. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("strong",{parentName:"p"},"how NAR works"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd"},"here"),". ")),(0,r.kt)("p",null,"Pulsar uses the same mechanism for packaging ",(0,r.kt)("strong",{parentName:"p"},"all")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/io-connectors"},"built-in connectors"),". "),(0,r.kt)("p",null,"The easiest approach to package a Pulsar connector is to create a NAR package using ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin"),"."),(0,r.kt)("p",null,"Include this ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin")," in your maven project for your connector as below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.2.0</version>\n  </plugin>\n</plugins>\n")),(0,r.kt)("p",null,"You must also create a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/pulsar-io.yaml")," file with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: connector name\ndescription: connector description\nsourceClass: fully qualified class name (only if source connector)\nsinkClass: fully qualified class name (only if sink connector)\n")),(0,r.kt)("p",null,"For Gradle users, there is a ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.github.lhotari.gradle-nar-plugin"},"Gradle Nar plugin available on the Gradle Plugin Portal"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about ",(0,r.kt)("strong",{parentName:"p"},"how to use NAR for Pulsar connectors"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter/pom.xml"},"TwitterFirehose"),".")),(0,r.kt)("h3",{id:"uber-jar"},"Uber JAR"),(0,r.kt)("p",null,"An alternative approach is to create an ",(0,r.kt)("strong",{parentName:"p"},"uber JAR")," that contains all of the connector's JAR files\nand other resource files. No directory internal structure is necessary."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html"},"maven-shade-plugin")," to create a uber JAR as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n")),(0,r.kt)("h2",{id:"monitor"},"Monitor"),(0,r.kt)("p",null,"Pulsar connectors enable you to move data in and out of Pulsar easily. It is important to ensure that the running connectors are healthy at any time. You can monitor Pulsar connectors that have been deployed with the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the metrics provided by Pulsar."),(0,r.kt)("p",{parentName:"li"},"Pulsar connectors expose the metrics that can be collected and used for monitoring the health of ",(0,r.kt)("strong",{parentName:"p"},"Java")," connectors. You can check the metrics by following the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deploy-monitoring"},"monitoring")," guide.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set and check your customized metrics."),(0,r.kt)("p",{parentName:"li"},"In addition to the metrics provided by Pulsar, Pulsar allows you to customize metrics for ",(0,r.kt)("strong",{parentName:"p"},"Java")," connectors. Function workers collect user-defined metrics to Prometheus automatically and you can check them in Grafana."))),(0,r.kt)("p",null,"Here is an example of how to customize metrics for a Java connector."),(0,r.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TestMetricSink implements Sink<String> {\n\n        @Override\n        public void open(Map<String, Object> config, SinkContext sinkContext) throws Exception {\n            sinkContext.recordMetric("foo", 1);\n        }\n\n        @Override\n        public void write(Record<String> record) throws Exception {\n\n        }\n\n        @Override\n        public void close() throws Exception {\n\n        }\n    }\n')))))}h.isMDXComponent=!0}}]);