var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodProducerSchema = new Schema(
    {
        foodproducerId: {
            type: 'String'
        },
        docType: {
            type: 'String'
        },
        acl: {},
        foodproducerName: {
            type: 'String'
        },
        foodproducerDescription: {
            type: 'String'
        },
        foodproducerContactDetails: {
            firstname: {
                type: 'String'
            },
            lastname: {
                type: 'String'
            },
            address1: {
                type: 'String'
            },
            address2: {
                type: 'String'
            },
            city: {
                type: 'String'
            },
            State: {
                type: 'String'
            },
            telephone: {
                type: 'String'
            }
        },
        foodproducerFinancialDetails: {
            bankname: {
                type: 'String'
            },
            bankbranch: {
                type: 'String'
            },
            accountnumber: {
                type: 'String'
            },
            telephone: {
                type: 'String'
            }
        }
    }
)



var foodProducer = mongoose.model('foodProducer', foodProducerSchema);
module.exports = foodProducer;