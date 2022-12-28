# nodejs-mongodb-user-registration

Programmer Blog: http://programmerblog.net

- Source code for article on how to create a user registration form using nodejs and mongodb

- You can read detailed tutorial on our blog: https://programmerblog.net/nodejs-user-registration-tutorial/


 - Install MongoDB
   First you need to install MongoDB on your system, Please visit MonogoDB site and download it.
 
 - Create a MongoDB database
    After MongoDB installation. Create a data/db directory - In windows c:/data/db
   
 - On command prompt, open MongoDB -> bin folder and run
    > mongod
    
 - Open another command prompt and open bin folder and type
    > mongo
    
  - Mongo shell is running, type 
    
    > use dbusers
    
  - Current databse will be changed to to db users.
 
 - install NodeJS
   Please visit NodeJS site and download installer, Install on your system, It also install NPM or Node Package Manager
   
 - Generate NodeJs, Express application
   Using Explress comman line tool to generate an application skeleton.
  
    > express --view=pug nodejs-user-registration-mongodb
 
 - install required dependencies
  
    > cd nodejs-user-registration-mongodb && npm install

 - Create a Model using mongoose
   A User Schema is created in a Models folder using Mongoose
   
 - Create a Form in Pug template engine
   Next a bootstrap based form is created so users can enter their information into the form and send it to server.
    
 - Create a Ajax JavaScript code to send data to server and receive response and display to user
   Using jQuery, An AJAX request is sent to server with data, Data is recevied in /Register Express route.
 
 - Create a Register route to receive, validate and save data to MongoDB database
   A register route is created, Ths route recevies posted data, validates and save it in mongoDB database.
 
 - To run the app:
 
     > SET DEBUG=nodejs-user-registration-mongodb:* & npm start
     
  - To view runnign app
    Open browser and type the URL: http://localhost:3000
    

For detailed tutorial, visit 

 http://programmerblog.net/nodejs-user-registration-tutorial/


 ==========================================================================================================

 Anushka's README

 ==========================================================================================================

