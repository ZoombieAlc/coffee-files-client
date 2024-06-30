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

    // console.log(blob);
    // console.log(file);

    // fetch("http://localhost:8080/api/system/import", {
    //   method: "POST",
    //   body: formData,
    // }).then((response) => {
    //   if (response.ok) {
    //     console.log("File loaded successfully.");
    //     console.log(response.headers);
    //     response.headers.getSetCookie().forEach((cookie) => {
    //       document.cookie = cookie;
    //     });
    //   }
    // });

    axios
      .postForm("http://localhost:8080/api/system/import", formData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("File loaded successfully.");

          console.log(response.headers);
          console.log(
            response.headers?.get("set-cookie") ?? "No cookies found!"
          );
          response.headers["set-cookie"]?.forEach((cookie) => {
            document.cookie = cookie;
          });
        }
      });
  };

  return isInSession() || true ? <>{children}</> : <WithoutSessionPage />;
}

export default SessionRouter;
