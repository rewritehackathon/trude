export default {
    "customer": {
        "firstName": "Janet",
        "lastName": "Brown",
        "address": "222 W. Lake Avenue",
        "city": "Oakland",
        "state": "California",
        "country": "United States of America",
        "ssn": "encryptednumber",
        "mobilePhone": "510-778-0987",
        "homePhone": "510-445-7865",
        "email": "janet@tastyrestaurant.com",
        "businesses": [
            {
                "name": "Tasty Restaurant",
                "businessID": 143338,
                "businessType": "Food/Restaurant"
            }
        ],
        "policies": [
            {
                "policyID": "123",
                "policyNumber": "990",
                "policyType": "Business",
                "policyStart": "01-01-2019",
                "policyEnd": "01-01-2020",
                "premium": "6500",
                "businessID": 143338,
                "coverage": [
                    {
                        "name": "General Liability",
                        "coverageAmount": "$1,000,000",
                        "cost": "$4500"
                    },
                    {
                        "name": "Workers Compensation",
                        "coverageAmount": "$500,000",
                        "cost": "$2000"
                    },
                    {
                        "name": "Business Interruption",
                        "coverageAmount": "$500,000",
                        "cost": "$2000"
                    }
                ],
                "assets": [
                    {
                        "name": "IlFornino Stainless Steel Wood Fire Pizza Oven",
                        "assetType": "Appliance",
                        "serialNumber": "1234RTL09239001",
                        "value": "75000",
                        "photos": [
                            {
                                "photoID": 66787,
                                "URL": "https://cdn.shopify.com/s/files/1/0018/0492/7094/products/51lq5tfFwRL_800x.jpg?v=1534927420"
                            },
                            {
                                "photoID": 66788,
                                "URL": "https://marshcdn.aws.com/assets/photos/66788"
                            },
                            {
                                "photoID": 66998,
                                "URL": "https://marshcdn.aws.com/assets/photos/66998"
                            }
                        ],
                        "isClaimed": true,
                        "isDocumented": false
                    },
                    {
                        "name": "Advance TabCo Bar",
                        "assetType": "Furniture",
                        "serialNumber": "1234RTL092930001",
                        "value": "20000",
                        "photos": [
                            {
                                "photoID": 66544,
                                "URL": "https://cdnimg.webstaurantstore.com/images/products/large/179514/454798.jpg"
                            },
                            {
                                "photoID": 66543,
                                "URL": "https://cdnimg.webstaurantstore.com/images/products/large/179514/454798.jpg"
                            },
                            {
                                "photoID": 66542,
                                "URL": "https://marshcdn.aws.com/assets/photos/66542"
                            }
                        ],
                        "isClaimed": true,
                        "isDocumented": false
                    },
                    {
                        "name": "Flash Furniture 30'' Square Black Laminate Table Set with 4 Wood Slat",
                        "assetType": "Furniture",
                        "serialNumber": "1234RTL0916010001",
                        "value": "350",
                        "photos": [
                            {
                                "photoID": 66544,
                                "URL": "https://images-na.ssl-images-amazon.com/images/I/81k6HHKTP0L._SL1500_.jpg"
                            },
                        ],
                        "isClaimed": true,
                        "isDocumented": false
                    },
                    {
                        "name": "Oklahoma Sound Aristocrat Floor Lectern, Mahogany",
                        "assetType": "Furniture",
                        "serialNumber": "1234RTL0916010001",
                        "value": "350",
                        "photos": [
                            {
                                "photoID": 66544,
                                "URL": ""
                            },
                        ],
                        "isClaimed": true,
                        "isDocumented": false
                    },
                    {
                        "name": "2012 Peugeot Blue Van",
                        "assetType": "Transport Vehicle",
                        "value": "42000",
                        "serialNumber": "1234THK2893001",
                        "photos": [
                            {
                                "photoID": 66548,
                                "URL": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/Y6wAAOSwIOtbXHQd/$_86.JPG"
                            },
                            {
                                "photoID": 66549,
                                "URL": "https://marshcdn.aws.com/assets/photos/66549"
                            },
                            {
                                "photoID": 66547,
                                "URL": "https://marshcdn.aws.com/assets/photos/66547"
                            }
                        ],
                        "isClaimed": true,
                        "isDocumented": false
                    }
                ],
                "claims": [
                    {
                        "claimID": 33346,
                        "valueOfClaim": "Above $10,000",
                        "details": "Property stolen",
                        "dateOfIncident": "02-14-2019",
                        "claimType": "Theft",
                        "claimStatus": "Closed"
                    }
                ]
            }
        ]
    }
}
