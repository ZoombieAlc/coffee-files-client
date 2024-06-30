import axios from "axios";
import { isInSession } from "../utils";
import WithoutSessionPage from "../components/pages/WithoutSessionPage";

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

    axios
      .postForm("http://localhost:8080/api/system/import", formData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("File loaded successfully.");
        }
      });
  };

  return isInSession() ? <>{children}</> : <WithoutSessionPage />;
}

export default SessionRouter;