wad>package-lock.json ( under README)
{
  "name": "wad",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@types/node": {
      "version": "17.0.16",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.16.tgz",
      "integrity": "sha512-ydLaGVfQOQ6hI1xK2A5nVh8bl0OGoIfYMxPWHqqYe9bTkWCfqiVvZoh2I/QF2sNSkZzZyROBoTefIEI+PB6iIA=="
    },
    "@types/webidl-conversions": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-6.1.1.tgz",
      "integrity": "sha512-XAahCdThVuCFDQLT7R7Pk/vqeObFNL3YqRyFZg+AqAP/W1/w3xHaIxuW7WszQqTbIBOPRcItYJIou3i/mppu3Q=="
    },
    "@types/whatwg-url": {
      "version": "8.2.1",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-8.2.1.tgz",
      "integrity": "sha512-2YubE1sjj5ifxievI5Ge1sckb9k/Er66HyR2c+3+I6VDUUg1TLPdYYTEbQ+DjRkS4nTxMJhgWfSfMRD2sl2EYQ==",
      "requires": {
        "@types/node": "*",
        "@types/webidl-conversions": "*"
      }
    },
    "accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "requires": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      }
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
    },
    "body-parser": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.1.tgz",
      "integrity": "sha512-8ljfQi5eBk8EJfECMrgqNGWPEY5jWP+1IzkzkGdFFEwFQZZyaZ21UqdaHktgiMlH0xLHqIFtE/u2OYE5dOtViA==",
      "requires": {
        "bytes": "3.1.1",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.8.1",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.9.6",
        "raw-body": "2.4.2",
        "type-is": "~1.6.18"
      }
    },
    "bson": {
      "version": "4.6.1",
      "resolved": "https://registry.npmjs.org/bson/-/bson-4.6.1.tgz",
      "integrity": "sha512-I1LQ7Hz5zgwR4QquilLNZwbhPw0Apx7i7X9kGMBTsqPdml/03Q9NBtD9nt/19ahjlphktQImrnderxqpzeVDjw==",
      "requires": {
        "buffer": "^5.6.0"
      }
    },
    "buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "requires": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "bytes": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.1.tgz",
      "integrity": "sha512-dWe4nWO/ruEOY7HkUJ5gFt1DCFV9zPRoJr8pV0/ASQermOZjtq8jMjOprC0Kd10GLN+l7xaUPvxzJFWtxGu8Fg=="
    },
    "content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "requires": {
        "safe-buffer": "5.2.1"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "cookie": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.1.tgz",
      "integrity": "sha512-ZwrFkGJxUR3EIoXtO+yVE69Eb7KlixbaeAWfBQB9vVsNn/o+Yw69gBWSSDK825hQNdN+wF8zELf3dFNl/kxkUA=="
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "denque": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/denque/-/denque-2.0.1.tgz",
      "integrity": "sha512-tfiWc6BQLXNLpNiR5iGd0Ocu3P3VpxfzFiqubLgMfhfOw9WyvgJBd46CClNn9k3qfbjvT//0cf7AlYRX/OslMQ=="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "express": {
      "version": "4.17.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.2.tgz",
      "integrity": "sha512-oxlxJxcQlYwqPWKVJJtvQiwHgosH/LrLSPA+H4UxpyvSS6jC5aH+5MoHFM+KABgTOt0APue4w66Ha8jCUo9QGg==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.4.1",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.7",
        "qs": "6.9.6",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "0.17.2",
        "serve-static": "1.14.2",
        "setprototypeof": "1.2.0",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      }
    },
    "express-validator": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/express-validator/-/express-validator-6.14.0.tgz",
      "integrity": "sha512-ZWHJfnRgePp3FKRSKMtnZVnD1s8ZchWD+jSl7UMseGIqhweCo1Z9916/xXBbJAa6PrA3pUZfkOvIsHZG4ZtIMw==",
      "requires": {
        "lodash": "^4.17.21",
        "validator": "^13.7.0"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      }
    },
    "forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "http-errors": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz",
      "integrity": "sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.1"
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA=="
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "ip": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
      "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
    },
    "ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
    },
    "kareem": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.3.tgz",
      "integrity": "sha512-uESCXM2KdtOQ8LOvKyTUXEeg0MkYp4wGglTIpGcYHvjJcS5sn2Wkfrfit8m4xSbaNDAw2KdI9elgkOxZbrFYbg=="
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "optional": true
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.51.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.51.0.tgz",
      "integrity": "sha512-5y8A56jg7XVQx2mbv1lu49NR4dokRnhZYTtL+KGfaa27uq4pSTXkwQkFJl4pkRMyNFz/EtYDSkiiEHx3F7UN6g=="
    },
    "mime-types": {
      "version": "2.1.34",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.34.tgz",
      "integrity": "sha512-6cP692WwGIs9XXdOO4++N+7qjqv0rqxxVvJ3VHPh/Sc9mVZcQP+ZGhkKiTvWMQRr2tbHkJP/Yn7Y0npb3ZBs4A==",
      "requires": {
        "mime-db": "1.51.0"
      }
    },
    "mongodb": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-4.3.1.tgz",
      "integrity": "sha512-sNa8APSIk+r4x31ZwctKjuPSaeKuvUeNb/fu/3B6dRM02HpEgig7hTHM8A/PJQTlxuC/KFWlDlQjhsk/S43tBg==",
      "requires": {
        "bson": "^4.6.1",
        "denque": "^2.0.1",
        "mongodb-connection-string-url": "^2.4.1",
        "saslprep": "^1.0.3",
        "socks": "^2.6.1"
      }
    },
    "mongodb-connection-string-url": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-2.4.2.tgz",
      "integrity": "sha512-mZUXF6nUzRWk5J3h41MsPv13ukWlH4jOMSk6astVeoZ1EbdTJyF5I3wxKkvqBAOoVtzLgyEYUvDjrGdcPlKjAw==",
      "requires": {
        "@types/whatwg-url": "^8.2.1",
        "whatwg-url": "^11.0.0"
      }
    },
    "mongoose": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-6.2.1.tgz",
      "integrity": "sha512-VxY1wvlc4uBQKyKNVDoEkTU3/ayFOD//qVXYP+sFyvTRbAj9/M53UWTERd84pWogs2TqAC6DTvZbxCs2LoOd3Q==",
      "requires": {
        "bson": "^4.2.2",
        "kareem": "2.3.3",
        "mongodb": "4.3.1",
        "mpath": "0.8.4",
        "mquery": "4.0.2",
        "ms": "2.1.2",
        "sift": "13.5.2"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "mpath": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.8.4.tgz",
      "integrity": "sha512-DTxNZomBcTWlrMW76jy1wvV37X/cNNxPW1y2Jzd4DZkAaC5ZGsm8bfGfNOthcDuRJujXLqiuS6o3Tpy0JEoh7g=="
    },
    "mquery": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-4.0.2.tgz",
      "integrity": "sha512-oAVF0Nil1mT3rxty6Zln4YiD6x6QsUWYz927jZzjMxOK2aqmhEz5JQ7xmrKK7xRFA2dwV+YaOpKU/S+vfNqKxA==",
      "requires": {
        "debug": "4.x"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.3",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
          "integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
          "requires": {
            "ms": "2.1.2"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "requires": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
    },
    "qs": {
      "version": "6.9.6",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.9.6.tgz",
      "integrity": "sha512-TIRk4aqYLNoJUbd+g2lEdz5kLWIuTMRagAXxl78Q0RiVjAOugHmeKNGdd3cwo/ktpf9aL9epCfFqWDEKysUlLQ=="
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.2.tgz",
      "integrity": "sha512-RPMAFUJP19WIet/99ngh6Iv8fzAbqum4Li7AD6DtGaW2RpMB/11xDoalPiJMTbu6I3hkbMVkATvZrqb9EEqeeQ==",
      "requires": {
        "bytes": "3.1.1",
        "http-errors": "1.8.1",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "saslprep": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
      "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
      "optional": true,
      "requires": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "send": {
      "version": "0.17.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.2.tgz",
      "integrity": "sha512-UJYB6wFSJE3G00nEivR5rgWp8c2xXvJ3OPWPhmuteU0IKj8nKbG3DrjiOmLwpnHGYWAVwA69zmTm++YG0Hmwww==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "1.8.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "serve-static": {
      "version": "1.14.2",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.2.tgz",
      "integrity": "sha512-+TMNA9AFxUEGuC0z2mevogSnn9MXKb4fa7ngeRMJaaGv8vTwnIEkKi+QGvPt33HSnf8pRS+WGM0EbMtCJLKMBQ==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.2"
      }
    },
    "setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
    },
    "sift": {
      "version": "13.5.2",
      "resolved": "https://registry.npmjs.org/sift/-/sift-13.5.2.tgz",
      "integrity": "sha512-+gxdEOMA2J+AI+fVsCqeNn7Tgx3M9ZN9jdi95939l1IJ8cZsqS8sqpJyOkic2SJk+1+98Uwryt/gL6XDaV+UZA=="
    },
    "smart-buffer": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg=="
    },
    "socks": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.6.2.tgz",
      "integrity": "sha512-zDZhHhZRY9PxRruRMR7kMhnf3I8hDs4S3f9RecfnGxvcBHQcKcIH/oUcEWffsfl1XxdYlA7nnlGbbTvPz9D8gA==",
      "requires": {
        "ip": "^1.1.5",
        "smart-buffer": "^4.2.0"
      }
    },
    "sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
      "optional": true,
      "requires": {
        "memory-pager": "^1.0.2"
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
    },
    "tr46": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-3.0.0.tgz",
      "integrity": "sha512-l7FvfAHlcmulp8kr+flpQZmVwtu7nfRV7NZujtN0OqES8EL4O4e0qqzL0DC5gAvx/ZC/9lk6rhcUwYvkBnBnYA==",
      "requires": {
        "punycode": "^2.1.1"
      }
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "validator": {
      "version": "13.7.0",
      "resolved": "https://registry.npmjs.org/validator/-/validator-13.7.0.tgz",
      "integrity": "sha512-nYXQLCBkpJ8X6ltALua9dRrZDHVYxjJ1wgskNt1lH9fzGjs3tgojGSCBjmEPwkWS1y29+DrizMTW19Pr9uB2nw=="
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g=="
    },
    "whatwg-url": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-11.0.0.tgz",
      "integrity": "sha512-RKT8HExMpoYx4igMiVMY83lN6UeITKJlBQ+vR/8ZJ8OCdSiN3RwCq+9gH0+Xzj0+5IrM6i4j/6LuvzbZIQgEcQ==",
      "requires": {
        "tr46": "^3.0.0",
        "webidl-conversions": "^7.0.0"
      }
    }
  }
}


Modified files:

models> user.js done
added address 
added pin code
rm country
add phno
repl calorie,salt by days of the week
add shift preferences
Add employment history
Add references

routes>index.js done

Views>index.pug done


Public>javascripts>app.js done


