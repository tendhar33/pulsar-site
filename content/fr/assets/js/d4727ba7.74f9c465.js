"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[678],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67328:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],l={id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker"},i=void 0,u={unversionedId:"standalone-docker",id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",description:"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/standalone-docker.md",sourceDirName:".",slug:"/standalone-docker",permalink:"/fr/docs/next/standalone-docker",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/standalone-docker.md",tags:[],version:"current",frontMatter:{id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker"},sidebar:"docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/fr/docs/next/"},next:{title:"Run Pulsar in Kubernetes",permalink:"/fr/docs/next/kubernetes-helm"}},c=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",children:[],level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",children:[{value:"Consume a message",id:"consume-a-message",children:[],level:3},{value:"Produce a message",id:"produce-a-message",children:[],level:3}],level:2},{value:"Get the topic statistics",id:"get-the-topic-statistics",children:[],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."),(0,s.kt)("p",null,"If you have not installed Docker, download the ",(0,s.kt)("a",{parentName:"p",href:"https://www.docker.com/community-edition"},"Community edition")," and follow the instructions for your OS."),(0,s.kt)("h2",{id:"start-pulsar-in-docker"},"Start Pulsar in Docker"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For MacOS, Linux, and Windows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ docker run -it -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:@pulsar:version@ bin/pulsar standalone\n\n")))),(0,s.kt)("p",null,"A few things to note about this command:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes in order to not start "fresh" every time the container is restarted. For details on the volumes you can use ',(0,s.kt)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>")),(0,s.kt)("li",{parentName:"ul"},"For Docker on Windows make sure to configure it to use Linux containers"),(0,s.kt)("li",{parentName:"ul"},"The docker container will run as UID 10000 and GID 0, by default. You'll need to ensure the mounted volumes give write permission to either UID 10000 or GID 0. Note that UID 10000 is arbitrary, so it is recommended to make these mounts writable for the root group (GID 0).")),(0,s.kt)("p",null,"If you start Pulsar successfully, you will see ",(0,s.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\n08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When you start a local standalone cluster, a ",(0,s.kt)("inlineCode",{parentName:"p"},"public/default")))),(0,s.kt)("p",null,"namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/concepts-messaging#topics"},"Topics"),"."),(0,s.kt)("h2",{id:"use-pulsar-in-docker"},"Use Pulsar in Docker"),(0,s.kt)("p",null,"Pulsar offers client libraries for ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/client-libraries-java"},"Java"),", ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/client-libraries-go"},"Go"),", ",(0,s.kt)("a",{parentName:"p",href:"client-libraries-python"},"Python")," and ",(0,s.kt)("a",{parentName:"p",href:"client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can use one of these root URLs to interact with your cluster:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,s.kt)("p",null,"The following example will guide you get started with Pulsar quickly by using the ",(0,s.kt)("a",{parentName:"p",href:"client-libraries-python"},"Python client API")," client API."),(0,s.kt)("p",null,"Install the Pulsar Python client library directly from ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client\n\n")),(0,s.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,s.kt)("p",null,"Create a consumer and subscribe to the topic:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,s.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,s.kt)("p",null,"Now start a producer to send some test messages:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,s.kt)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,s.kt)("p",null,"In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system. For details on APIs, refer to ",(0,s.kt)("a",{parentName:"p",href:"admin-api-overview"},"Admin API Overview"),"."),(0,s.kt)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n")),(0,s.kt)("p",null,"The output is something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n\n')))}d.isMDXComponent=!0}}]);