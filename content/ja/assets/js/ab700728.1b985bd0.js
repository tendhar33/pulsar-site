"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9607],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},s=void 0,p={unversionedId:"sql-deployment-configurations",id:"version-2.9.1/sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",description:"You can configure Presto Pulsar connector and deploy a cluster with the following instruction.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.9.1/sql-deployment-configurations.md",sourceDirName:".",slug:"/sql-deployment-configurations",permalink:"/ja/docs/sql-deployment-configurations",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/sql-deployment-configurations.md",tags:[],version:"2.9.1",frontMatter:{id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Query data",permalink:"/ja/docs/sql-getting-started"},next:{title:"REST APIs",permalink:"/ja/docs/sql-rest-api"}},u=[{value:"Configure Presto Pulsar Connector",id:"configure-presto-pulsar-connector",children:[],level:2},{value:"Query data from existing Presto clusters",id:"query-data-from-existing-presto-clusters",children:[],level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",children:[{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can configure Presto Pulsar connector and deploy a cluster with the following instruction."),(0,a.kt)("h2",{id:"configure-presto-pulsar-connector"},"Configure Presto Pulsar Connector"),(0,a.kt)("p",null,"You can configure Presto Pulsar Connector in the ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," properties file. The configuration for the connector and the default values are as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\n# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the url of Pulsar broker service\npulsar.web-service-url=http://localhost:8080\n\n# URI of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n")),(0,a.kt)("p",null,"You can connect Presto to a Pulsar cluster with multiple hosts. To configure multiple hosts for brokers, add multiple URLs to ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.web-service-url"),". To configure multiple hosts for ZooKeeper, add multiple URIs to ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri"),". The following is an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\npulsar.web-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: by default, Pulsar SQL does not get the last message in a topic"),". It is by design and controlled by settings. By default, BookKeeper LAC only advances when subsequent entries are added. If there is no subsequent entry added, the last written entry is not visible to readers until the ledger is closed. This is not a problem for Pulsar which uses managed ledger, but Pulsar SQL directly reads from BookKeeper ledger."),(0,a.kt)("p",null,"If you want to get the last message in a topic, set the following configurations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For the broker configuration, set ",(0,a.kt)("inlineCode",{parentName:"p"},"bookkeeperExplicitLacIntervalInMills")," > 0 in ",(0,a.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"standalone.conf"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For the Presto configuration, set ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.bookkeeper-explicit-interval")," > 0 and ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.bookkeeper-use-v2-protocol=false"),"."))),(0,a.kt)("p",null,"However, using BookKeeper V3 protocol introduces additional GC overhead to BK as it uses Protobuf."),(0,a.kt)("h2",{id:"query-data-from-existing-presto-clusters"},"Query data from existing Presto clusters"),(0,a.kt)("p",null,"If you already have a Presto cluster, you can copy the Presto Pulsar connector plugin to your existing cluster. Download the archived plugin package with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget pulsar:binary_release_url\n\n")),(0,a.kt)("h2",{id:"deploy-a-new-cluster"},"Deploy a new cluster"),(0,a.kt)("p",null,"Since Pulsar SQL is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://trino.io"},"Trino (formerly Presto SQL)"),", the configuration for deployment is the same for the Pulsar SQL worker."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For how to set up a standalone single node environment, refer to ",(0,a.kt)("a",{parentName:"p",href:"sql-getting-started"},"Query data"),"."))),(0,a.kt)("p",null,"You can use the same CLI args as the Presto launcher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker --help\nUsage: launcher [options] command\n\nCommands: run, start, stop, restart, kill, status\n\nOptions:\n  -h, --help            show this help message and exit\n  -v, --verbose         Run verbosely\n  --etc-dir=DIR         Defaults to INSTALL_PATH/etc\n  --launcher-config=FILE\n                        Defaults to INSTALL_PATH/bin/launcher.properties\n  --node-config=FILE    Defaults to ETC_DIR/node.properties\n  --jvm-config=FILE     Defaults to ETC_DIR/jvm.config\n  --config=FILE         Defaults to ETC_DIR/config.properties\n  --log-levels-file=FILE\n                        Defaults to ETC_DIR/log.properties\n  --data-dir=DIR        Defaults to INSTALL_PATH\n  --pid-file=FILE       Defaults to DATA_DIR/var/run/launcher.pid\n  --launcher-log-file=FILE\n                        Defaults to DATA_DIR/var/log/launcher.log (only in\n                        daemon mode)\n  --server-log-file=FILE\n                        Defaults to DATA_DIR/var/log/server.log (only in\n                        daemon mode)\n  -D NAME=VALUE         Set a Java system property\n\n")),(0,a.kt)("p",null,"The default configuration for the cluster is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto"),". You can customize your deployment by modifying the default configuration."),(0,a.kt)("p",null,"You can set the worker to read from a different configuration directory, or set a different directory to write data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker run --etc-dir /tmp/incubator-pulsar/conf/presto --data-dir /tmp/presto-1\n\n")),(0,a.kt)("p",null,"You can start the worker as daemon process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker start\n\n")),(0,a.kt)("h3",{id:"deploy-a-cluster-on-multiple-nodes"},"Deploy a cluster on multiple nodes"),(0,a.kt)("p",null,"You can deploy a Pulsar SQL cluster or Presto cluster on multiple nodes. The following example shows how to deploy a cluster on three-node cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the Pulsar binary distribution to three nodes.")),(0,a.kt)("p",null,"The first node runs as Presto coordinator. The minimal configuration requirement in the ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/config.properties")," file is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n\n")),(0,a.kt)("p",null,"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.web-service-url")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri")," configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," file accordingly for the three nodes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the coordinator node."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start worker nodes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Start the SQL CLI and check the status of your cluster.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql --server <coordinate_url>\n\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Check the status of your nodes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\npresto> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state  \n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active \n 3       | http://192.168.2.2:8081 | testversion  | false       | active \n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n\n")),(0,a.kt)("p",null,"For more information about deployment in Presto, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/installation/deployment.html"},"Presto deployment"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'The broker does not advance LAC, so when Pulsar SQL bypass broker to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the broker.conf.'))))}d.isMDXComponent=!0}}]);