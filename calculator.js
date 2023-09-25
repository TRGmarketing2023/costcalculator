// CREATE APPLICATION VARIABLES
app = {};
team = {};
logAction = "";

app["userId"] = Date.now();

async function getIPInfo() {
    let response = await fetch('https://ipinfo.io/json')
    console.log("IP Request Status: " + response.status); // 200
    if (response.status === 200) {
        let data = await response.json();
        app["IP"] = data.ip;
  	 	app["city"] = data.city;
  		app["region"] = data.region;
  	 	app["country"] = data.country;
  		app["timezone"] = data.timezone;
    } else {
    // SET DEFAULT IP DATA IF NONE EXISTS
		app["IP"] = "NA";
		app["city"] = "NA";
		app["region"] = "NA";
		app["country"] = "NA";
		app["timezone"] = "NA";
    }
}
getIPInfo();


//  DATA - WORK OPTIONS
var options = {
	office: { label: "", description: "", key: "office" },
	//hybrid: { label: "Hybrid", description: "", key: "hybrid" },
	//home: { label: "Home", description: "", key: "home" },
	
}

// DATA - COUNTIRES AND CONVERSIONS
var countries = { 

	us: {
		label: "(USD) United States",
		countryCode: "US", // Using "$" as the currency symbol for the US
		currency: "$", // Also using "$" as the symbol for consistency
		symbol: "$",
		conversion: 50,
		home: 599,
		hybrid: 680.00,
		office: 699.00,
		hardware: 56.13,
		local: 760,
	  },
	  
	  au: {
		label: "(AUD) Australia",
		countryCode: "AU", // Using "$" as the currency symbol for the AU
		currency: "$", // Also using "$" as the symbol for consistency
		symbol: "$",
		conversion: 35,
		home: 750,
		hybrid: 850.00,
		office: 1117.99,
		hardware: 86.03,
		local: 950,
	  },

	uk: { label: "(GBP) United Kingdom", countryCode: "UK", currency: "£", // Using "£" as the currency symbol for the UK
		symbol: "£", // Also using "£" as the symbol for consistency
		conversion: 67,
		home: 400,
		hybrid: 500.00,
		office: 584.00,
		hardware: 45.01,
		local: 540, 
	} 
}

// DATA SKILL LEVELS
var levels = {
	1: { label: "Junior", description: "", id: 0 },
	2: { label: "Intermediate", description: "", id: 1  },
	3: { label: "Senior", description: "", id: 2  },
}

var category = {
	1: { label: "General", description: "", id: 0 },
	2: { label: "Accounting", description: "", id: 1  },
	3: { label: "Back Office", description: "", id: 2  },
	4: { label: "Compliance", description: "", id: 3  },
	5: { label: "Construction", description: "", id: 4  },
	6: { label: "Creative", description: "", id: 5  },
	7: { label: "Customer Service Support", description: "", id: 6  },
	8: { label: "Development", description: "", id: 7  },
	9: { label: "Finance", description: "", id: 8  },
	10: { label: "Healthcare Virtual Assistant", description: "", id: 9  },
	11: { label: "IT Support", description: "", id: 10  },
	12: { label: "Language Support", description: "", id: 11  },
	13: { label: "Development", description: "", id: 12  },
	14: { label: "Live Chat", description: "", id: 13  },
	15: { label: "Digital Marketing", description: "", id: 14  },
	16: { label: "Quality Assurance", description: "", id: 15  },
	17: { label: "Real Estate", description: "", id: 16  },
	18: { label: "Sales", description: "", id: 17  },
	19: { label: "Travel & Tourism", description: "", id: 18  },
	20: { label: "Voice Services", description: "", id: 19  },
}



