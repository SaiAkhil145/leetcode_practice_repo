<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LeetCode Practice Repo — SaiAkhil145</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #080c14;
    --surface: #0d1220;
    --border: #1a2540;
    --text: #c8d8f0;
    --muted: #4a6080;
    --cyan: #00e5ff;
    --green: #00ff88;
    --pink: #ff4db8;
    --yellow: #ffe066;
    --purple: #b06bff;
    --orange: #ff8c42;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Animated grid bg */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  /* Floating orbs */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.12;
    pointer-events: none;
    z-index: 0;
    animation: orb-drift 18s ease-in-out infinite;
  }
  .orb-1 { width: 500px; height: 500px; background: var(--cyan); top: -100px; left: -150px; animation-delay: 0s; }
  .orb-2 { width: 400px; height: 400px; background: var(--pink); bottom: -100px; right: -100px; animation-delay: -6s; }
  .orb-3 { width: 300px; height: 300px; background: var(--purple); top: 50%; left: 50%; animation-delay: -12s; }

  @keyframes orb-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, -30px) scale(1.05); }
    66% { transform: translate(-30px, 20px) scale(0.95); }
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  /* HEADER */
  header {
    text-align: center;
    padding: 60px 0 50px;
    animation: fade-down 0.8s ease both;
  }

  .repo-label {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--cyan);
    border: 1px solid rgba(0,229,255,0.3);
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 24px;
    background: rgba(0,229,255,0.05);
    animation: pulse-border 2.5s ease-in-out infinite;
  }

  @keyframes pulse-border {
    0%, 100% { border-color: rgba(0,229,255,0.3); box-shadow: 0 0 0 0 rgba(0,229,255,0); }
    50% { border-color: rgba(0,229,255,0.7); box-shadow: 0 0 15px rgba(0,229,255,0.15); }
  }

  h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #fff 0%, var(--cyan) 50%, var(--green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    color: var(--muted);
    font-size: 13px;
    letter-spacing: 2px;
  }

  /* STATS BAR */
  .stats-bar {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin: 40px 0 60px;
    animation: fade-up 0.8s 0.2s ease both;
  }

  .stat {
    text-align: center;
  }

  .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    display: block;
    line-height: 1;
  }

  .stat-label {
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--muted);
    text-transform: uppercase;
    margin-top: 4px;
  }

  /* TOPICS GRID */
  .topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  .topic-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    animation: card-in 0.6s ease both;
  }

  .topic-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--accent-color);
    border-color: var(--accent-color);
  }

  .topic-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    position: relative;
    overflow: hidden;
  }

  .topic-header::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.08;
    background: linear-gradient(90deg, var(--accent-color), transparent);
  }

  .topic-icon {
    font-size: 18px;
    flex-shrink: 0;
  }

  .topic-name {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    flex: 1;
  }

  .topic-count {
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 20px;
    background: rgba(255,255,255,0.05);
    color: var(--muted);
    border: 1px solid var(--border);
  }

  .topic-items {
    padding: 12px 0;
  }

  .topic-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 20px;
    font-size: 12px;
    color: var(--muted);
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .topic-item:hover {
    color: var(--text);
    background: rgba(255,255,255,0.03);
  }

  .topic-item:hover .item-dot {
    background: var(--accent-color);
    box-shadow: 0 0 8px var(--accent-color);
  }

  .item-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--border);
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .item-num {
    color: rgba(255,255,255,0.2);
    font-size: 10px;
    min-width: 32px;
  }

  /* COLOR THEMES PER TOPIC */
  .t-array { --accent-color: var(--cyan); }
  .t-sliding { --accent-color: var(--green); }
  .t-two { --accent-color: var(--pink); }
  .t-sorting { --accent-color: var(--yellow); }
  .t-simulation { --accent-color: var(--orange); }
  .t-hash { --accent-color: var(--purple); }
  .t-greedy { --accent-color: #ff6b6b; }
  .t-string { --accent-color: #4ecdc4; }
  .t-counting { --accent-color: #ffd93d; }
  .t-heap { --accent-color: #ff8fab; }
  .t-bucket { --accent-color: var(--orange); }
  .t-dp { --accent-color: var(--green); }
  .t-math { --accent-color: var(--cyan); }
  .t-nt { --accent-color: var(--yellow); }
  .t-bit { --accent-color: #a8ff78; }
  .t-dc { --accent-color: var(--purple); }
  .t-prefix { --accent-color: var(--pink); }
  .t-seg { --accent-color: var(--orange); }
  .t-enum { --accent-color: var(--cyan); }

  /* Animated glow top stripe */
  .topic-stripe {
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    background-size: 200% 100%;
    animation: stripe-flow 3s linear infinite;
  }

  @keyframes stripe-flow {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* ANIMATIONS */
  @keyframes fade-down {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes card-in {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Stagger cards */
  .topic-card:nth-child(1) { animation-delay: 0.1s; }
  .topic-card:nth-child(2) { animation-delay: 0.15s; }
  .topic-card:nth-child(3) { animation-delay: 0.2s; }
  .topic-card:nth-child(4) { animation-delay: 0.25s; }
  .topic-card:nth-child(5) { animation-delay: 0.3s; }
  .topic-card:nth-child(6) { animation-delay: 0.35s; }
  .topic-card:nth-child(7) { animation-delay: 0.4s; }
  .topic-card:nth-child(8) { animation-delay: 0.45s; }
  .topic-card:nth-child(9) { animation-delay: 0.5s; }
  .topic-card:nth-child(10) { animation-delay: 0.55s; }
  .topic-card:nth-child(11) { animation-delay: 0.6s; }
  .topic-card:nth-child(12) { animation-delay: 0.65s; }
  .topic-card:nth-child(13) { animation-delay: 0.7s; }
  .topic-card:nth-child(14) { animation-delay: 0.75s; }
  .topic-card:nth-child(15) { animation-delay: 0.8s; }
  .topic-card:nth-child(16) { animation-delay: 0.85s; }
  .topic-card:nth-child(17) { animation-delay: 0.9s; }
  .topic-card:nth-child(18) { animation-delay: 0.95s; }
  .topic-card:nth-child(19) { animation-delay: 1.0s; }

  /* TYPING CURSOR for h1 */
  .cursor {
    display: inline-block;
    width: 3px;
    height: 0.9em;
    background: var(--cyan);
    margin-left: 4px;
    border-radius: 1px;
    animation: blink 1s step-end infinite;
    vertical-align: middle;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }

  footer {
    text-align: center;
    margin-top: 60px;
    color: var(--muted);
    font-size: 11px;
    letter-spacing: 2px;
    animation: fade-up 0.8s 1.2s ease both;
  }

  footer span { color: var(--pink); }
</style>
</head>
<body>

<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<div class="container">
  <header>
    <div class="repo-label">⚡ github / SaiAkhil145</div>
    <h1>LeetCode<br>Practice<span class="cursor"></span></h1>
    <p class="subtitle">// algorithms · data structures · patterns</p>
  </header>

  <div class="stats-bar">
    <div class="stat">
      <span class="stat-num" style="color:var(--cyan)">35+</span>
      <span class="stat-label">Problems</span>
    </div>
    <div class="stat">
      <span class="stat-num" style="color:var(--green)">19</span>
      <span class="stat-label">Topics</span>
    </div>
    <div class="stat">
      <span class="stat-num" style="color:var(--pink)">∞</span>
      <span class="stat-label">Dedication</span>
    </div>
  </div>

  <div class="topics-grid">

    <!-- ARRAY -->
    <div class="topic-card t-array">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">📦</span>
        <span class="topic-name">Array</span>
        <span class="topic-count">18 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0011-container-with-most-water" target="_blank"><span class="item-dot"></span><span class="item-num">#0011</span>Container With Most Water</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0026-remove-duplicates-from-sorted-array" target="_blank"><span class="item-dot"></span><span class="item-num">#0026</span>Remove Duplicates from Sorted Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0027-remove-element" target="_blank"><span class="item-dot"></span><span class="item-num">#0027</span>Remove Element</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0217-contains-duplicate" target="_blank"><span class="item-dot"></span><span class="item-num">#0217</span>Contains Duplicate</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0283-move-zeroes" target="_blank"><span class="item-dot"></span><span class="item-num">#0283</span>Move Zeroes</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0525-contiguous-array" target="_blank"><span class="item-dot"></span><span class="item-num">#0525</span>Contiguous Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0560-subarray-sum-equals-k" target="_blank"><span class="item-dot"></span><span class="item-num">#0560</span>Subarray Sum Equals K</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0643-maximum-average-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#0643</span>Maximum Average Subarray I</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0746-min-cost-climbing-stairs" target="_blank"><span class="item-dot"></span><span class="item-num">#0746</span>Min Cost Climbing Stairs</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0905-sort-array-by-parity" target="_blank"><span class="item-dot"></span><span class="item-num">#0905</span>Sort Array by Parity</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0930-binary-subarrays-with-sum" target="_blank"><span class="item-dot"></span><span class="item-num">#0930</span>Binary Subarrays With Sum</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0992-subarrays-with-k-different-integers" target="_blank"><span class="item-dot"></span><span class="item-num">#0992</span>Subarrays With K Different Integers</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/1224-maximum-equal-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#1224</span>Maximum Equal Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/1636-sort-array-by-increasing-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#1636</span>Sort Array by Increasing Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2154-keep-multiplying-found-values-by-two" target="_blank"><span class="item-dot"></span><span class="item-num">#2154</span>Keep Multiplying Found Values by Two</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2460-apply-operations-to-an-array" target="_blank"><span class="item-dot"></span><span class="item-num">#2460</span>Apply Operations to an Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2760-longest-even-odd-subarray-with-threshold" target="_blank"><span class="item-dot"></span><span class="item-num">#2760</span>Longest Even Odd Subarray With Threshold</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3719-longest-balanced-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3719</span>Longest Balanced Subarray I</a>
      </div>
    </div>

    <!-- SLIDING WINDOW -->
    <div class="topic-card t-sliding">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🪟</span>
        <span class="topic-name">Sliding Window</span>
        <span class="topic-count">8 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0076-minimum-window-substring" target="_blank"><span class="item-dot"></span><span class="item-num">#0076</span>Minimum Window Substring</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0424-longest-repeating-character-replacement" target="_blank"><span class="item-dot"></span><span class="item-num">#0424</span>Longest Repeating Character Replacement</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0438-find-all-anagrams-in-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0438</span>Find All Anagrams in a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0567-permutation-in-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0567</span>Permutation in String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0643-maximum-average-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#0643</span>Maximum Average Subarray I</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0930-binary-subarrays-with-sum" target="_blank"><span class="item-dot"></span><span class="item-num">#0930</span>Binary Subarrays With Sum</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0992-subarrays-with-k-different-integers" target="_blank"><span class="item-dot"></span><span class="item-num">#0992</span>Subarrays With K Different Integers</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2760-longest-even-odd-subarray-with-threshold" target="_blank"><span class="item-dot"></span><span class="item-num">#2760</span>Longest Even Odd Subarray With Threshold</a>
      </div>
    </div>

    <!-- TWO POINTERS -->
    <div class="topic-card t-two">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">👆</span>
        <span class="topic-name">Two Pointers</span>
        <span class="topic-count">11 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0011-container-with-most-water" target="_blank"><span class="item-dot"></span><span class="item-num">#0011</span>Container With Most Water</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0026-remove-duplicates-from-sorted-array" target="_blank"><span class="item-dot"></span><span class="item-num">#0026</span>Remove Duplicates from Sorted Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0027-remove-element" target="_blank"><span class="item-dot"></span><span class="item-num">#0027</span>Remove Element</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0125-valid-palindrome" target="_blank"><span class="item-dot"></span><span class="item-num">#0125</span>Valid Palindrome</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0283-move-zeroes" target="_blank"><span class="item-dot"></span><span class="item-num">#0283</span>Move Zeroes</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0345-reverse-vowels-of-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0345</span>Reverse Vowels of a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0567-permutation-in-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0567</span>Permutation in String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0680-valid-palindrome-ii" target="_blank"><span class="item-dot"></span><span class="item-num">#0680</span>Valid Palindrome II</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0905-sort-array-by-parity" target="_blank"><span class="item-dot"></span><span class="item-num">#0905</span>Sort Array by Parity</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0917-reverse-only-letters" target="_blank"><span class="item-dot"></span><span class="item-num">#0917</span>Reverse Only Letters</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2460-apply-operations-to-an-array" target="_blank"><span class="item-dot"></span><span class="item-num">#2460</span>Apply Operations to an Array</a>
      </div>
    </div>

    <!-- HASH TABLE -->
    <div class="topic-card t-hash">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">#️⃣</span>
        <span class="topic-name">Hash Table</span>
        <span class="topic-count">18 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0076-minimum-window-substring" target="_blank"><span class="item-dot"></span><span class="item-num">#0076</span>Minimum Window Substring</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0217-contains-duplicate" target="_blank"><span class="item-dot"></span><span class="item-num">#0217</span>Contains Duplicate</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0242-valid-anagram" target="_blank"><span class="item-dot"></span><span class="item-num">#0242</span>Valid Anagram</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0424-longest-repeating-character-replacement" target="_blank"><span class="item-dot"></span><span class="item-num">#0424</span>Longest Repeating Character Replacement</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0438-find-all-anagrams-in-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0438</span>Find All Anagrams in a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0525-contiguous-array" target="_blank"><span class="item-dot"></span><span class="item-num">#0525</span>Contiguous Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0560-subarray-sum-equals-k" target="_blank"><span class="item-dot"></span><span class="item-num">#0560</span>Subarray Sum Equals K</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0567-permutation-in-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0567</span>Permutation in String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0791-custom-sort-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0791</span>Custom Sort String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0930-binary-subarrays-with-sum" target="_blank"><span class="item-dot"></span><span class="item-num">#0930</span>Binary Subarrays With Sum</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0992-subarrays-with-k-different-integers" target="_blank"><span class="item-dot"></span><span class="item-num">#0992</span>Subarrays With K Different Integers</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/1224-maximum-equal-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#1224</span>Maximum Equal Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/1636-sort-array-by-increasing-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#1636</span>Sort Array by Increasing Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2154-keep-multiplying-found-values-by-two" target="_blank"><span class="item-dot"></span><span class="item-num">#2154</span>Keep Multiplying Found Values by Two</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2423-remove-letter-to-equalize-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#2423</span>Remove Letter to Equalize Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3713-longest-balanced-substring-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3713</span>Longest Balanced Substring I</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3719-longest-balanced-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3719</span>Longest Balanced Subarray I</a>
      </div>
    </div>

    <!-- STRING -->
    <div class="topic-card t-string">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🔤</span>
        <span class="topic-name">String</span>
        <span class="topic-count">15 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0067-add-binary" target="_blank"><span class="item-dot"></span><span class="item-num">#0067</span>Add Binary</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0076-minimum-window-substring" target="_blank"><span class="item-dot"></span><span class="item-num">#0076</span>Minimum Window Substring</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0125-valid-palindrome" target="_blank"><span class="item-dot"></span><span class="item-num">#0125</span>Valid Palindrome</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0242-valid-anagram" target="_blank"><span class="item-dot"></span><span class="item-num">#0242</span>Valid Anagram</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0345-reverse-vowels-of-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0345</span>Reverse Vowels of a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0424-longest-repeating-character-replacement" target="_blank"><span class="item-dot"></span><span class="item-num">#0424</span>Longest Repeating Character Replacement</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0438-find-all-anagrams-in-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0438</span>Find All Anagrams in a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0567-permutation-in-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0567</span>Permutation in String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0680-valid-palindrome-ii" target="_blank"><span class="item-dot"></span><span class="item-num">#0680</span>Valid Palindrome II</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0791-custom-sort-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0791</span>Custom Sort String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0917-reverse-only-letters" target="_blank"><span class="item-dot"></span><span class="item-num">#0917</span>Reverse Only Letters</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2423-remove-letter-to-equalize-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#2423</span>Remove Letter to Equalize Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2785-sort-vowels-in-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#2785</span>Sort Vowels in a String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3713-longest-balanced-substring-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3713</span>Longest Balanced Substring I</a>
      </div>
    </div>

    <!-- SORTING -->
    <div class="topic-card t-sorting">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🔃</span>
        <span class="topic-name">Sorting</span>
        <span class="topic-count">8 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0217-contains-duplicate" target="_blank"><span class="item-dot"></span><span class="item-num">#0217</span>Contains Duplicate</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0242-valid-anagram" target="_blank"><span class="item-dot"></span><span class="item-num">#0242</span>Valid Anagram</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0791-custom-sort-string" target="_blank"><span class="item-dot"></span><span class="item-num">#0791</span>Custom Sort String</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0905-sort-array-by-parity" target="_blank"><span class="item-dot"></span><span class="item-num">#0905</span>Sort Array by Parity</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/1636-sort-array-by-increasing-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#1636</span>Sort Array by Increasing Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2154-keep-multiplying-found-values-by-two" target="_blank"><span class="item-dot"></span><span class="item-num">#2154</span>Keep Multiplying Found Values by Two</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2785-sort-vowels-in-a-string" target="_blank"><span class="item-dot"></span><span class="item-num">#2785</span>Sort Vowels in a String</a>
      </div>
    </div>

    <!-- PREFIX SUM -->
    <div class="topic-card t-prefix">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">➕</span>
        <span class="topic-name">Prefix Sum</span>
        <span class="topic-count">4 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0525-contiguous-array" target="_blank"><span class="item-dot"></span><span class="item-num">#0525</span>Contiguous Array</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0560-subarray-sum-equals-k" target="_blank"><span class="item-dot"></span><span class="item-num">#0560</span>Subarray Sum Equals K</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0930-binary-subarrays-with-sum" target="_blank"><span class="item-dot"></span><span class="item-num">#0930</span>Binary Subarrays With Sum</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3719-longest-balanced-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3719</span>Longest Balanced Subarray I</a>
      </div>
    </div>

    <!-- BIT MANIPULATION -->
    <div class="topic-card t-bit">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">⚙️</span>
        <span class="topic-name">Bit Manipulation</span>
        <span class="topic-count">4 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0067-add-binary" target="_blank"><span class="item-dot"></span><span class="item-num">#0067</span>Add Binary</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0190-reverse-bits" target="_blank"><span class="item-dot"></span><span class="item-num">#0190</span>Reverse Bits</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0191-number-of-1-bits" target="_blank"><span class="item-dot"></span><span class="item-num">#0191</span>Number of 1 Bits</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0693-binary-number-with-alternating-bits" target="_blank"><span class="item-dot"></span><span class="item-num">#0693</span>Binary Number with Alternating Bits</a>
      </div>
    </div>

    <!-- SIMULATION -->
    <div class="topic-card t-simulation">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🎮</span>
        <span class="topic-name">Simulation</span>
        <span class="topic-count">4 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0067-add-binary" target="_blank"><span class="item-dot"></span><span class="item-num">#0067</span>Add Binary</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0258-add-digits" target="_blank"><span class="item-dot"></span><span class="item-num">#0258</span>Add Digits</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2154-keep-multiplying-found-values-by-two" target="_blank"><span class="item-dot"></span><span class="item-num">#2154</span>Keep Multiplying Found Values by Two</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2460-apply-operations-to-an-array" target="_blank"><span class="item-dot"></span><span class="item-num">#2460</span>Apply Operations to an Array</a>
      </div>
    </div>

    <!-- GREEDY -->
    <div class="topic-card t-greedy">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🏆</span>
        <span class="topic-name">Greedy</span>
        <span class="topic-count">2 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0011-container-with-most-water" target="_blank"><span class="item-dot"></span><span class="item-num">#0011</span>Container With Most Water</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0680-valid-palindrome-ii" target="_blank"><span class="item-dot"></span><span class="item-num">#0680</span>Valid Palindrome II</a>
      </div>
    </div>

    <!-- DYNAMIC PROGRAMMING -->
    <div class="topic-card t-dp">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🧠</span>
        <span class="topic-name">Dynamic Programming</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0746-min-cost-climbing-stairs" target="_blank"><span class="item-dot"></span><span class="item-num">#0746</span>Min Cost Climbing Stairs</a>
      </div>
    </div>

    <!-- COUNTING -->
    <div class="topic-card t-counting">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🔢</span>
        <span class="topic-name">Counting</span>
        <span class="topic-count">4 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0992-subarrays-with-k-different-integers" target="_blank"><span class="item-dot"></span><span class="item-num">#0992</span>Subarrays With K Different Integers</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/2423-remove-letter-to-equalize-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#2423</span>Remove Letter to Equalize Frequency</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3713-longest-balanced-substring-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3713</span>Longest Balanced Substring I</a>
      </div>
    </div>

    <!-- HEAP -->
    <div class="topic-card t-heap">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🏗️</span>
        <span class="topic-name">Heap (Priority Queue)</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
      </div>
    </div>

    <!-- BUCKET SORT -->
    <div class="topic-card t-bucket">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🪣</span>
        <span class="topic-name">Bucket Sort</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0451-sort-characters-by-frequency" target="_blank"><span class="item-dot"></span><span class="item-num">#0451</span>Sort Characters by Frequency</a>
      </div>
    </div>

    <!-- MATH -->
    <div class="topic-card t-math">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🔬</span>
        <span class="topic-name">Math</span>
        <span class="topic-count">2 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0067-add-binary" target="_blank"><span class="item-dot"></span><span class="item-num">#0067</span>Add Binary</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0258-add-digits" target="_blank"><span class="item-dot"></span><span class="item-num">#0258</span>Add Digits</a>
      </div>
    </div>

    <!-- NUMBER THEORY -->
    <div class="topic-card t-nt">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🔭</span>
        <span class="topic-name">Number Theory</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0258-add-digits" target="_blank"><span class="item-dot"></span><span class="item-num">#0258</span>Add Digits</a>
      </div>
    </div>

    <!-- DIVIDE AND CONQUER -->
    <div class="topic-card t-dc">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">✂️</span>
        <span class="topic-name">Divide &amp; Conquer</span>
        <span class="topic-count">3 problems</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0190-reverse-bits" target="_blank"><span class="item-dot"></span><span class="item-num">#0190</span>Reverse Bits</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/0191-number-of-1-bits" target="_blank"><span class="item-dot"></span><span class="item-num">#0191</span>Number of 1 Bits</a>
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3719-longest-balanced-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3719</span>Longest Balanced Subarray I</a>
      </div>
    </div>

    <!-- SEGMENT TREE -->
    <div class="topic-card t-seg">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">🌲</span>
        <span class="topic-name">Segment Tree</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3719-longest-balanced-subarray-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3719</span>Longest Balanced Subarray I</a>
      </div>
    </div>

    <!-- ENUMERATION -->
    <div class="topic-card t-enum">
      <div class="topic-stripe"></div>
      <div class="topic-header">
        <span class="topic-icon">📋</span>
        <span class="topic-name">Enumeration</span>
        <span class="topic-count">1 problem</span>
      </div>
      <div class="topic-items">
        <a class="topic-item" href="https://github.com/SaiAkhil145/leetcode_practice_repo/tree/master/3713-longest-balanced-substring-i" target="_blank"><span class="item-dot"></span><span class="item-num">#3713</span>Longest Balanced Substring I</a>
      </div>
    </div>

  </div><!-- /grid -->

  <footer>
    <p>crafted with <span>♥</span> by SaiAkhil145 &nbsp;·&nbsp; keep grinding &nbsp;⚡</p>
  </footer>
</div>

</body>
</html>
