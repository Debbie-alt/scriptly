"use client";
import { useState } from "react";
import { checkPlagiarism } from "@/config/plagiarism";
import AiFeatureTabs from "./feature-tab";


export default function PlagiarismHero() {
const [text, setText] = useState("");
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);


async function runCheck() {
setLoading(true);
setResult("");
try {
const res = await checkPlagiarism(text);
setResult(res);
} catch (err) {
console.error(err);
setResult("❌ Error while checking plagiarism.");
} finally {
setLoading(false);
}
}


return (
    <div className="pt-24">
    <AiFeatureTabs/>
<section className="relative overflow-hidden py-30 bg-white dark:bg-[#111111]">
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50 to-white dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-[#111111]" />
<div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
{/* Left side — Hero copy */}
<div className="space-y-6 text-center lg:text-left">
<span className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
🔍 Scriptly 's Plagiarism Checker
</span>
<h1 className="text-4xl sm:text-5xl font-medium leading-relaxed tracking-tight text-gray-900 dark:text-white">
Detect <span className="text-indigo-900 dark:text-indigo-800">Plagiarism</span> Instantly ✨
</h1>
<p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
Paste your text and let Scriptly’s AI give you a quick similarity verdict.
Perfect for essays, articles, and creative work. 
</p>
<ul className="space-y-2 text-gray-700 dark:text-gray-400">
<li>✅ Instant results in seconds</li>
<li>🎓 Ideal for students & professionals</li>
<li>🌐 Works with AI-powered reasoning</li>
</ul>
</div>


{/* Right side — Form */}
<div className="bg-white dark:bg-[#1a1a1a] shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
Paste your text below ✍️
</h2>
<textarea
className="w-full h-48 p-4 border rounded-xl text-gray-900 dark:text-white dark:bg-[#111111] border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
placeholder="Paste your text here..."
value={text}
onChange={(e) => setText(e.target.value)}
/>


<button
onClick={runCheck}
disabled={loading || !text.trim()}
className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-900 to-indigo-950 text-white font-semibold shadow hover:opacity-90 disabled:opacity-50"
>
{loading ? "⏳ Checking for similar texts…" : " Check Plagiarism"}
</button>


{result && (
<div className="mt-6 p-4 rounded-xl bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-100">
<h3 className="font-semibold mb-2">Result 📊</h3>
<p className="whitespace-pre-wrap">{result}</p>
</div>
)}
</div>
</div>
</section>
</div>
);
}