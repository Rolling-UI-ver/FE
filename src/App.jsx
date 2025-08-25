import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import ColorPicker from "./components/ColorPicker";
import "./index.css";

const COLORS = [
  { id: "sand",  hex: "#F7D9A6" },
  { id: "lilac", hex: "#E8DFFF" },
  { id: "sky",   hex: "#BFE6FF" },
  { id: "mint",  hex: "#CDF2CE" },
];

export default function App() {
  const [toName, setToName] = useState("");
  const [tab, setTab] = useState("color"); // color | image
  const [selected, setSelected] = useState(COLORS[0].id);

  const canCreate = toName.trim().length > 0;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="mx-auto w-full max-w-2xl px-6 pt-10 pb-24">
       
        <section>
          <p className="mb-2 text-sm font-bold">To.</p>
          <input
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.18)]"
            placeholder="받는 사람 이름을 입력해 주세요"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
          />
        </section>

        <section className="mt-8">
          <p className="text-sm font-bold">배경화면을 선택해 주세요.</p>
          <p className="mt-1 text-xs text-gray-500">
            템플릿을 선택하거나, 이미지를 선택할 수 있습니다.
          </p>

 
          <div className="mt-3 inline-flex rounded-md bg-gray-100 p-1">
            <button
              className={`h-8 rounded-[8px] px-4 text-xs font-semibold transition
                ${tab === "color"
                  ? "bg-white shadow-sm ring-2 ring-violet-500 ring-offset-0"
                  : "text-gray-600"}`}
              onClick={() => setTab("color")}
            >
              컬러
            </button>
            <button
              className={`h-8 rounded-[8px] px-4 text-xs font-semibold transition
                ${tab === "image"
                  ? "bg-white shadow-sm ring-2 ring-violet-500"
                  : "text-gray-600"}`}
              onClick={() => setTab("image")}
            >
              이미지
            </button>
          </div>

          <div className="mt-4">
            {tab === "color" ? (
              <ColorPicker colors={COLORS} value={selected} onChange={setSelected} />
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
                이미지 선택 기능은 추후 추가 예정입니다.
              </div>
            )}
          </div>
        </section>

        <div className="mt-8">
          <Button full disabled={!canCreate} onClick={() => alert("생성하기!")}>
            생성하기
          </Button>
        </div>
      </main>

      
    </div>
  );
}
