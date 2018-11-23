## usage message
function usage() {
	echo
	echo "Some possible options:"
	echo
	echo "	bootstrap.sh start"
	echo "	bootstrap.sh stop"
	echo
	echo "All defaults:"
	echo "	bootstrap.sh"
	echo "	Restarts the network and uses latest docker images instead of specific TAG "
	exit 1
}

echo " _                           _        _   _      _                      _"
echo "| |    __ _ _   _ _ __   ___| |__    | \ | | ___| |___      _____  _ __| | __"
echo "| |   / _\` | | | | '_ \ / __| '_ \   |  \| |/ _ \ __\ \ /\ / / _ \| '__| |/ /"
echo "| |__| (_| | |_| | | | | (__| | | |  | |\  |  __/ |_ \ V  V / (_) | |  |   <"
echo "|_____\__,_|\__,_|_| |_|\___|_| |_|  |_| \_|\___|\__| \_/\_/ \___/|_|  |_|\_\\"
echo ""





## Delete all the Docker Images
function delDckrImages(){
	##printf "\n ===========DELETING All the Docker Images======================\n"	
	docker stop $(docker ps -a -q)
	docker rm -f $(docker ps -aq)
	docker rmi -f $(docker images -q)
}

## Pull all the required Docker Images
function pullAllRequiredDckrImages(){		
	delDckrImages
	printf "\n================All required Docker Images are not available, Starting pull of all required Images======\n"


	: ${IMAGE_TAG_1:="1.3.0"}		
	for IMAGE in ca tools orderer peer javaenv ccenv;
	do
		docker pull hyperledger/fabric-$IMAGE:$IMAGE_TAG_1
		docker tag hyperledger/fabric-$IMAGE:$IMAGE_TAG_1 hyperledger/fabric-$IMAGE:latest 
	done

	: ${IMAGE_TAG_2:="0.4.14"}
	for IMAGE in couchdb kafka zookeeper;
	do
		docker pull hyperledger/fabric-$IMAGE:$IMAGE_TAG_2
		docker tag hyperledger/fabric-$IMAGE:$IMAGE_TAG_2 hyperledger/fabric-$IMAGE:latest 
	done

	## Non-HyperLedger Images
	docker pull mongo:4.1
	docker pull postgres:11
	docker pull redis:5.0
}




function startAllRequiredDckrImages(){
	printf "\n ===========STARTING All the required Docker Images===============\n"
	#Launch the network
	docker-compose -f ./docker-compose.yaml -f ./docker-compose-couch.yaml -f ./docker-compose-mongo.yaml -f ./docker-compose-postgres.yaml -f ./docker-compose-redis.yaml up -d
}


function installNodeModules(){	
	## 1. Remove, if any node_modules installed now
	cd ../../
	rm -rf ./node_modules

	## 2. Install Node Modules
	printf "\n================Install Node Modules=================\n"
	npm install
}


function bringAppServerUP(){
	printf "\n================ Bringing Node HTTP App Server - UP =================\n"
	npm start
}

## Tearing the complete Network
function teardownNetwork(){
	printf "\n================Down Existing Docker Containers & Delete Docker Images=================\n"

	## 1. Bring Down all the containers	
	docker-compose -f ./docker-compose.yaml -f ./docker-compose-couch.yaml -f ./docker-compose-mongo.yaml -f ./docker-compose-postgres.yaml -f ./docker-compose-redis.yaml down
	##docker ps -qa | xargs docker rm

	## 2. Remove All teh containers & Docker Images
	delDckrImages
}


## BootStraping the complete Network
function bootstrap(){
	## 0. Clean or delete all teh docker images	
	teardownNetwork

	## 1. Pull All the required Docker Images for BlockChain Project from Docker Hub
	## Explictly pulling of images, commented as docker-compose will handle both [pull + up] of images
	pullAllRequiredDckrImages

	## 2. Start All the required Docker Images
	startAllRequiredDckrImages	

	## 3. Install all the Node Modules
	installNodeModules

	## 4. Bring the app Server & Listen at port
	bringAppServerUP
}





## Network launch modes
## up (or Start), down (or stop) , restart
case $1 in
'start' | 'up')
	bootstrap
	;;
'stop' | 'down')
	teardownNetwork
	;;
'restart')
	teardownNetwork
	bootstrap
	;;
*)
	usage
	;;
esac