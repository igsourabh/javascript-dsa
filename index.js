function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
console.log(object);
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && wordDict.includes(word)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Example usage
const s = "leetcode";
const wordDict = ["leet", "code"];
const canSegment = wordBreak(s, wordDict);
console.log(canSegment);
