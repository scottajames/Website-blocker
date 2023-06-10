// Add the keywords you want to block in website URLs
var keywordsToBlock = [
  "adult",
  "porn",
  "xxx",
  "sex",
  "nude",
  "erotic",
  "explicit",
  "mature",
  "hentai",
  "bikini",
  "playboy",
  "escort",
  "lingerie",
  "seduction",
  "intimate",
  "naughty",
  "sensual",
  "voyeur",
  "swinger",
  "orgasm",
  "kama sutra",
  "fetish",
  "bondage",
  "prostitute",
  "strip",
  "peep",
  "erogenous",
  "libido",
  "promiscuous",
  "obscene",
  "desire",
  "stimulate",
  "pleasure",
  "lust",
  "sordid",
  "deviant",
  "seductive",
  "taboo",
  "flirt",
  "temptation"
];
Feel free to customize and expand this list based on your specific needs. Remember to use this list responsibly and in compliance with any applicable laws and regulations.








// IP address or URL to redirect the blocked websites
var redirectIp = "https://www.google.com";

// Function to block websites based on keywords
function blockWebsites(details) {
  for (var i = 0; i < keywordsToBlock.length; i++) {
    if (details.url.includes(keywordsToBlock[i])) {
      return { redirectUrl: redirectIp };
    }
  }
}

// Register the webRequest event listener
chrome.webRequest.onBeforeRequest.addListener(
  blockWebsites,
  { urls: ["<all_urls>"] },
  ["blocking"]
);
