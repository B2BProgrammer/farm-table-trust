var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var poSchema = new Schema(
    {
        poId: {
            type: 'String'
        },
        docType: {
            type: 'String'
        },
        productType: {
            type: 'String'
        },
        orderDetails: {
            items: {
                type: [
                    'Mixed'
                ]
            },
            total: {
                totalCost: {
                    type: 'Number'
                },
                totalItems: {
                    type: 'Number'
                }
            }
        },
        orderFromDetails: {
            organizationName: {
                type: 'String'
            },
            orgDetails: {
                type: 'String'
            },
            primaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            },
            secondaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            }
        },
        orderToDetails: {
            organizationName: {
                type: 'String'
            },
            orgDetails: {
                type: 'String'
            },
            primaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            },
            secondaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            }
        },
        growerDetails: {
            growerName: {
                type: 'String'
            },
            growerDetails: {
                type: 'String'
            },
            primaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            },
            secondaryContact: {
                firstName: {
                    type: 'String'
                },
                lastName: {
                    type: 'String'
                },
                contactNumber: {
                    type: 'String'
                }
            }
        }
    }

)



var po = mongoose.model('po', poSchema);
module.exports = po;