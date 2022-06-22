

module.exports = {
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "testResultsProcessor": "./node_modules/jest-html-reporter",
            "outputPath": "./reports/test-report.html",
            "pageTitle": "End to End Test Report",
            "includeFailureMsg": true
            },
            
        ]
        
    ],
    "preset": "jest-playwright-preset", 
    "verbose": true
}
  
  