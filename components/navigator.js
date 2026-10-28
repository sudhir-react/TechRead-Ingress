// Module 1: Course Track Selector Matrix by Sudhir Kumar Mishra
function renderNavigator() {
    const root = document.getElementById("track-navigator-root");
    if (!root) return;

    root.innerHTML = `
        <div class="insulated-card border border-sky-500/50 rounded-xl p-6 cursor-pointer shadow-lg shadow-sky-500/5 flex items-center gap-4">
            <div class="bg-sky-500/10 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center"><i data-lucide="terminal"></i></div>
            <div>
                <h4 class="font-bold text-base">Model Context Protocol</h4>
                <p class="text-xs text-slate-400">AI Agent Infrastructure Track</p>
            </div>
        </div>
        <div class="insulated-card border border-slate-800 rounded-xl p-6 cursor-pointer flex items-center gap-4 hover:border-slate-700">
            <div class="bg-amber-500/10 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center"><i data-lucide="zap"></i></div>
            <div>
                <h4 class="font-bold text-base">FastAPI & Asyncio</h4>
                <p class="text-xs text-slate-400">High-Throughput Services Track</p>
            </div>
        </div>
        <div class="insulated-card border border-slate-800 rounded-xl p-6 cursor-pointer flex items-center gap-4 hover:border-slate-700">
            <div class="bg-emerald-500/10 text-emerald-400 w-12 h-12 rounded-lg flex items-center justify-center"><i data-lucide="database"></i></div>
            <div>
                <h4 class="font-bold text-base">PostgreSQL & WAL</h4>
                <p class="text-xs text-slate-400">Enterprise Persistence Track</p>
            </div>
        </div>
    `;
}
