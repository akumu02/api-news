# API-NEWS <img align="right" width="182" height="30px" style="margin-top:7px" src="https://www.es.masterbase.com/logomb.svg"/>

NodeJS microservice.

![Express](https://img.shields.io/badge/Express-v4.17.3-orange.svg?style=flat-square&logo=NPM)
![axios](https://img.shields.io/badge/axios-v^0.26.1-orange.svg?style=flat-square&logo=NPM)
![dotenv](https://img.shields.io/badge/dotenv-v16.0.0-orange.svg?style=flat-square&logo=NPM)
![mongodb](https://img.shields.io/badge/mongodb-v4.4.1-orange.svg?style=flat-square&logo=NPM)
![node-schedule](https://img.shields.io/badge/node--schedule-v2.1.0-orange.svg?style=flat-square&logo=NPM)

## Web Methods

### GET

HTTP Post request with JSON object parameters in body.

**Request** URI example

> http://localhost:8080/api/obtain-news

**Request** JSON object definition

| Name   | Description         | Required |
| ------ | ------------------- | -------- |
| filter | filter for search   | No       |
| value  | value of the filter | No       |
| page   | page number         | Yes      |

**Request** JSON object example

```json
{
  "filter": "author",
  "value": "cameronehrlich",
  "page": 1
}
```

**Response** JSON object example

```json
{
  "message": "Request executed successfully!",
  "code": 200,
  "totalByFilter": 1,
  "totalByPage": 1,
  "news": [
    {
      "_id": "624132c276c537219bfb841e",
      "created_at": "2022-03-28T03:58:56.000Z",
      "title": null,
      "url": null,
      "author": "quxbar",
      "points": null,
      "story_text": null,
      "comment_text": "Modern AAA games are like Opera - marvelous and the pinnacle of human creativity and talent at some moments, and at other times a freakin&#x27; slog through boring ceremony gated by overt classism.",
      "num_comments": null,
      "story_id": 30825405,
      "story_title": "I hate what video games have become",
      "story_url": "https://ivanca.tumblr.com/post/679923341152468992/i-hate-what-video-games-have-become",
      "parent_id": 30825405,
      "created_at_i": 1648439936,
      "_tags": ["comment", "author_quxbar", "story_30825405"],
      "objectID": "30826999",
      "_highlightResult": {
        "author": {
          "value": "quxbar",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "Modern AAA games are like Opera - marvelous and the pinnacle of human creativity and talent at some moments, and at other times a freakin' slog through boring ceremony gated by overt classism.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "I hate what video games have become",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://ivanca.tumblr.com/post/679923341152468992/i-hate-what-video-games-have-become",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ]
}
```

**Request** JSON object example

```json
{
  "filter": "_tags",
  "value": ["comment"],
  "page": 1
}
```

**Response** JSON object example

```json
{
  "message": "Request executed successfully!",
  "code": 200,
  "totalByFilter": 78,
  "totalByPage": 5,
  "news": [
    {
      "_id": "624134fbda219f3702df7a0c",
      "created_at": "2022-03-28T04:08:01.000Z",
      "title": null,
      "url": null,
      "author": "Tomte",
      "points": null,
      "story_text": null,
      "comment_text": "Professor Sapolsky on Chaos (class on Human Biology&#x2F;Biology of Behaviour):<p><pre><code>  Chaos year after year after year in this class provokes the strongest opinions.\n  \n  A quarter of the people decide it is the most irritating, irrelevant thing that could possibly have been assigned in the class and hate it.\n  \n  About half the people never quite figure out what&#x27;s up with it.\n  \n  And a quarter of the people, their life is transformed. They no longer have to meditate, they no longer have to have a—just they are at peace. At peace, I tell you.\n  \n  Because what this book does is introduce this whole radically different way of thinking about biology, taking apart a world of reductionism. For five hundred years we have all been using a very simple model for thinking about living systems, which is, if you want to understand something that&#x27;s complicated, you break it apart into its little pieces.\n  \n  And once you understand the little pieces and put it back together, you will understand the complex thing. And what Chaos as an entire field is about—and this was pretty much the first book that was meant for the lay public about it—what Chaos shows is, that&#x27;s how you fix clocks. That&#x27;s not how you fix behaviors. That&#x27;s not how you understand behaviors. Behavior is not like a clock, behavior is like a cloud. And you don&#x27;t understand rainfall by breaking a cloud down into its component pieces and gluing them back together.\n  \n  So read through that book. A lot of it is from physical sciences rather than biological, so we&#x27;ll just be suggesting the chapters you should read.\n  \n  I will tell you it is the first book since, like, Baby Beluga where I&#x27;ve gotten to the last page and immediately started reading it over again from the front. Because, along with Baby Beluga, it&#x27;s had the greatest influence on my life. I found this to be the most influential book in my thinking about science since college. So that is a sign.</code></pre>",
      "num_comments": null,
      "story_id": 30822339,
      "story_title": "Ask HN: Which book can attract anyone towards your field of study?",
      "story_url": null,
      "parent_id": 30822625,
      "created_at_i": 1648440481,
      "_tags": ["comment", "author_Tomte", "story_30822339"],
      "objectID": "30827059",
      "_highlightResult": {
        "author": {
          "value": "Tomte",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "Professor Sapolsky on Chaos (class on Human Biology/Biology of Behaviour):<p><pre><code>  Chaos year after year after year in this class provokes the strongest opinions.\n  \n  A quarter of the people decide it is the most irritating, irrelevant thing that could possibly have been assigned in the class and hate it.\n  \n  About half the people never quite figure out what's up with it.\n  \n  And a quarter of the people, their life is transformed. They no longer have to meditate, they no longer have to have a—just they are at peace. At peace, I tell you.\n  \n  Because what this book does is introduce this whole radically different way of thinking about biology, taking apart a world of reductionism. For five hundred years we have all been using a very simple model for thinking about living systems, which is, if you want to understand something that's complicated, you break it apart into its little pieces.\n  \n  And once you understand the little pieces and put it back together, you will understand the complex thing. And what Chaos as an entire field is about—and this was pretty much the first book that was meant for the lay public about it—what Chaos shows is, that's how you fix clocks. That's not how you fix behaviors. That's not how you understand behaviors. Behavior is not like a clock, behavior is like a cloud. And you don't understand rainfall by breaking a cloud down into its component pieces and gluing them back together.\n  \n  So read through that book. A lot of it is from physical sciences rather than biological, so we'll just be suggesting the chapters you should read.\n  \n  I will tell you it is the first book since, like, Baby Beluga where I've gotten to the last page and immediately started reading it over again from the front. Because, along with Baby Beluga, it's had the greatest influence on my life. I found this to be the most influential book in my thinking about science since college. So that is a sign.</code></pre>",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Ask HN: Which book can attract anyone towards your field of study?",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "_id": "624134fcda219f3702df7a0d",
      "created_at": "2022-03-28T04:07:57.000Z",
      "title": null,
      "url": null,
      "author": "atwebb",
      "points": null,
      "story_text": null,
      "comment_text": "Every housing thread seems to be people wanting to discuss their locality first, anecdotes second, and then a diceroll for the rest.",
      "num_comments": null,
      "story_id": 30825442,
      "story_title": "Lumber rally cools with transport snarls easing, buyers balking",
      "story_url": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
      "parent_id": 30826910,
      "created_at_i": 1648440477,
      "_tags": ["comment", "author_atwebb", "story_30825442"],
      "objectID": "30827058",
      "_highlightResult": {
        "author": {
          "value": "atwebb",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "Every housing thread seems to be people wanting to discuss their locality first, anecdotes second, and then a diceroll for the rest.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Lumber rally cools with transport snarls easing, buyers balking",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "_id": "624134fcda219f3702df7a0e",
      "created_at": "2022-03-28T04:07:48.000Z",
      "title": null,
      "url": null,
      "author": "progre",
      "points": null,
      "story_text": null,
      "comment_text": "The modeling language for Fornjot is Rust. To me, this seems like an akward language to write models in. Not saying that OpenSCAD:s modeling is amazing though.",
      "num_comments": null,
      "story_id": 30825429,
      "story_title": "Fornjot – The world needs another CAD program",
      "story_url": "https://github.com/hannobraun/Fornjot",
      "parent_id": 30826642,
      "created_at_i": 1648440468,
      "_tags": ["comment", "author_progre", "story_30825429"],
      "objectID": "30827057",
      "_highlightResult": {
        "author": {
          "value": "progre",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "The modeling language for Fornjot is Rust. To me, this seems like an akward language to write models in. Not saying that OpenSCAD:s modeling is amazing though.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Fornjot – The world needs another CAD program",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://github.com/hannobraun/Fornjot",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "_id": "624134fdda219f3702df7a10",
      "created_at": "2022-03-28T04:07:43.000Z",
      "title": null,
      "url": null,
      "author": "stjohnswarts",
      "points": null,
      "story_text": null,
      "comment_text": "Sometimes prices are inelastic after you&#x27;ve stood in line wanting ice cream. You have to price in human emotion. Next time he&#x27;ll probably find a cheaper place.",
      "num_comments": null,
      "story_id": 30825442,
      "story_title": "Lumber rally cools with transport snarls easing, buyers balking",
      "story_url": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
      "parent_id": 30826379,
      "created_at_i": 1648440463,
      "_tags": ["comment", "author_stjohnswarts", "story_30825442"],
      "objectID": "30827056",
      "_highlightResult": {
        "author": {
          "value": "stjohnswarts",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "Sometimes prices are inelastic after you've stood in line wanting ice cream. You have to price in human emotion. Next time he'll probably find a cheaper place.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Lumber rally cools with transport snarls easing, buyers balking",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "_id": "624134fdda219f3702df7a11",
      "created_at": "2022-03-28T04:07:42.000Z",
      "title": null,
      "url": null,
      "author": "fossuser",
      "points": null,
      "story_text": null,
      "comment_text": "Still a good rate imo - loans are a decent hedge against inflation. Plus you have a place to live without worrying about rent shifts (main risk is if you’re forced to sell for some reason at a bad time).<p>I’m happy we decided to do it.",
      "num_comments": null,
      "story_id": 30825442,
      "story_title": "Lumber rally cools with transport snarls easing, buyers balking",
      "story_url": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
      "parent_id": 30826842,
      "created_at_i": 1648440462,
      "_tags": ["comment", "author_fossuser", "story_30825442"],
      "objectID": "30827055",
      "_highlightResult": {
        "author": {
          "value": "fossuser",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "Still a good rate imo - loans are a decent hedge against inflation. Plus you have a place to live without worrying about rent shifts (main risk is if you’re forced to sell for some reason at a bad time).<p>I’m happy we decided to do it.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Lumber rally cools with transport snarls easing, buyers balking",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://www.bnnbloomberg.ca/lumber-rally-cools-with-transport-snarls-easing-buyers-balking-1.1743093",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ]
}
```

**Request** JSON object example

```json
{
  "filter": "_tags",
  "value": ["author_zamadatix", "story_30820072"],
  "page": 1
}
```

**Response** JSON object example

```json
{
  "message": "Request executed successfully!",
  "code": 200,
  "totalByFilter": 1,
  "totalByPage": 1,
  "news": [
    {
      "_id": "6241343d74971e3da98263f8",
      "created_at": "2022-03-28T04:02:49.000Z",
      "title": null,
      "url": null,
      "author": "thrwawy283",
      "points": null,
      "story_text": null,
      "comment_text": "I was mostly remarking on the lack of (significant) innovation.  I&#x27;d say the best feature here has been airplay&#x2F;miracast for drive-by screen sharing from my sister&#x2F;mom&#x2F;dad on their iPads or phones.<p>For what we pay, I wish they&#x27;d consider some of these niches rather than startup ads or an AI that looks at what you&#x27;re viewing and suggests other channels mid-viewing.  Creeeeeepy.",
      "num_comments": null,
      "story_id": 30820072,
      "story_title": "Dual 75“ 4K TV Floor Computing",
      "story_url": "https://old.reddit.com/r/battlestations/comments/toecyt/dual_75_4k_tv_floor_computing/",
      "parent_id": 30824678,
      "created_at_i": 1648440169,
      "_tags": ["comment", "author_thrwawy283", "story_30820072"],
      "objectID": "30827021",
      "_highlightResult": {
        "author": {
          "value": "thrwawy283",
          "matchLevel": "none",
          "matchedWords": []
        },
        "comment_text": {
          "value": "I was mostly remarking on the lack of (significant) innovation.  I'd say the best feature here has been airplay/miracast for drive-by screen sharing from my sister/mom/dad on their iPads or phones.<p>For what we pay, I wish they'd consider some of these niches rather than startup ads or an AI that looks at what you're viewing and suggests other channels mid-viewing.  Creeeeeepy.",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_title": {
          "value": "Dual 75“ 4K TV Floor Computing",
          "matchLevel": "none",
          "matchedWords": []
        },
        "story_url": {
          "value": "https://old.reddit.com/r/battlestations/comments/toecyt/dual_75_4k_tv_floor_computing/",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ]
}
```

### DELETE

HTTP Post request with JSON object parameters in body.

**Request** URI example

> http://localhost:8080/api/delete-news

**Request** JSON object definition

| Name      | Description           | Required |
| --------- | --------------------- | -------- |
| documents | array of id to delete | Yes      |

**Request** JSON object example

```json
{
  "documents": [
    { "_id": "624134fbda219f3702df7a0c" },
    { "_id": "624134fcda219f3702df7a0d" }
  ]
}
```

**Response** JSON object example

```json
{
  "message": "Request executed successfully!",
  "code": 200,
  "totalDeleted": {
    "total": {
      "acknowledged": true,
      "modifiedCount": 2,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 2
    }
  }
}
```
