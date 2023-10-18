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

	uk: { label: "(GBP) United Kingdom",
		countryCode: "UK",
		currency: "£", // Using "£" as the currency symbol for the UK
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
	1: { label: "Junior (0-3 yrs)", description: "", id: 0 },
	2: { label: "Intermediate (3-5 yrs)", description: "", id: 1  },
	3: { label: "Senior (5 and up yrs)", description: "", id: 2  },
}

var category = {
	1: { label: "Accounting", description: "", id: 0 },
	2: { label: "Architectural", description: "", id: 1  },
	3: { label: "B2b Sales", description: "", id: 2  },
	4: { label: "Creative", description: "", id: 3  },
	5: { label: "Customer Service Support", description: "", id: 4  },
	6: { label: "eCommerce", description: "", id: 5  },
	7: { label: "Development", description: "", id: 6  },
	8: { label: "Digital Marketing", description: "", id: 7  },
	9: { label: "IT Support", description: "", id: 8  },
	10: { label: "Healthcare Virtual Assistant", description: "", id: 9  },
	11: { label: "Real Estate", description: "", id: 10  },
	12: { label: "Travel & Tourism", description: "", id: 11  },
	13: { label: "Virtual Assistant", description: "", id: 12  },
}



// DATA - ROLES
var roles = [ 

{ label: ".NET Devloper", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,46150,79750] , us: [1274.48,1677.82,2350.07] , au: [1929.93,2540.71,3558.67] , uk: [1008.17,1327.23,1859.01] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Developer, ASP.NET., C#, Microsoft SQL Server, ASP.NET MVC., .NET Framework, JavaScript, jQuery, SQL" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "3D Modeler", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "3D, 3D Modeling, 3D Rendering, Adobe Photoshop, After Effects, Animation, Art, Autodesk 3ds Max, Lightning, Texturing, V-Ray" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "3D Web Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [22350,48400,82000] , us: [1201.88,1722.64,2394.88] , au: [1819.99,2608.57,3626.53] , uk: [950.74,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "3D Design, 3D Modeling, 3D Rendering, 3D Visualization, V-Ray" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Account Executive", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "B2B Sales, CRM and Account Management, Deal Closing, Inside Sales, Public Relations, Recruiting, Sales Experience, Sales and Marketing, Sales Support" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Account Manager", categoryId: "", levels: [1 , 2 , 3] , cs: [19900,37200,60700] , us: [1153.48,1498.56,1969.13] , au: [1746.70,2269.25,2981.82] , uk: [912.45,1185.43,1557.67] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Account Management, B2B, Business Development, Business Strategy, Management, Marketing Strategy, Sales, Sales Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Accounts Payable", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,48400,65200] , us: [1386.52,1722.64,2058.76] , au: [2099.59,2608.57,3117.55] , uk: [1096.80,1362.69,1628.57] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Accounting, Accounts Payable, Accounts Receivable, Account Reconciliation, Data Entry, Invoicing, Invoice Processing, QuickBooks" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Accounts Receivable", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,48400,65200] , us: [1386.52,1722.64,2058.76] , au: [2099.59,2608.57,3117.55] , uk: [1096.80,1362.69,1628.57] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Accounting, Accounts Payable, Accounts Receivable, Account Reconciliation, A/R Collections, Bank Reconciliation, Cash Collection, Invoicing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Admin Support", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [13850,27100,43900] , us: [1032.48,1201.88,1633.01] , au: [1563.46,1819.99,2472.84] , uk: [816.73,950.74,1291.78] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] ,  keywords: "Accuracy, Administrative Support, Clerical Skills, Communication Skills, Detail Oriented, Innovation, MS Office, Outlook," , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Affiliate Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, English Speaking, Google Analytics, Marketing Campaign, Marketing Strategy, MS Office, Project Management, Technical" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Animator", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Animation, Character Animation, After Effects, Computer Animation, Traditional Animation, Autodesk Maya, Storyboarding, Motion Graphics" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Application Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,37200,82000] , us: [1274.48,1498.56,2394.88] , au: [1929.93,2269.25,3626.53] , uk: [1008.17,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Java, Python, C++, Software Development Lifecycle, Object-Oriented Programming, Database Management and SQL, HTML, CSS, JavaScript, iOS, Android, API Development and Integration" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Art Director", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [25950,59600,126050] , us: [1274.48,1946.72,3276.11] , au: [1929.93,2947.89,4960.96] , uk: [1008.17,1539.94,2591.55] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Adobe Creative Suite (Photoshop, Illustrator, InDesign), Art Direction and Concept Development, Branding and Identity Design, Typography and Layout Design, Print and Digital Design, Photography and Videography, Motion Graphics and Animation, UI/UX Design" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Audit and Compliance", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [23550,28200,34900] , us: [1226.08,1319.30,1453.74] , au: [1856.64,1997.79,2201.38] , uk: [969.88,1043.62,1149.98] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Auditing, Internal Audit, Regulatory Compliance, Medical Coding, Quality Auditing, Healthcare Compliance" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Automation Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,52850,82000] , us: [1386.52,1812.27,2394.88] , au: [2099.59,2744.30,3626.53] , uk: [1096.80,1433.59,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Test Automation Framework Development, Java, Python, C#, Test Scripting and Execution, Continuous Integration and Deployment (CI/CD), Test Data Management, Performance Testing, Security Testing, Mobile Testing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Azure Data Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [42750,104000,214190] , us: [1610.60,2835.49,5038.56] , au: [2438.91,4293.75,7629.82] , uk: [1274.06,1362,3985.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Spark, Business Intelligence, Data Warehousing, ETL, Scala, Big Data, SSIS, Data Modeling" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Back-end Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,42750,70800] , us: [1274.48,1610.60,2103] , au: [1929.93,2438.91,3287.21] , uk: [1008.17,1274.06,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Git, Docker Products, MySQL, MongoDB, JavaScript, Amazon Web Services (AWS), Node.js, PHP" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Bank Reconciliation", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,37200,42750] , us: [1386.52,1498.56,1610.60] , au: [2099.59,2269.25,2438.91] , uk: [1096.80,1185.43,1274.06] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Billing and Collections", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [19900,25950,37200] , us: [1153.48,1274.48,1498.56] , au: [1746.70,1929.93,2269.25] , uk: [912.45,1362,1185.43] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Collaboration, Account Receivables, Invoicing, Communication Skills, MS Office, Collection Management, Multi Tasking, Accuracy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Bookkeeping", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [34900,48400,67500] , us: [1453.74,1722.64,2103] , au: [2201.38,2608.57,3185] , uk: [1149.98,1362.69,1664] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Bookkeeping, Invoicing, QuickBooks Software, Account Receivables, Reconciling, Clerical Skills, Accounts Payable, Communication Skills, Detail Oriented, Health Insurance" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Business Development Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Business Development, Business Strategy, Sales Management, Strategic Planning, Sales, Management, Business Planning, Marketing Strategy, Marketing, Project Management, Customer Relationship Management (CRM), Project Planning, Account Management, Strategy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Cash Management Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [37200,54000,70800] , us: [1498.56,1834.68,2103] , au: [2269.25,2778.23,3287.21] , uk: [1185.43,1451.31,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Treasury Management, Accounting, Cash Flow, Financial Analysis, Finance, Urban History, Corporate Finance, Cash Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Channel Sales Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Channel Partners, Solution Selling, Channel Sales, Account Management, Business Development, Cloud Computing, TCAP, Sales Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Civil Drafter", categoryId: "Architectural", levels: [1 , 2 , 3] , cs: [13850,27100,49509] , us: [1032.48,1201.88,1745.05] , au: [1563.46,1819.99,2642.50] , uk: [816.73,950.74,1380.41] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Construction Drawings, Auto CAD, Civil Engineering, Design Drawings, Civil 3D Software, Survey Data, Civil Design, Boundary Surveys" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Client Success Manager", categoryId: "Account Management", levels: [1 , 2 , 3] , cs: [31550,48400,82000] , us: [1386.52,1722.64,2394.88] , au: [2099.59,2608.57,3626.53] , uk: [1096.80,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Relationship Management (CRM) Software, Customer Onboarding, Customer Retention Strategies, Data Analysis and Reporting, Technical Troubleshooting, Product Knowledge and Expertise, Cross-functional Collaboration, Project Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Cloud Engineer", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [37200,60700,88600] , us: [1498.56,1969.13,2527.07] , au: [2269.25,2981.82,3826.70] , uk: [1185.43,1557.67,1999.02] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Amazon Web Services (AWS), Docker Products, Kubernetes, DevOps, Ansible, Jenkins, Microsoft Azure, Cloud Computing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Cold Caller", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1563.46,2269.25,3287.21] , uk: [816.73,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Content Strategy Development, SEO and SEM Optimization, Social Media Management, Email Marketing Campaigns, Analytics and Metrics Tracking, Content Creation and Copywriting, Brand Management, Video Production and Editing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Content Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Content Strategy Development, SEO and SEM Optimization, Social Media Management, Email Marketing Campaigns, Analytics and Metrics Tracking, Content Creation and Copywriting, Brand Management, Video Production and Editing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Content Strategist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Collaboration, Search Engine Optimization, Digital, Communication Skills, Editing, Writer, Innovation, Social Media, User Experience, Technical" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Conversion Rate Optimization Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1153.48,1722.64,2615.19] , au: [1746.70,2608.57,3960.14] , uk: [912.45,1362.69,2068.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Copywriter", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Copywriting, Search Engine Optimization (SEO), Social Media Marketing, Creative Writing, Blogging, Web Content Writing, Advertising, Social Media" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Creative Director", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [59600,126050,269250] , us: [1946.72,3276.11,6140.09] , au: [2947.89,4960.96,9297.85] , uk: [1539.94,2591.55,4857.09] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Creative Strategy, Art Direction, Digital Marketing, Digital Strategy, Branding & Identity, Interaction Design, Concept Development, Brand Development" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Creative Writer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [911.47,1498.56,2394.88] , au: [1380.23,2269.25,3626.53] , uk: [721.02,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Writer, Instruction, Creative Writing, English Speaking, Collaboration, Digital, Communication Skills, Social Media, Innovation, Facilitation" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Customer Service Representative", categoryId: "Customer Service Support", levels: [1 , 2 , 3] , cs: [19900,27100,43900] , us: [1153.48,1201.88,1633.01] , au: [1746.70,1819.99,2472.84] , uk: [912.45,950.74,1291.78] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, Troubleshooting, Communication Skills, Innovation, Technical, English Speaking, Scheduling, MS Office, Detail Oriented, Multi Tasking" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Customer Success Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Relationship Management (CRM) Software, Customer Onboarding, Customer Retention Strategies, Data Analysis and Reporting, Technical Troubleshooting, Product Knowledge and Expertise, Cross-functional Collaboration, Project Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "C# Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,48400,82000] , us: [1274.48,1722.64,2394.88] , au: [1929.93,2608.57,3626.53] , uk: [1008.17,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: ".Net, SQL Server, C#, Asp.net, JavaScript, Database, SQL, Computer Science, Software Development, JQuery" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "SQL, Statistics, Data Analytics, Database, Analysis, Communication Skills, Technical, Business Intelligence, Collaboration, Innovation" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Entry Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [11450,23550,36050] , us: [984.08,1226.08,1476.15] , au: [1490.17,1856.64,2235.32] , uk: [778.45,969.88,1167.70] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Excel, accuracy, speed, typing, data validation, data analysis, data management, data entry software" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Scientist/Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,52850,82000] , us: [1386.52,1812.27,2394.88] , au: [2099.59,2744.30,3626.53] , uk: [1096.80,1433.59,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Python, Database, SQL, Collaboration, Technical, Data Warehousing, ETL, Big Data, Amazon Web Services, Spark" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Data Storage & Management Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [51750,60700,96300] , us: [1789.86,1969.13,2681.28] , au: [2710.37,2981.82,4060.22] , uk: [1415.86,1557.67,2121.01] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Data Management, SQL, Data Analysis, Master Data Management, Databases, Microsoft SQL Server, Data Entry, Data Quality" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "DevOps", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,38300,59600] , us: [1386.52,1520.97,1946.72] , au: [2099.59,2303.18,2947.89] , uk: [1096.80,1203.15,1539.94] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "DevOps, Docker, Amazon Web Services, Azure, Kubernetes, Linux, Deployment, Technical, Python, Jenkins" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1153.48,1722.64,2615.19] , au: [1746.70,2608.57,3960.14] , uk: [912.45,1362.69,2068.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Google Analytics, Digital Marketing, Web Analytics, Digital Strategy, Data Analysis, Analytics, Data Visualization, Social Media Marketing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Coordinator", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1746.70,2269.25,3287.21] , uk: [912.45,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Digital, Collaboration, Project Management, CRM, Digital Marketing, Marketing Campaign, Technical, Editing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Digital Marketing, Google Ads, Search Engine Optimization (SEO), Google Analytics, Online Marketing, Social Media Marketing, Email Marketing, Marketing Strategy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Digital Marketing Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Digital Marketing, Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing, Google Analytics, Google Ads, Pay Per Click (PPC), Online Marketing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Email Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Email Campaign Management, Email Marketing Automation, Email Deliverability Optimization, HTML/CSS Coding, CRM Integration and Management, Data Analysis and Reporting, A/B Testing and Experimentation, Segmentation and Personalization" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Executive Assistant", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1153.48,1408.93,1857.09] , au: [1746.70,2133.52,2812.16] , uk: [912.45,1114.53,1469.04] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Executive Administrative Assistance, Office Administration, Administrative Assistance, Executive Support, Calendaring, Executive Calendar Management, Business Strategy, Expense Reports" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "E-commerce Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "E-Commerce, Search Engine Optimization, Digital, Innovation, Customer Service, Communication Skills, Collaboration, Digital Marketing, Catering Experience, Google Analytics" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Fashion Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Fashion, Graphic Design, Collaboration, Illustration Design, Innovation, Marketing Research, Technical, Communication Skills, Adobe Photoshop, Product Development" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Financial Planning & Analysis", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [54000,59600,109550] , us: [1834.68,1946.72,2945.65] , au: [2778.23,2947.89,4460.55] , uk: [1451.31,1539.94,2330.14] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Financial Planning, Financial Analyst, Analysis, Budget Management, Forecasting, Financial Modeling, Collaboration, Microsoft Excel, Communication Skills, Economics" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Front-end Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,42750,70800] , us: [1274.48,1610.60,2170.80] , au: [1929.93,2438.91,3287.21] , uk: [1008.17,1274.06,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "React.js, SASS, AngularJS, JavaScript, HTML5, Cascading Style Sheets (CSS), Git, jQuery" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Full Stack Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,48400,76400] , us: [1386.52,1722.64,2282.84] , au: [2099.59,2608.57,3456.87] , uk: [1096.80,1362.69,1805.83] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "AngularJS, JavaScript, Node.js, Cascading Style Sheets (CSS), Web Development, MySQL, jQuery, Full-Stack Development" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "General Accounting", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [54000,65200,82000] , us: [1834.68,2058.76,2394.88] , au: [2778.23,3117.55,3626.53] , uk: [1451.31,1628.57,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "General Accounting, Innovation, Reconciling, Vendor Management, Accuracy, Detail Oriented, Invoicing, General Ledger, Journal Entries, MS Office" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Graphic Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,25950,59600] , us: [911.47,1274.48,1946.72] , au: [1380.23,1929.93,2947.89] , uk: [721.02,1008.17,1539.94] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Typography, Communication Skills, Adobe Creative Suite, Adobe InDesign, Collaboration, Illustration Design, Innovation, Digital" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Healthcare Virtual Assistant", categoryId: "HealthCare", levels: [1 , 2 , 3] , cs: [13850,27100,43900] , us: [1032.48,1201.88,1633.01] , au: [1563.46,1819.99,2472.84] , uk: [816.73,950.74,1291.78] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Clinic, Recruiting, Communication Skills, Flexibility, Mental Health, Dementia, Hospital, English Speaking, Nursing Home, Elderly Care" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Help Desk Support", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [5400,13850,31600] , us: [862.70,1032.48,1386.52] , au: [1306.37,1563.46,2099.59] , uk: [682.43,816.73,1096.80] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Technical Support, Active Directory, Troubleshooting, Windows 7, Windows Server, Computer Hardware, Networking, Windows 10" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "HR Officer/Admin", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [7800,27100,43900] , us: [911.47,1201.88,1633.01] , au: [1380.23,1819.99,2472.84] , uk: [721.02,950.74,1291.78] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Human Resources (HR), Recruiting, Employee Relations, HR Policies, Human Resources Information Systems (HRIS), Onboarding, Performance Management, Employee Engagement" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Illustrator", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [911.47,1498.56,2394.88] , au: [1380.23,2269.25,3626.53] , uk: [721.02,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Accuracy, Iconography, User Experience, Creative Design, Detail Oriented, Typography, Illustration Design, Technical" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Influencer Marketing Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Marketing Strategy, Relationship Management, Collaboration, Project Management, Social Media, Instagram, Marketing Campaign, Fashion" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Inside Sales Representative", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1563.46,2269.25,3287.21] , uk: [816.73,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Inside Sales, Sales, Lead Generation, Customer Relationship Management (CRM), Business Development, Account Management, Solution Selling, Cold Calling" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Interior Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Office interior design, Living room interior design, Interior decoration, Home interior" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Inventory & Supply Chain", categoryId: "eCommerce", levels: [1 , 2 , 3] , cs: [37200,48400,70800] , us: [1498.56,1722.64,2170.80] , au: [2269.25,2608.57,3287.21] , uk: [1185.43,1362.69,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Supply Chain Management, Logistics Management, Procurement, Inventory Management, SAP ERP, SAP Products, Continuous Improvement, Purchasing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "IT Business Analyst", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,45000,82000] , us: [1386.52,1655.42,2394.88] , au: [2099.59,2506.77,3626.53] , uk: [1096.80,1309.51,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Business Analysis, Requirements Analysis, Requirements Gathering, SQL, Software Development Life Cycle (SDLC), Business Requirements, User Acceptance Testing, Agile Methodologies" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "IT Data Analyst", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [22350,31600,48400] , us: [1201.88,1386.52,1722.64] , au: [1819.99,2099.59,2608.57] , uk: [950.74,1096.80,1362.69] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Technical, Statistics, Collaboration, Data Analytics, Business Intelligence, SQL, Data Modeling, Python" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Key Account Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Account Management, Sales Management, Sales, Business-to-Business (B2B), Business Development, Business Strategy, Management, Marketing Strategy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Lead Generation Specialist", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1153.48,1722.64,2615.19] , au: [1746.70,2608.57,3960.14] , uk: [912.45,1362.69,2068.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "CRM, Proactive, Database, Outbound Calling, Innovation, Social Media, B2B Sales, Lead Generation" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Marketing Automation Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Marketing Automation, Marketo, Eloqua, Email Marketing, Pardot, Salesforce.com, Lead Scoring, Salesforce Marketing Cloud" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Member Care Engineer", categoryId: "", levels: [1 , 2 , 3] , cs: [13850,25950,49509] , us: [1032.48,1274.48,1745.05] , au: [1563.46,1819.99,2642.50] , uk: [816.73,950.74,1380.41] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Mental Health Professional", categoryId: "HealthCare", levels: [1 , 2 , 3] , cs: [19900,37200,60700] , us: [1153.48,1498.56,1969.13] , au: [1746.70,2269.25,2981.82] , uk: [912.45,1185.43,1557.67] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Psychology, Psychiatry, Treatment Planning, Documentation, Interventional, Communication Skills, Crisis Intervention, Behavior Analysis" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Mobile App Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,42750,104000] , us: [1386.52,1610.60,2835.49] , au: [2099.59,2438.91,4293.75] , uk: [1096.80,1274.06,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Mobile Application Development, Cross-Platform Development, Programming Languages (Java, Swift, Kotlin, etc.), Mobile App Design, User Interface (UI) Design, User Experience (UX) Design, Mobile App Testing and Debugging, Mobile App Security" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network Administrator", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [23550,34900,62950] , us: [1226.08,1453.74,2013.94] , au: [1856.64,2201.38,3049.69] , uk: [969.88,1149.98,1593.12] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Network Administration, Windows Server, Active Directory, Networking, Network Security, Troubleshooting, System Administration, Cisco Systems Products" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network Engineer", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [12650,40590,82000] , us: [1008.28,1565.78,2394.88] , au: [1526.82,2371.05,3626.53] , uk: [797.59,1238.61,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Network Engineering, Cisco Systems Products, Switches, Firewalls, Virtual Private Network (VPN), Networking, Network Administration, Network Security, Border Gateway Protocol (BGP), Routers, Wide Area Network (WAN), Open Shortest Path First (OSPF), Routing, Cisco Routers" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Network & Cybersecurity Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [31550,50600,82000] , us: [1386.52,1767.46,2394.88] , au: [2099.59,2676.43,3626.53] , uk: [1096.80,1398.14,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Malware Analysis, Collaboration, Risk Management, Vulnerability Assessment, Information Technology, Information Security, Compliance, Mitigation" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "NOC Specialist", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [9050,31600,57350] , us: [935.67,1386.52,1901.90] , au: [1416.88,2099.59,2880.03] , uk: [740.16,1096.80,1504.49] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Network Operations Center (NOC), Networking, Troubleshooting, Technical Support, Cisco Systems Products, Network Administration, Computer Network Operations, Internet Protocol Suite (TCP/IP)" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Operations Manager", categoryId: "", levels: [1 , 2 , 3] , cs: [42750,48400,82000] , us: [1610.60,1722.64,2394.88] , au: [2438.91,2608.57,3626.53] , uk: [1274.06,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Communication Skills, Management Skills, Proactive, Continual Improvement Process, Auto Delivery, Recruiting, Compliance, Collaboration, Detail Oriented, Mentoring, Technical" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Outbound Sales Representative", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1563.46,2269.25,3287.21] , uk: [816.73,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Cold Calling, Sales, Account Management, Direct Sales, Sales Process, Salesforce.com, Sales Management, Lead Generation" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Payroll Processing", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [19900,28200,34900] , us: [1153.48,1319.30,1453.74] , au: [1746.70,1997.79,2201.38] , uk: [912.45,1043.62,1149.98] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Payroll, ADP Payroll, Payroll Processing, Garnishments, Payroll Taxes, Multi-state Payroll Processing, Human Resources (HR), Payroll Administration" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Photographer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [7800,37200,82000] , us: [911.47,1498.56,2394.88] , au: [1380.23,2269.25,3626.53] , uk: [721.02,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Digital Photography, Fashion Photography, Image Editing, Portrait Painting, Creative Photography, Commercial Photography, Travel Photography" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "PHP Programmer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,31600,59600] , us: [1153.48,1386.52,1946.72] , au: [1746.70,2099.59,2947.89] , uk: [912.45,1096.80,1539.94] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "PHP, JQuery, MySQL, Git, JavaScript, Database, HTML, Back End, Laravel, WordPress" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "PPC Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Collaboration, Digital, Communication Skills, E-Commerce, Bing Ads, Landing Pages, Campaign Management, Google Analytics" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Power BI Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [37200,49509,70800] , us: [1498.56,1745.05,2170.80] , au: [2269.25,2642.50,3287.21] , uk: [1185.43,1380.41,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Data Analytics, ETL, SSIS, SQL Server, Database, SSRS, Analysis, SSAS" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Power Platform Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,54000,82000] , us: [1386.52,1834.68,2394.88] , au: [2099.59,2778.23,3626.53] , uk: [1096.80,1451.31,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Project Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Leadership, Motivation, Verbal communication, Time management, Team management, Negotiation, Research skills, Technical writing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Automation Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [32700,43900,54000] , us: [1408.93,1633.01,1834.68] , au: [2133.52,2472.84,2778.23] , uk: [1114.53,1291.78,1451.31] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Computer Science, Python, Collaboration, Test Automation, Communication Skills, Selenium, Scripting, Technical" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Project Manager", categoryId: "Development", levels: [1 , 2 , 3] , cs: [37200,59600,104000] , us: [1498.56,1946.72,2835.49] , au: [2269.25,2947.89,4293.75] , uk: [1185.43,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Software Quality Assurance, Test Planning, Agile Methodologies, Test Automation, Software Development Life Cycle (SDLC), Testing, Regression Testing, Scrum" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "QA Tester", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,31600,48400] , us: [1274.48,1386.52,1722.64] , au: [1929.93,2099.59,2608.57] , uk: [1008.17,1096.80,1362.69] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Quality measurements, Quality assurance standards, QA, Safety standards, Functional testing, Attention to detail, Routine inspection, Quality tests" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Quickbooks Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [22350,41650,70800] , us: [1201.88,1722,2170.80] , au: [1819.99,2608,3287.21] , uk: [950.74,1362,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Attention to detail, Strong analytical skills, Proficiency in the numeric system, Auditing, Spreadsheet Formulas, Financial Calculators" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Real Estate, Property & Mortgage", categoryId: "Real Estate", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1153.48,1408.93,1857.09] , au: [1746.70,2133.52,2812.16] , uk: [912.45,1114.53,1469.04] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Realtor, Houses for Sale, Property, Property for Sale, Land for Sale, Real Estate Agent, Home" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Recruitment Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [7800,27100,43900] , us: [911.47,1201.88,1633.01] , au: [1380.23,1819.99,2472.84] , uk: [721.02,950.74,1291.78] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Recruiting, MS Office, Customer Service, Scheduling, Human Resources Experience, Database, OnBoarding Management, Collaboration, Social Media, Applicant Tracking System" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "RPA Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,46150,70800] , us: [1386.52,1677.82,2170.80] , au: [2099.59,2540.71,3287.21] , uk: [1096.80,1327.23,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Analyst", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1153.48,1722.64,2615.19] , au: [1746.70,2608.57,3960.14] , uk: [912.45,1362.69,2068.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Sales Analysis, Data Analysis, Forecasting, Sales, Sales Management, Sales Operations, Tableau, Customer Relationship Management (CRM)" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Coordinator", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1563.46,2269.25,3287.21] , uk: [816.73,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, Communication Skills, MS Office, Collaboration, Scheduling, Vendor Management, Microsoft Excel, Accountable, Invoicing, Receptionist" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Development Representative", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [13850,37200,70800] , us: [1032.48,1498.56,2170.80] , au: [1563.46,2269.25,3287.21] , uk: [816.73,1185.43,1717.20] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Salesforce.com, Sales, Business Development, Sales Prospecting, Customer Relationship Management (CRM), Software as a Service (SaaS), Lead Generation, Sales Management" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Director", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, Accountable, Collaboration, Sales Strategies, CRM, Sales and Marketing, Forecasting, Technical, Account Management, MS Office" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Enablement Specialist", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Sales Enablement, Sales Management, Sales Process, Customer Relationship Management (CRM), Solution Selling, Sales Operations, Account Management, Strategy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Manager", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [37200,82000,159100] , us: [1498.56,2394.88,3937.03] , au: [2269.25,3626.53,5961.78] , uk: [1185.43,1894.46,3114.36] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, Sales Experience, Communication Skills, Relationship Management, Innovation, MS Office, Collaboration, CRM, Technical, Field Sales" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Sales Trainer", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Sales Trainings, Sales Management, Sales Process, Customer Retention, Sales Presentations, Direct Sales, Sales Operations, Sales" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SAS Programmer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,37200,54000] , us: [1386.52,1498.56,1834.68] , au: [2099.59,2269.25,2778.23] , uk: [1096.80,1185.43,1451.31] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Data Management, Documentation, Database, Statistics Analysis, SQL, Macros, FDA, MS Office" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Scrum Master", categoryId: "Development", levels: [1 , 2 , 3] , cs: [59600,59600,87500] , us: [1991.54,1991.54,2505.03] , au: [3015.76,3015.76,3793.34] , uk: [1575.39,1575.39,1981.59] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Scrum, Agile Methodologies, Kanban, Agile Project Management, Jira, Software Development, SQL, Confluence" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SEO Specialist", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Search Engine Optimization, Link Building, Google Analytics, Digital Marketing, Technical, Analysis, Search Engines, HTML, Collaboration, Digital" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Social Media Ads Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Social Media, Calendaring, Social Media Marketing, Communication Skills, Instagram, Innovation, Collaboration, Detail Oriented, Digital, Editing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Social Media Manager", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Proactive, Innovation, Community Management, Calendaring, Detail Oriented, Communication Skills, Digital, Collaboration" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Software Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [25950,37200,59600] , us: [1274.48,1498.56,1946.72] , au: [1929.93,2269.25,2947.89] , uk: [1008.17,1185.43,1539.94] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: ".Net, Asp.net, Technical, Collaboration, JavaScript, Communication Skills, SQL, Model View Controller, SQL Server, Azure" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Software Engineer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [32700,43900,59600] , us: [1408.93,1633.01,1946.72] , au: [2133.52,2472.84,2947.89] , uk: [1114.53,1291.78,1539.94] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Software Development, JavaScript, Software Engineering, Collaboration, Problem Solving, Innovation, Project Management, Computer Programming, Oracle, Software Design" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "SQL Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [31550,42750,54000] , us: [1386.52,1610.60,1834.68] , au: [2099.59,2438.91,2778.23] , uk: [1096.80,1274.06,1451.31] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "SQL Server Integration Services (SSIS), SQL Server Reporting Services (SSRS), Transact-SQL (T-SQL), Microsoft SQL Server, Extract, Transform, Load (ETL), SQL, Data Warehousing, Databases" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Tax Preparation", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [42750,48400,54000] , us: [1610.60,1722.64,1834.68] , au: [2438.91,2608.57,2778.23] , uk: [1274.06,1362.69,1451.31] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Income Tax, Corporate Tax, Tax Advisory, Tax, Tax Law, Financial Reporting, Accounting, Financial Accounting" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Tax Specialist", categoryId: "Accounting", levels: [1 , 2 , 3] , cs: [31550,37200,46150] , us: [1386.52,1498.56,1677.82] , au: [2099.59,2269.25,2540.71] , uk: [1096.80,1185.43,1327.23] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Tax, Income Tax, Accounting, Corporate Tax, Tax Advisory, Financial Accounting, Financial Reporting, Auditing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Team Lead/Supervisor", categoryId: "Customer Service Support", levels: [1 , 2 , 3] , cs: [19900,31600,48400] , us: [1153.48,1386.52,1722.64] , au: [1746.70,2099.59,2608.57] , uk: [912.45,1096.80,1362.69] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Customer Service, Compliance, Communication Skills, Innovation, Collaboration, Technical, Mentoring, Auto Delivery, Supervisory Experience, Scheduling" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Consultant", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [19900,31600,48400] , us: [1153.48,1386.52,1722.64] , au: [1746.70,2099.59,2608.57] , uk: [912.45,1096.80,1362.69] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "AutoCAD, Construction, Project Management, Project Planning, Engineering, Customer Service, Microsoft Access, Business Strategy" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Sales Engineer", categoryId: "B2B Sales", levels: [1 , 2 , 3] , cs: [25950,59600,104000] , us: [1274.48,1946.72,2835.49] , au: [1929.93,2947.89,4293.75] , uk: [1008.17,1539.94,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Technical Product Knowledge, Sales and Negotiation Skills, Customer Relationship Management (CRM), Solution Selling, Technical Presentations, Product Demonstrations, Competitive Analysis, Technical Writing" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Support Representative", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1153.48,1408.93,1857.09] , au: [1746.70,2133.52,2812.16] , uk: [912.45,1114.53,1469.04] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Technical, Hardware, Customer Service, English Speaking, Troubleshooting, Database, MS Office, Microsoft Excel, Communication Skills, Information Technology" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Technical Support Representative (VoIP)", categoryId: "IT Support", levels: [1 , 2 , 3] , cs: [12650,40590,82000] , us: [1008.28,1565.78,2394.88] , au: [1526.82,2371.05,3626.53] , uk: [797.59,1238.61,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Technical, Collaboration, Customer Service, Innovation, Troubleshooting, MS Office, Communication Skills, Multi Tasking, Hardware, Virtualization" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Training Specialist", categoryId: "Admin", levels: [1 , 2 , 3] , cs: [25950,37200,60700] , us: [1274.48,1498.56,1969.13] , au: [1929.93,2269.25,2981.82] , uk: [1008.17,1185.43,1557.67] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Teaching, Training & Development, Employee Training, Training Delivery, C (Programming Language), Instructor-led Training, Training Needs Analysis, Microsoft Access" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "UI/UX Designer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2394.88] , au: [1746.70,2608.57,3626.53] , uk: [912.45,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "User Interface (UI) Design, User Experience (UX) Design, Wireframing and Prototyping, Graphic Design, HTML/CSS, Responsive Design, Adobe Creative Suite, Sketch" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "User Experience Designer", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [19900,48400,104000] , us: [1153.48,1722.64,2835.49] , au: [1746.70,2608.57,4293.75] , uk: [912.45,1362.69,2243] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "User Interface Design, User Experience Design (UED), User Experience (UX), Wireframing, Interaction Design, User-centered Design, Usability Testing, UX Research" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Video Editor", categoryId: "Creative", levels: [1 , 2 , 3] , cs: [13850,37200,82000] , us: [1032.48,1498.56,2394.88] , au: [1563.46,2269.25,3626.53] , uk: [816.73,1185.43,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Video Editing Software (e.g. Adobe Premiere Pro, Final Cut Pro), Color Correction and Grading, Audio Editing and Mixing, Motion Graphics and Animation, Storytelling and Narrative Structure, Multi-Camera Editing, Encoding and Compression, Visual Effects (VFX)" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Virtual Assistant", categoryId: "Virtual Assistant", levels: [1 , 2 , 3] , cs: [19900,32700,55100] , us: [1153.48,1408.93,1857.09] , au: [1746.70,2133.52,2812.16] , uk: [912.45,1114.53,1469.04] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Virtualization, MS Office, Calendaring, Social Media, Admin Assistant, Customer Service, Scheduling, Proofreading, Communication Skills, Data Entry" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Web Analyst", categoryId: "Digital Marketing", levels: [1 , 2 , 3] , cs: [19900,48400,93000] , us: [1153.48,1722.64,2615.19] , au: [1746.70,2608.57,3960.14] , uk: [912.45,1362.69,2068.73] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Google Analytics, Digital Marketing, Web Analytics, Digital Strategy, Data Analysis, Analytics, Data Visualization, Social Media Marketing," , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Web Designer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,48400,82000] , us: [1153.48,1722.64,2394.88] , au: [1746.70,2608.57,3626.53] , uk: [912.45,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "Web Design, Digital, HTML, Collaboration, Graphic Design, User Interface Design, User Experience, JavaScript, Adobe Photoshop, Illustration Design" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

{ label: "Web Developer", categoryId: "Development", levels: [1 , 2 , 3] , cs: [19900,48400,82000] , us: [1153.48,1722.64,2394.88] , au: [1746.70,2608.57,3626.53] , uk: [912.45,1362.69,1894.46] , hk: [,,] , sg: [,,] , ca: [,,] , nz: [,,] , keywords: "JavaScript, Web Design, HTML 5, Design, Responsive Web Design, Angular JS, Agile Software Development, Application Programming, Object-oriented Programming" , descriptions: ["" , "" , ""] , tasks: ["" , "" , ""] , relatedRoleIds: ["" , "" , ""] , relatedIndustryIds: [" " , " " , " "] , candidateID: [" " , " " , " "] , candidateName: [" " , " " , " "] , candidateDescription: [" " , " " , " "] , candidateImage: [" " , " " , " "] },

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
