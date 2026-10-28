// Module 2: Industrial Roadmap Engine (Fully Hardened Edition) by Sudhir Kumar Mishra
function renderRoadmap() {
    const root = document.getElementById("roadmap-ledger-root");
    if (!root) return;

    root.innerHTML = `
        <div class="flex items-center gap-2 text-2xl font-bold"><i data-lucide="map"></i> Enterprise Production Roadmap</div>
        <p class="text-slate-400 text-sm -mt-5 mb-2">बेसिक सिंटैक्स से लेकर कंपनी के लाइव आर्किटेक्चर तक का मुकम्मल सफर।</p>

        <!-- PHASE 01: FULLY EXPANDED -->
        <div class="insulated-card rounded-xl p-8 relative border border-slate-800 mb-6" style="background-color: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 2rem; position: relative;">
            <div class="absolute top-6 right-8 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">Phase 01: Basic</div>
            <h4 class="text-xl font-bold mb-3 text-slate-100">JSON-RPC 2.0 विनिर्देश और Stdio ट्रांसपोर्ट की बुनियादी नींव</h4>
            <div class="text-xs text-sky-400 font-semibold mb-4"><i data-lucide="clock" class="inline w-3 h-3 mr-1"></i> Target: Week 1-2 | Core Ingress</div>
            
            <div class="text-slate-300 text-sm space-y-3">
                <p><strong>🎯 कंपनी में लाइव काम कैसे होता है?</strong> असली एआई सिस्टम्स (जैसे Model Context Protocol) में क्लाइंट और सर्वर आपस में Stdio (Standard Input/Output) के जरिए बात करते हैं। यहाँ छात्र सीधे डिकोड करना सीखेगा।</p>
                <p><strong>📚 मुख्य थ्योरी ज्ञान:</strong> JSON-RPC 2.0 एक लाइट-वेट रिमोट प्रोसीजर कॉल प्रोटोकॉल है। इसका मानक पेलोड हमेशा 3 मुख्य कुंजियों पर काम करता है: <code class="text-amber-400 font-mono">jsonrpc</code> (strictly "2.0"), <code class="text-amber-400 font-mono">method</code> (स्ट्रिंग नाम), और <code class="text-amber-400 font-mono">params</code> (डेटा का डिब्बा)।</p>
                <div class="bg-black/40 p-3 rounded font-mono text-xs text-emerald-400 my-2 border border-slate-900">
// Standard Enterprise Handshake Payload<br>
{<br>
&nbsp;&nbsp;"jsonrpc": "2.0",<br>
&nbsp;&nbsp;"method": "initialize",<br>
&nbsp;&nbsp;"id": 1,<br>
&nbsp;&nbsp;"params": { "client": "TechRead-Agent", "version": "1.0" }<br>
}
                </div>
                <p><strong>🔥 कंपनी इंटरव्यू क्रैकर नोड:</strong> इंटरव्यू में पूछा जाता है: <em>"अगर JSON-RPC रिक्वेस्ट में 'id' गायब हो, तो क्या होगा?"</em> छात्र सीखेगा कि 'id' गायब होने पर सर्वर इसे एक 'Notification' मानता है और बैकएंड से कोई भी रिस्पांस वापस नहीं भेजता!</p>
            </div>
        </div>

        <!-- PHASE 02: FULLY EXPANDED -->
        <div class="insulated-card rounded-xl p-8 relative border border-slate-800 mb-6" style="background-color: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 2rem; position: relative;">
            <div class="absolute top-6 right-8 text-xs font-extrabold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 uppercase tracking-wider">Phase 02: Advanced</div>
            <h4 class="text-xl font-bold mb-3 text-slate-100">Asynchronous Event Loops और Non-Blocking Database Persistence</h4>
            <div class="text-xs text-sky-400 font-semibold mb-4"><i data-lucide="clock" class="inline w-3 h-3 mr-1"></i> Target: Week 3-4 | System Optimization</div>
            
            <div class="text-slate-300 text-sm space-y-3">
                <p><strong>🎯 कंपनी में लाइव काम कैसे होता है?</strong> हाई-ट्रैफिक फिनटेक एप्लीकेशंस में जब ५० से अधिक एआई एजेंट्स एक साथ डेटाबेस में राइट (Write) मारते हैं, तो डेटा ब्लॉक हो जाता है। यहाँ छात्र लाइव थ्रेड लॉक्स को बाईपास करना सीखेगा।</p>
                <p><strong>📚 मुख्य थ्योरी ज्ञान:</strong> Python का <code class="text-sky-400 font-mono">Asyncio Engine</code> एक ही थ्रेड के भीतर सिंगल-पोजीशन कोऑपरेटिव मल्टीटास्किंग चलाता है। जब कोई डेटाबेस क्वेरी पेंडिंग होती है, तो इवेंट लूप दूसरे यूजर को तुरंत सर्व करता है।</p>
                <p><strong>⚡ SQLite3 WAL मोड आर्किटेक्चर:</strong> डिफ़ॉल्ट रूप से डेटाबेस राइटिंग के समय पूरे टेबल को लॉक कर देता है। SQLite3 में <code class="text-emerald-400 font-mono">PRAGMA journal_mode=WAL;</code> (Write-Ahead Logging) ऑन करने से रीडर्स (Readers) और राइटर्स (Writers) एक दूसरे को ब्लॉक नहीं करते, जिससे डेटाबेस लेटेंसी सीधे <code class="text-sky-400 font-mono">0.1117 ms</code> के लेज़र ब्रैकेट में आ जाती है!</p>
            </div>
        </div>

        <!-- PHASE 03: FULLY EXPANDED -->
        <div class="insulated-card rounded-xl p-8 relative border border-slate-800" style="background-color: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 2rem; position: relative;">
            <div class="absolute top-6 right-8 text-xs font-extrabold px-3 py-1 rounded-full bg-red-500/10 text-red-400 uppercase tracking-wider">Phase 03: Production</div>
            <h4 class="text-xl font-bold mb-3 text-slate-100">Multi-Tenant Ingress सुरक्षा: Token Bucket Throttling & Fraud Insulation</h4>
            <div class="text-xs text-sky-400 font-semibold mb-4"><i data-lucide="clock" class="inline w-3 h-3 mr-1"></i> Target: Week 5-6 | Live Production Hardening</div>
            
            <div class="text-slate-300 text-sm space-y-3">
                <p><strong>🎯 कंपनी में लाइव काम कैसे होता है?</strong> असली कंपनियों में हैकर्स या बॉट्स स्क्रिप्ट चलाकर आपके रिफरल रिवॉर्ड सिस्टम को लूटने की कोशिश करते हैं। यहाँ छात्र सीधे वह फ्रॉड इंसुलेशन शील्ड डिजाइन करना सीखेगा जो सुधीर जी ने अपवर्क के \$4,000 USD फिनटेक प्रोजेक्ट के लिए बनाई है!</p>
                <p><strong>📚 मुख्य थ्योरी ज्ञान:</strong> <code class="text-red-400 font-mono">Token Bucket Algorithm</code> सर्वर पर आने वाली हर रिक्वेस्ट को एक वर्चुअल टोकन बाइंड करता है। अगर बाल्टी खाली है, तो सर्वर तुरंत <code class="text-red-400 font-mono">HTTP 429 Too Many Requests</code> थ्रो कर देता है। इसके साथ ही, <code class="text-emerald-400 font-mono">SELECT FOR UPDATE</code> लॉक्स की मदद से एसिंक्रोनस रेस कंडीशंस को डेटाबेस कमिट होने से पहले ही रोक दिया जाता है!</p>
            </div>
        </div>
    `;
}
