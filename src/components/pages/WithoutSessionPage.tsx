import CreateFileSystemBtn from "../molecules/createFileSystemBtn";
import LoadSavFile from "../molecules/loadSavFile";

function WithoutSessionPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col">
      <img
        src="/images/mc_background_1.png"
        alt=""
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col justify-between items-center py-5 w-full h-full">
        <h1 className="text-white font-bold font-inter text-4xl">
          Coffee Files
        </h1>
        <div className="w-1/2 flex justify-between">
          <CreateFileSystemBtn />
          <LoadSavFile />
        </div>
        <div className="text-gray-400 flex gap-1 text-sm">
          <span className="font-light">Made by</span>
          <span className="font-bold">UTP students</span>
        </div>
      </div>
    </div>
  );
}

export default WithoutSessionPage;
