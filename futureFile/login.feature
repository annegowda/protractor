
Feature:  login


Scenario Outline:login success
Given user on storeking login page
When user enter username "<username>"
And user enter password "<password>"
And clicks on signin button
Then user redirect to home page and contain username "<result>"
And logout

Examples:
|username | password | result|
| 8095188085  | 8095188085 | annegowda |


Scenario Outline:wrong password/username
Given user on storeking login page
When user enter username "<username>"
And user enter password "<password>"
And clicks on signin button
Then get error message  "<result>"
Examples:
|username | password | result|
| 8095188085  | 8095188 | Invalid Username or Password |

