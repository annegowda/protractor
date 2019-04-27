
Feature:  login


Scenario Outline:
Given user on storeking login page
When user enter username "<username>"
And user enter password "<password>"
And clicks on signin button
Then user redirect to home page and contain username "<result>"

Examples:
|username | password | result|
| 8095188085  | 8095188085 | annegowda |

