"use strict";(self.webpackChunkaws_blockchain_node_runners=self.webpackChunkaws_blockchain_node_runners||[]).push([[975],{9870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(5893),l=n(1151);function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sample-aws-blockchain-node-runner-app-for-stacks-nodes",children:"Sample AWS Blockchain Node Runner app for Stacks Nodes"}),"\n",(0,s.jsx)(t.p,{children:'Stacks nodes on AWS can currently be deployed in only the "follower" configuration, but is scoped to handle three different configurations: "follower", "miner", and "signer". You can choose to deploy nodes as a single node or a highly available (HA) node.'}),"\n",(0,s.jsx)(t.h2,{id:"overview-of-deployment-architectures-for-single-and-ha-setups",children:"Overview of Deployment Architectures for Single and HA setups"}),"\n",(0,s.jsx)(t.h3,{id:"single-node-setup",children:"Single node setup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Single Node Deployment",src:n(7734).Z+"",width:"1371",height:"640"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["A Stacks node deployed in the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on the Stacks network through ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The Stacks node is used by dApps or development tools internally from within the Default VPC. JSON RPC API is not exposed to the Internet directly to protect nodes from unauthorized access."}),"\n",(0,s.jsxs)(t.li,{children:["The Stacks node uses all required secrets locally, but stores a copy in ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"})," as secure backup."]}),"\n",(0,s.jsx)(t.li,{children:"The Stacks node sends various monitoring metrics for both EC2 and Stacks nodes to Amazon CloudWatch."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"ha-setup",children:"HA setup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Highly Available Nodes Deployment",src:n(5763).Z+"",width:"1857",height:"1129"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["A set of Base or Extended RPC Stacks nodes are deployed within the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html",children:"Auto Scaling Group"})," in the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html",children:"Default VPC"})," continuously synchronizes with the rest of nodes on Stacks network through ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"Internet Gateway"}),". ",(0,s.jsx)(t.strong,{children:"Note that HA setup is not suitable for note types other than follower."})]}),"\n",(0,s.jsxs)(t.li,{children:["The Stacks nodes are accessed by dApps or development tools internally through ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",children:"Application Load Balancer"}),". JSON RPC API is not exposed to the Internet to protect nodes from unauthorized access. dApps need to handle user authentication and API protection, like ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/architecture/dapp-authentication-with-amazon-cognito-and-web3-proxy-with-amazon-api-gateway/",children:"in this example for dApps on AWS"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The Stacks nodes use all required secrets locally, but store a copy in ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"})," as secure backup."]}),"\n",(0,s.jsx)(t.li,{children:"The Stacks nodes send various monitoring metrics for both EC2 and Stacks nodes to Amazon CloudWatch."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-materials",children:"Additional materials"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Managing Secrets"}),(0,s.jsxs)(t.p,{children:["These details will become relevant with the implementation of the ",(0,s.jsx)(t.code,{children:"signer"})," and ",(0,s.jsx)(t.code,{children:"miner"})," node types."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Well-Architected Checklist"}),(0,s.jsxs)(t.p,{children:["This is the Well-Architected checklist for Stacks nodes implementation of the AWS Blockchain Node Runner app. This checklist takes into account questions from the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected Framework"})," which are relevant to this workload. Please feel free to add more checks from the framework if required for your workload."]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Pillar"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Control"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Question/Check"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Network protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Are there unnecessary open ports in security groups?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Please note that ports 20443 and 20444 for Stacks are open to the public to support P2P protocols. We have to rely on the protection mechanisms built into the Stacks software to protect those ports."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Traffic inspection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AWS WAF could be implemented for traffic inspection. Additional charges will apply."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute protection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reduce attack surface"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon Linux 2023 AMI. You may choose to run hardening scripts on it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable people to perform actions at a distance"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Systems Manager for terminal session, not ssh ports."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection at rest"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use encrypted Amazon Simple Storage Service (Amazon S3) buckets"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses Amazon S3 managed keys (SSE-S3) encryption."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data protection in transit"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use TLS"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The AWS Application Load balancer currently uses HTTP listener. Create HTTPS listener with self signed certificate if TLS is desired."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authorization and access control"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Following principle of least privilege access"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'In all node types, root user is not used (using special user "stacks" instead).'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Application security"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Security focused development practices"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cdk-nag is being used with appropriate suppressions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost optimization"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Service selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use cost effective resources"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["1. AMD-based instances are used for Consensus and RPC node to save the costs. Consider compiling Graviton-based binaries to improve costs for compute.",(0,s.jsx)("br",{}),"2. Cost-effective EBS gp3 are preferred instead of io2."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cost awareness"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Estimate costs"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Single RPC node with ",(0,s.jsx)(t.code,{children:"m5.large"})," EBS gp3 volumes about 512 GB with On-Demand pricing will cost around US$151.43 per month in the US East (N. Virginia) region not including network requests for follower nodes. More analysis needed."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reliability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resiliency implementation"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Withstand component failures"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This solution uses AWS Application Load Balancer with RPC nodes for high availability. Newly provisioned Stacks nodes triggered by Auto Scaling get up and running in about 80-90 minutes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Data backup"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is data backed up?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Considering blockchain data is replicated by nodes automatically and Stacks nodes sync from start within an hour and a half, we don't use any additional mechanisms to backup the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resource monitoring"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How are workload resources monitored?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resources are being monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are being pushed via CloudWatch Agent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Performance efficiency"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is compute solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Compute solution is selected based on best price-performance, i.e. AWS AMD-based Amazon EC2 instances."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is storage solution selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Storage solution is selected based on best price-performance, i.e. gp3 Amazon EBS volumes with optimal IOPS and throughput."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Architecture selection"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is the best performance architecture selected?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"We used a combination of recommendations from the Stacks community and our own testing."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Operational excellence"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Workload health"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"How is health of workload determined?"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Health of workload is determined via AWS Application Load Balancer Target Group Health Checks, on port 20444."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sustainability"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Hardware & services"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Select most efficient hardware for your workload"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The solution uses AMD-powered instances. There is a potential to use AWS Graviton-based Amazon EC2 instances which offer the best performance per watt of energy use in Amazon EC2."})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,s.jsx)(t.h3,{id:"setup-cloud9",children:"Setup Cloud9"}),"\n",(0,s.jsxs)(t.p,{children:["We will use AWS Cloud9 to execute the subsequent commands. Follow the instructions in ",(0,s.jsx)(t.a,{href:"../../docs/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n",(0,s.jsx)(t.h3,{id:"clone-this-repository-and-install-dependencies",children:"Clone this repository and install dependencies"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   git clone https://github.com/aws-samples/aws-blockchain-node-runners.git\n   cd aws-blockchain-node-runners\n   npm install\n"})}),"\n",(0,s.jsx)(t.h3,{id:"deploy-single-node",children:"Deploy Single Node"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Make sure you are in the root directory of the cloned repository"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If you have deleted or don't have the default VPC, create default VPC"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"    aws ec2 create-default-vpc\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," You may see the following error if the default VPC already exists: ",(0,s.jsx)(t.code,{children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region."}),". That means you can just continue with the following steps."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Configure  your setup"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Create your own copy of ",(0,s.jsx)(t.code,{children:".env"})," file and edit it to update with your AWS Account ID and Region:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n   cd lib/stacks\n   pwd\n   cp ./sample-configs/.env-sample-follower .env\n   nano .env\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," Example configuration parameters are set in the local ",(0,s.jsx)(t.code,{children:".env-sample"})," file. You can find more examples inside ",(0,s.jsx)(t.code,{children:"sample-configs"})," directory."]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Deploy common components such as IAM role, and Amazon S3 bucket to store data snapshots"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n   npx cdk deploy stacks-common\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Deploy Sync Node"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n   npx cdk deploy stacks-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["After starting the node you need to wait for the initial synchronization process to finish. It may take about 90 minutes and you can use Amazon CloudWatch to track the progress. There is a script that publishes CloudWatch metrics every 5 minutes, where you can watch ",(0,s.jsx)(t.code,{children:"stacks_tip_height"})," and ",(0,s.jsx)(t.code,{children:"burn_block_height"})," metrics. When the node is fully synced the ",(0,s.jsx)(t.code,{children:"stacks_tip_height"})," metric will start to display. To see them:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are in the region you have specified for ",(0,s.jsx)(t.code,{children:"AWS_REGION"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Open ",(0,s.jsx)(t.code,{children:"Dashboards"})," and select ",(0,s.jsx)(t.code,{children:"stacks-single-node-*"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Connect with the RPC API exposed by the node:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.nodeinstanceid? | select(. != null)')\n   NODE_INTERNAL_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[*].Instances[*].PrivateIpAddress' --output text)\n   curl http://$NODE_INTERNAL_IP:20443/v2/info'\n"})}),"\n",(0,s.jsx)(t.p,{children:"You should get a response like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",children:'{\n    "peer_version": 402653193,\n    "pox_consensus": "27dbe5fc464fd0b9e1da43691d8fac55d4ff2760",\n    "burn_block_height": 832605,\n    "stable_pox_consensus": "2a4365ecb6c1d9aed5308a5bbdf817ab134fe4fb",\n    "stable_burn_block_height": 832598,\n    "server_version": "stacks-node 0.0.1 (:+, release build, linux [x86_64])",\n    "network_id": 1,\n    "parent_network_id": 3652501241,\n    "stacks_tip_height": 141155,\n    "stacks_tip": "7ef7a91b012784ab5f19ce9f1c5665821b2a365e25527da07df76d210d9805e4",\n    "stacks_tip_consensus_hash": "dcbfa607058859324b95466cc52a77ae8d0692cd",\n    "genesis_chainstate_hash": "74237aa39aa50a83de11a4f53e9d3bb7d43461d1de9873f402e5453ae60bc59b",\n    "unanchored_tip": null,\n    "unanchored_seq": null,\n    "exit_at_block_height": null,\n    "node_public_key": "0246622dd66e1db792982e02ab933a056832e8bc5e9e6efc70f35576a16ca39966",\n    "node_public_key_hash": "93ef5fad09be740ce5e279b9b83ac910cd8a5cd4",\n    "affirmations": {\n        "heaviest": "pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",\n        "stacks_tip": "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",\n        "sortition_tip": "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",\n        "tentative_best": "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"\n    },\n    "last_pox_anchor": {\n        "anchor_block_hash": "95c86834f315efb220a1105ff3fe9543a099d28ee6fe996d758ca2dc8cbc8e57",\n        "anchor_block_txid": "88afd29afb8fd122512ab8951c2cf488f394b61a9c4fcb77ba3f3ba15c6500a8"\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"deploy-the-ha-nodes",children:"Deploy the HA Nodes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Configure and deploy multiple HA Nodes"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n   npx cdk deploy stacks-ha-nodes --json --outputs-file ha-nodes-deploy.json\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Give the new RPC nodes about 90 minutes to initialize and then run the following query against the load balancer behind the RPC node created"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"    export RPC_ABL_URL=$(cat ha-nodes-deploy.json | jq -r '..|.alburl? | select(. != null)')\n    echo $RPC_ABL_URL\n\n    curl http://$RPC_ABL_URL:20443/v2/info' | jq\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result should show the status of the blockchain."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"NOTE:"})," By default and for security reasons the load balancer is available only from within the default VPC in the region where it is deployed. It is not available from the Internet and is not open for external connections. Before opening it up please make sure you protect your RPC APIs."]}),"\n",(0,s.jsx)(t.h3,{id:"clearing-up-and-undeploy-everything",children:"Clearing up and undeploy everything"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Undeploy HA Nodes, Single Nodes and Common stacks"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   # Setting the AWS account id and region in case local .env file is lost\n   export AWS_ACCOUNT_ID=<your_target_AWS_account_id>\n   export AWS_REGION=<your_target_AWS_region>\n\n   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n\n   # Undeploy HA Nodes\n   cdk destroy stacks-ha-nodes\n\n   # Undeploy Single Node\n   cdk destroy stacks-single-node\n\n   # Delete all common components like IAM role and Security Group\n   cdk destroy stacks-common\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Follow steps to delete the Cloud9 instance in ",(0,s.jsx)(t.a,{href:"../../doc/setup-cloud9.md",children:"Cloud9 Setup"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"How to check the logs of the clients running on my sync node?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In this tutorial we chose not to use SSH and use Session Manager instead. That allows you to log all sessions in AWS CloudTrail to see who logged into the server and when. If you receive an error similar to ",(0,s.jsx)(t.code,{children:"SessionManagerPlugin is not found"}),", ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",children:"install Session Manager plugin for AWS CLI"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n\n   export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.nodeinstanceid?|select(. != null)' )\n   export AWS_REGION=$(cat single-node-deploy.json | jq -r '..|.region?|select(. != null)' )\n   echo \"INSTANCE_ID=$INSTANCE_ID\"\n   echo \"AWS_REGION=$AWS_REGION\"\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo su -\n   tail -f /var/log/stacks/stacks.log\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"How to check the logs from the EC2 user-data script?"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   pwd\n   # Make sure you are in aws-blockchain-node-runners/lib/stacks\n\n   export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.nodeinstanceid?|select(. != null)' )\n   export AWS_REGION=$(cat single-node-deploy.json | jq -r '..|.region?|select(. != null)' )\n   echo \"INSTANCE_ID=$INSTANCE_ID\"\n   echo \"AWS_REGION=$AWS_REGION\"\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo cat /var/log/cloud-init-output.log\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"How can I restart the Stacks service?"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"   export INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.nodeinstanceid?|select(. != null)' )\n   export AWS_REGION=$(cat single-node-deploy.json | jq -r '..|.region?|select(. != null)' )\n   echo \"INSTANCE_ID=$INSTANCE_ID\"\n   echo \"AWS_REGION=$AWS_REGION\"\n   aws ssm start-session --target $INSTANCE_ID --region $AWS_REGION\n   sudo systemctl status stacks\n   # Then if the status is bad run the following:\n   sudo systemctl restart stacks\n"})}),"\n",(0,s.jsx)(t.h2,{id:"upgrades",children:"Upgrades"}),"\n",(0,s.jsxs)(t.p,{children:["When nodes need to be upgraded or downgraded, ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/devops/performing-bluegreen-deployments-with-aws-codedeploy-and-auto-scaling-groups/",children:"use blue/green pattern to do it"}),". This is not yet automated and contributions are welcome!"]})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const r={sidebar_position:4,sidebar_label:"Stacks"},a="",c={id:"Blueprints/Stacks",title:"Stacks",description:"",source:"@site/docs/Blueprints/Stacks.md",sourceDirName:"Blueprints",slug:"/Blueprints/Stacks",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Stacks",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-samples/aws-blockchain-node-runners/website/docs/Blueprints/Stacks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Stacks"},sidebar:"sidebar",previous:{title:"Scroll",permalink:"/aws-blockchain-node-runners/docs/Blueprints/Scroll"}},d={},p=[];function h(e){const t={h1:"h1",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:""}),"\n","\n","\n",(0,s.jsx)(o,{})]})}function u(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5763:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Stacks HA Node AWS Diagram-9f193eecb4c5ef0382205738d5cd8269.png"},7734:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Stacks Single Node AWS Diagram-f6bc4d7bda14532123c976432adae2c1.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const l={},i=s.createContext(l);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);