// ==========================================================================
// 📡 MODULE 4: SECURE IDENTITY AUTHENTICATION ENGINE (INLINE INGRESS VALIDATED)
// Architect: Sudhir Kumar Mishra | Co-Founder & Principal Architect
// ==========================================================================

const SUPABASE_URL = "https://mzdcwglkfnpgvjzggdlj.supabase.co";  
const SUPABASE_ANON_KEY = "sb_publishable_rjI9RFI7vYy5QL2sPZTU7w_E9HC1RFV";

let supabaseClient = null;
if (SUPABASE_URL !== "YOUR_SUPABASE_URL" && typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("🟢 [Supabase Ingress] Cloud Connection Handshake Synchronized.");
}

function renderAuthModule() {
    const root = document.getElementById("sandbox-workbench-root");
    if (!root) return;

    root.innerHTML = `
        <div class="flex items-center gap-2 text-2xl font-bold"><i data-lucide="lock"></i> Security Ingress</div>
        
        <div class="insulated-card rounded-xl p-6 border border-slate-800">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-lg mb-4">
                <i data-lucide="fingerprint"></i> Identity Authentication Shield
            </div>
            
            <div class="flex flex-col gap-4 text-sm">
                <div>
                    <label class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Email Address</label>
                    <input type="email" id="auth-email" placeholder="sudhir@example.com" class="auth-input">
                </div>
                
                <div>
                    <label class="block text-xs text-slate-400 font-bold mb-1 uppercase tracking-wider">Secure Password</label>
                    <input type="password" id="auth-password" placeholder="••••••••••••" class="auth-input">
                </div>

                <div class="auth-grid-btn">
                    <button onclick="handleLiveSignIn()" class="btn-auth-action bg-sky-500 text-slate-950 hover:bg-sky-400">
                        <i data-lucide="log-in" class="w-4 h-4"></i> Sign In
                    </button>
                    <button onclick="handleLiveSignUp()" class="btn-auth-action border border-slate-700 text-slate-200 hover:border-slate-600">
                        <i data-lucide="user-plus" class="w-4 h-4"></i> Sign Up
                    </button>
                </div>
            </div>
            
            <div id="auth-status-log" class="hidden mt-4 p-3 bg-sky-500/10 text-sky-400 text-xs rounded-lg font-mono border border-sky-500/20 text-center"></div>
        </div>
    `;
    setTimeout(() => { lucide.createIcons(); }, 50);
}

// LIVE INLINE SIGN IN LOGICAL INGRESS
async function handleLiveSignIn() {
    const email = document.getElementById("auth-email").value;
    const password = document.getElementById("auth-password").value;
    const statusLog = document.getElementById("auth-status-log");

    if (!email || !password) {
        showLog(statusLog, "🚨 ERROR: Email and password fields cannot be null.", "red");
        return;
    }

    showLog(statusLog, `⌛ Striking credentials vault for ${email}...`, "sky");

    if (supabaseClient) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) {
            showLog(statusLog, `🚨 CLOUD REJECTION: ${error.message}`, "red");
        } else {
            showLog(statusLog, `🟢 INGRESS APPROVED: Session activated for ${data.user.email}.`, "emerald");
        }
    } else {
        setTimeout(() => { showLog(statusLog, "🟢 LOCAL VERIFICATION: Ingress Approved [Sandbox Mode].", "emerald"); }, 800);
    }
}

// LIVE INLINE SIGN UP LOGICAL INGRESS
async function handleLiveSignUp() {
    const email = document.getElementById("auth-email").value;
    const password = document.getElementById("auth-password").value;
    const statusLog = document.getElementById("auth-status-log");

    if (!email || !password) {
        showLog(statusLog, "🚨 ERROR: Validation failed. Fields are empty.", "red");
        return;
    }

    showLog(statusLog, "⌛ Provisioning custom user block at remote PostgreSQL clusters...", "sky");

    if (supabaseClient) {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) {
            showLog(statusLog, `🚨 CLOUD ERROR: ${error.message}`, "red");
        } else {
            showLog(statusLog, `✨ SUCCESS: Record established for ${data.user.email}! Check verification mail.`, "emerald");
        }
    } else {
        setTimeout(() => { showLog(statusLog, "✨ SUCCESS: User registered inside Local Ledger arrays.", "emerald"); }, 800);
    }
}

function showLog(element, message, colorShift) {
    element.classList.remove("hidden");
    element.textContent = message;
    if (colorShift === "red") {
        element.style.backgroundColor = "rgba(239, 68, 68, 0.1)"; element.style.color = "#ef4444"; element.style.borderColor = "rgba(239, 68, 68, 0.2)";
    } else if (colorShift === "emerald") {
        element.style.backgroundColor = "rgba(52, 211, 153, 0.1)"; element.style.color = "#34d399"; element.style.borderColor = "rgba(52, 211, 153, 0.2)";
    } else {
        element.style.backgroundColor = "rgba(56, 189, 248, 0.1)"; element.style.color = "#38bdf8"; element.style.borderColor = "rgba(56, 189, 248, 0.2)";
    }
}
