var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema(
    {
        produceId: {
            type: 'String'
        },
        docType: {
            type: 'String'
        },
        acl: {
            growers: {},
            middleman: {},
            consumers: {}
        },
        produceName: {
            type: 'String'
        },
        produceDescription: {
            type: 'String'
        },
        produceDetails: {
            biologicalName: {
                type: 'String'
            },
            color: {
                type: 'String'
            },
            dimensions: {
                length: {
                    type: 'Number'
                },
                breadth: {
                    type: 'Number'
                },
                height: {
                    type: 'Number'
                },
                thickness: {
                    type: 'Number'
                }
            }
        },
        producedetails: {
            isgrowninFarm: {
                type: 'Boolean'
            },
            ispoultry: {
                type: 'Boolean'
            },
            isfactorymanufactured: {
                type: 'Boolean'
            }
        },
        fertilizerdetails: {
            organic: {
                type: 'Boolean'
            },
            factory: {
                type: 'String'
            },
            chemicallevel: {
                type: 'Date'
            }
        },
        geographicalInformation: {
            region: {
                type: 'String'
            },
            country: {
                type: 'String'
            },
            latitude: {
                type: 'String'
            },
            longitude: {
                type: 'String'
            }
        },
        isgmo: {
            type: 'Boolean'
        },
        isEdible: {
            type: 'String'
        },
        ageRestrictions: {
            teen: {
                type: 'String'
            },
            adult: {
                type: 'String'
            },
            old: {
                type: 'String'
            }
        },
        pricingInformation: {
            grower: {
                growerQuoted: {
                    type: 'Number'
                },
                growerSold: {
                    type: 'Number'
                }
            },
            middleman: {
                middlemanQuoted: {
                    type: 'Number'
                },
                middlemanBought: {
                    type: 'Number'
                }
            },
            consumer: {
                consumerQuoted: {
                    type: 'Number'
                },
                consumerBought: {
                    type: 'Number'
                }
            }
        },
        packagingInformation: {
            isPacked: {
                type: 'Boolean'
            }
        }
    }

)



var food = mongoose.model('food', foodSchema);
module.exports = food;