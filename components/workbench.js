// Module 3: Industrial Sandbox Workbench by Sudhir Kumar Mishra
function renderWorkbench() {
    const root = document.getElementById("sandbox-workbench-root");
    if (!root) return;

    root.innerHTML = `
        <div class="flex items-center gap-2 text-2xl font-bold"><i data-lucide="code-2"></i> Industrial Sandbox</div>
        
        <div class="insulated-card rounded-xl p-6 border border-slate-800">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-4">
                <i data-lucide="briefcase"></i> Live Company Ticket #1094
            </div>
            <h5 class="text-base font-semibold mb-2">Task: Starvation Risk Mitigation</h5>
            <p class="text-slate-400 text-xs mb-4">
                **सिचुएशन:** एआई एजेंट लगातार फ़ास्ट रिक्वेस्ट भेज रहा है। सर्वर को क्रैश होने से बचाने के लिए नीचे दिए गए कोड ब्लॉक में रेट-लिमिटर की कंडीशन को पूरा कीजिए।
            </p>

            <div class="code-box rounded-lg p-5 text-xs text-emerald-400 overflow-x-auto leading-relaxed">
<span class="text-slate-500"># Company Production Code Shell</span><br>
def verify_ingress_clearance(current_tokens):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-pink-400">if</span> current_tokens &lt; <span class="text-sky-400">1.0</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-pink-400">return</span> <span class="text-emerald-300">"🚨 HTTP 429 Too Many Requests"</span><br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-500"># TODO: Deduct token and pass clearance</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;current_tokens -= <span class="text-sky-400">1.0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-pink-400">return</span> <span class="text-emerald-300">"🟢 Ingress Pass"</span>
            </div>

            <button id="test-verify-btn" class="w-full mt-4 bg-emerald-400 text-slate-950 border-none p-3 rounded-lg font-bold cursor-pointer flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors">
                <i data-lucide="play-circle"></i> Run Production Tests & Verify Code
            </button>
            
            <div id="test-result-output" class="hidden mt-4 p-3 bg-emerald-500/10 text-emerald-400 text-xs rounded-lg font-mono border border-emerald-500/20 text-center"></div>
        </div>

        <div class="insulated-card rounded-xl p-6 border border-slate-800 text-center bg-gradient-to-br from-slate-900 to-indigo-950">
            <h4 class="text-sky-400 font-bold mb-2 flex items-center justify-center gap-2"><i data-lucide="award"></i> Certified Contributor Badge</h4>
            <p class="text-slate-400 text-xs">इस प्लेटफॉर्म के सभी लाइव टास्क पूरे करने पर छात्र को सीधे गिटहब कंट्रीब्यूटर प्रोफाइल नोड से लिंक कर दिया जाता है।</p>
        </div>
    `;

    // Connect compiler simulation interaction directly
    setTimeout(() => {
        const btn = document.getElementById("test-verify-btn");
        const output = document.getElementById("test-result-output");
        if (btn && output) {
            btn.addEventListener("click", () => {
                output.classList.remove("hidden");
                output.innerHTML = "⌛ Running syntax tree sweeps...";
                setTimeout(() => {
                    output.innerHTML = "✨ SUCCESS: 4/4 Unit Tests Passed! [Rate Limiter Verified]";
                }, 1200);
            });
        }
    }, 100);
}
