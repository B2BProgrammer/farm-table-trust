package main

import (
	"fmt"

	"github.com/hyperledger/fabric/core/chaincode/shim"
)

var logger = shim.NewLogger("farm-table-trust")

/**

  Struct - Farm-Table-Trust Chaincode defined following properties
**/
type FarmTableTrustChainCode struct {
	tableMap map[string]int
	funcMap  map[string]InvokeFunc
}

/////////////////////////////////////////////////////
// Constant for All function name that will be called from invoke
/////////////////////////////////////////////////////
const (
	CUSRINFO string = "CreateUser"
	QUSRINFO string = "QueryUser"

	CPOINFO string = "CreatePo"
	QPOINFO string = "QueryPo"

	CPRODINFO string = "CreateProduce"
	QPRODINFO string = "QueryProduce"
)

type InvokeFunc func(stub shim.ChaincodeStubInterface, args []string) pb.Response

/**
Map of All Functions, that are invoked from the node sdk
**/
func (t *FarmTableTrustChainCode) initMaps() {
	t.tableMap = make(map[string]int)
	t.funcMap = make(map[string]InvokeFunc)

}

/**
Init Pointer function called from Node SDK

 1.  Passed Parameter : stub shim.ChaincodeStubInterface
 2. Accessed Strut using pointer : RestaturantChainCode
 3. Return response from init function : pb.Response
**/
func (t *FarmTableTrustChainCode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	logger.Info("############## Enter Init Method#################")
	t.initMaps()
	isInit = true

	logger.Debug("Restaurant ChainCode Initiated")
	return shim.Success(nil)
}

/**
   Invoke Chaincode functions as requested by the Invoke Function
   In fabric 1.0 both Invoke and Query Requests are handled by Invoke

1.  Passed Parameter : stub shim.ChaincodeStubInterface
2. Accessed Strut using pointer : RestaturantChainCode
3. Return response from init function : pb.Response
**/
func (t *FarmTableTrustChainCode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	logger.Info("############## Enter Invoke Method#################")

	if !isInit {
		t.initMaps()
		isInit = true
	}

	/* // This will return the invoked function & passed parameters
	function, args := stub.GetFunctionAndParameters()

	f, ok := t.funcMap[function] */

	return shim.Success(nil)
}

// Flag for tracking Is Initialzed
var isInit = false

func main() {
	fmt.Println("Hello World")
	logger.Info("############## Enter Main Method#################")
	err := shim.Start(new(FarmTableTrustChainCode))
	if err != nil {
		logger.Errorf("Error Starting Simple ChainCode : %s", err)
	}
}
