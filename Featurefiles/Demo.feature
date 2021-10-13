Feature:I am going to validate calculator app

@calculatortesting
@calculatortesting
@calculatortesting
Scenario Outline: Addition in calculator app first

Given Navigate to calculator website
When I add two numbers "<input1>" and "<input2>"
Then the output is displayed as "<result>"

# Scenario: Addition in calculator app first

# Given Navigate to "calculator" website
# When I add two numbers "7" and "7"
# Then the output is displayed as "14"

Examples:
    | input1 | input2 | result |
    | 3  | 7  | 10 |
    | 4 | 8 | 12|
    |  5| 8 | 13 |

@NavigatingToAngularWebsite
Scenario Outline:  Navigate to angularJS website

Given Navigate to "AngularJS" website
When Click on Angulario link
Then Type "<text>" in search box

Examples:
    | text |
    | hey |
    |hello |
    |senthil|
