## Example

### Rendered
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>CDS-Card</title>
    <script src="https://unpkg.com/@molit/cds-card-viewer/dist/cds-card-viewer.js"></script>
    <script nomodule="" src="https://unpkg.com/@molit/cds-card-viewer/dist/cds-card-viewer.js"></script>    
  </head>
  <body>
    <cds-card
    locale="EN"
      card='{
	"summary": "3 Possible Clinical Trials have been found for the Condition: C18 - malignant neoplasm of colon and Subtype: C2852 - Adenocarcinoma (Studies last indexed: 2020-08-11, 11:34 AM)",
	"detail":"The following Research Studies could be considered for the patients condition constellation",
	"indicator":"info",
	"source":{
		"label":"MOLIT Institute",
		"url":"https://molit.eu/",
		"icon":"https://molit.eu/wp-content/uploads/2017/01/favicon.png"},
		"suggestions":[{
			"label":"Enroll patient to clinical trial",
			"uuid":"e1187895-ad57-4ff7-a1f1-ccf954b2fe46",
			"actions":[{
				"type":"create",
				"description":"Based on condition and subtype, the patient could be enrolled to a clinical trial",
				"resource":{
					"resourceType":"Task"
				}
			}]
		}],
		"selectionBehavior":"at-most-one",
		"links":[
			{
				"label":"Adjuvant Aspirin Treatment in PIK3CA Mutated Colon Cancer Patients. A Randomized, Double-blinded, Placebo-controlled, Phase III Trial",
				"url":"https://clinicaltrials.gov/ct2/show/NCT02467582",
				"type":"Clinical Trial",
				"appContext":null
			},{
				"label":"A Phase IIb Study of RAMucirumab in Combination With TAS102 vs. TAS102 Monotherapy in Chemotherapy Refractory Metastatic Colorectal Cancer Patients",
				"url":"https://clinicaltrials.gov/ct2/show/NCT03520946",
				"type":"Clinical Trial",
				"appContext":null
			},{
				"label":"A Phase 1b/2 Study of BMS-813160 in Combination With Chemotherapy or Nivolumab in Patients With Advanced Solid Tumors",
				"url":"https://clinicaltrials.gov/ct2/show/NCT03184870",
				"type":"Clinical Trial",
				"appContext":null
			}
		]
    }'
    ></cds-card>
  </body>
</html>

### Code
``` html
<cds-card
  locale="en"
  card='{
	"summary": "3 Possible Clinical Trials have been found for the Condition: C18 - malignant neoplasm of colon and Subtype: C2852 - Adenocarcinoma (Studies last indexed: 2020-08-11, 11:34 AM)",
	"detail":"The following Research Studies could be considered for the patients condition constellation",
	"indicator":"info",
	"source":{
		"label":"MOLIT Institute",
		"url":"https://molit.eu/",
		"icon":"https://molit.eu/wp-content/uploads/2017/01/favicon.png"},
		"suggestions":[{
			"label":"Enroll patient to clinical trial",
			"uuid":"e1187895-ad57-4ff7-a1f1-ccf954b2fe46",
			"actions":[{
				"type":"create",
				"description":"Based on condition and subtype, the patient could be enrolled to a clinical trial",
				"resource":{
					"resourceType":"Task"
				}
			}]
		}],
		"selectionBehavior":"at-most-one",
		"links":[
			{
				"label":"Adjuvant Aspirin Treatment in PIK3CA Mutated Colon Cancer Patients. A Randomized, Double-blinded, Placebo-controlled, Phase III Trial",
				"url":"https://clinicaltrials.gov/ct2/show/NCT02467582",
				"type":"Clinical Trial",
				"appContext":null
			},{
				"label":"A Phase IIb Study of RAMucirumab in Combination With TAS102 vs. TAS102 Monotherapy in Chemotherapy Refractory Metastatic Colorectal Cancer Patients",
				"url":"https://clinicaltrials.gov/ct2/show/NCT03520946",
				"type":"Clinical Trial",
				"appContext":null
			},{
				"label":"A Phase 1b/2 Study of BMS-813160 in Combination With Chemotherapy or Nivolumab in Patients With Advanced Solid Tumors",
				"url":"https://clinicaltrials.gov/ct2/show/NCT03184870",
				"type":"Clinical Trial",
				"appContext":null
			}
		]
  }'
></cds-card>
```

