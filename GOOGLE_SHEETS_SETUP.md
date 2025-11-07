# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it "Hungry Algorithm - Questionnaire Responses"
4. Make the sheet editable by anyone:
   - Click "Share" button (top right)
   - Click "Change to anyone with the link"
   - Set permission to "Editor"
   - Copy the link - this is your **Sheet Editor Link**

## Step 2: Add Headers to Your Sheet

In Row 1, add these column headers:
- A1: Timestamp
- B1: Name
- C1: Email
- D1: SEN
- E1: Question 1
- F1: Question 2
- ... continue up to ...
- AC1: Question 25

## Step 3: Create the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp,
      data.name,
      data.email,
      data.sen || ""
    ];
    
    // Add all 25 responses in order
    for (let i = 1; i <= 25; i++) {
      const response = data.responses.find(r => r.questionId === i);
      rowData.push(response ? response.answer : "");
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Data saved successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Hungry Algorithm API is running!");
}
```

4. Click the **Save** icon (💾) and name your project "Hungry Algorithm API"

## Step 4: Deploy the Apps Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Hungry Algorithm Form Submission"
   - **Execute as**: "Me (your email)"
   - **Who has access**: "Anyone" (this allows public submissions)
5. Click **Deploy**
6. Click **Authorize access** and grant the necessary permissions
7. Copy the **Web app URL** - this is your `GOOGLE_APPS_SCRIPT_URL`

## Step 5: Update the Website Code

1. Open `src/pages/Questionnaire.tsx`
2. Find line 102 where it says:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual Web app URL

## Testing

1. Go to your website questionnaire page
2. Fill out all 25 questions
3. Submit the form
4. Check your Google Sheet - you should see a new row with the submission data!

## Important Notes

- **Data Collection Period**: 6/11/25 - 9/11/25
- The sheet is set to "Anyone with the link can edit" for easy collaboration
- All submissions are timestamped automatically
- If you need to redeploy the script after changes, click **Deploy** → **Manage deployments** → **Edit** → **New version**

## Your Links

- **Sheet Editor Link**: [Your Google Sheet URL after creating it]
- **Apps Script URL**: [Your deployed Web app URL]

---

**Need help?** Check the Apps Script execution logs:
1. In Apps Script editor, click **Executions** (left sidebar)
2. View any errors or successful runs
