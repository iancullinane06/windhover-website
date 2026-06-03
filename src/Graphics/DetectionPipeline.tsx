import { GlobeIcon, MicroscopeIcon } from "@phosphor-icons/react";
import IconWrapper from "../components/IconWrapper";

export default function DetectionPipeline() {
    return (
        <div className="w-full flex flex-col gap-8 text-xl font-bold font-mono text-stone-900 md:flex-row">
            <div className="z-2 flex h-30 grow-1 items-center justify-end rounded-r-full bg-gradient-to-r from-pink-300 to-red-400 shadow-[0_16px_35px_rgba(244,63,94,0.18)] backdrop-blur-sm md:to-red-400/50">
            <p className="mr-16">Detection</p><div className="mr-8"><IconWrapper icon={<MicroscopeIcon />} color="text-stone-700" bgColor="transparent" borderColour="border-stone-700"/></div></div>
            <div className="z-1 flex h-30 grow-2 items-center justify-center rounded-full bg-gradient-to-r from-violet-300 to-sky-400 shadow-[0_16px_35px_rgba(14,165,233,0.18)]">Management</div>
            <div className="flex h-30 grow-1 items-center justify-center rounded-l-full bg-gradient-to-r from-green-300 to-lime-400 shadow-[0_16px_35px_rgba(132,204,22,0.2)]">Eradication</div>
        </div>
    );
}