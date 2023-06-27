# LegCo Advanced
attendance.js - To find the attendance of a certain Hong Kong LegCo Member for a specific quarter or period

speech.py - To find all the quotes of a certain Hong Kong LegCo Member in official council meetings records

_made for the 7th LegCo_

## How to use 

### attendance.js
1. Go to https://app2.legco.gov.hk/members-participation-records/en/MemberList/2022-2025 and find the member you are interested in
2. Pick the sections you are interested in
3. Copy and run the code in your browser's console. Check the console message for the result

Note: Edit the code at line 39 to the quarter or period you want. By default, it is 2023Q2

### speech.py
0. Download the specific driver for the browser you chose
   
Some of the famous choices:
* Chrome: You can download the ChromeDriver from the official ChromeDriver website:

  https://sites.google.com/a/chromium.org/chromedriver/downloads
* Firefox: You can download the GeckoDriver from the official GeckoDriver website:

  https://github.com/mozilla/geckodriver/releases
* Safari: SafariDriver is built-in and automatically installed with Safari on macOS.
  * Note: For Safari, you have to enable the 'Allow Remote Automation' option in Safari
    
_By default, Safari is used. Edit Line 20~24 if you would like to use the others._
1. Run the code
2. You would be prompted to input the Chinese full name of the desired LegCo Member. For example, input "葉劉淑儀" if you are interested in Hon Mrs. Regina IP LAU Suk-yee
3. You would be prompted to select where to save the output document
4. The code would run and output a Word document "speech.docx"

_Edit the last line of code if you want it renamed_

_Users who have never used Python may download the executable (for macOS only as of Jun 27, 2023) on the releases page_

## Disclaimer

This package is not affiliated with or endorsed by the Legislative Council of Hong Kong.

The Legislative Council of Hong Kong is the copyright owner of data retrieved from its open data API.
   
