const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "By nature, men are nearly alike; by practice, they get to be wide apart.",
    author: "Confucius",
  },
  {
    quote:
      "Security is mostly a superstition. It does not exist in nature.... Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "Life is a moderately good play with a badly written third act.",
    author: "Truman Capote",
  },
  {
    quote:
      "Thanks to the Interstate Highway System, it is now possible to travel from coast to coast without seeing anything.",
    author: "Charles Kuralt",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const length = quotes.length;
const todayQuote = quotes[Math.floor(Math.random() * length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
