import Pane from "@/components/ui/Pane/Pane";
import Overview from "./Overview/Overview";

export default function Page() {
  return (
    <div>
      <Pane className="justify-between lg:flex lg:items-start">
        <div>
          <h1 className="text-2xl font-[300]">Evaluate tradeoffs</h1>

          <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
            Pick the best option the based on tradeoffs that are the most
            important to you.
          </h2>
        </div>

        <div>
          <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
            ⚖️
          </h3>
        </div>
      </Pane>

      <Overview />
    </div>
  );
}
