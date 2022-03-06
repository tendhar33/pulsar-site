"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5739],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(a),m=o,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7328:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},s=void 0,p={unversionedId:"administration-zk-bk",id:"version-2.9.1/administration-zk-bk",title:"ZooKeeper and BookKeeper administration",description:"Pulsar relies on two external systems for essential tasks:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.9.1/administration-zk-bk.md",sourceDirName:".",slug:"/administration-zk-bk",permalink:"/zh-TW/docs/administration-zk-bk",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/administration-zk-bk.md",tags:[],version:"2.9.1",frontMatter:{id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Monitor",permalink:"/zh-TW/docs/deploy-monitoring"},next:{title:"Geo-replication",permalink:"/zh-TW/docs/administration-geo"}},c=[{value:"ZooKeeper",id:"zookeeper",children:[{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",children:[],level:3},{value:"Deploy configuration store",id:"deploy-configuration-store",children:[{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",children:[],level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",children:[{value:"Start the service",id:"start-the-service",children:[],level:5}],level:4}],level:3},{value:"ZooKeeper configuration",id:"zookeeper-configuration",children:[{value:"Local ZooKeeper",id:"local-zookeeper",children:[],level:4},{value:"Configuration Store",id:"configuration-store",children:[],level:4}],level:3}],level:2},{value:"BookKeeper",id:"bookkeeper",children:[{value:"Hardware requirements",id:"hardware-requirements",children:[],level:3},{value:"Configure BookKeeper",id:"configure-bookkeeper",children:[],level:3},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",children:[],level:3},{value:"Start bookies manually",id:"start-bookies-manually",children:[],level:3},{value:"Decommission bookies cleanly",id:"decommission-bookies-cleanly",children:[],level:3}],level:2},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",children:[{value:"Set persistence policies",id:"set-persistence-policies",children:[{value:"Pulsar-admin",id:"pulsar-admin",children:[],level:4},{value:"REST API",id:"rest-api",children:[],level:4},{value:"Java",id:"java",children:[],level:4}],level:3},{value:"List persistence policies",id:"list-persistence-policies",children:[{value:"Pulsar-admin",id:"pulsar-admin-1",children:[],level:4},{value:"REST API",id:"rest-api-1",children:[],level:4},{value:"Java",id:"java-1",children:[],level:4}],level:3}],level:2},{value:"How Pulsar uses ZooKeeper and BookKeeper",id:"how-pulsar-uses-zookeeper-and-bookkeeper",children:[],level:2}],u={toc:c};function k(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar relies on two external systems for essential tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper")," is responsible for a wide variety of configuration-related and coordination-related tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"BookKeeper")," is responsible for ",(0,r.kt)("a",{parentName:"li",href:"/zh-TW/docs/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data.")),(0,r.kt)("p",null,"ZooKeeper and BookKeeper are both open-source ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," projects."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Skip to the ",(0,r.kt)("a",{parentName:"p",href:"#how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper")," section below for a more schematic explanation of the role of these two systems in Pulsar.")),(0,r.kt)("h2",{id:"zookeeper"},"ZooKeeper"),(0,r.kt)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-local-zookeeper"},"Local ZooKeeper")," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-configuration-store"},"Configuration Store")," operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum.")),(0,r.kt)("h3",{id:"deploy-local-zookeeper"},"Deploy local ZooKeeper"),(0,r.kt)("p",null,"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."),(0,r.kt)("p",null,"To deploy a Pulsar instance, you need to stand up one local ZooKeeper cluster ",(0,r.kt)("em",{parentName:"p"},"per Pulsar cluster"),"."),(0,r.kt)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#zookeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. The following is an example for a three-node cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n")),(0,r.kt)("p",null,"On each host, you need to specify the node ID in ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," file of each node, which is in ",(0,r.kt)("inlineCode",{parentName:"p"},"data/zookeeper")," folder of each server by default (you can change the file location via the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#zookeeper-dataDir"},(0,r.kt)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation for detailed information on ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," and more.")),(0,r.kt)("p",null,"On a ZooKeeper server at ",(0,r.kt)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ mkdir -p data/zookeeper\n$ echo 1 > data/zookeeper/myid\n\n")),(0,r.kt)("p",null,"On ",(0,r.kt)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command is ",(0,r.kt)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,r.kt)("p",null,"Once you add each server to the ",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and each server has the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start zookeeper\n\n")),(0,r.kt)("h3",{id:"deploy-configuration-store"},"Deploy configuration store"),(0,r.kt)("p",null,"The ZooKeeper cluster configured and started up in the section above is a ",(0,r.kt)("em",{parentName:"p"},"local")," ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,r.kt)("p",null,"If you deploy a ",(0,r.kt)("a",{parentName:"p",href:"#single-cluster-pulsar-instance"},"single-cluster")," instance, you do not need a separate cluster for the configuration store. If, however, you deploy a ",(0,r.kt)("a",{parentName:"p",href:"#multi-cluster-pulsar-instance"},"multi-cluster")," instance, you need to stand up a separate ZooKeeper cluster for configuration tasks."),(0,r.kt)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,r.kt)("p",null,"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."),(0,r.kt)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum uses to the configuration file in ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#configuration-store"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,r.kt)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n\n")),(0,r.kt)("p",null,"As before, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,r.kt)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,r.kt)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,r.kt)("p",null,"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,r.kt)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3 regions and that other regions run as observers."),(0,r.kt)("p",null,"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."),(0,r.kt)("p",null,"For example, you can assume a Pulsar instance with the following clusters ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-central"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-south"),". Also you can assume, each cluster has its own local ZK servers named such as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nzk[1-3].${CLUSTER}.example.com\n\n")),(0,r.kt)("p",null,"In this scenario you want to pick the quorum participants from few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",null,"This guarantees that writes to configuration store is possible even if one of these regions is unreachable."),(0,r.kt)("p",null,"The ZK configuration in all the servers looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n\n")),(0,r.kt)("p",null,"Additionally, ZK observers need to have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\npeerType=observer\n\n")),(0,r.kt)("h5",{id:"start-the-service"},"Start the service"),(0,r.kt)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start configuration-store\n\n")),(0,r.kt)("h3",{id:"zookeeper-configuration"},"ZooKeeper configuration"),(0,r.kt)("p",null,"In Pulsar, ZooKeeper configuration is handled by two separate configuration files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf")," directory of your Pulsar installation: ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/zookeeper.conf")," for ",(0,r.kt)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/global-zookeeper.conf")," for ",(0,r.kt)("a",{parentName:"p",href:"#configuration-store"},"configuration store"),"."),(0,r.kt)("h4",{id:"local-zookeeper"},"Local ZooKeeper"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#zookeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file handles the configuration for local ZooKeeper. The table below shows the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tickTime"),(0,r.kt)("td",{parentName:"tr",align:null},"The tick is the basic unit of time in ZooKeeper, measured in milliseconds and used to regulate things like heartbeats and timeouts. tickTime is the length of a single tick."),(0,r.kt)("td",{parentName:"tr",align:null},"2000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that the leader ZooKeeper server allows follower ZooKeeper servers to successfully connect and sync. The tick time is set in milliseconds using the tickTime parameter."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that a follower ZooKeeper server is allowed to sync with other ZooKeeper servers. The tick time is set in milliseconds using the tickTime parameter."),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,r.kt)("td",{parentName:"tr",align:null},"The location where ZooKeeper stores in-memory database snapshots as well as the transaction log of updates to the database."),(0,r.kt)("td",{parentName:"tr",align:null},"data/zookeeper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,r.kt)("td",{parentName:"tr",align:null},"The port on which the ZooKeeper server listens for connections."),(0,r.kt)("td",{parentName:"tr",align:null},"2181")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autopurge.snapRetainCount"),(0,r.kt)("td",{parentName:"tr",align:null},"In ZooKeeper, auto purge determines how many recent snapshots of the database stored in dataDir to retain within the time interval specified by autopurge.purgeInterval (while deleting the rest)."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autopurge.purgeInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"The time interval, in hours, which triggers the ZooKeeper database purge task. Setting to a non-zero number enables auto purge; setting to 0 disables. Read this guide before enabling auto purge."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxClientCnxns"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of client connections. Increase this if you need to handle more ZooKeeper clients."),(0,r.kt)("td",{parentName:"tr",align:null},"60")))),(0,r.kt)("h4",{id:"configuration-store"},"Configuration Store"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#configuration-store"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/global-zookeeper.conf"))," file handles the configuration for configuration store. The table below shows the available parameters:"),(0,r.kt)("h2",{id:"bookkeeper"},"BookKeeper"),(0,r.kt)("p",null,"BookKeeper stores all durable message in Pulsar. BookKeeper is a distributed ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," WAL system that guarantees read consistency of independent message logs calls ledgers. Individual BookKeeper servers are also called ",(0,r.kt)("em",{parentName:"p"},"bookies"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To manage message persistence, retention, and expiry in Pulsar, refer to ",(0,r.kt)("a",{parentName:"p",href:"cookbooks-retention-expiry"},"cookbook"),".")),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"Bookie hosts store message data on disk. To provide optimal performance, ensure that the bookies have a suitable hardware configuration. The following are two key dimensions of bookie hardware capacity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,r.kt)("li",{parentName:"ul"},"Storage capacity")),(0,r.kt)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgement to the Pulsar broker by default. To ensure low write latency, BookKeeper is designed to use multiple devices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, it is critical to have fast ",(0,r.kt)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts. Typically, small and fast ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"ledger storage device")," stores data. Writes happen in the background, so write I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller.")),(0,r.kt)("h3",{id:"configure-bookkeeper"},"Configure BookKeeper"),(0,r.kt)("p",null,"You can configure BookKeeper bookies using the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#bookkeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. When you configure each bookie, ensure that the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-configuration#bookkeeper-zkServers"},(0,r.kt)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for local ZooKeeper of the Pulsar cluster."),(0,r.kt)("p",null,"The minimum configuration changes required in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," are as follows:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"journalDirectory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ledgerDirectories")," carefully. It is difficilt to change them later."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n\n")),(0,r.kt)("p",null,"To change the ZooKeeper root path that BookKeeper uses, use ",(0,r.kt)("inlineCode",{parentName:"p"},"zkLedgersRootPath=/MY-PREFIX/ledgers")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"zkServers=localhost:2181/MY-PREFIX"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information about BookKeeper, refer to the official ",(0,r.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org"},"BookKeeper docs"),".")),(0,r.kt)("h3",{id:"deploy-bookkeeper"},"Deploy BookKeeper"),(0,r.kt)("p",null,"BookKeeper provides ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar. Each Pulsar broker has its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,r.kt)("h3",{id:"start-bookies-manually"},"Start bookies manually"),(0,r.kt)("p",null,"You can start a bookie in the foreground or as a background daemon."),(0,r.kt)("p",null,"To start a bookie in the foreground, use the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-cli-tools#bookkeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/bookkeeper bookie\n\n")),(0,r.kt)("p",null,"To start a bookie in the background, use the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-daemon start bookie\n\n")),(0,r.kt)("p",null,"You can verify whether the bookie works properly with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-cli-tools#bookkeeper-shell"},"BookKeeper shell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/bookkeeper shell bookiesanity\n\n")),(0,r.kt)("p",null,"When you use this command, you create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."),(0,r.kt)("h3",{id:"decommission-bookies-cleanly"},"Decommission bookies cleanly"),(0,r.kt)("p",null,"Before you decommission a bookie, you need to check your environment and meet the following requirements."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the state of your cluster supports decommissioning the target bookie. Check if ",(0,r.kt)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," with one less bookie.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the target bookie is listed after using the ",(0,r.kt)("inlineCode",{parentName:"p"},"listbookies")," command.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that no other process is ongoing (upgrade etc)."))),(0,r.kt)("p",null,"And then you can decommission bookies safely. To decommission bookies, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to the bookie node, check if there are underreplicated ledgers. The decommission command force to replicate the underreplicated ledgers. ",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listunderreplicated"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the bookie by killing the bookie process. Make sure that no liveness/readiness probes setup for the bookies to spin them back up if you deploy it in a Kubernetes environment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the decommission command."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you have logged in to the node to be decommissioned, you do not need to provide ",(0,r.kt)("inlineCode",{parentName:"li"},"-bookieid"),"."),(0,r.kt)("li",{parentName:"ul"},"If you are running the decommission command for the target bookie node from another bookie node, you should mention the target bookie ID in the arguments for ",(0,r.kt)("inlineCode",{parentName:"li"},"-bookieid")," ",(0,r.kt)("inlineCode",{parentName:"li"},"$ bin/bookkeeper shell decommissionbookie")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$ bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate that no ledgers are on the decommissioned bookie.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,r.kt)("p",null,"You can run the following command to check if the bookie you have decommissioned is listed in the bookies list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bookkeeper shell listbookies -rw -h\n./bookkeeper shell listbookies -ro -h\n\n")),(0,r.kt)("h2",{id:"bookkeeper-persistence-policies"},"BookKeeper persistence policies"),(0,r.kt)("p",null,"In Pulsar, you can set ",(0,r.kt)("em",{parentName:"p"},"persistence policies")," at the namespace level, which determines how BookKeeper handles persistent storage of messages. Policies determine four things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of acks (guaranteed copies) to wait for each ledger entry."),(0,r.kt)("li",{parentName:"ul"},"The number of bookies to use for a topic."),(0,r.kt)("li",{parentName:"ul"},"The number of writes to make for each ledger entry."),(0,r.kt)("li",{parentName:"ul"},"The throttling rate for mark-delete operations.")),(0,r.kt)("h3",{id:"set-persistence-policies"},"Set persistence policies"),(0,r.kt)("p",null,"You can set persistence policies for BookKeeper at the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-terminology#namespace"},"namespace")," level."),(0,r.kt)("h4",{id:"pulsar-admin"},"Pulsar-admin"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/pulsar-admin#namespaces-set-persistence"},(0,r.kt)("inlineCode",{parentName:"a"},"set-persistence"))," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ack-quorum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of acks (guaranteed copies) to wait on for each entry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ensemble")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of ",(0,r.kt)("a",{parentName:"td",href:"/zh-TW/docs/reference-terminology#bookie"},"bookies")," to use for topics in the namespace"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-w"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-write-quorum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of writes to make for each entry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-r"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--ml-mark-delete-max-rate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throttling rate for mark-delete operations (0 means no throttle)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,r.kt)("p",null,"The following is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n  --bookkeeper-ack-quorum 3 \\\n  --bookeeper-ensemble 2\n\n")),(0,r.kt)("h4",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/setPersistence?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence")),(0,r.kt)("h4",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nint bkEnsemble = 2;\nint bkQuorum = 3;\nint bkAckQuorum = 2;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(ensemble, quorum, ackQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n\n")),(0,r.kt)("h3",{id:"list-persistence-policies"},"List persistence policies"),(0,r.kt)("p",null,"You can see which persistence policy currently applies to a namespace."),(0,r.kt)("h4",{id:"pulsar-admin-1"},"Pulsar-admin"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/docs/pulsar-admin#namespaces-get-persistence"},(0,r.kt)("inlineCode",{parentName:"a"},"get-persistence"))," subcommand and specify the namespace."),(0,r.kt)("p",null,"The following is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n')),(0,r.kt)("h4",{id:"rest-api-1"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getPersistence?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/persistence")),(0,r.kt)("h4",{id:"java-1"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nPersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n\n")),(0,r.kt)("h2",{id:"how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper"),(0,r.kt)("p",null,"This diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZooKeeper and BookKeeper",src:a(16681).Z})),(0,r.kt)("p",null,"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."))}k.isMDXComponent=!0},16681:function(e,t,a){t.Z=a.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"}}]);