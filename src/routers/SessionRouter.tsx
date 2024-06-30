import { isInSession } from "../utils";

function SessionRouter({ children }: { children: React.ReactNode }) {
  const buttonAction = async () => {
    const file = await new File(
      [
        `CupsOfCoffee    
A(20000)[{}]:|<|directory<|other_directory<*file.js{Y29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTsK}[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\directory\\other_directory\\file.js,LastModifiedDateTime:1719577849]*file2.js{Y29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTsK}[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\directory\\other_directory\\file2.js,LastModifiedDateTime:1719577849]*file3.js{Y29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTsK}[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\directory\\other_directory\\file3.js,LastModifiedDateTime:1719577849]>[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\directory\\other_directory,LastModifiedDateTime:1719577849]|directory<>[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:0,Path:A:\\directory\\directory,LastModifiedDateTime:1719577849]>[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\directory,LastModifiedDateTime:1719577849]>[CreatedDateTime:1719577849,OtherMetadata:{author=Elder},Size:40,Path:A:\\,LastModifiedDateTime:1719577849]
{}`,
      ],
      "file.txt"
    );

    const formData = new FormData();
    // parse File to blob
    const blob = new Blob([file], { type: "text/plain" });
    // append file to form data
    formData.append("file", blob);

    console.log(blob);
    console.log(file);

    fetch("http://localhost:8080/api/system/import", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        console.log("File loaded successfully.");
      }
    });
  };

  return isInSession() ? (
    <div>
      <h1>File System</h1>
      <p>Here is the file system content...</p>
    </div>
  ) : (
    <div>
      <h1>Unauthorized</h1>
      <p>You need to be logged in to access the file system.</p>
      <button onClick={buttonAction}>Load</button>
    </div>
  );
}

export default SessionRouter;
