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
                "premium": "$6500.00",
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
                    }
                ],
                "assets": [
                    {
                        "name": "IlFornino Stainless Steel Wood Fire Pizza Oven",
                        "assetType": "Appliance",
                        "value": "$75,000",
                        "photos": [
                            {
                                "photoID": 66787,
                                "URL": "https://marshcdn.aws.com/assets/photos/66787"
                            },
                            {
                                "photoID": 66788,
                                "URL": "https://marshcdn.aws.com/assets/photos/66788"
                            },
                            {
                                "photoID": 66998,
                                "URL": "https://marshcdn.aws.com/assets/photos/66998"
                            }
                        ]
                    },
                    {
                        "name": "Advance TabCo Bar",
                        "assetType": "Furniture",
                        "value": "$20,000",
                        "photos": [
                            {
                                "photoID": 66544,
                                "URL": "https://marshcdn.aws.com/assets/photos/66544"
                            },
                            {
                                "photoID": 66543,
                                "URL": "https://marshcdn.aws.com/assets/photos/66543"
                            },
                            {
                                "photoID": 66542,
                                "URL": "https://marshcdn.aws.com/assets/photos/66542"
                            }
                        ]
                    },
                    {
                        "name": "2012 Peugeot Blue Van",
                        "assetType": "Transport Vehicle",
                        "value": "$42,000",
                        "photos": [
                            {
                                "photoID": 66548,
                                "URL": "https://marshcdn.aws.com/assets/photos/66548"
                            },
                            {
                                "photoID": 66549,
                                "URL": "https://marshcdn.aws.com/assets/photos/66549"
                            },
                            {
                                "photoID": 66547,
                                "URL": "https://marshcdn.aws.com/assets/photos/66547"
                            }
                        ]
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