// DATA - ROLES
var roles = [ 

{ label: ".NET Devloper", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "3D Artist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [54669,60841,73186] , us: [3692,4717,5900] , au: [4717,6447,7910] , uk: [2051,2775,3440] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , details: "" , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "3D Modeler", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "3D Web Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Account Executive (AE)", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Account Manager", categoryId: "", levels: [1 , 2 , 3] , cs: [,37200,60700] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Accounts Payable", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,48400,65200] , us: [3294,4889,6209] , au: [3777,5649,7219] , uk: [1674,2531,3241] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Accounts Receivable", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,48400,65200] , us: [3400,5100,6500] , au: [4400,6700,8500] , uk: [1500,2500,3100] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Admin Support", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [13850,27100,43900] , us: [2365,2860,3575] , au: [3583,4333,5417] , uk: [1899,2297,2871] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] ,  keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Affiliate Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Animator", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Application Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Art Director", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Audit and Compliance", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [23550,28200,34900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Automation Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,54000,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Azure Data Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [ ,104000,214190] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Back-end Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,42750,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Bank Reconciliation", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,37200,42750] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Billing and Collections", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [19900,26000,37200] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Bookkeeping", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [34900,48400,71500] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Business Development Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Cash Management Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [37200,54000,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Channel Sales Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Civil Drafter", categoryId: "Architectural", levels: [1 , 2 , 3] , cs: [13850,27100,49509] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Client Success Manager", categoryId: "Account Management", levels: [1 , 2 , 3] , cs: [ ,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Cloud Engineer", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [37200,60700,88600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Content Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Content Strategist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Conversion Rate Optimization (CRO) Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Copywriter", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Creative Director", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [59600,126050,269250] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Creative Writer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Customer Service Representative", categoryId: "Customer Service Support", levels: [1 , 2 , 3] , cs: [19900,27100,43900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Customer Success Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "C# Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Entry Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [11450,23550,36050] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Scientist/Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,54000,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Storage & Management Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [ 51750,60700,96300] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "DevOps", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,38300,59600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Coordinator", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,37200,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Email Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Executive Assistant", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "E-commerce Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Fashion Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Financial Planning & Analysis", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [54000,59600,109550] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Front-end Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,42750,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Full Stack Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,48400,76400] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "General Accounting", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [54000,65200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Graphic Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,25950,59600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Healthcare Virtual Assistant", categoryId: "HealthCare", levels: [1 , 2 , 3] , cs: [13850,27100,43900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Help Desk Support", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [5400,13850,31600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "HR Officer/Admin", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [7800,27100,43900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Illustrator", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Influencer Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Inside Sales Representative", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Interior Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Inventory & Supply Chain ", categoryId: "", levels: [1 , 2 , 3] , cs: [ ,48400,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "IT Business Analyst", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,45000,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "IT Data Analyst", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [22350,31600,48400] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Key Account Manager (KAM)", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Lead Generation Specialist", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Marketing Automation Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Member Care Engineer", categoryId: "Architectural", levels: [1 , 2 , 3] , cs: [13850,27100,49509] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Mental Health Professional", categoryId: "HealthCare", levels: [1 , 2 , 3] , cs: [,37200,60700] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Mobile App Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,42750,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network Aministrator", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [23550,34900,62950] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network Engineer", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [12650,40590,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network & Cybersecurity Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,50600,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "NOC Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [9050,31600,57350] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Operations Manager", categoryId: "", levels: [1 , 2 , 3] , cs: [ ,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Outbound Sales Representative", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Payroll Processing", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [19900,28200,34900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Photographer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "PHP Programmer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,31600,59600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "PPC Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Power BI Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [37200,49509,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Power Platform Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,54000,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Project Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Automation Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [32700,43900,54000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Project Manager", categoryId: "Development", levels: [1 , 2 , 3] , cs: [ ,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Tester", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,31600,48400] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Quickbooks Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [22350,41650,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Real Estate, Property & Mortgage", categoryId: "Real Estate", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Recruitment Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [7800,27100,43900] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "RPA Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,46150,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Analyst", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Coordinator", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Development Representative (SDR)", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Director", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Enablement Specialist", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Trainer", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SAS Prorammer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,37200,54000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Scrum Master", categoryId: "Development", levels: [1 , 2 , 3] , cs: [ ,59600,87500] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Search Engine Optimization Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SEO Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Social Media Ads Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Social Media Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Software Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,37200,59600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Software Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [32700,43900,59600] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SQL Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,42750,54000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Tax Preparation", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [42750,48400,54000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Tax Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,37200,46150] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Team Lead/Supervisor", categoryId: "Customer Service Support", levels: [1 , 2 , 3] , cs: [ ,31600, ] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Consultant", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [ ,31600,48400] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Sales Engineer", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Support Representative", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Support Representative (VoIP)", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [12650,40590,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Training Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [,37200,60700] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "User Experience (UX) Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Video Editor", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Virtual Assistant", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Web Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Web Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,48400,82000] , us: [1453,1722,2103] , au: [2201,2608,3185] , uk: [1149,1362,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

 ]

// GET STARTED
function appState() {	
}
var activeDialogId = "";
document.addEventListener('keyup', function (event) {
  if ( event.keyCode == 27 )   {
	if(activeDialogId =="roleSelector") {
		toggleRoleSelector("close");
	}
	if(activeDialogId =="requestReport") {
		toggleRequestReport("close");
	}
  }
})

  tbActionButton = document.getElementById("tbCalculatorAction");
  tbActionButton.style.display = "none";
  
  

// GET QUERY STRING
queryStringContent = {};
var urlData = window.location.toString();
var queryString = urlData.split("?");
if (queryString.length > 1) {
  var queryStringData = queryString[1].split("&");
  for (i in queryStringData) {
	var queryStringParamerters = queryStringData[i].split("=");
	queryStringContent[queryStringParamerters[0]] = decodeURIComponent(queryStringParamerters[1]);
  }
}

	
// DEFAULT INTERFACE CONTENT

if (queryStringContent["l"]) {
	defaultLocation = queryStringContent["l"];
}

if (typeof defaultLocation === 'undefined' || defaultLocation === null) {
	defaultLocation = "";
} 

if (queryStringContent["c"]) {
	roleCategory = queryStringContent["c"];
}

if (typeof roleCategory === 'undefined' || roleCategory === null) {
	roleCategory = "";
}  

if (queryStringContent["t"]) {
	defaultTitle = queryStringContent["t"];
}

if (typeof defaultTitle === 'undefined' || defaultTitle === null) {
	defaultTitle = "Team Builder";
} 
if (queryStringContent["d"]) {
	defaultSubtitle = queryStringContent["d"];
}
if (typeof defaultSubtitle === 'undefined' || defaultSubtitle === null) {
	defaultSubtitle = "Hire top talent fast, for much less than you expect.";
} 
if (queryStringContent["i"]) {
	defaultFeature = queryStringContent["i"];
}
if (typeof defaultFeature === 'undefined' || defaultFeature === null) {
	defaultFeature = "https://theremotegroup.com/wp-content/uploads/2023/02/Outsourcing-Services.jpg";
}
if (queryStringContent["r"]) {
	defaultRedirect = queryStringContent["r"];
}
if (queryStringContent["a"]) {
	defaultTeam = queryStringContent["a"];
}
if (typeof defaultTeam === 'undefined' || defaultTeam === null) {
	defaultTeam = "";
}
if (queryStringContent["shared"]) {
	sharedTeam = queryStringContent["shared"];
}
if (typeof sharedTeam === 'undefined' || sharedTeam === null) {
	sharedTeam = "";
} 
if(defaultTeam) {
	toolBarDisplay("hide");
}


function setDefaultInterface(){
	// SET DEFAULTS
	document.getElementById("teamBuilderTitle").innerHTML = defaultTitle;
	document.getElementById("teamBuilderDescription").innerHTML = defaultSubtitle;
	//document.getElementById("getStartedImage").src = defaultFeature;
	categoryToggle()

}


function categoryToggle(action) {
	if (action == 1) {
		roleCategoryTargetClass= "roleCategoryFilter";
		roleCategoryClass= "roleCategoryFilterDisabled";
		roleCategoryToggleContent = "<a onclick='categoryToggle(0)'>Only show " + roleCategory + " specific roles.</a>";
	} else {
		roleCategoryTargetClass= "roleCategoryFilterDisabled";
		roleCategoryClass= "roleCategoryFilter";
		roleCategoryToggleContent = "Showing " + roleCategory + " specific roles. <a onclick='categoryToggle(1)'>Show all roles.</a>";
	}
			

	if (document.getElementById("roleCategoryToggle") ) {
		if (roleCategory) {
			roleCategoryToggle.innerHTML = roleCategoryToggleContent ;
			var elems = document.querySelectorAll("."+roleCategoryTargetClass);
			[].forEach.call(elems, function(el) {
				el.classList.add(roleCategoryClass);
				el.classList.remove(roleCategoryTargetClass);
			});
		}
	}
}


	
function getQueryStringData(key) {   	
	if(key) {
		if (queryStringContent[key]) {
			return queryStringContent[key];
		} else {
			return "NA";
		}
	} else {
		return "NA";
	}
}

function setFieldValue(element,value) {
	if(document.getElementById(element) && value) {
		document.getElementById(element).value = value;
	}
}


// BUILD WORK OPTION SELECTOR
function buildWorkOptionSelector(workOptionId) {
	displayoptionSelector = "<button onclick='toggleElement(\"workOptionSelector\")' class='workOptionsAction actionButton' id='optionSelectorButton'></button>";
	displayoptionSelector += "<div class='workOptionSelector dropdownMenu hidden' id='workOptionSelector'>";
	for (key in options) {
	   displayoptionSelector += "<a id='workOptionsListItem-"+key+"' onclick='setWorkOption(" + "\""+ key + "\"" + ")'>" + options[key]["label"] + "</a>";
	}
	displayoptionSelector += "</div>";
	workOptionsContainer.innerHTML = displayoptionSelector;
}

// SET WORK OPTION
function setWorkOption(workOptionId){
	optionCount = (Object.keys(options).length-1);
	if (!options[workOptionId]) {
		workOptionId = Object.keys(options)[optionCount];
	}	
	if (document.getElementById("workOptionsListItem-"+ app.typeId)) {
		selectedWorkOptionListItem = document.getElementById("workOptionsListItem-"+ app.typeId);
		selectedWorkOptionListItem.classList.remove("dropdownItemSelected");
	}
	if (document.getElementById("workOptionsListItem-"+ workOptionId)) {	
		selectedWorkOptionListItem = document.getElementById("workOptionsListItem-"+ workOptionId);
		selectedWorkOptionListItem.classList.add("dropdownItemSelected");
	}
	app.typeId = workOptionId;

	app.workOption =  "<span>" + options[app.typeId]["label"] + "</span>";
	if(document.getElementById("optionSelectorButton")) {
		optionSelectorButton.innerHTML = app.workOption;
	}
	hideElement("workOptionSelector")
	recalculate();
}

function buildLocationSelector(locationId) {
	displayLocationSelector = "<button onclick='toggleElement(\"locationSelector\")'  class='locationSelectorAction actionButton' id='locationSelectorButton'></button>";
	displayLocationSelector += "<div class='locationSelector dropdownMenu hidden' id='locationSelector'>";
	for (key in countries) {
	   displayLocationSelector += "<a id='locationListItem-"+key+"' onclick='setLocation(" + "\""+ key + "\"" + ")'>" + countries[key]["label"] + "</a>";
	}
	displayLocationSelector += "</div>";
	locationContainer.innerHTML = displayLocationSelector;
}

// SET LOCATION 
function setLocation(locationId) {
	if (!countries[locationId]) {
		locationId = Object.keys(countries)[0];
	}
	if (document.getElementById("locationListItem-"+ app.countryId)) {
		previousLocationListItem = document.getElementById("locationListItem-"+ app.countryId);
		previousLocationListItem.classList.remove("dropdownItemSelected");
	}
	if (document.getElementById("locationListItem-"+ locationId)) {	
		selectedLocationListItem = document.getElementById("locationListItem-"+ locationId);
		selectedLocationListItem.classList.add("dropdownItemSelected");
	}
	app.countryId = locationId;
	app.country = countries[locationId]["label"];
	app.currency = countries[locationId]["currency"];
	app.symbol = countries[locationId]["symbol"];
	app.conversion = countries[locationId]["conversion"];
	app.fee = countries[locationId][app.type];
	if(document.getElementById("locationSelectorButton")) {
		locationSelectorButton.innerHTML =  "<span class='hideMobile'>" + app.country + "</span>" + "<span class='hideDesktop'>" + app.currency + "</span>" + "<i class='fa fa-chevron-down'></i>";

		 locationSelectorButton.innerHTML = app.country + "<i class='fa fa-chevron-down'></i>";
	}
	hideElement("locationSelector")
	recalculate();
}

// BUILD ROLE LEVEL SELECTOR
function buildRoleLevelSelector(roleId,itemId,paramRoleLevelId) {
	roleLevelSelectorOptionElement = "roleLevelSelectorOptions" + itemId;
	roleLevelLabel = levels[paramRoleLevelId]["label"];
	roleLevelList = "<div class='dropdownMenuContainer'><button onclick='toggleElement(\""+roleLevelSelectorOptionElement+"\")' class='levelSelectorButton' id='levelSelectorButton"+ itemId +"'></button>";
	roleLevelList += "<div class='dropdownMenu hidden' id='"+ roleLevelSelectorOptionElement +"'>";
	
	for (var i = 0; i < roles[roleId]["levels"].length; i++) {
		if (paramRoleLevelId == i + 1) {
			roleLevelClass = "dropdownItemSelected";
		} else {
			roleLevelClass = "";
		}
		
		roleLevelList += "<a class='" + roleLevelClass + "'id='levelListItem-"+roles[roleId]["levels"][i]+"-"+ itemId +"' onclick='setRoleLevel("+ roles[roleId]["levels"][i] + "," +itemId+ ")'>" + levels[roles[roleId]["levels"][i]]["label"] + "</a> ";
	}
	roleLevelList += "</div>";
	roleLevelList += "</div>";
	return roleLevelList;
}


// SET THE ROLE LEVEL 
function setRoleLevel(roleLevelId, itemId) {
	elementId = "teamListItem"+itemId;
	menuId = "roleLevelSelectorOptions" +itemId;
	
// SELECT CURRENT DROPDOWN ITEM

	if (document.getElementById("teamListItem" + itemId)) {
		targetTeamItem = document.getElementById("teamListItem" + itemId);
		currentLevelId = targetTeamItem.getAttribute("data-team_role_level_id");
		curretnLocationListItem = document.getElementById("levelListItem-"+ currentLevelId +"-"+itemId);
		curretnLocationListItem.classList.remove("dropdownItemSelected");
	}
	if (document.getElementById("levelListItem-"+ roleLevelId +"-"+itemId)) {
		selectedLocationListItem = document.getElementById("levelListItem-"+ roleLevelId +"-"+itemId);
		selectedLocationListItem.classList.add("dropdownItemSelected");
	}

// END EDITS
	 
	hideElement(menuId);
	setElementData(elementId,"data-team_role_level_id",roleLevelId)
	recalculate(itemId);
}

// BUILD ROLE LIST
function displayRoles(){
	var roleListData  = "";
	for (const key in roles) {
		if (roles[key]["categoryId"] == roleCategory || roleCategory == "") {
			roleDisplayStyle = ""
		} else {
			roleDisplayStyle = "roleCategoryFilter"
		}
			var roleId = "role" + roles[key]["roleId"];
			roleListData += "<div class='tbRoleSelectorItem "+ roleDisplayStyle + "' id= 'roleListItem" + key + "' onclick='addRole("+key+")'><div><h3>"+ roles[key]["label"] + "</h3><p class='roleListKeywords'>"+ roles[key]["keywords"] + "</p>" + "</div></div>";
		
	} 
	tbRoleSelectorList.innerHTML = roleListData;
};

// TOGGLE ROLE LIST CATEGORY
var elements = document.querySelectorAll('.container');
for(var i=0; i<elements.length; i++){
    elements[i].style.width = imgWidth + "px";
    elements[i].style.height = imgHeight + "px";
}



// FILTER THE ROLES
function startRoleFilter() {
	var input = document.getElementById("tbRoleSelectorFilter");
	input.addEventListener("input", filterRoles);
	function filterRoles(e) {
	  var filter = e.target.value.toUpperCase();
	  var list = document.getElementById("tbRoleSelectorList");
	  var divs = list.getElementsByTagName("div");
	  for (var i = 0; i < divs.length; i++) {
		var a = divs[i].getElementsByTagName("div")[0];
		if (a) {
		  if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			divs[i].style.display = "";
		  } else {
			divs[i].style.display = "none";
		  }
		}
	  }
	}
}

// ADD A NEW ROLE ITEM
var row = 0;
function addRole(roleId){
	if (row == 0) {
	
	// RESET THE CONTENT
	teamList.innerHTML = "";
	
	// BUILD THE TABLE TITLE	
	dataHeader = 
		"<div class='cell teamListLabel'>Role</div>" + 
		"<div class='cell teamListControls'>How Many Staff Do You Need?</div>" + 
		"<div class='cell teamListExperience'>Experience Required</div>" +
		//"<div class='cell teamListRoleSaving textCenter'>Your<br>Savings</div>" +
		//"<div class='cell teamListRoleCostLocal textCenter'>Hire<br>Onshore</div>" +
		"<div class='cell teamListRoleCostTRG textCenter'>TRG Price</div>" + 
		"<div class='cell teamListRemove'></div>";	
		teamListItemElement = document.createElement("div"); 
		teamListItemElement.setAttribute("id", "teamListItemHeader");
		teamListItemElement.setAttribute("class", "row teamListItemHeader hideMobile");
		teamListItemElement.innerHTML = dataHeader;
		document.getElementById("teamList").appendChild(teamListItemElement);
	}
	
	row ++;
	paramItemId = row;
	paramRoleId = roleId;	
	paramRoleCount = 1;
	// GET THE ROLE LEVEL OR SET DEFAULT
	paramRoleLevelDefaultId = 2;
	if(roles[roleId]["levels"][paramRoleLevelDefaultId]) {
		paramRoleLevelId = paramRoleLevelDefaultId;
	} else {
		paramRoleLevelId = roles[roleId]["levels"][0];
	}
	paramRoleLabel = roles[roleId]["label"];
	paramRoleLevelLabel = levels[paramRoleLevelId]["label"];
	paramRoleCostLocal = roles[roleId][app.countryId][paramRoleLevelId] * paramRoleCount ;
	paramRoleCostTRG = roles[roleId]["cs"][paramRoleLevelId] / app.conversion;
	paramRoleSaving = paramRoleCostLocal - paramRoleCostTRG;
	
	writeLog("Add",paramRoleLabel,paramRoleCount,paramRoleLevelLabel,"","");

	// BUILD THE OBJECT	
	data = 
	"<div class='cell teamListLabel'><span class='contentContainer'>" + roles[roleId]["label"] + "</span></div>" + 
	"<div class='cell teamListControls'><span class='hideDesktop teamListMobileLabel'>Staff</span><span class='contentContainer'>" +
	"<a  onclick='roleCountAction(\"remove\","+row+")' class='teamListControlSubtract'  id='teamListontrolSubtract"+row+"'><i class='fa fa-minus-circle'></i></a> " +
	 "<span id='teamListCount"+row+"' class='teamListCount' contenteditable='true' data-row-id='" + row + "'>"+paramRoleCount+"</span> " +
	"<a  onclick='roleCountAction(\"add\","+row+")' class='teamListControlAdd' id='teamListControlAdd"+row+"'><i class='fa fa-plus-circle'></i></a> " +
	"<a  onclick='roleCountAction(\"delete\","+row+")' class='teamListControlDelete teamListControlDeleteMobile hideDesktop'  id='teamListControlDelete"+row+"'><i class='fa fa-times'></i></a>" +
	"</span><div class='clear'></div></div>" + 
	"<div class='cell teamListExperience'><span class='hideDesktop teamListMobileLabel'>Experience</span><span class='contentContainer'>" + buildRoleLevelSelector(roleId,row,paramRoleLevelId) + "</span><div class='clear'></div></div>" +
	//"<div class='cell teamListRoleSaving hideMobile' ><span class='hideDesktop teamListMobileLabel'>Savings</span><span class='contentContainer'><span class='currencyContainer'></span><span id='teamListRoleSaving"+row+"'></span></div>" +
	//"<div class='cell teamListRoleCostLocal'><span class='hideDesktop teamListMobileLabel'>Hiring Onshore</span><span class='contentContainer'><span class='currencyContainer'></span><span id='teamListRoleCostLocal"+row+"'></span></div>" +
	"<div class='cell teamListRoleCostTRG'><span class='hideDesktop teamListMobileLabel'>Hiring TRG Staff</span><span class='contentContainer'><span class='currencyContainer'></span><span id='teamListRoleCostTRG"+row+"'></span><div class='clear'></div></div>" + 
	"<div class='cell teamListRemove hideMobile'>" + 
	"<span class='contentContainer'><a  onclick='roleCountAction(\"delete\","+row+")' class='teamListControlDelete'  id='teamListControlDelete"+row+"'><i class='fa fa-times'></i></a></span>" +
	"<div class='clear'></div></div>";

	

	teamListItemElement = document.createElement("div"); 
	teamListItemElement.setAttribute("id", "teamListItem"+row);
	teamListItemElement.setAttribute("class", "row teamListItem");
	teamListItemElement.setAttribute("data-team_item_id", row);
	teamListItemElement.setAttribute("data-team_roleId", paramRoleId);
	teamListItemElement.setAttribute("data-team_role_label", paramRoleLabel);
	teamListItemElement.setAttribute("data-team_role_level_id", paramRoleLevelId);
	teamListItemElement.setAttribute("data-team_role_cost_trg", paramRoleCostTRG);
	document.getElementById("teamList").appendChild(teamListItemElement);
	teamListItemElement.innerHTML = data;
	toggleRoleSelector("close");
	
	editCountId = "teamListCount"+row;
	editCountIdElement = document.getElementById(editCountId);
	
		editCountIdElement.addEventListener('keydown', (e) => {
			if (e.keyCode === 13 || !isFinite(e.key)) {
				e.preventDefault();
			}
		});
	
	
		editCountIdElement.addEventListener("input", function(e) {
		targetElement = document.getElementById(e.target.id);
		countValue = targetElement.innerHTML;

 		if (countValue.length > 3) {
			countValue = countValue.substring(0, 3)
			targetElement.innerHTML = countValue;
		}	
		
		countValue = parseInt(countValue, 10);
		if (!countValue) { 
			countValue = 0
			targetElement.innerHTML = countValue;
		}
		if (countValue > 100 ) {
			countValue = 100
			targetElement.innerHTML = countValue;
		}
				
		if (!Number.isInteger(countValue)) {
			countValue = 0;
		}

	
		
		targetRowId = targetElement.getAttribute("data-row-id");
		
    	recalculate(targetRowId);
	}, false);

	recalculate(paramItemId);
}

// ADD OR REMOVE A COUNT TO A ROLE 
function roleCountAction(type, id) {
	var roleCountElement = getElement("teamListCount"+id); 
	var roleCount = getElementValue(roleCountElement);
	if (type == "remove" && roleCount == 1 ) {
		type = "delete";
	}
	if (type == "add") {
		roleCountElement.innerHTML = roleCount + 1;
		recalculate(id);
	} else if (type == "remove") {
		roleCountElement.innerHTML = roleCount - 1;	
		recalculate(id);

	} else if (type == "delete") {
		document.getElementById("teamListItem" + id).remove();
		recalculate();
	}
}

function resetTeamBuilder() {
	if (defaultTeam) {
			toolBarDisplay("hide");
	}
	var e = document.getElementById('teamList');
	while (e.firstChild) e.removeChild(e.firstChild);
	recalculate();
	setDefaultInterface();
	scrollTo('#tb');
}

// RECALCULATE AN ITEM
function recalculate(itemId){
	if (itemId) {
		updateItem(itemId);	
	} else {
		const teamList = document.querySelectorAll(".teamListItem");
			for (const teamListItem of teamList) {
				itemElementId = teamListItem.id;
				itemId = getElementData(itemElementId,"data-team_item_id")
			  	updateItem(itemId);
			};
	}
	updateCurrencyTags("currencyContainer");
	calculateSavings() 	;
}

// UPDATE AN ROLE ITEM
function updateItem(itemId) {
	itemCount = getElementValue(getElement("teamListCount"+itemId));
	//teamListRoleCostLocal = getElement("teamListRoleCostLocal"+itemId);
	//teamListRoleSaving = getElement("teamListRoleSaving"+itemId);
	teamListRoleCostTRG = getElement("teamListRoleCostTRG"+itemId);
	roleId = getElementData("teamListItem"+itemId,"data-team_roleId");
	roleLevelId = getElementData("teamListItem"+itemId,"data-team_role_level_id");
	levelId = levels[roleLevelId]["id"];
	levelLabel = levels[roleLevelId]["label"];
	setElementValue(document.getElementById("levelSelectorButton"+itemId),levelLabel + "<i class='fa fa-chevron-down'></i>");
	
	
	writeLog("Update Item: " + itemId, roles[roleId]["label"],itemCount,levelLabel,"","");

	// CHECK IF A TRG FEE NEEDS TO BE ADDED
	if (countries[app.countryId][options[app.typeId]["key"]]) {
		trgFee =  countries[app.countryId][options[app.typeId]["key"]]; 
		trgHardwareFee = countries[app.countryId]["hardware"];
		trgFeeTotal = trgFee + trgHardwareFee;
	} else {
		trgFee = 0;
		trgHardwareFee = 0;
		trgFeeTotal = 0;
	}

	// CHECK IF A LOCAL MANAGMENT FEE NEEDS TO BE ADDED
	if (countries[app.countryId][options[app.typeId]["key"]]) {
		localFee =  countries[app.countryId]["local"];
	} else {
		localFee = 0;
	}

	// CALCULATE THE ROLE COSTS
	roleCostTRG = roles[roleId]["cs"][levelId] / app.conversion;
	roleCostTRGTotal = (roleCostTRG + trgFeeTotal) * itemCount;
	roleCostLocal = roles[roleId][app.countryId][levelId]
	roleCostLocalTotal = (roleCostLocal + localFee) * itemCount;

	
	// SET THE ELEMENT VALUES
	//setElementValue(teamListRoleCostLocal,formatNumber(roleCostLocalTotal));
	setElementValue(teamListRoleCostTRG,formatNumber(roleCostTRGTotal));
	//totalTeamListRoleSaving = roleCostLocalTotal - roleCostTRGTotal;
	//if (totalTeamListRoleSaving < 0) {
	//	totalTeamListRoleSaving = 0;
	//}
	//setElementValue(teamListRoleSaving, formatNumber(totalTeamListRoleSaving))
}

// CALCULATE THE SAVINGS
function calculateSavings() {
	roleItems =  document.querySelectorAll('.teamListItem');
	totalSavings = 0;
	totalCostTRG = 0;
	totalCostLocal = 0;
	
	for (var i = 0; i < roleItems.length; i++) {
		element = roleItems[i];
		elementId = getElementData(element.id,"data-team_item_id");
		
		itemCostTRGId = getElement("teamListRoleCostTRG"+elementId);
		totalCostTRG += getElementValue(itemCostTRGId);
		
	
		//itemCostLocalId = getElement("teamListRoleCostLocal"+elementId);
		//totalCostLocal += getElementValue(itemCostLocalId);
		
		//itemSavingId = getElement("teamListRoleSaving"+elementId);	
		//totalSavings += getElementValue(itemSavingId);
		
	}
	
	if (roleItems.length) {	
		teamSavingTotal.innerHTML = "<h2><span class='tbCalculatorSummaryContent'>Estimated Monthly Cost:</span><span class='tbCalculatorSummaryResult'>" + "<div class='tbCalculatorSummarySaving'><span class='tbCalculatorSummaryCurrency'>" + app.currency + "</span>" + formatNumber(totalCostTRG) + "</span><div class='clear'></div></div></h2><div class='clear'></div>";		
    teamSummaryTotalTRG.innerHTML = formatNumber(totalSavings);
    teamSummaryTotalLocal.innerHTML = formatNumber(totalCostLocal);
    teamSummaryCurrencyTRG.innerHTML = app.currency;
    teamSummaryCurrencyLocal.innerHTML = app.currency;
    
    teamSummarySavingPercentage = (totalCostTRG/totalCostLocal)*100;
    
    if (document.getElementById("teamSummaryPercentTRG")) {		
        teamSummaryPercentTRG.innerHTML = (100 - Math.floor(teamSummarySavingPercentage));
    }
    
    tbActionButton.style.display = "block";
    
    showElement("teamSavingSummary");
}
else {
    tbActionButton.style.display = "none";
    if (!defaultTeam) {
        teamSavingTotal.innerHTML = "<h2 class='getStartedMessage'><div class='addRoleButtonSummary' id='addRoleButtonSummary' onclick='toggleRoleSelector(\"open\");'>Get started</div></h2>";			
    } else {
        if (sharedTeam) {
            gettingStartedTitle = "You have previously created a team";
            gettingStartedAction = "View your team"
        } else {
            gettingStartedTitle = "We have created a team for you to get you started";
            gettingStartedAction = "Customise your team"
        
        }			
        teamSavingTotal.innerHTML = "<h2 class='getStartedMessage'>" + gettingStartedTitle + "<div class='addRoleButtonSummary' id='addRoleButtonSummary' onclick='buildTeam();'>" + gettingStartedAction + "</div></h2>";			
    }
		//teamList.innerHTML = "<div class='getStarted' id='getStartedImageContainer'><img id='getStartedImage' class='imageResponsive imageGetStarted' src='"+ defaultFeature+"' ></div>"
 		hideElement("teamSavingSummary");
		row = 0;
	}
}

function updateCurrencyTags(tag) {
	var tagList = document.getElementsByClassName(tag);
	var step;
	for (step = 0; step < tagList.length; step++) {
	  tagList[step].innerHTML = app.currency;
	}
}

// GET AND ELEMENT
function getElement(elementId) {
	return document.getElementById(elementId);
}

// GET THE VALUE OF AN ELEMENT
function getElementData(elementId,dataLabel) {
	return document.getElementById(elementId).getAttribute(dataLabel);
}

// SET AN ELEMENT ATTRIBUTE
function setElementData(elementId,dataLabel,dataValue) {
	document.getElementById(elementId).setAttribute(dataLabel,dataValue);
}

// GET THE CONTENT OF AN ELEMENT AND CONVERT IT TO A NUMBER
function getElementValue(element) {
	elementValue = element.innerHTML;
	elementValueNumeric = elementValue.replace(/[^0-9.]/g, '');
	return parseFloat(elementValueNumeric);
}

// SET THE HTML CONTENT OF AN ELEMENT
function setElementValue(element,elementValue) {
	element.innerHTML = elementValue;
}

// FORMAT NUMBERS WITH COMMAS
function formatNumber(value) {
	value = Math.round(value);
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// HIDE AN ELEMENT IF REQUIRED
function hideElement(elementId) {
	if (document.getElementById(elementId)) {
		let element = document.getElementById(elementId);
		if (element.classList.contains('hidden')) {
		} else {
			element.classList.add('hidden');
		}	
	}
}	

// SHOW AN ELEMENT IF REQUIRED
function showElement(elementId) {
	if (document.getElementById(elementId)) {
		let element = document.getElementById(elementId);
		if (element.classList.contains('hidden')) {
			element.classList.remove('hidden');	
		} 
	}
}	


function toggleElementListner(triggerId, targetId) {
	document.getElementById(triggerId).addEventListener('click', function() {
		toggleElement(targetId);
	});
}

let activeMenu = "";
function toggleElement(elementId) {
	if(activeMenu && activeMenu != elementId) {
	 	hideElement(activeMenu)
	}
	activeMenu = elementId;
	let element = document.getElementById(elementId);
	if (element.classList.contains('hidden')) {
		element.classList.remove('hidden');
	} else {
		element.classList.add('hidden');
	}
}

function toolBarDisplay(action) {
	mainToolBar = document.getElementById("tbCalculatorTools");
	if(action == "hide") {
		if (!mainToolBar.classList.contains('hidden')) {
			mainToolBar.classList.add('hidden');
		} 
	} else {
		if (mainToolBar.classList.contains('hidden')) {
			mainToolBar.classList.remove('hidden');
		} 	
	}

}

function toggleRoleSelector(action){
	roleSelectorElement = document.getElementById("roleSelector");
	overlayElement = document.getElementById("overlay");
	hideElement(activeMenu);
	if(action == "close") {
		activeDialogId  = "";
		roleSelectorElement.classList.add('hidden');
		overlayElement.classList.add('hidden');
	} else {
		tbRoleSelectorFilter.value = "";
		var input = document.getElementById("tbRoleSelectorFilter");
		var event = new Event('input', {
			'bubbles': true,
			'cancelable': true
		});
		input.dispatchEvent(event);		
		
		activeDialogId  = "roleSelector";
		roleSelectorElement.classList.remove('hidden');
		overlayElement.classList.remove('hidden');	
	}
}

function toggleRequestReport(action){
	submitButton = document.getElementById("requestReportSubmit");
	hideElement(activeMenu);



	if (!roleItems.length) {
		if (document.getElementById("responseReportMessage")) {
			responseReportMessage.innerHTML = "<p class='messageError textCenter'><a href='#' onclick='toggleRequestReport(\"close\")'><strong>You have not added any members to your team yet.</strong><br>Click here to return to the Team Builder and add a role to your team</a>.</p><div class='clear'></div><div class='tbCalculatorAction'><div class='clear'></div><a onclick='toggleRequestReport(\"close\");'>Close</a></div>";
		}
		hideElement("requestContentForm");
	} else {
		if (document.getElementById("responseReportMessage")) {
			responseReportMessage.innerHTML = "<p>If you would like to find out more about how outsourcing can help your business or would like to meet some candidates, please provide your contact details and we'll contact you within 24 hours.</p>";
		}
		showElement("requestContentForm");
	}	
		

	roleSelectorElement = document.getElementById("requestReport");
	overlayElement = document.getElementById("overlay");
	scrollTo('#requestReportContainer');
	if(action == "close") {
		activeDialogId  = "";
		roleSelectorElement.classList.add('hidden');
		overlayElement.classList.add('hidden');
	} else {
	 	writeLog("CTA Click","","","","","");
		activeDialogId  = "requestReport";
		roleSelectorElement.classList.remove('hidden');
		overlayElement.classList.remove('hidden');	
	}
}


inputErrors = 0;
errorMessageData = "";

function validateInput(value,type,field,id,required) {
	
	inputElement = document.getElementById(id);

	switch (type) {
		case "email":
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
				inputElement.classList.remove("inputError");
				return true;
			} else {
				inputErrors ++;
				errorMessageData += "<li>" + field + " was not a valid." + "</li>";
				inputElement.classList.add("inputError");
			}
			break;
		case "text":
			if (value.length > 2) {
				inputElement.classList.remove("inputError");
				return true;
			} else {
				inputErrors ++;
				errorMessageData += "<li>" + field + " was not a valid." + "</li>";
				inputElement.classList.add("inputError");
			}		
			break;
		case "number":
			if (!isNaN(value)) { 
				inputElement.classList.remove("inputError");
				return true;
			} else {
				inputErrors ++;
				errorMessageData += "<li>" + field + " was not a valid." + "</li>";
				inputElement.classList.add("inputError");
			}
			break;
		case "phone":
			if ( /^[+\-0-9(). ]+$/.test(value) && value.length > 7 ) {
				inputElement.classList.remove("inputError");
				return true;
			} else if (!value && required == 'optional') {
				inputElement.classList.remove("inputError");
				return true;			
			} else {
				inputErrors ++;
				errorMessageData += "<li>" + field + " was not a valid." + "</li>";
				inputElement.classList.add("inputError");
			}
			break;
	}
}


function processForm() {
		

	if (roleItems.length) {
		roleData = new Array();
		
		dataResultPhone = requestReportPhone.value;		
		validateInput(dataResultPhone,"phone","Phone Number","requestReportPhone","optional");

		dataResultCompany = requestReportCompany.value;
		
		
	
		dataResultFirstName = requestReportFirstName.value;
		validateInput(dataResultFirstName,"text","First Name","requestReportFirstName","required");
		
		dataResultLastName = requestReportLastName.value;
		validateInput(dataResultLastName,"text","Last Name","requestReportLastName","required");
		
		dataResultEmail = requestReportEmail.value;	
		validateInput(dataResultEmail,"email","Email Address","requestReportEmail","required");
		
		if (inputErrors) {
			errorResponse = "<span class='messageError'><p><strong>Errors were found on the form.</strong><br>Please correct the errors and submit the form again.</p></span>";
			responseReportMessage.innerHTML = errorResponse;
			inputErrors = 0;
			errorMessageData = "";
			return false;
		} else {
			responseReportMessage.innerHTML = "<p><i class='fa fa-circle-notch fa-spin fa-4x''></i></p><p><strong>Submitting your request</strong></p>";
		}

		dataResultStaff = 0;
		dataResultValue = 0;
		dataResultRoles = "";
		dataResultWorkOptions = options[app.typeId]["label"];
		dataResultCountry = app.country;
		dataResultRoleList = [];
		dataResultTotalSaving = 0;
		dataResultRoles = "";
		for (var i = 0; i < roleItems.length; i++) {
			element = roleItems[i];
			
			dataResultRoleId = getElementData(element.id,"data-team_roleId");
			dataResultRoleList.push(dataResultRoleId);

			dataResultLevel = getElementData(element.id,"data-team_role_level_id");
			dataResultLevelId = levels[dataResultLevel]["id"];
			
			dataResultTeamItemId = getElementData(element.id,"data-team_item_id");
			DataResultItemCount = getElementValue(getElement("teamListCount"+dataResultTeamItemId));
			DataResultItemValue = roles[dataResultRoleId]["cs"][dataResultLevelId];

			dataResultStaff += DataResultItemCount ;
			dataResultValue += DataResultItemValue * DataResultItemCount ;
			
			dataResultRoles += DataResultItemCount + " x " + roles[dataResultRoleId]["label"] + " - "+ levels[dataResultLevel]["label"] +" (" + DataResultItemValue +" per role" + ") " + "\n";			
		}
		buildEmailBuilderLink();
		postData();
	} 
}

function getCandidate(roleId){
	selection = Math.floor(Math.random() * 3);
	if(selectedItems[roleId][selection]) {
		for (step = 0; step <4; step ++ ) {
			if (step == 3) {
				return false;
			}
			if(!selectedItems[roleId][step]) {
				selection = step;
				break;
			}
		}
	}
	selectedItems[roleId][selection] = 1;
	// console.table(selectedItems);
	candidateID = roles[roleId].candidateID[selection];
	candidateName = roles[roleId].candidateName[selection];
	candidateDescription = roles[roleId].candidateDescription[selection];
	//candidateImage = roles[roleId].candidateImage[selection];

	if (candidateID && candidateName) {
		return true;
	} else {
		return false;
	}
}
 
function buildTeam() {
	if (!defaultTeam) {
		params = new URLSearchParams(window.location.search);
		teamData = atob(params.get('a'));
	} else {
		teamData = atob(defaultTeam);
	}
	teamDataContent = teamData.split("&");
	teamData = teamDataContent[0];
	teamTypeContent  = teamDataContent[2].split("=");
	teamCountryContent  = teamDataContent[1].split("=");
	typeId = teamTypeContent[1];
	countryId = teamCountryContent[1];
	
	if(teamDataContent[3]) {
		logActionContent = teamDataContent[3].split("="); 
		logAction = logActionContent[1];
	}
	var teamList = teamData.split(",");
	for (var count = 0; count < teamList.length; count++) {
		teamListData = teamList[count].split(":");
		teamListRoleName = teamListData[0];
		teamListRoleCount = teamListData[1];
		teamListRoleLevel = teamListData[2];
		teamListRoleId = roles.findIndex(x => x.label === teamListRoleName);
		if(roles[teamListRoleId]) {
			addRole(teamListRoleId);
			if(teamListRoleCount) {
				for (var step = 1; step < teamListRoleCount; step++) {	
					roleCountAction("add", (count + 1));
				}
			}
			if(levels[teamListRoleLevel]) {
				setRoleLevel(teamListRoleLevel,count + 1)
			} else {
				//console.log("Invalid Role Id");
			}
		} else {
			//console.log("Invalid Role");
		}
	}
	if(options[typeId]) {
		setWorkOption(typeId);
	} else {
		//console.log("Invalid Workforce Type");
	}
	if(countries[countryId]) {
		setLocation(countryId);
	} else {
		//console.log("Invalid Country Code");
	}

	for (var i = 0; i < roleItems.length; i++) {
		element += roleItems[i];
	
	}
	toolBarDisplay("show");

}


function getLink(action) {

	overlayElement = document.getElementById("overlay");
	hideElement(activeMenu);

	if(action == "close") {
		activeDialogId  = "";
		overlayElement.classList.add('hidden');
		teamLinkShare.classList.add('hidden');

	} else {
			overlayElement.classList.remove('hidden');
			teamLinkShare.classList.remove('hidden');

		if (roleItems.length) {
			teamLinkShareContent.classList.remove('hidden');
			teamLinkShareError.classList.add('hidden');
			scrollTo("#teamLinkShare");


			link = getLinkURL();


			teamLink.innerHTML = link;
			teamLinkElement = document.getElementById("teamLink");
			teamLinkElement.select();
			document.execCommand('copy');

		} else {
			teamLinkShareContent.classList.add('hidden');
			teamLinkShareError.classList.remove('hidden');
		}
	}
	
}


function getLinkURL(linkType) {
		link = "";
		linkRoot = "";
		if (linkType != "base") {
			linkRoot = "https://theremotegroup.com";
			linkRoot += "?a=";
		}
		delimter="";
		roleItems =  document.querySelectorAll('.teamListItem');

		for (var i = 0; i < roleItems.length; i++) {
			element = roleItems[i];
			elementId = getElementData(element.id,"data-team_item_id");
			dataResultLabel = 	getElementData(element.id,"data-team_role_label");

			dataResultLevel = getElementData(element.id,"data-team_role_level_id");
			dataResultLevelId = levels[dataResultLevel]["id"];

		
			dataResultTeamItemId = getElementData(element.id,"data-team_item_id");
			DataResultItemCount = getElementValue(getElement("teamListCount"+dataResultTeamItemId));
			link += delimter + dataResultLabel + ":" + DataResultItemCount + ":" + (dataResultLevelId + 1);
			delimter = ",";
		}

		link += "&country=" + app.countryId + "&type=" + app.typeId  ;
	
		if(linkType) {
			link += "&log=n";				
		}
		
		link = btoa(link);
		link = linkRoot + link;	

		if (queryStringContent["t"]) {
			link +=  "&t=" + queryStringContent["t"];
		}

		if (queryStringContent["d"]) {
			link +=  "&d=" + queryStringContent["d"];
		}
		
		link += "&shared=true"
					
		return link;
}


function toggleRoleSelector(action){
	roleSelectorElement = document.getElementById("roleSelector");
	overlayElement = document.getElementById("overlay");
	hideElement(activeMenu);
	if(action == "close") {
		activeDialogId  = "";
		roleSelectorElement.classList.add('hidden');
		overlayElement.classList.add('hidden');
	} else {
		tbRoleSelectorFilter.value = "";
		var input = document.getElementById("tbRoleSelectorFilter");
		var event = new Event('input', {
			'bubbles': true,
			'cancelable': true
		});
		input.dispatchEvent(event);		
		
		activeDialogId  = "roleSelector";
		roleSelectorElement.classList.remove('hidden');
		overlayElement.classList.remove('hidden');	
	}
}




function scrollTo(targetAnchor) {
document.querySelector(targetAnchor).scrollIntoView({ 
  behavior: 'smooth' 
});
}


function checkLogData(value) {
	if (value) {
		return value;
	} else {
		return "NA"
	}
}


function writeLog(action,role,roleCount,roleLevel,name,email) {
		if (logAction == "n") {
			//console.log("No Log Written");

			return;
		}	
	logData = "\"" + app["userId"] + "\",\"" +  app["IP"]  + "\",\"" + clean(app["city"]) + "\",\"" + clean(app["region"]) + "\",\"" + clean(app["country"]) + "\",\"" + clean(app["timezone"]) + "\",\"" + clean(checkLogData(action)) +  "\",\"" +  clean(checkLogData(role)) +  "\",\"" +  clean(checkLogData(roleCount)) +  "\",\"" +  clean(checkLogData(roleLevel)) +  "\",\"" +  clean(checkLogData(name)) +  "\",\"" + clean(checkLogData(email)) + "\",\"" + clean(app.typeId) + "\",\"" + clean(app.countryId) + "\",\"" +  clean(getQueryStringData('utm_campaign')) + "\",\"" + clean(getQueryStringData('utm_source')) + "\",\"" + clean(window.location.hostname) + "\",\"" + clean(window.location.href) + "\",\"" + clean(getLinkURL("log")) +"\"" ;
	//console.log(logData);	
	if (logData) { 
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.status == 200) {
			}
		};
	}
}

function clean(cleanString) {
	return cleanString.toString().replace(/\"/g, "");
}




buildWorkOptionSelector();
setWorkOption();

buildLocationSelector();
setLocation(defaultLocation);

displayRoles();
startRoleFilter();

setDefaultInterface();
