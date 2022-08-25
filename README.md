# jmes.path.do

Dynamic JMESPath Transformations

<https://json.fyi/locations.json>
```json
{
  "locations": [
    {"name": "Seattle", "state": "WA"},
    {"name": "New York", "state": "NY"},
    {"name": "Bellevue", "state": "WA"},
    {"name": "Olympia", "state": "WA"}
  ]
}
```

The authors of all books in the store: `locations[?state == 'WA'].name | sort(@) | {WashingtonCities: join(', ', @)}`

[https://jmes.path.do/locations[?state=='WA'].name|sort(@)|{WashingtonCities:join(', ',@)}/json.fyi/locations.json](https://jmes.path.do/locations[?state=='WA'].name|sort(@)|{WashingtonCities:join(`, `,@)}/json.fyi/locations.json)

```json
{
  "WashingtonCities": "Bellevue,Olympia,Seattle"
}
```

All authors: `$..author`

<https://json.path.do/$..author/json.fyi/books.json>

```json
[
  "Nigel Rees",
  "Evelyn Waugh",
  "Herman Melville",
  "J. R. R. Tolkien"
]
```

All things in store, which are its books (a book array) and a red bicycle (a bicycle object): `$.store.*`

<https://json.path.do/$.store.*/json.fyi/books.json>

```json
[
  [
    {
      "category": "reference",
      "author": "Nigel Rees",
      "title": "Sayings of the Century",
      "price": 8.95
    },
    {
      "category": "fiction",
      "author": "Evelyn Waugh",
      "title": "Sword of Honour",
      "price": 12.99
    },
    {
      "category": "fiction",
      "author": "Herman Melville",
      "title": "Moby Dick",
      "isbn": "0-553-21311-3",
      "price": 8.99
    },
    {
      "category": "fiction",
      "author": "J. R. R. Tolkien",
      "title": "The Lord of the Rings",
      "isbn": "0-395-19395-8",
      "price": 22.99
    }
  ],
  {
    "color": "red",
    "price": 19.95
  }
]
```

The price of everything in the store: `$.store..price`

<https://json.path.do/$.store..price/json.fyi/books.json>

```json
[
  8.95,
  12.99,
  8.99,
  22.99,
  19.95
]
```

The third book (book object): `$..book[2]`

<https://json.path.do/$..book[2]/json.fyi/books.json>

```json
[
  {
    "category": "fiction",
    "author": "Herman Melville",
    "title": "Moby Dick",
    "isbn": "0-553-21311-3",
    "price": 8.99
  }
]
```

The last book in order: `$..book[(@.length-1)]` or `$..book[-1:]`

<https://json.path.do/$..book[-1:]/json.fyi/books.json>

```json
[
  {
    "category": "fiction",
    "author": "J. R. R. Tolkien",
    "title": "The Lord of the Rings",
    "isbn": "0-395-19395-8",
    "price": 22.99
  }
]
```

The first two books: `$..book[0,1]` or `$..book[:2]`

<https://json.path.do/$..book[:2]/json.fyi/books.json>

```json
[
  {
    "category": "reference",
    "author": "Nigel Rees",
    "title": "Sayings of the Century",
    "price": 8.95
  },
  {
    "category": "fiction",
    "author": "Evelyn Waugh",
    "title": "Sword of Honour",
    "price": 12.99
  }
]
```

