import { UploadFile } from "./_components/UploadFile";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 shadow w-full bg-slate-300">
        <p className="p-4">Image Uploader</p>
      </header>
      <main className="flex flex-wrap">
        {
          [...Array(100)].map((_, i) => (
            <div key={i} className="bg-slate-100 p-4 m-2 w-[400px] h-[400px]">
              <p>Image {i + 1}</p>
              <img src="https://www.hitachi-solutions-create.co.jp/column/img/image-generation-ai.jpg" alt="placeholder" width="100%" />
            </div>
          ))
        }
      </main>
      <footer className="fixed bottom-0 w-full bg-slate-300">
        <UploadFile />
      </footer>
    </>
  );
}

