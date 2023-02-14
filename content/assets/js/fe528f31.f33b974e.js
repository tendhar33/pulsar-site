"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients"},o=void 0,s={unversionedId:"concepts-clients",id:"concepts-clients",title:"Pulsar Clients",description:"Pulsar exposes a client API with language bindings for Java, C++, Go, Python, Node.js and C#. The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications.",source:"@site/docs/concepts-clients.md",sourceDirName:".",slug:"/concepts-clients",permalink:"/docs/next/concepts-clients",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-clients.md",tags:[],version:"current",frontMatter:{id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/docs/next/concepts-architecture-overview"},next:{title:"Geo Replication",permalink:"/docs/next/concepts-replication"}},l={},c=[{value:"Client setup phase",id:"client-setup-phase",level:2},{value:"Producer",id:"producer",level:2},{value:"Send mode",id:"send-mode",level:3},{value:"Access mode",id:"access-mode",level:3},{value:"Consumer",id:"consumer",level:2},{value:"Receive mode",id:"receive-mode",level:3},{value:"Listener",id:"listener",level:3},{value:"Reader",id:"reader",level:2},{value:"TableView",id:"tableview",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar exposes a client API with language bindings for ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-cpp"},"C++"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-python"},"Python"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-node"},"Node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-dotnet"},"C#"),". The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications."),(0,r.kt)("p",null,"Pulsar client libraries support transparent reconnection and/or connection failover to brokers, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff."),(0,r.kt)("h2",{id:"client-setup-phase"},"Client setup phase"),(0,r.kt)("p",null,"Before an application creates a producer/consumer, the Pulsar client library needs to initiate a setup phase including two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client attempts to determine the owner of the topic by sending an HTTP lookup request to the broker. The request could reach one of the active brokers which, by looking at the (cached) zookeeper metadata knows who is serving the topic or, in case nobody is serving it, tries to assign it to the least loaded broker."),(0,r.kt)("li",{parentName:"ol"},"Once the client library has the broker address, it creates a TCP connection (or reuses an existing connection from the pool) and authenticates it. Within this connection, the client and broker exchange binary commands from a custom protocol. At this point, the client sends a command to create producer/consumer to the broker, which will comply after having validated the authorization policy.")),(0,r.kt)("p",null,"Whenever the TCP connection breaks, the client immediately re-initiates this setup phase and keeps trying with exponential backoff to re-establish the producer or consumer until the operation succeeds."),(0,r.kt)("h2",{id:"producer"},"Producer"),(0,r.kt)("p",null,"A producer is a process that attaches to a topic and publishes messages to a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#broker"},"broker"),". The Pulsar broker processes the messages."),(0,r.kt)("h3",{id:"send-mode"},"Send mode"),(0,r.kt)("p",null,"Producers send messages to brokers synchronously (sync) or asynchronously (async)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sync send"),(0,r.kt)("td",{parentName:"tr",align:null},"The producer waits for an acknowledgment from the broker after sending every message. If the acknowledgment is not received, the producer treats the sending operation as a failure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Async send"),(0,r.kt)("td",{parentName:"tr",align:null},"The producer puts a message in a blocking queue and returns immediately. The client library sends the message to the broker in the background. If the queue is full (you can ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/reference-configuration#broker"},"configure")," the maximum size), the producer is blocked or fails immediately when calling the API, depending on arguments passed to the producer.")))),(0,r.kt)("h3",{id:"access-mode"},"Access mode"),(0,r.kt)("p",null,"You can have different types of access modes on topics for producers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Access mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Shared")),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple producers can publish on a topic. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This is the ",(0,r.kt)("strong",{parentName:"td"},"default")," setting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Exclusive")),(0,r.kt)("td",{parentName:"tr",align:null},"Only one producer can publish on a topic. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If there is already a producer connected, other producers trying to publish on this topic get errors immediately.",(0,r.kt)("br",null),(0,r.kt)("br",null),'The "old" producer is evicted and a "new" producer is selected to be the next exclusive producer if the "old" producer experiences a network partition with the broker.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ExclusiveWithFencing")),(0,r.kt)("td",{parentName:"tr",align:null},"Only one producer can publish on a topic. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If there is already a producer connected, it will be removed and invalidated immediately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"WaitForExclusive")),(0,r.kt)("td",{parentName:"tr",align:null},"If there is already a producer connected, the producer creation is pending (rather than timing out) until the producer gets the ",(0,r.kt)("inlineCode",{parentName:"td"},"Exclusive")," access.",(0,r.kt)("br",null),(0,r.kt)("br",null),'The producer that succeeds in becoming the exclusive one is treated as the leader. Consequently, if you want to implement a leader election scheme for your application, you can use this access mode. Note that the leader pattern scheme mentioned refers to using Pulsar as a Write-Ahead Log (WAL) which means the leader writes its "decisions" to the topic. On error cases, the leader will get notified it is no longer the leader ',(0,r.kt)("em",{parentName:"td"},"only")," when it tries to write a message and fails on appropriate error, by the broker.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Once an application creates a producer with ",(0,r.kt)("inlineCode",{parentName:"p"},"Exclusive")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"WaitForExclusive")," access mode successfully, the instance of this application is guaranteed to be the ",(0,r.kt)("strong",{parentName:"p"},"only writer")," to the topic. Any other producers trying to produce messages on this topic will either get errors immediately or have to wait until they get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exclusive")," access.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-68:-Exclusive-Producer"},"PIP 68: Exclusive Producer"),".")),(0,r.kt)("p",null,"You can set producer access mode through Java Client API. For more information, see ",(0,r.kt)("inlineCode",{parentName:"p"},"ProducerAccessMode")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/fc5768ca3bbf92815d142fe30e6bfad70a1b4fc6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ProducerBuilder.java"},"ProducerBuilder.java")," file."),(0,r.kt)("h2",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"A consumer is a process that attaches to a topic via a subscription and then receives messages."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Consumer",src:a(92478).Z,width:"1760",height:"460"})),(0,r.kt)("p",null,"A consumer sends a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol#flow-control"},"flow permit request")," to a broker to get messages. There is a queue at the consumer side to receive messages pushed from the broker. You can configure the queue size with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java-configs#consumer-configs"},(0,r.kt)("inlineCode",{parentName:"a"},"receiverQueueSize"))," parameter. The default size is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"). Each time ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer.receive()")," is called, a message is dequeued from the buffer."),(0,r.kt)("h3",{id:"receive-mode"},"Receive mode"),(0,r.kt)("p",null,"Messages are received from ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#broker"},"brokers")," either synchronously (sync) or asynchronously (async)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sync receive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sync receive is blocked until a message is available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Async receive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An async receive returns immediately with a future value\u2014for example, a ",(0,r.kt)("a",{parentName:"td",href:"http://www.baeldung.com/java-completablefuture"},(0,r.kt)("inlineCode",{parentName:"a"},"CompletableFuture"))," in Java\u2014that completes once a new message is available.")))),(0,r.kt)("h3",{id:"listener"},"Listener"),(0,r.kt)("p",null,"Client libraries provide listener implementation for consumers. For example, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java"},"Java client")," provides a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageListener"},"MesssageListener")," interface. In this interface, the ",(0,r.kt)("inlineCode",{parentName:"p"},"received")," method is called whenever a new message is received."),(0,r.kt)("h2",{id:"reader"},"Reader"),(0,r.kt)("p",null,'In Pulsar, the "standard" ',(0,r.kt)("a",{parentName:"p",href:"#consumer"},"consumer interface")," involves using consumers to listen on ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#topic"},"topics"),", process incoming messages, and finally acknowledge those messages when they are processed. Whenever a new subscription is created, it is initially positioned at the end of the topic (by default), and consumers associated with that subscription begin reading with the first message created afterward.  Whenever a consumer connects to a topic using a pre-existing subscription, it begins reading from the earliest message un-acked within that subscription. In summary, with the consumer interface, subscription cursors are automatically managed by Pulsar in response to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#acknowledgment"},"message acknowledgments"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"reader interface")," for Pulsar enables applications to manually manage cursors. When you use a reader to connect to a topic---rather than a consumer---you need to specify ",(0,r.kt)("em",{parentName:"p"},"which")," message the reader begins reading from when it connects to a topic. When connecting to a topic, the reader interface enables you to begin with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"earliest")," available message in the topic."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"latest")," available message in the topic."),(0,r.kt)("li",{parentName:"ul"},'Some other messages between the earliest and the latest. If you select this option, you\'ll need to explicitly provide a message ID. Your application will be responsible for "knowing" this message ID in advance, perhaps fetching it from a persistent data store or cache.')),(0,r.kt)("p",null,'The reader interface is helpful for use cases like using Pulsar to provide effectively-once processing semantics for a stream processing system. For this use case, the stream processing system must be able to "rewind" topics to a specific message and begin reading there. The reader interface provides Pulsar clients with the low-level abstraction necessary to "manually position" themselves within a topic.'),(0,r.kt)("p",null,"Internally, the reader interface is implemented as a consumer using an exclusive, non-durable subscription to the topic with a randomly-allocated name."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Unlike subscription/consumer, readers are non-durable in nature and do not prevent data in a topic from being deleted, thus it is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"strongly"))," advised that ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-retention-expiry"},"data retention")," be configured. If data retention for a topic is not configured for an adequate amount of time, messages that the reader has not yet read might be deleted.  This causes the readers to essentially skip messages. Configuring the data retention for a topic guarantees the reader with a certain duration to read a message."),(0,r.kt)("p",{parentName:"admonition"},'Please also note that a reader can have a "backlog", but the metric is only used for users to know how behind the reader is. The metric is not considered for any backlog quota calculations. ')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:a(16552).Z,width:"1289",height:"1720"})),(0,r.kt)("h2",{id:"tableview"},"TableView"),(0,r.kt)("p",null,"The TableView interface serves an encapsulated access pattern, providing a continuously updated key-value map view of the compacted topic data. Messages without keys will be ignored."),(0,r.kt)("p",null,"With TableView, Pulsar clients can fetch all the message updates from a topic and construct a map with the latest values of each key. These values can then be used to build a local cache of data. In addition, you can register consumers with the TableView by specifying a listener to perform a scan of the map and then receive notifications when new messages are received. Consequently, event handling can be triggered to serve use cases, such as event-driven applications and message monitoring."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Each TableView uses one Reader instance per partition, and reads the topic starting from the compacted view by default. It is highly recommended to enable automatic compaction by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-compaction#configure-compaction-to-run-automatically"},"configuring the topic compaction policies")," for the given topic or namespace. More frequent compaction results in shorter startup times because less data is replayed to reconstruct the TableView of the topic. Starting from Pulsar 2.11.0, TableView also supports reading non-persistent topics, but it does not guarantee data consistency.")),(0,r.kt)("p",null,"The following figure illustrates the dynamic construction of a TableView updated with newer values of each key."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TableView",src:a(32658).Z,width:"3323",height:"1742"})))}u.isMDXComponent=!0},92478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/consumer-03a4427f427f376a288c150e423338a2.svg"},16552:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-reader-consumer-interfaces-4c838d3fa1b811f2c074087d44b991ea.png"},32658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableview-a5bea774c5591395d61725e720ebf908.png"}}]);